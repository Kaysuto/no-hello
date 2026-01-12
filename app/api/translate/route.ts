import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { content, targetLanguage } = await req.json();

        if (!content || !targetLanguage) {
            return NextResponse.json(
                { error: "Missing content or targetLanguage" },
                { status: 400 }
            );
        }

        const apiKey = process.env.GEMINI_API_KEY?.trim();

        if (!apiKey) {
            return NextResponse.json({
                translatedContent: content // Return original as fallback
            });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-flash-latest",
            generationConfig: { responseMimeType: "application/json" }
        });

        const prompt = `You are a professional translator. Translate the following JSON object values to ${targetLanguage}. 
        Keep the keys exactly the same. 
        Maintain the tone (professional, friendly).
        Do not translate proper nouns like "nohello.fr", "Shadcn", "Next.js".
        
        Input JSON:
        ${JSON.stringify(content)}
        
        Output ONLY the translated JSON object.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const textResponse = response.text();

        let translatedContent;
        try {
            translatedContent = JSON.parse(textResponse);
        } catch (e) {
            console.error("Failed to parse Gemini response as JSON", textResponse);
            // Fallback: try to find JSON block if markdown is included
            const match = textResponse.match(/\{[\s\S]*\}/);
            if (match) {
                translatedContent = JSON.parse(match[0]);
            } else {
                throw new Error("Invalid JSON response from API");
            }
        }

        return NextResponse.json({ translatedContent });
    } catch (error) {
        console.error("Translation error:", error);
        return NextResponse.json(
            {
                error: "Failed to translate content",
                details: error instanceof Error ? error.message : String(error)
            },
            { status: 500 }
        );
    }
}
