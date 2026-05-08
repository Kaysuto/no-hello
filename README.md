# 👋 No Hello

**No Hello** est une application web conçue pour éduquer les utilisateurs sur l'étiquette de discussion productive. Elle encourage les gens à poser leurs questions immédiatement plutôt que de simplement dire "**Bonjour**" et d'attendre une réponse.

💡 Inspiré par [nohello.net](https://www.nohello.net/).

> ⚠️ **Note** : Ce projet n'est pas à prendre trop au sérieux ! Cependant, si vous voyez l'URL de ce site dans le statut ou la bio de quelqu'un, **préparez-vous à être ignoré** si vous lui envoyez seulement "Bonjour !". 👻

## ⚙️ Stack technique

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Gemini API](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Bâti sur **Next.js 16 (App Router + Turbopack)**, **React 19**, **Tailwind CSS 4**, **Shadcn/UI** et **Framer Motion**. Traduction dynamique via **Google Gemini**, déployé sur **Vercel**.

## 🗂️ Structure de la page

La page d'accueil suit un parcours narratif :

1. **Hero** — accroche multilingue avec animation typing (10 langues) et deux CTAs (voir l'exemple, copier le message à partager).
2. **Comparison** — démonstration en bulles de chat : `❌ Mauvaise pratique` vs `✅ Bonne pratique`.
3. **Concept** — timeline verticale en 4 étapes (Problème → Conséquence → Solution → Bénéfice), avec markers numérotés et palette graduelle rose → ambre → ciel → emerald.
4. **Usage** — bannière CTA pour adopter le NoHello (mettre le lien en bio, copier le message).
5. **Quiz** — sélecteur de niveau (Facile / Moyen / Difficile), 11 questions au total, confettis sur bonne réponse, écran de score final.

## ✨ Fonctionnalités

- 🌍 **Internationalisation** — 5 langues natives (FR / EN / ES / DE / JA) + traduction *à la volée* dans n'importe quelle autre langue grâce à Google Gemini, avec mise en cache locale.
- 🎨 **Thèmes light & dark** — palette OKLCH désaturée pour limiter la fatigue oculaire, toggle dans la navbar, suivi automatique de la préférence système.
- 🧭 **Scroll spy & navbar animée** — la section active est mise en évidence par une *pill* qui glisse entre les boutons (animation `layoutId` Framer Motion).
- 📋 **Partage en un clic** — message customisé prêt à coller, copié dans le presse-papier depuis le hero, le navbar ou la section Usage.
- 🎮 **Quiz interactif** — 11 mises en situation réparties sur 3 niveaux de difficulté, feedback visuel immédiat, confettis pour célébrer les bonnes réponses.
- 📜 **Scrollbar custom** — stylée via CSS natif (Firefox + WebKit), s'adapte automatiquement au thème.
- 📱 **Responsive** — desktop / tablette / mobile, menu hamburger avec sections étiquetées (Navigation, Préférences, Liens).
- ♿ **Accessibilité** — labels ARIA, focus rings, contrastes AA, sémantique HTML correcte.
- 🚀 **SEO** — métadonnées Open Graph & Twitter, `sitemap.xml`, `robots.txt`, `metadataBase` configuré.

## 🤝 Open Source

Ce projet est **Open Source** ! Le code est disponible librement pour apprendre, modifier ou contribuer.
Les Pull Requests et Issues sont les bienvenues sur GitHub.

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

## 📁 Structure du projet

```
app/
  api/translate/   ← Route API (Google Gemini) pour les langues hors statique
  layout.tsx       ← Root layout (theme provider, translation provider, footer)
  page.tsx         ← Page d'accueil
  globals.css      ← Variables OKLCH des thèmes + scrollbar custom

components/
  navbar/          ← Desktop nav (scroll spy + pill animée) + mobile menu
  quiz/            ← Sélecteur de niveau, question card, progress bar, écran de résultat
  comparison-section.tsx
  concept-explanation.tsx   ← Timeline verticale 4 étapes
  usage-section.tsx          ← Bannière CTA
  theme-toggle.tsx           ← Bascule clair/sombre
  ...

lib/
  hooks/
    use-active-section.ts   ← IntersectionObserver pour le scroll spy
    use-mounted.ts
    use-scroll-to-section.ts
  translations.ts           ← 5 langues statiques (FR / EN / ES / DE / JA)
  quiz-data.ts              ← Les 11 questions du quiz
  constants.ts              ← Section IDs, langues, liens externes
```

## 📦 Scripts

```bash
npm run dev        # Serveur de dev (Turbopack)
npm run build      # Build de production
npm run start      # Lancer le build de production
npm run lint       # ESLint
```
