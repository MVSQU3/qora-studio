import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, ArrowDown, Menu, X, Plus, Minus } from 'lucide-react';
import { ContactForm, DemoLabel, FloatingWhatsApp } from './components/Shared';

const services = [
  { n: '01', title: 'Sites web qui expliquent bien votre métier', tag: 'WEB & CONTENU', detail: 'Un site vitrine lisible, rapide et adapté au téléphone. On hiérarchise votre offre pour que le visiteur comprenne quoi faire ensuite.' },
  { n: '02', title: 'Identité visuelle et supports de marque', tag: 'IDENTITÉ & DESIGN', detail: 'Des choix visuels cohérents et utilisables : couleurs, typographies, documents commerciaux et présence sur les réseaux.' },
  { n: '03', title: 'Conseil et accompagnement digital', tag: 'STRATÉGIE', detail: 'On fait le tri entre les besoins immédiats, les idées à tester et les évolutions à garder pour plus tard.' },
];
const projects = [
  { num: '01', name: 'La Table d’Aïcha', sector: 'HOSPITALITÉ', note: 'Un restaurant qui travaille ses réservations et raconte sa cuisine.', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=84' },
  { num: '02', name: 'Sékou Habitat', sector: 'IMMOBILIER', note: 'Une présence claire pour présenter des biens et faciliter la prise de rendez-vous.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=84' },
  { num: '03', name: 'Terre & Feuille', sector: 'BIEN-ÊTRE', note: 'Un univers calme pour une marque de soins fictive.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=84' },
];

export default function AtelierPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openService, setOpenService] = useState('01');
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="editorial-site" id="top">
      <div className="ed-topbar"><span>STUDIO INDÉPENDANT — ABIDJAN, CÔTE D’IVOIRE</span><span>ÉDITION 01 <i /> CONSTRUIRE UNE PRÉSENCE JUSTE</span></div>
      <header className="ed-header">
        <a href="#top" className="ed-wordmark" aria-label="Qora Atelier, accueil"><span className="ed-monogram">k<span>.</span></span><span><b>QORA ATELIER</b><small>DESIGN & NUMÉRIQUE</small></span></a>
        <button className="ed-menu-toggle" type="button" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={`ed-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigation principale">
          <a href="#approche" onClick={closeMenu}>L’approche</a><a href="#expertises" onClick={closeMenu}>Expertises</a><a href="#carnet" onClick={closeMenu}>Carnet visuel</a><a href="#contact" onClick={closeMenu} className="ed-nav-cta">Écrire au studio <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main>
        <section className="ed-cover" aria-labelledby="ed-title">
          <div className="ed-cover-meta"><span><b>01 /</b> STUDIO DE PROXIMITÉ</span><span>STRATÉGIE · MOTS · IMAGE · WEB</span></div>
          <h1 id="ed-title">Le fond.<br /><em>La forme.</em><br /><span>Votre histoire.</span></h1>
          <div className="ed-cover-side-note">DES OUTILS NUMÉRIQUES QUI RESSEMBLENT À VOTRE ENTREPRISE.</div>
          <div className="ed-cover-photo">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1900&q=88" alt="Espace de travail lumineux avec une grande table en bois et des matériaux naturels" fetchPriority="high" />
            <span className="ed-photo-index">FIG. 01 — L’ESPACE POUR PENSER</span>
            <a className="ed-round-link" href="#approche" aria-label="Découvrir notre approche"><ArrowDown size={22} /></a>
          </div>
          <div className="ed-cover-caption"><p>Nous donnons une forme claire à ce que vous faites déjà bien.</p><span>POUR LES ENTREPRISES, COMMERCES & INDÉPENDANTS</span></div>
        </section>

        <section className="ed-intro" id="approche">
          <div className="ed-section-number">UNE AUTRE FAÇON DE FAIRE <span>01—04</span></div>
          <div className="ed-intro-text"><p className="ed-dropcap">Votre entreprise n’a pas besoin d’en faire plus pour être crédible. Elle a besoin de montrer l’essentiel, dans le bon ordre, avec une personnalité qui lui appartient.</p><p>Nous commençons par le dialogue : vos clients, votre manière de travailler, vos priorités. Le design vient ensuite, pour rendre tout cela plus lisible et plus facile à partager.</p><a className="ed-inline-link" href="#expertises">Voir ce que nous pouvons construire <ArrowDownRight size={16} /></a></div>
          <aside className="ed-margin-note"><span>NOTE DU STUDIO</span><p>Pas de solution copiée-collée. Le bon format dépend toujours du métier, du public et du budget.</p><div className="ed-handline" aria-hidden="true">↳</div></aside>
        </section>

        <section className="ed-services" id="expertises">
          <div className="ed-section-heading"><span className="ed-small-label">02 / NOS EXPERTISES</span><h2>Les bons outils.<br /><em>Pas tout l’arsenal.</em></h2><p>Choisissez une ligne pour comprendre ce qu’elle apporte. Le périmètre se construit selon votre besoin réel.</p></div>
          <div className="ed-service-index">{services.map(service => <article className={`ed-service-entry ${openService === service.n ? 'is-open' : ''}`} key={service.n}><button type="button" aria-expanded={openService === service.n} onClick={() => setOpenService(openService === service.n ? '' : service.n)}><span className="ed-service-n">{service.n}</span><span className="ed-service-main"><small>{service.tag}</small><strong>{service.title}</strong></span><span className="ed-service-toggle">{openService === service.n ? <Minus size={18} /> : <Plus size={18} />}</span></button>{openService === service.n && <div className="ed-service-detail"><p>{service.detail}</p><a href="#contact">Parler de ce besoin <ArrowUpRight size={15} /></a></div>}</article>)}</div>
          <div className="ed-services-bottom"><span>CE QUI COMPTE : UN OBJECTIF CLAIR</span><span>LE RESTE SE DISCUTE <ArrowUpRight size={14} /></span></div>
        </section>

        <section className="ed-quote-strip"><div className="ed-quote-mark">“</div><blockquote>Un bon site n’en dit pas plus.<br /><em>Il rend les bonnes choses évidentes.</em></blockquote><span>UNE CONVICTION DU STUDIO</span></section>

        <section className="ed-projects" id="carnet">
          <div className="ed-project-intro"><div><span className="ed-small-label">03 / CARNET VISUEL</span><h2>Des univers<br /><em>en devenir.</em></h2></div><div className="ed-project-note"><DemoLabel>CONCEPTS FICTIFS</DemoLabel><p>Des directions artistiques exploratoires — pas des références client réelles.</p></div></div>
          <div className="ed-project-list">{projects.map(project => <article className="ed-project-row" key={project.num}><div className="ed-project-label"><span>{project.num}</span><span>{project.sector}</span></div><div className="ed-project-name"><h3>{project.name}</h3><p>{project.note}</p><a href="#contact" aria-label={`Discuter d'un concept comme ${project.name}`}>Explorer cette piste <ArrowUpRight size={15} /></a></div><div className="ed-project-image"><img src={project.image} alt={`Visuel d’inspiration du concept fictif ${project.name}`} loading="lazy" decoding="async" /></div></article>)}</div>
        </section>

        <section className="ed-process"><div className="ed-process-top"><span className="ed-small-label">04 / LE DÉROULÉ</span><p>Une collaboration simple, où chaque étape a un rôle précis.</p></div><div className="ed-process-title"><h2>On écoute.<br /><em>On clarifie.</em><br />On construit.</h2><div className="ed-process-steps"><article><span>01</span><div><h3>Le dialogue</h3><p>Comprendre votre activité et ce qui doit changer.</p></div></article><article><span>02</span><div><h3>La direction</h3><p>Valider les contenus, le ton et la structure.</p></div></article><article><span>03</span><div><h3>La fabrication</h3><p>Créer, intégrer et tester sur les écrans utiles.</p></div></article><article><span>04</span><div><h3>La transmission</h3><p>Livrer proprement et expliquer comment utiliser le résultat.</p></div></article></div></div></section>

        <section className="ed-contact" id="contact"><div className="ed-contact-heading"><span className="ed-small-label">05 / UN PREMIER ÉCHANGE</span><h2>Parlons de ce<br /><em>que vous faites.</em></h2><p>Présentez-nous votre activité en quelques lignes. On regardera ensemble ce qui est utile maintenant, et ce qui peut attendre.</p><div className="ed-contact-footnote"><span>ABIDJAN, CÔTE D’IVOIRE</span><span>RÉPONSE HUMAINE, PAS AUTOMATIQUE</span></div></div><div className="ed-form-paper"><div className="ed-form-heading"><span>LE BUREAU DE CORRESPONDANCE</span><span>FORM. 001</span></div><ContactForm theme="premium" /></div></section>
      </main>

      <footer className="ed-footer"><a href="#top" className="ed-footer-logo"><span>k.</span> QORA ATELIER</a><p>Fait avec intention à Abidjan.</p><a href="#top">Retour au début ↑</a><small>Identité fictive — remplacer les éléments de démonstration avant publication.</small></footer>
      <FloatingWhatsApp />
    </div>
  );
}
