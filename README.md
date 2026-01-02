# No Hello

**No Hello** is a modern web application designed to educate users about productive chat etiquette. It encourages people to ask their questions immediately rather than just saying "Hello" and waiting for a response.

## Features

-   **Full Site Translation**: Powered by Google Gemini API, the specific concept explanation and chat simulation can be translated into multiple languages dynamically.
-   **Interactive Chat Simulation**: A realistic, modern chat interface demonstrating the "Bad" vs "Good" way to start a conversation.
-   **Gamification**: A "Correct the Message" quiz to test your understanding of the concept.
-   **Privacy Focused**: Includes a transparent Cookie Policy widget with a detailed privacy modal.

## Tech Stack

-   **Framework**: Next.js 14 (App Router)
-   **Styling**: Tailwind CSS & Shadcn/ui
-   **Animations**: Framer Motion
-   **AI**: Google Gemini API (for translations)

## Getting Started

1.  Clone the repository:
    ```bash
    git clone https://github.com/Kaysuto/no-hello.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Set up environment variables:
    Create a `.env.local` file and add your Google Gemini API key:
    ```env
    GEMINI_API_KEY=your_api_key_here
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
