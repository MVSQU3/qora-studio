import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Check,
  ChevronDown,
  CircleHelp,
  Clock,
  Globe,
  Handshake,
  Lightbulb,
  Megaphone,
  MessageCircle,
  Palette,
  Plus,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  ContactForm,
  DemoLabel,
  Eyebrow,
  Footer,
  Header,
  SectionHeading,
  FloatingWhatsApp,
} from "./components/Shared";

const offerings = [
  {
    icon: Globe,
    number: "01",
    title: "Sites web",
    desc: "Des pages rapides, claires et pensées pour vos visiteurs.",
    accent: "offer-green",
  },
  {
    icon: Palette,
    number: "02",
    title: "Image de marque",
    desc: "Une identité reconnaissable, cohérente et facile à décliner.",
    accent: "offer-orange",
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Visibilité digitale",
    desc: "Des contenus et des outils alignés sur vos objectifs.",
    accent: "offer-pink",
  },
];
const projects = [
  {
    tag: "SITE VITRINE",
    name: "Maison Naya",
    sector: "Concept · décoration & maison",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=82",
    cls: "project-olive",
  },
  {
    tag: "IDENTITÉ VISUELLE",
    name: "Kawa Café",
    sector: "Concept · café de spécialité",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=82",
    cls: "project-terracotta",
  },
  {
    tag: "EXPÉRIENCE DIGITALE",
    name: "Nexa Conseil",
    sector: "Concept · conseil aux PME",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=82",
    cls: "project-blue",
  },
];
const faqs = [
  {
    q: "Quels types d’entreprises accompagnez-vous ?",
    a: "Cette maquette s’adresse aux PME, commerces, indépendants et organisations qui veulent mieux présenter leurs activités. Le ciblage précis sera ajusté selon l’offre réelle de l’entreprise.",
  },
  {
    q: "Combien coûte un site vitrine ?",
    a: "Le budget dépend du nombre de pages, du contenu disponible et des fonctionnalités. Les montants affichés ici sont indicatifs : un devis précis sera établi après cadrage.",
  },
  {
    q: "Combien de temps faut-il pour lancer un site ?",
    a: "Le délai varie selon la complexité et la rapidité de validation des contenus. Pour un petit site vitrine, on peut définir un calendrier réaliste après avoir clarifié le périmètre.",
  },
  {
    q: "Pourrai-je modifier le site ensuite ?",
    a: "Oui, le mode de gestion dépendra de la solution retenue. La livraison peut inclure une prise en main, une documentation ou un accompagnement de maintenance selon le besoin.",
  },
];

export default function StudioPage() {
  const [activeFaq, setActiveFaq] = useState(0);
  return (
    <div className="studio-site" id="top">
      <div className="studio-banner">
        <span>
          <Sparkles size={13} /> ON FAIT GRANDIR LES BONNES IDÉES
        </span>
        <span>
          ABIDJAN · CÔTE D’IVOIRE <ArrowUpRight size={13} />
        </span>
      </div>
      <Header theme="studio" />
      <main>
        <section className="studio-hero">
          <div className="studio-hero-copy">
            <Eyebrow playful>VOTRE ALLIÉ CRÉATIF</Eyebrow>
            <h1>
              On donne du <span>relief</span> à vos idées
              <span className="coral-period">.</span>
            </h1>
            <p>
              Des sites web, une identité de marque et des expériences digitales
              qui donnent envie de vous choisir.
            </p>
            <div className="studio-hero-actions">
              <a className="button button-coral" href="#contact">
                Parlons de votre projet <ArrowUpRight size={17} />
              </a>
              <a className="studio-discover-link" href="#services">
                Découvrir ce qu’on fait <ArrowDownRight size={17} />
              </a>
            </div>
            <div className="studio-hero-note">
              <div className="avatar-stack">
                <span>Q</span>
                <span>S</span>
                <span>+</span>
              </div>
              <div>
                <strong>Du concret, pas du bruit.</strong>
                <small>
                  Une approche simple, humaine et orientée résultat.
                </small>
              </div>
            </div>
          </div>
          <div className="studio-hero-collage">
            <div className="collage-backdrop" />
            <div className="collage-photo">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                alt="Équipe créative échangeant autour d'un projet"
                fetchPriority="high"
              />
              <span className="photo-label">
                LES BONNES IDÉES
                <br />
                SE CONSTRUISENT ENSEMBLE.
              </span>
            </div>
            <div className="collage-sticker sticker-spark">
              <Sparkles size={28} />
            </div>
            <div className="collage-sticker sticker-type">
              MAKE IT
              <br />
              <em>MATTER.</em>
            </div>
            <div className="collage-bottom-card">
              <span className="collage-card-icon">
                <Zap size={18} fill="currentColor" />
              </span>
              <span>
                <strong>Créativité utile</strong>
                <small>Le beau doit aussi servir un objectif.</small>
              </span>
              <ArrowUpRight size={17} />
            </div>
            <div className="collage-number">
              01<span>/03</span>
            </div>
          </div>
          <div className="studio-hero-foot">
            <span>
              STRATÉGIE <i>✳</i> DESIGN <i>✳</i> DIGITAL
            </span>
            <span>
              SCROLL POUR DÉCOUVRIR <ArrowDownRight size={14} />
            </span>
          </div>
        </section>

        <div
          className="studio-marquee"
          aria-label="Création de sites web, identité de marque et communication digitale"
        >
          <div>
            FAIRE SIMPLE <span>✳</span> FAIRE JUSTE <span>✳</span> FAIRE MIEUX{" "}
            <span>✳</span> FAIRE SIMPLE <span>✳</span> FAIRE JUSTE{" "}
            <span>✳</span> FAIRE MIEUX <span>✳</span>
          </div>
        </div>

        <section className="studio-services section-pad" id="services">
          <div className="studio-section-top">
            <SectionHeading
              playful
              kicker="CE QU’ON PEUT FAIRE ENSEMBLE"
              title={
                <>
                  Les bonnes idées
                  <br />
                  <em>méritent mieux.</em>
                </>
              }
              description="Pas de solution copiée-collée. On construit l’essentiel, avec une vraie intention derrière chaque choix."
            />
            <div className="scribble-note">
              <Asterisk size={28} />
              <span>
                Créatif, mais
                <br />
                toujours utile.
              </span>
            </div>
          </div>
          <div className="studio-offering-grid grid grid-cols-1 md:grid-cols-3 gap-4">
            {offerings.map(({ icon: Icon, number, title, desc, accent }) => (
              <article
                className={`studio-offering-card ${accent}`}
                key={number}
              >
                <div className="offering-card-top">
                  <span>{number} / SERVICE</span>
                  <span className="offering-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <a
                  href="#contact"
                  aria-label={`Demander un devis pour ${title}`}
                >
                  Explorons votre besoin <ArrowUpRight size={16} />
                </a>
                <div className="offering-bottom-shape" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="studio-offers section-pad" id="offres">
          <div className="offers-intro">
            <Eyebrow playful>DES FORMULES POUR DÉMARRER</Eyebrow>
            <h2>
              On part de votre réalité.
              <br />
              <em>Pas d’un catalogue.</em>
            </h2>
            <p>
              Trois niveaux pour se repérer. Le périmètre et le budget
              définitifs se valident après discussion.
            </p>
            <div className="offers-note">
              <CircleHelp size={17} />
              <span>Tarifs indicatifs : devis personnalisé après échange.</span>
            </div>
          </div>
          <div className="offer-pricing-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <article className="pricing-card">
              <span className="pricing-label">POUR DÉMARRER</span>
              <h3>Essentiel</h3>
              <p>Une présence en ligne claire pour expliquer l’essentiel.</p>
              <strong className="price">
                60 000 <small>FCFA</small>
              </strong>
              <ul>
                <li>
                  <Check size={15} /> Page vitrine structurée
                </li>
                <li>
                  <Check size={15} /> Design adapté au mobile
                </li>
                <li>
                  <Check size={15} /> Bouton WhatsApp
                </li>
              </ul>
              <a href="#contact">
                Parler de cette formule <ArrowRight size={15} />
              </a>
            </article>
            <article className="pricing-card pricing-featured">
              <span className="popular-pill">
                <Sparkles size={13} /> LE PLUS COMPLET
              </span>
              <span className="pricing-label">POUR SE DÉMARQUER</span>
              <h3>Visibilité</h3>
              <p>Un parcours plus riche pour valoriser votre activité.</p>
              <strong className="price">
                120 000 <small>FCFA</small>
              </strong>
              <ul>
                <li>
                  <Check size={15} /> Plusieurs sections dédiées
                </li>
                <li>
                  <Check size={15} /> Base SEO et performance
                </li>
                <li>
                  <Check size={15} /> Formulaire de contact
                </li>
                <li>
                  <Check size={15} /> Accompagnement au lancement
                </li>
              </ul>
              <a href="#contact">
                Construire cette offre <ArrowRight size={15} />
              </a>
            </article>
            <article className="pricing-card">
              <span className="pricing-label">POUR UN BESOIN SPÉCIFIQUE</span>
              <h3>Sur mesure</h3>
              <p>Une solution adaptée à vos objectifs et contraintes.</p>
              <strong className="price price-custom">Sur devis</strong>
              <ul>
                <li>
                  <Check size={15} /> Périmètre défini ensemble
                </li>
                <li>
                  <Check size={15} /> Fonctionnalités spécifiques
                </li>
                <li>
                  <Check size={15} /> Plan de suivi possible
                </li>
              </ul>
              <a href="#contact">
                Décrire mon projet <ArrowRight size={15} />
              </a>
            </article>
          </div>
        </section>

        <section className="studio-work section-pad" id="realisations">
          <div className="work-top">
            <div>
              <Eyebrow playful>QUELQUES UNIVERS</Eyebrow>
              <h2>
                Des idées transformées
                <br />
                <em>en expériences.</em>
              </h2>
            </div>
            <div className="work-top-right">
              <DemoLabel>PISTES CRÉATIVES</DemoLabel>
              <p>
                Ces visuels illustrent une direction créative. Ils ne
                correspondent pas à des clients ou réalisations réelles.
              </p>
            </div>
          </div>
          <div className="studio-project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <article
                className={`studio-project-card ${project.cls}`}
                key={project.name}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`Image d'inspiration pour le concept ${project.name}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{project.tag}</span>
                  <a
                    href="#contact"
                    aria-label={`Discuter d'un projet similaire à ${project.name}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <div className="project-info">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.sector}</p>
                  </div>
                  <span>0{i + 1}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="work-bottom-cta">
            <span>Votre projet sera le prochain à raconter.</span>
            <a href="#contact">
              Créer quelque chose ensemble <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="studio-advantages section-pad" id="avantages">
          <div className="advantages-visual">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=82"
              alt="Réunion d'équipe autour d'un plan de travail"
              loading="lazy"
              decoding="async"
            />
            <div className="advantages-stamp">
              <Handshake size={26} />
              <span>
                ON AVANCE
                <br />
                ENSEMBLE.
              </span>
            </div>
            <div className="advantages-side-note">
              DES CHOIX QUI ONT DU SENS <span>↗</span>
            </div>
          </div>
          <div className="advantages-copy">
            <Eyebrow playful>POURQUOI NOUS ?</Eyebrow>
            <h2>
              Du cœur dans le travail.
              <br />
              <em>Du sens dans chaque détail.</em>
            </h2>
            <p>
              On aime les projets bien pensés, les échanges directs et les
              solutions qui répondent à un vrai besoin. La créativité n’est pas
              une décoration : c’est un moyen de mieux communiquer.
            </p>
            <div className="advantage-list">
              <div>
                <span>
                  <Lightbulb size={21} />
                </span>
                <div>
                  <h3>On pense avant de produire</h3>
                  <p>
                    Chaque choix visuel doit soutenir un message ou une action.
                  </p>
                </div>
              </div>
              <div>
                <span>
                  <MessageCircle size={21} />
                </span>
                <div>
                  <h3>On parle simplement</h3>
                  <p>
                    Des explications claires, sans jargon inutile ni promesse
                    floue.
                  </p>
                </div>
              </div>
              <div>
                <span>
                  <Rocket size={21} />
                </span>
                <div>
                  <h3>On vise l’utile</h3>
                  <p>
                    Une expérience agréable, rapide et pensée pour vos clients.
                  </p>
                </div>
              </div>
            </div>
            <a href="#contact" className="button button-green">
              On parle de votre besoin <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="studio-faq section-pad" id="faq">
          <div className="faq-intro">
            <Eyebrow playful>QUESTIONS FRÉQUENTES</Eyebrow>
            <h2>On fait le point ?</h2>
            <p>
              Quelques réponses pour savoir comment démarrer. Et si votre
              question n’est pas là, parlons-en.
            </p>
            <a href="#contact">
              J’ai une autre question <ArrowUpRight size={16} />
            </a>
            <div className="faq-doodle" aria-hidden="true">
              <Sparkles size={52} />
            </div>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <article
                className={`faq-item ${activeFaq === i ? "faq-item-open" : ""}`}
                key={faq.q}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                    aria-expanded={activeFaq === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-toggle">
                      {activeFaq === i ? (
                        <ChevronDown size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </span>
                  </button>
                </h3>
                {activeFaq === i && (
                  <div id={`faq-answer-${i}`} className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="studio-contact section-pad" id="contact">
          <div className="studio-contact-top">
            <div>
              <Eyebrow playful>À VOUS DE JOUER</Eyebrow>
              <h2>
                Racontez-nous
                <br />
                <em>votre prochaine idée.</em>
              </h2>
            </div>
            <div className="contact-arrow-art" aria-hidden="true">
              <ArrowDownRight size={78} strokeWidth={1.1} />
            </div>
          </div>
          <div className="studio-contact-layout">
            <div className="studio-contact-copy">
              <p>
                Vous avez un projet en tête, une question ou besoin d’un regard
                extérieur ? Donnez-nous un peu de contexte et préparons la suite
                ensemble.
              </p>
              <div className="contact-mini-card">
                <span className="mini-card-icon">
                  <MessageCircle size={18} />
                </span>
                <div>
                  <strong>Vous préférez WhatsApp ?</strong>
                  <p>
                    Le bouton ci-dessous vous amène au formulaire et prépare le
                    message après configuration du numéro.
                  </p>
                </div>
              </div>
              <div className="studio-contact-meta">
                <span>
                  <Clock size={16} /> Réponse sous 1 à 2 jours ouvrés
                </span>
                <span>Abidjan, Côte d’Ivoire</span>
              </div>
            </div>
            <div className="studio-form-card">
              <div className="studio-form-title">
                <span>ON COMMENCE ICI</span>
                <span>01 — 05</span>
              </div>
              <ContactForm theme="studio" />
            </div>
          </div>
        </section>
      </main>
      <Footer theme="studio" />
      <FloatingWhatsApp playful />
    </div>
  );
}
