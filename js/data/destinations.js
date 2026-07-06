// Données des 4 destinations : contenu, tarifs, itinéraires, inclusions, galerie.
// Modifier/ajouter une destination se fait uniquement ici.
export const DESTINATIONS = {
  paris: {
    name: "Paris, 1889",
    tagline: "Belle Époque · Exposition Universelle",
    short: "L'effervescence de la Ville Lumière au pied d'une tour toute neuve, encore contestée par la moitié de Paris.",
    long: "Foulez les pavés d'un Paris en pleine effervescence : la Tour Eiffel vient d'être achevée pour l'Exposition Universelle, les cafés de Montmartre bourdonnent de peintres et de poètes, et l'électricité illumine les grands boulevards pour la première fois. Une plongée dans l'âge d'or de l'innovation et de l'art de vivre.",
    era: "XIXe siècle",
    duration: "5 jours temporels",
    risk: "Faible",
    price: "2 890",
    tags: ["culture","urbain","art"],
    profile: { culture: 3, nature: 0, art: 2, urbain: 3 },
    highlights: [
      { title: "Exposition Universelle", desc: "Déambulez sous la Tour Eiffel flambant neuve et ses pavillons venus du monde entier." },
      { title: "Nuits de Montmartre", desc: "Cabarets, ateliers de peintres impressionnistes et effervescence artistique jusqu'à l'aube." },
      { title: "Grands Boulevards", desc: "Premières vitrines électriques et grands magasins d'un Paris qui invente son avenir." },
      { title: "Croisière sur la Seine", desc: "Vue sur la capitale depuis un bateau-mouche, au fil de l'eau et des ponts historiques." }
    ],
    itinerary: [
      { day: "J1", title: "Arrivée & Exposition Universelle", desc: "Installation, première visite du Champ de Mars et de la Tour Eiffel." },
      { day: "J2", title: "Montmartre & les arts", desc: "Ateliers d'artistes, cabarets, Moulin de la Galette." },
      { day: "J3", title: "Grands Boulevards", desc: "Shopping d'époque, cafés, premières illuminations électriques." },
      { day: "J4", title: "Seine & Île de la Cité", desc: "Croisière fluviale, Notre-Dame, Île Saint-Louis." },
      { day: "J5", title: "Dernière soirée & retour", desc: "Dîner de gala, retour sécurisé à l'instant du départ." }
    ],
    includes: [
      "Transfert temporel sécurisé aller-retour",
      "Costumes et accessoires d'époque fournis",
      "Chronoguide historien dédié",
      "Accès à l'Exposition Universelle et ses pavillons",
      "Assurance temporelle tous risques"
    ],
    gallery: ["paris1", "paris2", "paris3", "paris4"]
  },
  cretace: {
    name: "Crétacé, -65M",
    tagline: "Ère mésozoïque · Nature primitive",
    short: "Une expédition au cœur d'une jungle peuplée de géants, quelques millions d'années avant la grande extinction.",
    long: "Observez les derniers grands dinosaures dans leur habitat naturel, depuis nos plateformes d'observation blindées et discrètes. Forêts primitives, rivières originelles, ciels sans aucune trace humaine : la nature dans son expression la plus brute et la plus spectaculaire, à quelques semaines seulement de la fin d'une ère.",
    era: "Préhistoire",
    duration: "3 jours temporels",
    risk: "Élevé (encadrement renforcé)",
    price: "4 250",
    tags: ["nature","aventure","faune"],
    profile: { culture: 0, nature: 3, art: 0, urbain: 0 },
    highlights: [
      { title: "Safari des géants", desc: "Observez troupeaux et grands prédateurs depuis un véhicule blindé silencieux." },
      { title: "Coupole nocturne", desc: "Nuit sous un dôme transparent, au son de la forêt primitive." },
      { title: "Rivières primitives", desc: "Descente encadrée au milieu d'une faune aquatique disparue." },
      { title: "Ciel de ptérosaures", desc: "Au crépuscule, le vol des grands reptiles volants au-dessus de la canopée." }
    ],
    itinerary: [
      { day: "J1", title: "Briefing & déploiement", desc: "Formation sécurité, équipement, installation dans la base-observatoire blindée." },
      { day: "J2", title: "Grande plaine & forêt dense", desc: "Observation des troupeaux depuis les miradors, approche encadrée de la canopée." },
      { day: "J3", title: "Rivière, crépuscule & extraction", desc: "Descente fluviale, vol des ptérosaures au coucher du soleil, retour sécurisé." }
    ],
    includes: [
      "Transfert temporel sécurisé aller-retour",
      "Escorte renforcée et guide paléontologue",
      "Combinaisons et équipement de protection",
      "Base-observatoire blindée tout confort",
      "Assurance temporelle tous risques"
    ],
    gallery: ["cretace1", "cretace2", "cretace3", "cretace4"]
  },
  florence: {
    name: "Florence, 1504",
    tagline: "Haute Renaissance · Cité des arts",
    short: "L'année où le David de Michel-Ange est dévoilé, dans la Florence des Médicis au sommet de son rayonnement.",
    long: "Arrivez à Florence l'année précise où le David de Michel-Ange est installé sur la Piazza della Signoria. Croisez les ateliers d'artistes qui réinventent l'art occidental, arpentez le Ponte Vecchio et ses échoppes, et ressentez l'énergie d'une cité où l'art, la politique et l'argent des Médicis se mêlent à chaque coin de rue.",
    era: "Renaissance",
    duration: "4 jours temporels",
    risk: "Faible",
    price: "3 400",
    tags: ["art","culture","architecture"],
    profile: { culture: 2, nature: 0, art: 3, urbain: 1 },
    highlights: [
      { title: "Dévoilement du David", desc: "Assistez à l'installation de la sculpture de Michel-Ange sur la Piazza della Signoria." },
      { title: "Ateliers de la Renaissance", desc: "Visite des ateliers d'artistes qui réinventent l'art occidental." },
      { title: "Ponte Vecchio", desc: "Flânerie parmi les échoppes d'orfèvres sur le plus vieux pont de Florence." },
      { title: "Cour des Médicis", desc: "Soirée privée dans les jardins d'un palais florentin." }
    ],
    itinerary: [
      { day: "J1", title: "Arrivée & Piazza della Signoria", desc: "Installation, dévoilement du David de Michel-Ange." },
      { day: "J2", title: "Ateliers & art florentin", desc: "Visite d'ateliers d'artistes, Galerie des Offices." },
      { day: "J3", title: "Ponte Vecchio & artisanat", desc: "Échoppes d'orfèvres, quartiers historiques." },
      { day: "J4", title: "Cour des Médicis & retour", desc: "Soirée privée, retour sécurisé à l'instant du départ." }
    ],
    includes: [
      "Transfert temporel sécurisé aller-retour",
      "Costumes Renaissance fournis",
      "Chronoguide historien de l'art dédié",
      "Accès privilégié aux ateliers d'artistes",
      "Assurance temporelle tous risques"
    ],
    gallery: ["florence1", "florence2", "florence3", "florence4"]
  },
  lecaire: {
    name: "Le Caire, 1300 av. J.-C.",
    tagline: "Nouvel Empire égyptien · Vallée du Nil",
    short: "Au faîte du Nouvel Empire, entre temples monumentaux fraîchement peints et croisière sur le fleuve nourricier.",
    long: "Remontez jusqu'au Nouvel Empire égyptien, dans une Thèbes rayonnante où les temples de Karnak affichent encore leurs couleurs d'origine. Descendez le Nil au fil de l'eau, croisez les artisans du marché royal, et pénétrez, sous escorte, dans la Vallée des Rois où des tombes viennent tout juste d'être scellées pour l'éternité.",
    era: "Antiquité égyptienne",
    duration: "4 jours temporels",
    risk: "Faible",
    price: "3 850",
    tags: ["culture","architecture","histoire"],
    profile: { culture: 3, nature: 1, art: 2, urbain: 1 },
    highlights: [
      { title: "Vallée des Rois", desc: "Découvrez les tombes royales encore fraîchement creusées dans la roche." },
      { title: "Temples de Karnak", desc: "Grandeur des piliers et hiéroglyphes tout juste peints de leurs couleurs d'origine." },
      { title: "Croisière sur le Nil", desc: "Un fleuve nourricier au cœur de la civilisation égyptienne." },
      { title: "Marché de Thèbes", desc: "Étals d'épices, d'or et de lin dans la capitale du Nouvel Empire." }
    ],
    itinerary: [
      { day: "J1", title: "Arrivée & Temples de Karnak", desc: "Installation, découverte des temples monumentaux de Thèbes." },
      { day: "J2", title: "Vallée des Rois", desc: "Exploration encadrée des tombes royales fraîchement scellées." },
      { day: "J3", title: "Croisière sur le Nil", desc: "Descente du fleuve, villages et rites religieux du quotidien." },
      { day: "J4", title: "Marché de Thèbes & retour", desc: "Dernière journée dans la capitale, retour sécurisé à l'instant du départ." }
    ],
    includes: [
      "Transfert temporel sécurisé aller-retour",
      "Costumes et protections solaires fournis",
      "Chronoguide égyptologue dédié",
      "Accès aux temples et à la Vallée des Rois",
      "Assurance temporelle tous risques"
    ],
    gallery: ["lecaire1", "lecaire2", "lecaire3", "lecaire4"]
  }
};

