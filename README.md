# 🕰️ TimeTravel Agency — Webapp Interactive

Webapp pour une agence de voyage temporel fictive, créée dans le cadre du Projet Supervisé IA M1/M2 — Session 2 (Webapp & IA Agents).

**Démo en ligne :** https://armances.github.io/Ynov-M2-timetravel-agency/ 
---

## 🛠 Stack technique

- HTML5 / CSS3 (vanilla, sans framework — compatible GitHub Pages sans build)
- JavaScript vanilla en modules ES (`import`/`export`, sans bundler ni transpileur)
- Polices : Fraunces (display) + Work Sans (texte) + IBM Plex Mono (données), via Google Fonts
- Aucune dépendance externe côté build : le site tourne tel quel dans n'importe quel navigateur

## ✨ Features implémentées

**Page d'accueil**
- Hero avec instrument temporel animé (cadran rotatif en CSS)
- Présentation de l'agence (3 piliers)
- CTA vers les destinations et le quiz

**Galerie des destinations**
- 4 destinations interactives : Paris 1889, Crétacé (-65M), Florence 1504, **Le Caire (1300 av. J.-C.)**
- Présentées en **carrousel** (3 cartes visibles à la fois sur desktop, avec flèches de navigation ; empilées verticalement sur mobile)
- Toute la carte est cliquable pour ouvrir la fiche détaillée (pas seulement le lien "Découvrir")
- Fiche détaillée par destination (modal) : description, durée, niveau de risque, tarif, temps forts, galerie photo, itinéraire jour par jour, inclusions

**Agent conversationnel ("Aeon")**
- Chatbot intégré (widget flottant en bas à droite)
- Répond aux questions sur les destinations, tarifs, sécurité, durée, réservation
- Personnalité définie selon le brief : chaleureux, passionné d'histoire, expert (fictif mais crédible)
- Suggestions de questions rapides (chips)

**Quiz de recommandation personnalisée**
- 4 questions à choix multiples
- Algorithme de scoring qui recommande la destination la plus adaptée au profil du visiteur
- Résultat animé avec lien direct vers la fiche destination recommandée

**Formulaire de réservation**
- Sélection destination + date + nombre de voyageurs
- Récapitulatif dynamique (durée, tarif, total)
- Confirmation à la soumission

**Autres**
- FAQ accordéon
- Animations au scroll (fade-in via IntersectionObserver), micro-interactions au survol
- Responsive mobile-first, navigation adaptée au mobile
- Accessibilité : focus visible, `prefers-reduced-motion` respecté

## 🤖 IA utilisées / transparence

- **Génération du code** : assistant IA (Claude, Anthropic) dans le cadre de ce projet pédagogique
- **Chatbot "Aeon"** : moteur de réponses par règles/mots-clés, exécuté **côté client**, sans appel API externe (aucune clé nécessaire → compatible hébergement statique gratuit type GitHub Pages)
- **Visuels des destinations** : illustrations générées en CSS/SVG (dégradés + cadre "hublot"). ⚠️ À remplacer par vos propres visuels de la Session 1 si vous en disposez (voir section ci-dessous)
- **Contenu textuel** (descriptions des destinations, FAQ) : rédigé avec assistance IA à partir du brief du projet

### Aller plus loin : brancher un vrai modèle IA sur le chatbot
Le brief propose l'API Mistral (modèle `mistral-small`, gratuit) pour un chatbot plus avancé. Pour l'intégrer :
1. Créez une fonction serverless (ex. Vercel Functions, Netlify Functions, ou Cloudflare Workers) qui reçoit le message utilisateur et appelle l'API Mistral avec votre clé (**jamais côté client**).
2. Remplacez la fonction `botAnswer()` dans `js/modules/chatbot-brain.js` par un `fetch()` vers cette fonction serverless.
3. Réutilisez le prompt système fourni dans le brief pour définir la personnalité d'Aeon.

## 🖼️ Intégrer vos visuels de la Session 1

Les visuels de chaque destination sont gérés dans `js/modules/destinations.js` (cartes) et référencent directement `images/destination-<clé>.jpg`. Pour changer une image :
1. Hébergez vos 3 images "hero" (Imgur, Cloudinary, GitHub, Supabase Storage…)
2. Remplacez le `style="background:..."` de `.dest-portal` par une image : `style="background-image:url('VOTRE_URL')"` (ajoutez `background-size:cover; background-position:center;` dans le CSS si besoin)
3. Ajoutez `loading="lazy"` si vous passez à des balises `<img>` plutôt qu'à des background CSS

## 🖼️ Dossier `images/` — visuels

**Déjà intégrés dans ce livrable :**

| Fichier | Utilisation |
|---|---|
| `images/hero-poster.jpg` | Fond du hero — le portail temporel "Chronos Portal" |
| `images/hero-background.mp4` | Vidéo de fond en boucle du hero |
| `images/agency-control-room.jpg` | Fond discret de la section "L'agence" — le poste de commande temporel |
| `images/destination-paris.jpg` | Carte + fiche détail "Paris, 1889" |
| `images/destination-cretace.jpg` | Carte + fiche détail "Crétacé, -65M" |
| `images/destination-florence.jpg` | Carte + fiche détail "Florence, 1504" |

**Encore à générer et déposer** (le site affiche une illustration vectorielle de secours tant qu'ils sont absents) :

| Fichier attendu | Utilisation | Format conseillé |
|---|---|---|
| `images/favicon.png` | Icône de l'onglet du navigateur | 512×512px (carré), fond plein — pas de transparence sur les bords si possible |
| `images/og-image.jpg` | Aperçu du site lors d'un partage de lien (WhatsApp, LinkedIn, Slack…) | 1200×630px exactement (format standard Open Graph) |
| `images/aeon-avatar.png` | Avatar du chatbot Aeon (visible dans la fenêtre de chat) | Carré, ~200×200px, portrait ou icône |
| `images/paris1.webp` … `images/paris4.webp` | Galerie "Un avant-goût" — fiche détail Paris (4 photos) | ~800×800px, format carré conseillé |
| `images/cretace1.webp` … `images/cretace4.webp` | Galerie "Un avant-goût" — fiche détail Crétacé (4 photos) | ~800×800px, format carré conseillé |
| `images/florence1.webp` … `images/florence4.webp` | Galerie "Un avant-goût" — fiche détail Florence (4 photos) | ~800×800px, format carré conseillé |
| `images/destination-lecaire.jpg` | Carte + fiche détail "Le Caire, 1300 av. J.-C." | ~1200×900px minimum |
| `images/lecaire1.webp` … `images/lecaire4.webp` | Galerie "Un avant-goût" — fiche détail Le Caire (4 photos) | ~800×800px, format carré conseillé |

⚠️ Respectez exactement ces noms de fichiers (minuscules, tirets, extension `.jpg` / `.mp4`) : le site ne fait pas de correspondance approximative.

### Prompts suggérés pour la génération sur une autre IA

**`hero-poster.jpg` / `hero-background.mp4`**
> Astrolabe et mécanismes d'horlogerie en laiton antique flottant dans un vide sombre, lumière dorée chaude, filaments d'énergie temporelle, esthétique instrument scientifique vintage, plan large cinématique, fond sombre et immersif

**`destination-paris.jpg`**
> Paris 1889, Belle Époque, Tour Eiffel fraîchement achevée pendant l'Exposition Universelle, lumière dorée de fin de journée, foule élégante en tenue d'époque, tons sépia et laiton chauds, style illustration peinte

**`destination-cretace.jpg`**
> Paysage de jungle préhistorique du Crétacé supérieur, dinosaures au loin, fougères denses, lumière chaude et dramatique de coucher de soleil, plan large cinématique, style illustration peinte

**`destination-florence.jpg`**
> Florence 1504, Renaissance italienne, silhouette du dôme du Duomo au crépuscule, lumière dorée toscane, style illustration peinte, ambiance Michel-Ange / Médicis

**`destination-lecaire.jpg`**
> Le Caire, Nouvel Empire égyptien vers 1300 av. J.-C., temples de Karnak aux couleurs d'origine, croisière sur le Nil au coucher du soleil, lumière dorée, style illustration peinte

**`favicon.png`**
> Icône minimaliste d'un cadran d'astrolabe ou de montre à gousset en laiton antique, vu de face, fond uni sombre, style plat/vectoriel, très lisible en petite taille

**`og-image.jpg`**
> Peut être un recadrage large du visuel du hero (le portail Chronos), ou une composition assemblant les 3 destinations côte à côte, format paysage 1200×630px

**`aeon-avatar.png`**
> Portrait stylisé d'un conseiller de voyage temporel, esthétique laiton/steampunk élégant, expression chaleureuse et confiante, fond sombre, cadrage carré serré sur le visage

## 📂 Structure du projet

```
timetravel-agency/
├── index.html
├── css/                       # Un fichier par section, chargés dans cet ordre dans index.html
│   ├── base.css               # Tokens de design, reset, typo, boutons, utilitaires partagés
│   ├── header-footer.css
│   ├── hero.css
│   ├── sections.css           # En-têtes de section génériques + bloc "L'agence"
│   ├── destinations.css       # Carrousel, cartes, fiche détail (modal)
│   ├── quiz.css
│   ├── booking.css
│   ├── faq.css
│   ├── chatbot.css
│   └── responsive.css         # Toujours chargé en dernier (surcharge mobile <900px)
├── js/
│   ├── main.js                # Point d'entrée : importe et initialise chaque module
│   ├── data/
│   │   ├── destinations.js    # Contenu des 4 destinations (le fichier à éditer pour changer les textes/tarifs)
│   │   ├── illustrations.js   # Illustrations SVG de secours
│   │   └── quiz-questions.js  # Questions et pondérations du quiz
│   └── modules/
│       ├── reveal.js          # Animation fade-in au scroll
│       ├── nav.js             # Menu mobile
│       ├── hero.js            # Cadran animé + vidéo de fond
│       ├── carousel.js        # Carrousel des destinations (desktop)
│       ├── destinations.js    # Rendu des cartes + fiche détail (modal)
│       ├── quiz.js            # Logique du quiz de recommandation
│       ├── faq.js             # Accordéon FAQ
│       ├── booking.js         # Formulaire de réservation
│       ├── chatbot-brain.js   # Moteur de réponses d'Aeon (règles/mots-clés)
│       └── chatbot-widget.js  # Interface du widget de chat
├── images/                    # Voir tableau ci-dessus
└── README.md
```

**Pourquoi ce découpage ?** Chaque fichier a une seule responsabilité claire — pour ajouter une destination ou changer un tarif, il n'y a qu'un seul fichier à ouvrir (`js/data/destinations.js`), sans avoir à naviguer dans 700 lignes de code mélangeant chatbot, quiz et carrousel. Le module `main.js` reste volontairement minimal : il ne fait qu'importer et initialiser, aucune logique n'y vit directement.

## 💻 Installation / lancement local

Aucune installation nécessaire — c'est du HTML/CSS/JS statique, sans build.

⚠️ Le JavaScript est organisé en modules ES (`import`/`export`), ce qui **nécessite un serveur local** — les navigateurs bloquent le chargement de modules directement depuis un fichier (`file://`) pour des raisons de sécurité (CORS). Double-cliquer sur `index.html` ne suffit donc plus.

```bash
cd timetravel-agency
python3 -m http.server 8000
```
puis ouvrez `http://localhost:8000`. Une fois déployé sur GitHub Pages, Netlify ou Vercel (en HTTPS), tout fonctionne normalement sans configuration supplémentaire.

## 🚀 Déploiement sur GitHub Pages

1. Créez un repository GitHub et poussez ce dossier (`index.html`, `css/`, `js/`, `README.md`) à sa racine.
2. Dans le repo : **Settings → Pages**.
3. Sous "Source", choisissez la branche `main` et le dossier `/ (root)`.
4. Enregistrez : GitHub vous fournit une URL du type `https://votre-pseudo.github.io/nom-du-repo/`.
5. Le déploiement prend en général 1 à 2 minutes.

_Alternative : Netlify ou Vercel, par simple glisser-déposer du dossier, si vous préférez._

## 📝 Prompts clés utilisés pendant le développement

- Définition de l'identité visuelle : thème "instrument scientifique vintage" (laiton antique, encre profonde, patine cuivrée) plutôt qu'un thème générique, en écho à l'imagerie du télescope de l'agence.
- Personnalité du chatbot Aeon reprise du brief pédagogique (conseiller chaleureux, passionné d'histoire, expert fictif mais crédible du voyage temporel).
- Quiz de recommandation construit sur le modèle proposé dans le brief (4 questions, scoring par profils d'intérêt : culture / nature / art / urbain).

## 🎓 Réflexion sur le processus

Le principal arbitrage a été de garder le chatbot et le quiz **entièrement côté client** (pas d'appel API réel), pour permettre un déploiement gratuit et immédiat sur GitHub Pages sans exposer de clé API ni dépendre d'un backend. C'est un choix pédagogique : la structure du code (`botAnswer()`) est volontairement isolée pour pouvoir être remplacée par un vrai appel à l'API Mistral ou Groq en quelques lignes, si le temps ou le niveau technique du groupe le permet.

## 📄 Licence

Projet pédagogique — M1/M2 Digital & IA.
