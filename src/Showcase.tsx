import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Layers3,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";
import { Logo } from "./components/Shared";

const options = [
  {
    number: "01",
    label: "CORPORATE PREMIUM",
    title: "Une présence qui inspire confiance.",
    description:
      "Un univers sobre, structuré et rassurant, pensé pour les entreprises qui veulent affirmer leur sérieux.",
    path: "/premium",
    className: "chooser-premium",
    tags: ["Bleu nuit & or", "Éditorial", "B2B"],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
    alt: "Espace de travail lumineux et contemporain",
  },
  {
    number: "02",
    label: "MODERNE & DYNAMIQUE",
    title: "Une marque qui se remarque.",
    description:
      "Un univers expressif, vivant et accessible, pensé pour convertir l’attention en prises de contact.",
    path: "/studio",
    className: "chooser-studio",
    tags: ["Vert & corail", "Asymétrique", "Commercial"],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
    alt: "Équipe créative en séance de travail",
  },
  {
    number: "03",
    label: "ARTISANAL & HUMAIN",
    title: "Une marque qui a du caractère.",
    description:
      "Un univers éditorial chaleureux et tactile, pensé pour les entreprises qui misent sur la proximité.",
    path: "/atelier",
    className: "chooser-atelier",
    tags: ["Papier & terracotta", "Éditorial", "Local"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    alt: "Table de restaurant chaleureuse",
  },
  {
    number: "04",
    label: "DIGITAL & CONTRASTÉ",
    title: "Une présence qui tranche.",
    description:
      "Un univers sombre, modulaire et très lisible, pensé pour les marques tournées vers le digital.",
    path: "/signal",
    className: "chooser-signal",
    tags: ["Noir & lime", "Modulaire", "Tech"],
    image:
      "https://images.unsplash.com/photo-1735744583287-07e58313f8cf?auto=format&fit=crop&w=1000&q=80",
    alt: "Tableau de bord analytics sur fond sombre",
  },
];

export default function Showcase() {
  return (
    <main className="showcase-page" id="top">
      <div className="showcase-topline">
        <Logo />
        <span>QUATRE PISTES CRÉATIVES · 2026</span>
      </div>
      <section className="showcase-hero">
        <div className="showcase-hero-copy">
          <div className="showcase-kicker">
            <Sparkles size={15} /> CONCEPTION DE SITE VITRINE
          </div>
          <h1>
            Quatre directions.
            <br />
            <em>Une première impression</em> maîtrisée.
          </h1>
          <p>
            Quatre propositions complètes pour une même entreprise.
            Comparez les univers, les rythmes et les parcours avant de choisir
            une direction.
          </p>
          <div className="showcase-proof">
            <span>
              <CheckCircle2 size={16} /> Responsive
            </span>
            <span>
              <CheckCircle2 size={16} /> React + Tailwind
            </span>
            <span>
              <CheckCircle2 size={16} /> Prise de contact prête à configurer
            </span>
          </div>
        </div>
        <div className="showcase-orbit" aria-hidden="true">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-core">
            <span>Q</span>
          </div>
          <div className="orbit-note note-one">Stratégie</div>
          <div className="orbit-note note-two">Design</div>
          <div className="orbit-note note-three">Digital</div>
        </div>
      </section>
      <section className="chooser-section" aria-labelledby="compare-title">
        <div className="chooser-section-head">
          <div>
            <span className="micro-label">CHOISISSEZ VOTRE UNIVERS</span>
            <h2 id="compare-title">
              Quatre façons de raconter la même expertise.
            </h2>
          </div>
          <span className="chooser-count">
            04 <span>MAQUETTES</span>
          </span>
        </div>
        <div className="chooser-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((option) => (
            <article
              className={`chooser-card ${option.className}`}
              key={option.number}
            >
              <div className="chooser-image-wrap">
                <img
                  src={option.image}
                  alt={option.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="chooser-number">{option.number}</span>
              </div>
              <div className="chooser-card-body">
                <span className="micro-label">{option.label}</span>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <div className="chooser-tags">
                  {option.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link className="chooser-link" to={option.path}>
                  Explorer cette maquette <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="showcase-method">
        <div className="method-intro">
          <span className="micro-label">PENSÉ POUR ÊTRE PRÉSENTÉ</span>
          <h2>
            Une base crédible.
            <br />
            <em>Pas juste un thème.</em>
          </h2>
          <p>
            Les sections, les parcours de conversion et les interactions sont
            déjà en place. Le contenu commercial, les coordonnées et les visuels
            sont à personnaliser avec le client.
          </p>
        </div>
        <div className="method-features">
          <div>
            <MonitorSmartphone />
            <strong>Adapté à tous les écrans</strong>
            <span>Mobile, tablette et ordinateur.</span>
          </div>
          <div>
            <Layers3 />
            <strong>Composants réutilisables</strong>
            <span>Une structure simple à faire évoluer.</span>
          </div>
          <div>
            <Compass />
            <strong>Parcours orienté conversion</strong>
            <span>Des appels à l’action visibles et cohérents.</span>
          </div>
        </div>
      </section>
      <footer className="showcase-footer">
        <Logo />
        <a href="#top">Retour en haut ↑</a>
      </footer>
    </main>
  );
}
