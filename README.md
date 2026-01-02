# No Hello

**No Hello** est une application web moderne conçue pour éduquer les utilisateurs sur l'étiquette de discussion productive. Elle encourage les gens à poser leurs questions immédiatement plutôt que de simplement dire "Bonjour" et d'attendre une réponse.

## Fonctionnalités

-   **Traduction Complète du Site** : Propulsée par l'API Google Gemini, l'explication spécifique du concept et la simulation de chat peuvent être traduites dynamiquement en plusieurs langues.
-   **Simulation de Chat Interactive** : Une interface de chat réaliste et moderne démontrant la "Mauvaise" vs la "Bonne" façon de commencer une conversation.
-   **Gamification** : Un quiz "Corrigez le Message" pour tester votre compréhension du concept.
-   **Respect de la Vie Privée** : Inclut un widget de Politique de Cookies transparent avec une modale de confidentialité détaillée.

## Stack Technique

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
