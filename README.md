# 👋 No Hello

**No Hello** est une application web conçue pour éduquer les utilisateurs sur l'étiquette de discussion productive. Elle encourage les gens à poser leurs questions immédiatement plutôt que de simplement dire "**Bonjour**" et d'attendre une réponse.

💡 Inspiré par [nohello.net](https://www.nohello.net/).

## ✨ Fonctionnalités

-   **⚡ Performance & Optimisation** : Traduction instantanée grâce à un système hybride (Traductions statiques + Cache LocalStorage + Fallback IA).
-   **🌐 Internationalisation** : Support natif de 5 langues (FR, EN, ES, DE, JA) et extension infinie via l'API **Google Gemini**.
-   **💬 Simulation de Chat** : "Sarah", votre collègue virtuelle, vous montre la bonne et la mauvaise façon de communiquer.
-   **🎨 UI/UX Premium** : Animations fluides (Framer Motion), barre de progression de défilement, et design soigné (Shadcn/UI). Avatars par [DiceBear](https://www.dicebear.com/).
-   **🔍 SEO Optimisé** : Métadonnées complètes, OpenGraph, sitemap.xml et robots.txt générés automatiquement.
-   **🎮 Gamification** : Un quiz interactif pour valider vos connaissances.

## 🛠️ Stack Technique

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Gemini API](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

-   **Framework** : Next.js 16 (App Router)
-   **Style** : Tailwind CSS 4 & Shadcn/ui
-   **Animations** : Framer Motion
-   **IA** : Google Gemini API
-   **Déploiement** : Vercel

## 🚀 Commencer

1.  **Cloner le dépôt** :
    ```bash
    git clone https://github.com/Kaysuto/no-hello.git
    ```
2.  **Installer les dépendances** :
    ```bash
    npm install
    ```
3.  **Configurer les variables d'environnement** :
    Créez un fichier `.env.local` et ajoutez votre clé API **Google Gemini** :
    ```env
    GEMINI_API_KEY=votre_cle_api_ici
    ```
4.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```

Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.