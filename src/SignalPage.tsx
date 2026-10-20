import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowRight,
  Plus,
  Minus,
  Menu,
  X,
  Zap,
  Code2,
  Palette,
  LineChart,
} from "lucide-react";
import { ContactForm, DemoLabel, FloatingWhatsApp } from "./components/Shared";

const services = [
  {
    n: "01",
    icon: Code2,
    title: "Sites et expériences web",
    text: "Des pages pensées pour être comprises vite, agréables sur mobile et simples à faire évoluer.",
    deliverable: "SITE VITRINE · LANDING PAGE · INTÉGRATION",
  },
  {
    n: "02",
    icon: Palette,
    title: "Identité et direction artistique",
    text: "Un système visuel reconnaissable, pas un assemblage de tendances : logo, typographie, couleur et règles d’usage.",
    deliverable: "IDENTITÉ · DESIGN SYSTEM · SUPPORTS",
  },
  {
    n: "03",
    icon: LineChart,
    title: "Clarté commerciale",
    text: "Des contenus et des parcours qui aident le visiteur à comprendre l’offre et à passer à l’action.",
    deliverable: "STRUCTURE · CONTENU · CONVERSION",
  },
];
const questions = [
  [
    "Je n’ai qu’une idée, pas de cahier des charges.",
    "C’est suffisant pour commencer. Le premier échange sert justement à transformer une idée en objectif, public et périmètre concret.",
  ],
  [
    "Travaillez-vous avec des entreprises en dehors d’Abidjan ?",
    "Oui, le cadrage et le suivi peuvent se faire à distance. Les modalités sont définies selon le projet.",
  ],
  [
    "Puis-je faire évoluer le site plus tard ?",
    "Oui. Nous pouvons prioriser une première version utile et prévoir les extensions qui ont du sens ensuite.",
  ],
];
const concepts = [
  {
    id: "01",
    label: "SAAS",
    name: "Naya Analytics",
    img: "https://images.unsplash.com/photo-1735744583287-07e58313f8cf?auto=format&fit=crop&w=1000&q=80",
    note: "Concept : tableau de bord et suivi des indicateurs clés.",
  },
  {
    id: "02",
    label: "PLATEFORME WEB",
    name: "Kalo Platform",
    img: "https://images.unsplash.com/photo-1680992046615-065f58bcb4d8?auto=format&fit=crop&w=1000&q=80",
    note: "Concept : application web sur mesure et espace client.",
  },
];

export default function SignalPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="signal-v2" id="top">
      <header className="sv2-header">
        <a href="#top" className="sv2-brand" aria-label="Qora Signal, accueil">
          <span className="sv2-brand-mark">
            Q<span>:</span>
          </span>
          <span>
            <b>QORA / SIGNAL</b>
            <small>DESIGN SYSTEMS FOR REAL LIFE</small>
          </span>
        </a>
        <span className="sv2-status">
          <i /> AVAILABLE FOR SELECT PROJECTS
        </span>
        <button
          className="sv2-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav
          className={`sv2-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Navigation principale"
        >
          <a href="#capabilities" onClick={closeMenu}>
            Expertises
          </a>
          <a href="#lab" onClick={closeMenu}>
            Lab
          </a>
          <a href="#questions" onClick={closeMenu}>
            Questions
          </a>
          <a href="#contact" onClick={closeMenu} className="sv2-nav-cta">
            Démarrer <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main className="sv2-layout">
        <aside className="sv2-poster" aria-label="Présentation de Qora Signal">
          <div className="sv2-poster-grid" aria-hidden="true" />
          <div className="sv2-poster-top">
            <span>QS—001</span>
            <span>ABJ / 2026</span>
          </div>
          <div className="sv2-poster-copy">
            <span className="sv2-kicker">
              <i /> DIGITAL STUDIO / INDEPENDENT
            </span>
            <h1>
              MAKE
              <br />
              <em>IT</em>
              <br />
              MATTER<span className="sv2-period">.</span>
            </h1>
            <p>
              On transforme la complexité en expériences digitales lisibles,
              singulières et utiles.
            </p>
            <a href="#contact" className="sv2-primary-link">
              Donner forme à une idée <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="sv2-poster-art" aria-hidden="true">
            <div className="sv2-art-square">
              <span>
                DESIGN
                <br />
                IS A<br />
                <b>DECISION</b>
              </span>
              <ArrowUpRight />
            </div>
            <div className="sv2-art-orb" />
            <div className="sv2-art-cross">+</div>
            <div className="sv2-art-caption">
              FIG. 01
              <br />
              LESS NOISE
              <br />
              MORE SIGNAL
            </div>
          </div>
          <div className="sv2-poster-bottom">
            <span>WEB / BRAND / STRATEGY</span>
            <span>01 — 04</span>
          </div>
          <div className="sv2-poster-rail">
            CLARIFY · DESIGN · BUILD · REPEAT
          </div>
        </aside>

        <div className="sv2-feed">
          <section className="sv2-opening">
            <div className="sv2-indexline">
              <span>00 / POSITION</span>
              <span>NOT ANOTHER TEMPLATE</span>
            </div>
            <p className="sv2-opening-statement">
              Un bon design n’est pas une décoration.{" "}
              <strong>C’est un outil de compréhension.</strong>
            </p>
            <div className="sv2-opening-bottom">
              <span>POUR LES ENTREPRISES QUI VEULENT AVANCER.</span>
              <a href="#capabilities" aria-label="Découvrir les expertises">
                <ArrowDownRight size={20} />
              </a>
            </div>
          </section>

          <section className="sv2-capabilities" id="capabilities">
            <div className="sv2-section-meta">
              <span>01 / CAPABILITIES</span>
              <span>WHAT WE DO</span>
            </div>
            <h2>
              Trois leviers.
              <br />
              <em>Un même objectif.</em>
            </h2>
            <div className="sv2-service-list">
              {services.map(({ n, icon: Icon, title, text, deliverable }) => (
                <article key={n} className="sv2-service">
                  <div className="sv2-service-line">
                    <span>{n}</span>
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                  <div className="sv2-service-copy">
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <small>{deliverable}</small>
                    <a href="#contact" aria-label={`Discuter de ${title}`}>
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="sv2-capabilities-foot">
              <span>NO MAGIC FORMULAS.</span>
              <span>
                JUST GOOD QUESTIONS AND BETTER EXECUTION. <Zap size={14} />
              </span>
            </div>
          </section>

          <section className="sv2-statement">
            <span className="sv2-section-meta">02 / THE PRINCIPLE</span>
            <div className="sv2-statement-big">
              Clair est
              <br />
              plus fort que
              <br />
              <em>compliqué.</em>
            </div>
            <p>
              Avant d’ajouter une animation ou une section, on se demande ce que
              la personne doit comprendre, ressentir ou faire. Le reste suit.
            </p>
            <a href="#questions">
              Nos réponses aux questions courantes <ArrowRight size={16} />
            </a>
            <div className="sv2-statement-stamp">
              KEEP
              <br />
              IT
              <br />
              <b>USEFUL</b>
            </div>
          </section>

          <section className="sv2-lab" id="lab">
            <div className="sv2-section-meta">
              <span>03 / THE LAB</span>
              <span>SPECULATIVE WORK</span>
            </div>
            <div className="sv2-lab-heading">
              <h2>
                Idées en
                <br />
                <em>exploration.</em>
              </h2>
              <div>
                <DemoLabel>PISTES CRÉATIVES</DemoLabel>
                <p>
                  Ces images illustrent des pistes créatives et ne représentent
                  pas des projets clients livrés.
                </p>
              </div>
            </div>
            <div className="sv2-concept-list">
              {concepts.map((project, i) => (
                <article
                  key={project.id}
                  className={`sv2-concept sv2-concept-${i + 1}`}
                >
                  <div className="sv2-concept-image">
                    <img
                      src={project.img}
                      alt={`Visuel d’inspiration pour le concept ${project.name}`}
                      loading="lazy"
                      decoding="async"
                    />
                    <span>
                      {project.id} / {project.label}
                    </span>
                    <div className="sv2-concept-mark">
                      Q<span>:</span>
                    </div>
                  </div>
                  <div className="sv2-concept-info">
                    <h3>{project.name}</h3>
                    <p>{project.note}</p>
                    <a
                      href="#contact"
                      aria-label={`Discuter d'un concept comme ${project.name}`}
                    >
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="sv2-faq" id="questions">
            <div className="sv2-section-meta">
              <span>04 / FAQ</span>
              <span>NO FLUFF</span>
            </div>
            <h2>
              Questions
              <br />
              <em>without the jargon.</em>
            </h2>
            <div className="sv2-faq-list">
              {questions.map(([question, answer], i) => (
                <article
                  key={question}
                  className={`sv2-faq-item ${activeQuestion === i ? "is-active" : ""}`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={activeQuestion === i}
                      onClick={() =>
                        setActiveQuestion(activeQuestion === i ? -1 : i)
                      }
                    >
                      <span>
                        <small>0{i + 1}</small>
                        {question}
                      </span>
                      {activeQuestion === i ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </button>
                  </h3>
                  {activeQuestion === i && <p>{answer}</p>}
                </article>
              ))}
            </div>
          </section>

          <section className="sv2-contact" id="contact">
            <div className="sv2-section-meta">
              <span>05 / YOUR MOVE</span>
              <span>START A CONVERSATION</span>
            </div>
            <h2>
              Have a good
              <br />
              <em>problem?</em>
            </h2>
            <p>
              Un besoin, une idée ou un site qui ne fait plus le travail ?
              Posons le problème correctement avant de choisir la solution.
            </p>
            <div className="sv2-form-frame">
              <div className="sv2-form-label">
                <span>PROJECT BRIEF / CI</span>
                <span>RESPONSE BY A HUMAN</span>
              </div>
              <ContactForm theme="studio" />
            </div>
          </section>

          <footer className="sv2-footer">
            <a href="#top" className="sv2-brand">
              <span className="sv2-brand-mark">
                Q<span>:</span>
              </span>
              <span>
                <b>QORA / SIGNAL</b>
                <small>DESIGN SYSTEMS FOR REAL LIFE</small>
              </span>
            </a>
            <p>Less noise. More signal.</p>
            <a href="#top">BACK TO TOP ↑</a>
            <small>
              Conceptual identity · {new Date().getFullYear()} · Qora Signal
            </small>
          </footer>
        </div>
      </main>
      <FloatingWhatsApp playful />
    </div>
  );
}
