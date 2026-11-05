import type { CSSProperties } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { ArrowRight, Check, Mail, MessageCircle } from 'lucide-react'
import Seo from './components/Seo'
import { concepts } from './concepts'


const WHATSAPP = '2250502836119'
const EMAIL = 'informaland.26@gmail.com'

export default function ConceptPage() {
  const { slug } = useParams()
  const c = concepts.find((x) => x.slug === slug)
  if (!c) return <Navigate to="/directions" replace />

  const p = c.palette
  const style = {
    '--cx-bg': p.bg, '--cx-surface': p.surface, '--cx-ink': p.ink, '--cx-muted': p.muted,
    '--cx-accent': p.accent, '--cx-accent2': p.accent2, '--cx-on': p.onAccent,
  } as CSSProperties
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Bonjour Qora Studio, la direction « ${c.name} » m’intéresse pour mon activité (${c.sector}).`)}`
  const Icon0 = c.services[0].icon

  return (
    <div className="cx" data-font={c.font} data-layout={c.layout} style={style}>
      <Seo
        noindex
        title={`Direction ${c.name} — ${c.sector} — Qora Studio`}
        description={`${c.tagline} ${c.description}`}
      />
      <header className="cx-header">
        <Link to="/" className="cx-brand" aria-label="Qora Studio — accueil">
          <span className="cx-mark">Q</span>
          <span>QORA <small>× {c.name}</small></span>
        </Link>
        <nav aria-label="Navigation">
          <a href="#services">Services</a>
          <a href="#methode">Méthode</a>
          <a href="#faq">FAQ</a>
          <a className="cx-btn cx-btn-sm" href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="cx-hero">
          <div className="cx-hero-copy">
            <span className="cx-eyebrow">{c.hero.eyebrow}</span>
            <h1>{c.hero.title} <em>{c.hero.em}</em></h1>
            <p>{c.hero.text}</p>
            <div className="cx-actions">
              <a className="cx-btn" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={18} /> {c.hero.cta}</a>
              <a className="cx-btn cx-btn-ghost" href="#services">Voir les services <ArrowRight size={18} /></a>
            </div>
          </div>
          <div className="cx-art" aria-hidden="true">
            <div className="cx-art-card">
              <Icon0 size={56} strokeWidth={1.4} />
              <strong>{c.sector}</strong>
              <span>{c.label}</span>
            </div>
            <i className="cx-blob cx-blob-1" />
            <i className="cx-blob cx-blob-2" />
          </div>
        </section>

        <section id="services" className="cx-section">
          <span className="cx-eyebrow">Ce que votre site fera pour vous</span>
          <h2>Trois priorités, <em>zéro superflu.</em></h2>
          <div className="cx-grid">
            {c.services.map((s) => (
              <article key={s.title} className="cx-card">
                <s.icon size={28} strokeWidth={1.6} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="methode" className="cx-section cx-alt">
          <span className="cx-eyebrow">Notre méthode</span>
          <h2>De l’idée à la mise en ligne, <em>en quatre temps.</em></h2>
          <ol className="cx-steps">
            {c.steps.map((s, i) => (
              <li key={s.title}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="faq" className="cx-section">
          <span className="cx-eyebrow">Questions fréquentes</span>
          <h2>Vous vous demandez <em>peut-être…</em></h2>
          <div className="cx-faq">
            {c.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="cx-cta">
          <h2>{c.closing}</h2>
          <p>Direction de démonstration : textes et visuels sont à personnaliser avec vous.</p>
          <ul>
            <li><Check size={16} /> Réponse sous 24 h ouvrées</li>
            <li><Check size={16} /> Devis gratuit et sans engagement</li>
          </ul>
          <div className="cx-actions">
            <a className="cx-btn cx-btn-inv" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
            <a className="cx-btn cx-btn-ghost cx-btn-inv-ghost" href={`mailto:${EMAIL}`}><Mail size={18} /> {EMAIL}</a>
          </div>
        </section>
      </main>

      <footer className="cx-footer">
        <span>© Qora Studio by IMFORMAland · Abidjan, Côte d’Ivoire</span>
        <Link to="/directions">← Toutes les directions</Link>
      </footer>
    </div>
  )
}
