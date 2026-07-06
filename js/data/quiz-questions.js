// Les 4 questions du quiz de recommandation et leur pondération par profil
// (culture / nature / art / urbain), utilisée pour matcher une destination.
export const QUIZ_QUESTIONS = [
  {
    q: "Quel type d'expérience recherchez-vous ?",
    options: [
      { label: "Culturelle et artistique", scores: { culture: 2, art: 2 } },
      { label: "Aventure et nature", scores: { nature: 3 } },
      { label: "Élégance et raffinement", scores: { art: 1, urbain: 2 } }
    ]
  },
  {
    q: "Votre période préférée ?",
    options: [
      { label: "Histoire moderne (XIXe–XXe siècle)", scores: { urbain: 2, culture: 1 } },
      { label: "Temps anciens et origines", scores: { nature: 3 } },
      { label: "Renaissance et classicisme", scores: { art: 3 } }
    ]
  },
  {
    q: "Vous préférez :",
    options: [
      { label: "L'effervescence urbaine", scores: { urbain: 3, culture: 1 } },
      { label: "La nature sauvage", scores: { nature: 3 } },
      { label: "L'art et l'architecture", scores: { art: 3 } }
    ]
  },
  {
    q: "Votre activité idéale :",
    options: [
      { label: "Visiter des monuments", scores: { urbain: 2, culture: 2 } },
      { label: "Observer la faune", scores: { nature: 3 } },
      { label: "Explorer des musées et ateliers d'artistes", scores: { art: 3 } }
    ]
  }
];

