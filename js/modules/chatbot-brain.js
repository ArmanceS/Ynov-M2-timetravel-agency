// Agent conversationnel local "Aeon" : réponses par règles/mots-clés, exécutées
// entièrement côté client (aucun appel API, aucune clé nécessaire).
// Personnalité : conseiller chaleureux, passionné d'histoire, expert (fictif
// mais crédible) du voyage temporel — voir le brief pédagogique.
import { DESTINATIONS } from '../data/destinations.js';

export const BOT_NAME = "Aeon";

export function botAnswer(raw) {
  const msg = raw.toLowerCase();

  const has = (...words) => words.some(w => msg.includes(w));

  if (has('bonjour', 'salut', 'hello', 'coucou')) {
    return `Bonjour, voyageur ! Je suis ${BOT_NAME}, votre conseiller temporel. Cherchez-vous une destination en particulier, ou préférez-vous que je vous guide selon vos goûts ?`;
  }

  if (has('prix', 'tarif', 'coûte', 'combien')) {
    return `Nos tarifs : Paris 1889 à ${DESTINATIONS.paris.price} Chronops, Crétacé à ${DESTINATIONS.cretace.price} Chronops, Florence 1504 à ${DESTINATIONS.florence.price} Chronops, et Le Caire (1300 av. J.-C.) à ${DESTINATIONS.lecaire.price} Chronops, par personne. Le prix inclut la traversée temporelle, l'équipement d'époque et l'encadrement de nos guides chronoguides. Une destination vous intéresse plus particulièrement ?`;
  }

  if (has('crétacé', 'cretace', 'dinosaure', 'dino')) {
    return `Le Crétacé est notre expédition la plus spectaculaire : observation de grands dinosaures depuis des plateformes sécurisées, ${DESTINATIONS.cretace.duration.toLowerCase()}, pour ${DESTINATIONS.cretace.price} Chronops. Le niveau de risque est plus élevé, donc l'encadrement y est renforcé. C'est une expérience pour les amateurs de nature brute et d'aventure !`;
  }

  if (has('paris', '1889', 'tour eiffel', 'belle époque', 'belle epoque')) {
    return `Paris 1889, c'est la Belle Époque au moment de l'Exposition Universelle : la Tour Eiffel tout juste achevée, les grands boulevards, l'effervescence artistique de Montmartre. ${DESTINATIONS.paris.duration}, pour ${DESTINATIONS.paris.price} Chronops. Une valeur sûre pour les amoureux de culture et d'histoire moderne.`;
  }

  if (has('florence', '1504', 'michel-ange', 'michelange', 'renaissance', 'david')) {
    return `Florence 1504, c'est l'année exacte où le David de Michel-Ange est dévoilé sur la Piazza della Signoria ! ${DESTINATIONS.florence.duration}, pour ${DESTINATIONS.florence.price} Chronops. Idéal si vous êtes passionné d'art, d'architecture et de la Renaissance.`;
  }

  if (has('caire', 'egypte', 'égypte', 'nil', 'karnak', 'pyramide', 'pharaon')) {
    return `Le Caire, 1300 av. J.-C., c'est le Nouvel Empire égyptien au sommet de sa splendeur : les temples de Karnak encore couverts de leurs couleurs d'origine, une croisière sur le Nil, et un accès encadré à la Vallée des Rois. ${DESTINATIONS.lecaire.duration}, pour ${DESTINATIONS.lecaire.price} Chronops. Une destination fascinante pour les passionnés d'histoire ancienne.`;
  }

  if (has('quel', 'choisir', 'conseil', 'recommand', 'lequel')) {
    return `Cela dépend de vos envies ! Amateur d'art et de raffinement → Florence 1504. Envie d'aventure et de nature sauvage → le Crétacé. Attiré par l'effervescence culturelle et urbaine → Paris 1889. Passionné d'histoire ancienne et de civilisations disparues → Le Caire, 1300 av. J.-C. Vous pouvez aussi faire notre petit quiz un peu plus haut sur la page, il vous recommandera une destination en quelques secondes !`;
  }

  if (has('risque', 'danger', 'sécur', 'securite')) {
    return `La sécurité est notre priorité absolue. Paris et Florence sont classées "risque faible", encadrées par un chronoguide. Le Crétacé est classé "risque élevé" en raison de la faune : l'expédition se fait depuis des plateformes blindées, avec un encadrement renforcé et un briefing complet avant le départ.`;
  }

  if (has('réserv', 'reserv', 'booking', 'book')) {
    return `Avec plaisir ! Rendez-vous dans la section "Réserver" un peu plus bas sur la page : choisissez votre destination, vos dates, et le nombre de voyageurs. Voulez-vous que je vous y amène ?`;
  }

  if (has('durée', 'duree', 'combien de temps', 'jours')) {
    return `Les séjours durent entre 3 et 5 jours temporels selon la destination : 5 jours à Paris, 4 à Florence, 3 pour l'expédition au Crétacé (pour des raisons de sécurité).`;
  }

  if (has('merci')) {
    return `Avec grand plaisir ! N'hésitez pas si vous avez d'autres questions sur nos voyages temporels.`;
  }

  return `Question passionnante ! Je peux vous renseigner sur nos trois destinations (Paris 1889, le Crétacé, Florence 1504), leurs tarifs, leur durée, leur niveau de risque, ou vous aider à choisir via notre quiz. Que souhaitez-vous savoir ?`;
}

