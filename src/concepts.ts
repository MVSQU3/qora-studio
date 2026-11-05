import type { LucideIcon } from 'lucide-react'
import {
  Banknote, BookOpen, Briefcase, CalendarCheck, Camera, ClipboardList, Compass, FileText,
  Globe2, GraduationCap, HardHat, HeartHandshake, HeartPulse, MapPin, Music2,
  Package, Scale, ShieldCheck, ShoppingBag, Smartphone, Sprout, Stethoscope, Ticket,
  Truck, UtensilsCrossed, Wrench, Hotel,
} from 'lucide-react'

export type Concept = {
  slug: string
  number: string
  name: string
  sector: string
  label: string
  tagline: string
  description: string
  tags: string[]
  font: 'sans' | 'serif' | 'mono'
  layout: 'split' | 'center' | 'dark' | 'band'
  palette: { bg: string; surface: string; ink: string; muted: string; accent: string; accent2: string; onAccent: string }
  hero: { eyebrow: string; title: string; em: string; text: string; cta: string }
  services: { icon: LucideIcon; title: string; text: string }[]
  steps: { title: string; text: string }[]
  faq: { q: string; a: string }[]
  closing: string
}

const steps = [
  { title: 'Cadrage', text: 'Nous écoutons votre activité, vos clients et vos objectifs.' },
  { title: 'Maquette', text: 'Vous validez la structure et l’ambiance avant tout développement.' },
  { title: 'Réalisation', text: 'Nous développons le site, l’adaptons au mobile et le testons.' },
  { title: 'Mise en ligne', text: 'Nous publions, vous formons et restons disponibles ensuite.' },
]

export const concepts: Concept[] = [
  {
    slug: 'marche', number: '05', name: 'Marché', sector: 'Commerce & e-commerce', label: 'MARCHÉ · COMMERCE LOCAL',
    tagline: 'Une boutique en ligne aussi vivante qu’un étal.',
    description: 'Couleurs franches, catalogue clair et commande par mobile pour les commerçants.',
    tags: ['Jaune & rouge', 'Catalogue', 'Mobile money'], font: 'sans', layout: 'band',
    palette: { bg: '#fff8e7', surface: '#ffffff', ink: '#2a1a0e', muted: '#6e5a45', accent: '#e63b2e', accent2: '#f6b800', onAccent: '#ffffff' },
    hero: { eyebrow: 'Commerce de proximité', title: 'Vos produits,', em: 'à portée de pouce.', text: 'Un catalogue lisible, un panier simple et une commande qui se termine sur WhatsApp ou par paiement mobile.', cta: 'Lancer ma boutique' },
    services: [
      { icon: ShoppingBag, title: 'Catalogue produits', text: 'Fiches claires, catégories, prix et disponibilités faciles à mettre à jour.' },
      { icon: Smartphone, title: 'Paiement mobile', text: 'Parcours pensé pour les paiements mobiles et la commande par message.' },
      { icon: Truck, title: 'Livraison & retrait', text: 'Zones, délais et points de retrait présentés sans ambiguïté.' },
    ],
    steps, faq: [
      { q: 'Puis-je gérer mes produits moi-même ?', a: 'Oui, nous prévoyons une prise en main pour ajouter et modifier vos articles.' },
      { q: 'Le site fonctionne-t-il sur un petit téléphone ?', a: 'Il est conçu mobile d’abord, y compris pour les connexions lentes.' },
      { q: 'Peut-on vendre sans paiement en ligne ?', a: 'Oui, la commande peut se finaliser par WhatsApp ou à la livraison.' },
    ], closing: 'Parlons de votre boutique.',
  },
  {
    slug: 'savane', number: '06', name: 'Savane', sector: 'Tourisme & hôtellerie', label: 'SAVANE · TOURISME',
    tagline: 'Donner envie de voyager avant même de réserver.',
    description: 'Ambiance chaude et grands espaces pour lodges, hôtels et agences de voyage.',
    tags: ['Sable & forêt', 'Réservation', 'Immersif'], font: 'serif', layout: 'center',
    palette: { bg: '#f4ead8', surface: '#fbf5e9', ink: '#23301f', muted: '#5f6a52', accent: '#2f5d3a', accent2: '#c98a2b', onAccent: '#fbf5e9' },
    hero: { eyebrow: 'Hôtels, lodges & circuits', title: 'Un séjour qui commence', em: 'sur votre écran.', text: 'Un site immersif qui présente vos chambres, vos expériences et vos tarifs, avec une demande de réservation en deux étapes.', cta: 'Demander une démo' },
    services: [
      { icon: Hotel, title: 'Chambres & offres', text: 'Présentation soignée des hébergements, services et formules.' },
      { icon: CalendarCheck, title: 'Demande de réservation', text: 'Dates, nombre de voyageurs et envoi direct à votre équipe.' },
      { icon: Compass, title: 'Expériences', text: 'Circuits, excursions et activités racontés avec leurs infos pratiques.' },
    ],
    steps, faq: [
      { q: 'Le site peut-il être en plusieurs langues ?', a: 'Oui, français et anglais sont recommandés pour une clientèle internationale.' },
      { q: 'Peut-on connecter un moteur de réservation ?', a: 'C’est possible selon l’outil que vous utilisez déjà. Nous le vérifions au cadrage.' },
      { q: 'Qui fournit les photos ?', a: 'Idéalement vous, ou nous organisons un shooting avec un photographe partenaire.' },
    ], closing: 'Faisons rêver vos futurs visiteurs.',
  },
  {
    slug: 'clinique', number: '07', name: 'Clinique', sector: 'Santé & bien-être', label: 'CLINIQUE · SANTÉ',
    tagline: 'Rassurer d’abord, informer clairement, faciliter le rendez-vous.',
    description: 'Interface claire, accessible et apaisante pour cabinets, cliniques et pharmacies.',
    tags: ['Turquoise & blanc', 'Rendez-vous', 'Accessible'], font: 'sans', layout: 'split',
    palette: { bg: '#f3fafa', surface: '#ffffff', ink: '#0f2f33', muted: '#4f6f73', accent: '#0e8f8f', accent2: '#7fd1c7', onAccent: '#ffffff' },
    hero: { eyebrow: 'Cabinets, cliniques, pharmacies', title: 'Prendre soin commence', em: 'par un accueil clair.', text: 'Horaires, spécialités, équipe et prise de rendez-vous visibles dès la première seconde, sur tous les écrans.', cta: 'Prendre rendez-vous' },
    services: [
      { icon: Stethoscope, title: 'Spécialités & équipe', text: 'Présentation des praticiens, des soins et des conditions d’accueil.' },
      { icon: CalendarCheck, title: 'Rendez-vous en ligne', text: 'Formulaire simple, confirmation rapide, rappel par message.' },
      { icon: HeartPulse, title: 'Conseils santé', text: 'Articles courts et fiables pour informer vos patients.' },
    ],
    steps, faq: [
      { q: 'Les données des patients sont-elles protégées ?', a: 'Nous limitons la collecte au strict nécessaire et recommandons un hébergement sécurisé.' },
      { q: 'Le site respecte-t-il l’accessibilité ?', a: 'Contrastes, tailles de texte et navigation clavier sont pris en compte dès la conception.' },
      { q: 'Peut-on afficher une garde ou une urgence ?', a: 'Oui, un bandeau d’information peut être mis à jour rapidement.' },
    ], closing: 'Simplifions l’accès à vos soins.',
  },
  {
    slug: 'campus', number: '08', name: 'Campus', sector: 'Éducation & formation', label: 'CAMPUS · ÉDUCATION',
    tagline: 'Un parcours d’inscription limpide pour familles et étudiants.',
    description: 'Structure rigoureuse et ton encourageant pour écoles, instituts et centres de formation.',
    tags: ['Indigo & ambre', 'Inscriptions', 'Programmes'], font: 'sans', layout: 'band',
    palette: { bg: '#f5f6ff', surface: '#ffffff', ink: '#171a4a', muted: '#555a8a', accent: '#3b3fd8', accent2: '#ffb020', onAccent: '#ffffff' },
    hero: { eyebrow: 'Écoles, instituts, formations', title: 'Choisir son avenir,', em: 'en toute clarté.', text: 'Filières, calendrier, frais et dossier d’inscription réunis dans un parcours que parents et étudiants comprennent immédiatement.', cta: 'Demander une démo' },
    services: [
      { icon: GraduationCap, title: 'Filières & programmes', text: 'Fiches détaillées : durée, débouchés, conditions d’admission.' },
      { icon: ClipboardList, title: 'Pré-inscription', text: 'Dossier en ligne, liste des pièces et suivi des demandes.' },
      { icon: BookOpen, title: 'Vie de campus', text: 'Actualités, événements et ressources pour la communauté.' },
    ],
    steps, faq: [
      { q: 'Peut-on publier le calendrier académique ?', a: 'Oui, avec une page dédiée facile à mettre à jour chaque année.' },
      { q: 'Prévoyez-vous un espace étudiant ?', a: 'C’est une option à étudier ensemble selon vos besoins réels.' },
      { q: 'Le site peut-il présenter plusieurs établissements ?', a: 'Oui, avec une structure par campus ou par filière.' },
    ], closing: 'Donnons envie de rejoindre votre établissement.',
  },
  {
    slug: 'table', number: '09', name: 'Table', sector: 'Restaurants & traiteurs', label: 'TABLE · RESTAURATION',
    tagline: 'Faire saliver, puis faire réserver.',
    description: 'Ambiance gourmande, menu lisible et réservation par WhatsApp pour la restauration.',
    tags: ['Piment & crème', 'Menu', 'WhatsApp'], font: 'serif', layout: 'split',
    palette: { bg: '#fff4ea', surface: '#fffaf5', ink: '#35120a', muted: '#7a5445', accent: '#c4381a', accent2: '#e8a33d', onAccent: '#fff4ea' },
    hero: { eyebrow: 'Restaurants, maquis, traiteurs', title: 'Votre cuisine mérite', em: 'une belle vitrine.', text: 'Menu à jour, horaires, localisation et réservation en un geste, avec la chaleur de votre établissement.', cta: 'Réserver une démo' },
    services: [
      { icon: UtensilsCrossed, title: 'Menu & carte', text: 'Plats, prix et suggestions du jour faciles à modifier.' },
      { icon: MapPin, title: 'Accès & horaires', text: 'Adresse, plan, jours d’ouverture et contact immédiat.' },
      { icon: CalendarCheck, title: 'Réservation', text: 'Table ou commande traiteur envoyée directement sur WhatsApp.' },
    ],
    steps, faq: [
      { q: 'Peut-on afficher le menu du jour ?', a: 'Oui, avec une zone prévue pour les mises à jour rapides.' },
      { q: 'Faut-il des photos professionnelles ?', a: 'Elles font la différence. Nous pouvons vous orienter vers un photographe.' },
      { q: 'La livraison est-elle possible ?', a: 'Nous pouvons présenter vos zones de livraison et prendre les commandes par message.' },
    ], closing: 'Mettons votre table en lumière.',
  },
  {
    slug: 'fondation', number: '10', name: 'Fondation', sector: 'ONG & associations', label: 'FONDATION · IMPACT',
    tagline: 'Raconter l’impact, inspirer la confiance, faciliter le don.',
    description: 'Narration humaine et transparence pour ONG, fondations et associations.',
    tags: ['Bleu & orange', 'Dons', 'Transparence'], font: 'serif', layout: 'center',
    palette: { bg: '#f6f9fc', surface: '#ffffff', ink: '#10304f', muted: '#52708f', accent: '#1565c0', accent2: '#f28c28', onAccent: '#ffffff' },
    hero: { eyebrow: 'ONG, fondations, associations', title: 'Chaque action compte,', em: 'montrons-le.', text: 'Missions, projets, rapports et appel aux dons présentés avec clarté pour fédérer bénévoles, partenaires et donateurs.', cta: 'Parler de mon projet' },
    services: [
      { icon: HeartHandshake, title: 'Projets & missions', text: 'Pages dédiées à chaque programme, avec objectifs et avancement.' },
      { icon: Banknote, title: 'Appel aux dons', text: 'Parcours de don simple et moyens de paiement locaux.' },
      { icon: FileText, title: 'Rapports & transparence', text: 'Rapports d’activité et partenaires accessibles en un clic.' },
    ],
    steps, faq: [
      { q: 'Peut-on recruter des bénévoles via le site ?', a: 'Oui, avec un formulaire d’engagement et des fiches de missions.' },
      { q: 'Comment présenter les partenaires ?', a: 'Une section dédiée met en avant vos soutiens et financeurs.' },
      { q: 'Existe-t-il un tarif adapté aux associations ?', a: 'Nous étudions chaque projet et adaptons la proposition à vos moyens.' },
    ], closing: 'Donnons de la portée à votre mission.',
  },
  {
    slug: 'manufacture', number: '11', name: 'Manufacture', sector: 'Industrie & BTP', label: 'MANUFACTURE · INDUSTRIE',
    tagline: 'Prouver le savoir-faire par les réalisations.',
    description: 'Esthétique robuste et sobre pour entreprises de construction, industrie et maintenance.',
    tags: ['Graphite & jaune', 'Références', 'Devis'], font: 'sans', layout: 'dark',
    palette: { bg: '#16181b', surface: '#22262a', ink: '#f2f3f4', muted: '#a3a9b0', accent: '#ffc400', accent2: '#ff8a00', onAccent: '#16181b' },
    hero: { eyebrow: 'BTP, industrie, maintenance', title: 'Du solide, du visible,', em: 'du vérifiable.', text: 'Savoir-faire, certifications, chantiers de référence et demande de devis structurée pour convaincre les donneurs d’ordre.', cta: 'Demander une démo' },
    services: [
      { icon: HardHat, title: 'Références chantiers', text: 'Projets présentés par secteur, avec contexte et résultats.' },
      { icon: ShieldCheck, title: 'Qualité & sécurité', text: 'Certifications, normes et engagements mis en avant.' },
      { icon: Wrench, title: 'Demande de devis', text: 'Formulaire détaillé pour recevoir des demandes exploitables.' },
    ],
    steps, faq: [
      { q: 'Peut-on joindre une brochure PDF ?', a: 'Oui, téléchargeable depuis le site, avec suivi des demandes.' },
      { q: 'Le site convient-il aux appels d’offres ?', a: 'Il sert de dossier de référence : compétences, moyens et réalisations.' },
      { q: 'Peut-on présenter plusieurs métiers ?', a: 'Oui, chaque activité dispose de sa propre page.' },
    ], closing: 'Construisons votre crédibilité en ligne.',
  },
  {
    slug: 'cabinet', number: '12', name: 'Cabinet', sector: 'Droit, comptabilité & conseil', label: 'CABINET · EXPERTISE',
    tagline: 'L’autorité tranquille des professions de confiance.',
    description: 'Typographie éditoriale et palette retenue pour juristes, experts-comptables et consultants.',
    tags: ['Bordeaux & ivoire', 'Éditorial', 'Prise de contact'], font: 'serif', layout: 'center',
    palette: { bg: '#faf6ef', surface: '#ffffff', ink: '#2b1217', muted: '#6d5559', accent: '#6e1f2e', accent2: '#b58b4c', onAccent: '#faf6ef' },
    hero: { eyebrow: 'Avocats, experts-comptables, conseil', title: 'Votre expertise,', em: 'sobrement affirmée.', text: 'Domaines d’intervention, équipe et prise de rendez-vous confidentielle pour installer la confiance avant le premier échange.', cta: 'Prendre contact' },
    services: [
      { icon: Scale, title: 'Domaines d’intervention', text: 'Chaque spécialité expliquée simplement, sans jargon inutile.' },
      { icon: Briefcase, title: 'Équipe & parcours', text: 'Profils des associés et valeurs du cabinet.' },
      { icon: FileText, title: 'Publications', text: 'Notes et analyses pour démontrer votre expertise.' },
    ],
    steps, faq: [
      { q: 'La prise de contact est-elle confidentielle ?', a: 'Nous limitons les informations demandées et rappelons la confidentialité.' },
      { q: 'Peut-on publier des articles ?', a: 'Oui, une rubrique actualités sert aussi votre visibilité sur Google.' },
      { q: 'Le ton du site peut-il rester très sobre ?', a: 'C’est justement l’intention de cette direction.' },
    ], closing: 'Donnons à votre cabinet la présence qu’il mérite.',
  },
  {
    slug: 'scene', number: '13', name: 'Scène', sector: 'Musique, événementiel & culture', label: 'SCÈNE · CULTURE',
    tagline: 'Un site qui fait monter le son avant le rideau.',
    description: 'Univers nocturne et énergique pour artistes, salles, festivals et organisateurs.',
    tags: ['Violet & magenta', 'Billetterie', 'Agenda'], font: 'sans', layout: 'dark',
    palette: { bg: '#120a24', surface: '#1e1238', ink: '#f6f0ff', muted: '#b4a5d6', accent: '#ff2e93', accent2: '#8a5cff', onAccent: '#ffffff' },
    hero: { eyebrow: 'Artistes, festivals, événements', title: 'Que la soirée', em: 'commence ici.', text: 'Agenda, line-up, billetterie et galerie réunis dans un site qui a l’énergie de vos événements.', cta: 'Lancer l’événement' },
    services: [
      { icon: Ticket, title: 'Billetterie', text: 'Parcours d’achat rapide, tarifs et catégories de places.' },
      { icon: Music2, title: 'Line-up & agenda', text: 'Dates, artistes et lieux faciles à mettre à jour.' },
      { icon: Camera, title: 'Galerie & médias', text: 'Photos et vidéos des éditions précédentes pour rassurer et séduire.' },
    ],
    steps, faq: [
      { q: 'Peut-on vendre des billets directement ?', a: 'Oui, via paiement mobile ou un partenaire de billetterie selon votre besoin.' },
      { q: 'Le site gère-t-il les pics de visites ?', a: 'Nous le dimensionnons pour les périodes de lancement.' },
      { q: 'Peut-on créer un site par événement ?', a: 'Oui, en réutilisant la même base pour chaque édition.' },
    ], closing: 'Faisons du bruit ensemble.',
  },
  {
    slug: 'terroir', number: '14', name: 'Terroir', sector: 'Agro-business & export', label: 'TERROIR · AGRO-EXPORT',
    tagline: 'Valoriser l’origine, prouver la traçabilité.',
    description: 'Tons terreux et récit d’origine pour coopératives, transformateurs et exportateurs.',
    tags: ['Cacao & vert', 'Traçabilité', 'Export'], font: 'serif', layout: 'band',
    palette: { bg: '#f1ebe0', surface: '#faf6ee', ink: '#2e1d12', muted: '#6b5a49', accent: '#4a6b2a', accent2: '#8a4b22', onAccent: '#faf6ee' },
    hero: { eyebrow: 'Cacao, café, anacarde, transformation', title: 'De la parcelle', em: 'au conteneur.', text: 'Origine, qualité, certifications et demande d’échantillons présentées pour rassurer acheteurs et importateurs.', cta: 'Demander une démo' },
    services: [
      { icon: Sprout, title: 'Origine & traçabilité', text: 'Zones de production, pratiques et suivi des lots.' },
      { icon: Package, title: 'Catalogue produits', text: 'Fiches techniques, conditionnements et volumes disponibles.' },
      { icon: Globe2, title: 'Contact acheteurs', text: 'Demande d’échantillons et de cotation, en français et en anglais.' },
    ],
    steps, faq: [
      { q: 'Le site peut-il être bilingue ?', a: 'Oui, le français et l’anglais sont recommandés pour l’export.' },
      { q: 'Peut-on afficher des certifications ?', a: 'Oui, avec leur périmètre et leurs justificatifs téléchargeables.' },
      { q: 'Peut-on intégrer un QR code de traçabilité ?', a: 'C’est possible et utile sur les emballages. Nous l’étudions ensemble.' },
    ], closing: 'Donnons de la valeur à votre origine.',
  },
]

