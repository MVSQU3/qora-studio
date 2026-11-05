export type Concept = {
  slug: string
  number: string
  name: string
  sector: string
  label: string
  tagline: string
  description: string
  tags: string[]
  palette: { bg: string; accent: string; accent2: string }
}

export const concepts: Concept[] = [
  { slug: 'marche', number: '05', name: 'Marché', sector: 'Commerce & e-commerce', label: 'MARCHÉ · COMMERCE LOCAL', tagline: 'Une boutique en ligne aussi vivante qu’un étal.', description: 'Étiquettes de prix, pagne wax et panier qui se termine sur WhatsApp.', tags: ['Wax & jaune', 'Panier WhatsApp', 'Catalogue'], palette: { bg: '#ffd23f', accent: '#e63b2e', accent2: '#1b1f6b' } },
  { slug: 'savane', number: '06', name: 'Savane', sector: 'Tourisme & hôtellerie', label: 'SAVANE · TOURISME', tagline: 'Donner envie de voyager avant même de réserver.', description: 'Un coucher de soleil qui suit le défilement et un carnet d’itinéraire à remplir.', tags: ['Crépuscule', 'Itinéraire', 'Immersif'], palette: { bg: '#2b1b3d', accent: '#c4572b', accent2: '#f2a65a' } },
  { slug: 'clinique', number: '07', name: 'Clinique', sector: 'Santé & bien-être', label: 'CLINIQUE · SANTÉ', tagline: 'Rassurer d’abord, puis faire choisir un créneau.', description: 'Sélecteur de créneaux, tracé d’ECG et information pratique toujours visible.', tags: ['Turquoise clinique', 'Créneaux', 'Accessible'], palette: { bg: '#f4fbfa', accent: '#0b7a75', accent2: '#8fe3d6' } },
  { slug: 'campus', number: '08', name: 'Campus', sector: 'Éducation & formation', label: 'CAMPUS · ÉDUCATION', tagline: 'Un emploi du temps qui donne envie de s’inscrire.', description: 'Hero en emploi du temps, filières explorables et calendrier d’inscription.', tags: ['Cahier & indigo', 'Filières', 'Calendrier'], palette: { bg: '#f7f5ee', accent: '#2d2f9e', accent2: '#ffb020' } },
  { slug: 'table', number: '09', name: 'Table', sector: 'Restaurants & traiteurs', label: 'TABLE · RESTAURATION', tagline: 'Faire saliver, puis faire réserver.', description: 'Carte à points de conduite, plat du jour tamponné et réservation en un geste.', tags: ['Piment & safran', 'Carte', 'Réservation'], palette: { bg: '#7a1d0e', accent: '#f4b942', accent2: '#fff1dc' } },
  { slug: 'fondation', number: '10', name: 'Fondation', sector: 'ONG & associations', label: 'FONDATION · IMPACT', tagline: 'Raconter le terrain, puis faciliter le don.', description: 'Mise en page de reportage, journal de terrain et choix du montant du don.', tags: ['Reportage', 'Dons', 'Transparence'], palette: { bg: '#0f2a47', accent: '#ff7a1a', accent2: '#eef3f8' } },
  { slug: 'manufacture', number: '11', name: 'Manufacture', sector: 'Industrie & BTP', label: 'MANUFACTURE · INDUSTRIE', tagline: 'Prouver le savoir-faire sur le plan.', description: 'Plan technique coté, fiches chantier et demande de devis par type de travaux.', tags: ['Plan technique', 'Références', 'Devis'], palette: { bg: '#15171a', accent: '#ffc400', accent2: '#2e5b9a' } },
  { slug: 'cabinet', number: '12', name: 'Cabinet', sector: 'Droit, comptabilité & conseil', label: 'CABINET · EXPERTISE', tagline: 'Un site rédigé comme un acte.', description: 'Page en articles numérotés, annotations en marge et signature manuscrite.', tags: ['Acte & sceau', 'Éditorial', 'Contact'], palette: { bg: '#1d2b27', accent: '#8c1d2c', accent2: '#eef1ee' } },
  { slug: 'scene', number: '13', name: 'Scène', sector: 'Musique, événementiel & culture', label: 'SCÈNE · CULTURE', tagline: 'L’affiche avant le rideau.', description: 'Affiche typographique, défilement continu et billets perforés à choisir.', tags: ['Affiche', 'Billetterie', 'Agenda'], palette: { bg: '#12081f', accent: '#ff2e93', accent2: '#7cf0ff' } },
  { slug: 'terroir', number: '14', name: 'Terroir', sector: 'Agro-business & export', label: 'TERROIR · AGRO-EXPORT', tagline: 'L’origine imprimée sur le sac.', description: 'Étiquette de lot au pochoir, fiche produit dynamique et demande d’échantillon.', tags: ['Kraft & pochoir', 'Traçabilité', 'Export'], palette: { bg: '#cfa877', accent: '#23402a', accent2: '#b3261e' } },
]
