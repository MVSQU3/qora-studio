import { useEffect, useRef, useState } from 'react'
import '@fontsource/instrument-serif/latin-400.css'
import '@fontsource/instrument-serif/latin-400-italic.css'
import '@fontsource/manrope/latin-400.css'
import '@fontsource/manrope/latin-600.css'
import './savane.css'
import { DirectionFrame } from './shared'
import { wa } from './contact'

const stays = [
  { t: 'La nuit sous canopée', d: 'Cases sur pilotis, petit-déjeuner servi au lever du soleil.', hue: 'a' },
  { t: 'Le safari de l’aube', d: 'Départ avant le jour avec un guide, retour pour le déjeuner.', hue: 'b' },
  { t: 'La veillée au village', d: 'Repas partagé, contes et musique autour du feu.', hue: 'c' },
  { t: 'Le fleuve en pirogue', d: 'Une demi-journée sur l’eau, à la vitesse des oiseaux.', hue: 'd' },
]

export default function Savane() {
  const root = useRef<HTMLDivElement>(null)
  const [arrive, setArrive] = useState('')
  const [nights, setNights] = useState(2)
  const [guests, setGuests] = useState(2)
  const [stay, setStay] = useState(stays[0].t)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    let raf = 0
    const on = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const h = window.innerHeight
        root.current?.style.setProperty('--p', String(Math.min(1, window.scrollY / (h * 0.9))))
      })
    }
    window.addEventListener('scroll', on, { passive: true })
    return () => { window.removeEventListener('scroll', on); cancelAnimationFrame(raf) }
  }, [])

  const msg = `Bonjour, je prépare un séjour « ${stay} » : arrivée ${arrive || 'à définir'}, ${nights} nuit${nights > 1 ? 's' : ''}, ${guests} voyageur${guests > 1 ? 's' : ''}.`

  return (
    <div className="sv" ref={root}>
      <DirectionFrame slug="savane" />
      <section className="sv-hero">
        <div className="sv-sky" />
        <div className="sv-sun" aria-hidden="true" />
        <svg className="sv-land" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          <path className="sv-h1" d="M0 380 C 220 300 380 340 560 320 S 960 250 1200 310 S 1380 330 1440 300 V600 H0Z" />
          <path className="sv-h2" d="M0 450 C 260 390 460 440 700 410 S 1120 370 1440 430 V600 H0Z" />
          <g className="sv-tree">
            <path d="M1040 470 C1040 420 1044 380 1050 340 M1050 360 C1010 350 980 340 955 355 M1050 345 C1090 330 1125 335 1150 350 M1048 385 C1010 385 992 378 975 388 M1052 375 C1085 372 1105 380 1120 392" />
            <ellipse cx="955" cy="352" rx="62" ry="12" /><ellipse cx="1148" cy="347" rx="66" ry="13" /><ellipse cx="1050" cy="338" rx="70" ry="14" />
          </g>
          <path className="sv-h3" d="M0 520 C 300 480 520 540 800 505 S 1220 470 1440 520 V600 H0Z" />
        </svg>
        <nav className="sv-nav" aria-label="Navigation">
          <a className="sv-mark" href="#top">Kôrô <i>lodge</i></a>
          <span><a href="#sejours">Séjours</a><a href="#itineraire">Itinéraire</a></span>
        </nav>
        <div className="sv-title" id="top">
          <p>Éco-lodge · Côte d’Ivoire</p>
          <h1>Là où la savane<br /><em>s’endort.</em></h1>
          <a className="sv-cta" href="#itineraire">Composer mon séjour</a>
        </div>
      </section>

      <section className="sv-stays" id="sejours" aria-labelledby="stays-t">
        <h2 id="stays-t">Quatre façons de <em>ralentir</em></h2>
        <ul className="sv-rail">
          {stays.map((s) => (
            <li key={s.t} className={`sv-card sv-${s.hue}`}>
              <div className="sv-arch" aria-hidden="true"><span /></div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <button type="button" onClick={() => { setStay(s.t); document.getElementById('itineraire')?.scrollIntoView({ behavior: 'smooth' }) }}>Choisir ce séjour →</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="sv-trip" id="itineraire" aria-labelledby="trip-t">
        <div className="sv-ticket">
          <div className="sv-ticket-main">
            <p className="sv-stamp">Carnet d’itinéraire</p>
            <h2 id="trip-t">{stay}</h2>
            <label>Arrivée<input type="date" value={arrive} onChange={(e) => setArrive(e.target.value)} /></label>
            <div className="sv-row">
              <label>Nuits
                <span className="sv-step"><button type="button" aria-label="Moins de nuits" onClick={() => setNights(Math.max(1, nights - 1))}>−</button><output>{nights}</output><button type="button" aria-label="Plus de nuits" onClick={() => setNights(nights + 1)}>+</button></span>
              </label>
              <label>Voyageurs
                <span className="sv-step"><button type="button" aria-label="Moins de voyageurs" onClick={() => setGuests(Math.max(1, guests - 1))}>−</button><output>{guests}</output><button type="button" aria-label="Plus de voyageurs" onClick={() => setGuests(guests + 1)}>+</button></span>
              </label>
            </div>
          </div>
          <div className="sv-ticket-stub">
            <p>Demande sans engagement. L’équipe répond avec disponibilités et tarifs.</p>
            <a href={wa(msg)} target="_blank" rel="noreferrer">Envoyer ma demande</a>
          </div>
        </div>
      </section>
      <footer className="sv-foot">Qora Studio · direction de démonstration</footer>
    </div>
  )
}
