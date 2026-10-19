import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Check,
  ChevronRight,
  Clock,
  Compass,
  Globe,
  Handshake,
  Layers3,
  LockKeyhole,
  PenTool,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import {
  ContactForm,
  Eyebrow,
  Footer,
  Header,
  SectionHeading,
  FloatingWhatsApp,
} from "./components/Shared";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Sites web & vitrines",
    text: "Une présence claire, responsive et pensée pour transformer les visites en prises de contact.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Identité & design",
    text: "Une image cohérente, des supports bien construits et une marque facile à reconnaître.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Communication digitale",
    text: "Des contenus utiles et une présence en ligne alignée sur vos objectifs commerciaux.",
  },
  {
    icon: Briefcase,
    number: "04",
    title: "Conseil & accompagnement",
    text: "Un regard extérieur pour clarifier vos priorités et avancer avec méthode.",
  },
];
const values = [
  {
    icon: Compass,
    title: "Une vision claire",
    text: "Nous partons de vos objectifs avant de parler outils ou tendances.",
  },
  {
    icon: ShieldCheck,
    title: "Un cadre fiable",
    text: "Des étapes lisibles, des échanges suivis et des attentes définies ensemble.",
  },
  {
    icon: BadgeCheck,
    title: "Le soin du détail",
    text: "Un résultat soigné sur le fond comme sur la forme, jusque sur mobile.",
  },
];
const steps = [
  {
    n: "01",
    title: "Comprendre",
    text: "Nous cadrons vos besoins, votre cible et vos priorités.",
  },
  {
    n: "02",
    title: "Concevoir",
    text: "Nous proposons une direction, puis validons les éléments clés.",
  },
  {
    n: "03",
    title: "Réaliser",
    text: "Nous construisons, testons et ajustons avec vous.",
  },
  {
    n: "04",
    title: "Faire évoluer",
    text: "Nous préparons la suite pour que votre présence reste utile.",
  },
];

export default function PremiumPage() {
  return (
    <div className="premium-site" id="top">
      <div className="premium-topbar">
        <span>Conseil · Digital · Création</span>
        <span>
          Abidjan, Côte d’Ivoire <span className="topbar-divider">/</span>{" "}
          Disponible à distance
        </span>
      </div>
      <Header theme="premium" />
      <main>
        <section className="premium-hero">
          <div className="premium-hero-grid">
            <div className="premium-hero-copy">
              <Eyebrow light>VOTRE PARTENAIRE DE CONFIANCE</Eyebrow>
              <h1>
                Des idées claires.
                <br />
                <em>Des solutions</em>
                <br />
                qui avancent.
              </h1>
              <p>
                Nous aidons les entreprises à structurer leur présence digitale
                et à présenter leur expertise avec clarté, cohérence et
                exigence.
              </p>
              <div className="premium-hero-actions">
                <a className="button button-gold" href="#contact">
                  Parlons de votre projet <ArrowRight size={17} />
                </a>
                <a className="text-link-light" href="#services">
                  Découvrir nos services <ArrowDown size={16} />
                </a>
              </div>
              <div className="premium-hero-trust">
                <div className="trust-seal">
                  <Check size={20} />
                </div>
                <div>
                  <strong>Un accompagnement de bout en bout</strong>
                  <span>Du cadrage à la mise en ligne.</span>
                </div>
              </div>
            </div>
            <div className="premium-hero-visual">
              <div className="premium-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
                  alt="Espace professionnel contemporain baigné de lumière naturelle"
                  fetchPriority="high"
                />
                <div className="image-caption">
                  <span>01 / 04</span>
                  <span>Le sens du détail, dès le départ.</span>
                </div>
              </div>
              <div className="hero-stamp">
                <span>VOTRE</span>
                <strong>CAP</strong>
                <span>DIGITAL</span>
                <div className="stamp-line" />
              </div>
              <div className="hero-float-card">
                <div className="float-card-icon">
                  <Layers3 size={19} />
                </div>
                <div>
                  <small>NOTRE APPROCHE</small>
                  <strong>Stratégie + Design</strong>
                  <span>Une direction, un objectif.</span>
                </div>
                <ChevronRight size={18} />
              </div>
            </div>
          </div>
          <div className="premium-hero-bottom">
            <span>01 — UNE APPROCHE STRUCTURÉE</span>
            <a href="#apropos">
              Faire défiler <ArrowDown size={14} />
            </a>
            <span>DES PROJETS PENSÉS POUR DURER</span>
          </div>
        </section>

        <section
          className="premium-client-strip"
          aria-label="Types de clients accompagnés"
        >
          <span>Nous accompagnons</span>
          <strong>PME & TPE</strong>
          <i />
          <strong>Indépendants</strong>
          <i />
          <strong>Commerces</strong>
          <i />
          <strong>Organisations</strong>
        </section>

        <section className="premium-about section-pad" id="apropos">
          <div className="about-mark">
            <span>QS</span>
            <div className="about-mark-lines" />
          </div>
          <div className="about-copy">
            <Eyebrow>QUI SOMMES-NOUS ?</Eyebrow>
            <h2>
              La bonne solution commence par <em>la bonne question.</em>
            </h2>
            <p className="lead">
              Une entreprise mérite mieux qu’un site qui fait simplement joli.
              Elle a besoin d’une présence qui explique, rassure et facilite le
              prochain pas.
            </p>
            <p>
              Notre démarche réunit stratégie, design et exécution. Nous prenons
              le temps de comprendre votre activité pour construire une réponse
              adaptée à votre réalité, à votre équipe et à vos clients.
            </p>
            <a className="text-link-dark" href="#methode">
              Découvrir notre méthode <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="premium-services section-pad" id="services">
          <div className="section-row">
            <SectionHeading
              kicker="CE QUE NOUS FAISONS"
              title={
                <>
                  Des services utiles.
                  <br />
                  <em>Un objectif commun.</em>
                </>
              }
              description="Les bons outils, la bonne méthode et un accompagnement adapté au stade de votre activité."
            />
            <span className="section-side-note">
              NOS EXPERTISES <span>01 — 04</span>
            </span>
          </div>
          <div className="premium-service-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(({ icon: Icon, number, title, text }) => (
              <article className="premium-service-card" key={number}>
                <div className="service-card-top">
                  <span>{number}</span>
                  <Icon size={23} strokeWidth={1.5} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact" aria-label={`Discuter du service ${title}`}>
                  Discuter de ce besoin <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="premium-quote-band">
          <div className="quote-band-content">
            <span className="quote-glyph">“</span>
            <p>
              Votre présence digitale doit être à la hauteur du travail que vous
              faites déjà.
            </p>
            <span>UNE CONVICTION QORA STUDIO</span>
          </div>
          <div className="quote-band-art" aria-hidden="true">
            <div className="gold-orbit orbit-a" />
            <div className="gold-orbit orbit-b" />
            <div className="gold-orbit orbit-c" />
            <span>Q</span>
          </div>
        </section>

        <section className="premium-values section-pad">
          <div className="values-intro">
            <Eyebrow>POURQUOI QORA STUDIO</Eyebrow>
            <h2>
              Le sérieux dans la méthode.
              <br />
              <em>La souplesse dans l’échange.</em>
            </h2>
            <p>
              Un bon partenaire doit être capable d’expliquer ses choix, de
              tenir le cap et de s’adapter quand le projet évolue.
            </p>
            <a href="#contact" className="text-link-dark">
              Échanger avec notre équipe <ArrowRight size={16} />
            </a>
          </div>
          <div className="values-list">
            {values.map(({ icon: Icon, title, text }, i) => (
              <div className="value-item" key={title}>
                <div className="value-icon">
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span>0{i + 1}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="premium-numbers">
          <div className="numbers-heading">
            <Eyebrow light>NOTRE ENGAGEMENT</Eyebrow>
            <h2>
              La confiance se construit
              <br />
              <em>à chaque étape.</em>
            </h2>
          </div>
          <div className="numbers-grid">
            <div>
              <strong>
                100<span>%</span>
              </strong>
              <span>Écoute & transparence</span>
            </div>
            <div>
              <strong>01</strong>
              <span>Interlocuteur dédié</span>
            </div>
            <div>
              <strong>04</strong>
              <span>Étapes de travail claires</span>
            </div>
          </div>
        </section>

        <section className="premium-method section-pad" id="methode">
          <SectionHeading
            kicker="NOTRE MÉTHODE"
            title={
              <>
                Un processus simple.
                <br />
                <em>Aucune étape dans le flou.</em>
              </>
            }
            description="De la première discussion au suivi, chaque phase a un rôle précis."
          />
          <div className="method-line">
            {steps.map((step) => (
              <article key={step.n} className="method-step">
                <span className="method-step-number">{step.n}</span>
                <div className="method-node" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="premium-contact section-pad" id="contact">
          <div className="contact-heading">
            <Eyebrow light>PARLONS DE VOTRE PROJET</Eyebrow>
            <h2>
              Une idée à concrétiser ?<br />
              <em>Commençons par en parler.</em>
            </h2>
            <p>
              Présentez-nous votre besoin. Nous reviendrons vers vous pour
              clarifier les objectifs et définir la suite.
            </p>
            <div className="contact-detail">
              <span>
                <Clock size={17} /> Réponse sous 1 à 2 jours ouvrés
              </span>
              <span>
                <Globe size={17} /> Abidjan, Côte d’Ivoire
              </span>
              <span>
                <LockKeyhole size={17} /> Échange confidentiel
              </span>
            </div>
            <div className="contact-side-note">
              <Handshake size={28} />
              <span>Un bon projet commence par un échange honnête.</span>
            </div>
          </div>
          <div className="contact-form-panel">
            <div className="form-panel-head">
              <span>01 / NOUVEAU PROJET</span>
              <span>FORMULAIRE DE CONTACT</span>
            </div>
            <ContactForm theme="premium" />
          </div>
        </section>
      </main>
      <Footer theme="premium" />
      <FloatingWhatsApp />
    </div>
  );
}
