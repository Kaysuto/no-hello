# No Hello

**No Hello** est une application web moderne conçue pour éduquer les utilisateurs sur l'étiquette de discussion productive. Elle encourage les gens à poser leurs questions immédiatement plutôt que de simplement dire "Bonjour" et d'attendre une réponse.

## Fonctionnalités

-   **Traduction Complète du Site** : Propulsée par l'API Google Gemini, l'explication spécifique du concept et la simulation de chat peuvent être traduites dynamiquement en plusieurs langues.
-   **Simulation de Chat Interactive** : Une interface de chat réaliste et moderne démontrant la "Mauvaise" vs la "Bonne" façon de commencer une conversation.
-   **Gamification** : Un quiz "Corrigez le Message" pour tester votre compréhension du concept.
-   **Respect de la Vie Privée** : Inclut un widget de Politique de Cookies transparent avec une modale de confidentialité détaillée.

## Stack Technique

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Gemini API](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)

-   **Framework** : Next.js 14 (App Router)
-   **Style** : Tailwind CSS & Shadcn/ui
-   **Animations** : Framer Motion
-   **IA** : Google Gemini API (pour les traductions)

## Commencer

1.  Cloner le dépôt :
    ```bash
    git clone https://github.com/Kaysuto/no-hello.git
    ```
2.  Installer les dépendances :
    ```bash
    npm install
    ```
3.  Configurer les variables d'environnement :
    Créez un fichier `.env.local` et ajoutez votre clé API Google Gemini :
    ```env
    GEMINI_API_KEY=votre_cle_api_ici
    ```
4.  Lancer le serveur de développement :
    ```bash
    npm run dev
    ```

Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.
