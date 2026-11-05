import { useState } from 'react'
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-500.css'
import '@fontsource/ibm-plex-sans/latin-600.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-500.css'
import './clinique.css'
import { DirectionFrame } from './shared'
import { wa } from './contact'

const days = [
  { k: 'Lun', d: '12', slots: ['08:00', '08:30', '10:00', '15:30'] },
  { k: 'Mar', d: '13', slots: ['09:00', '11:30', '14:00', '14:30', '16:00'] },
  { k: 'Mer', d: '14', slots: ['08:30', '10:30'] },
  { k: 'Jeu', d: '15', slots: ['08:00', '09:30', '11:00', '15:00', '17:00'] },
  { k: 'Ven', d: '16', slots: ['08:30', '13:30', '14:30'] },
]
const care = [
  ['Médecine générale', 'Consultation, suivi, certificats'],
  ['Pédiatrie', 'Nourrissons, enfants, vaccins'],
  ['Gynécologie', 'Suivi de grossesse, contraception'],
  ['Dentisterie', 'Soins, détartrage, urgences dentaires'],
  ['Analyses & imagerie', 'Prélèvements, échographie'],
]

export default function Clinique() {
  const [day, setDay] = useState(0)
  const [slot, setSlot] = useState<string | null>(null)
  const [motif, setMotif] = useState('Consultation')
  const d = days[day]
  const msg = slot ? `Bonjour, je souhaite un rendez-vous (${motif}) le ${d.k} ${d.d}, à ${slot}.` : 'Bonjour, je souhaite prendre rendez-vous.'

  return (
    <div className="cl">
      <DirectionFrame slug="clinique" />
      <aside className="cl-aside" aria-label="Informations pratiques">
        <a href="#top" className="cl-logo"><span aria-hidden="true">+</span> Clinique<br />des Lagunes</a>
        <dl>
          <dt>Ouvert</dt><dd>Lun – Sam · 7 h 30 – 18 h</dd>
          <dt>Urgences</dt><dd className="cl-urg">24 h / 24 · 7 j / 7</dd>
          <dt>Adresse</dt><dd>Abidjan, Côte d’Ivoire<br /><span>adresse à renseigner</span></dd>
          <dt>Téléphone</dt><dd>+225 00 00 00 00 00</dd>
        </dl>
        <a className="cl-sos" href={wa('Bonjour, j’ai besoin d’aide en urgence.')} target="_blank" rel="noreferrer">Urgence : écrire maintenant</a>
      </aside>

      <main className="cl-main" id="top">
        <section className="cl-hero">
          <p className="cl-code">ACCUEIL / PATIENTS</p>
          <h1>Se soigner,<br />sans se perdre<br />en route.</h1>
          <p className="cl-lead">Horaires, équipe, soins pris en charge et rendez-vous : tout ce qu’un patient cherche, en premier, sans chercher.</p>
          <svg className="cl-ecg" viewBox="0 0 800 90" aria-hidden="true" preserveAspectRatio="none">
            <path d="M0 50 H180 l12 -8 l10 8 H260 l10 -4 l12 50 l16 -92 l14 70 l8 -24 H430 l12 -10 l12 10 H800" />
          </svg>
        </section>

        <section className="cl-book" aria-labelledby="book-t">
          <div className="cl-sec-head"><span>01</span><h2 id="book-t">Choisir un créneau</h2></div>
          <div className="cl-days" role="tablist" aria-label="Jours disponibles">
            {days.map((x, i) => (
              <button key={x.k} role="tab" aria-selected={day === i} className={day === i ? 'on' : ''} onClick={() => { setDay(i); setSlot(null) }}>
                <small>{x.k}</small><b>{x.d}</b>
              </button>
            ))}
          </div>
          <div className="cl-slots" role="group" aria-label={`Créneaux du ${d.k} ${d.d}`}>
            {d.slots.map((s) => (
              <button key={s} aria-pressed={slot === s} className={slot === s ? 'on' : ''} onClick={() => setSlot(s)}>{s}</button>
            ))}
          </div>
          <div className="cl-motif">
            <label htmlFor="motif">Motif</label>
            <select id="motif" value={motif} onChange={(e) => setMotif(e.target.value)}>
              {['Consultation', 'Suivi', 'Vaccination', 'Analyses'].map((m) => <option key={m}>{m}</option>)}
            </select>
          </div>
          <div className="cl-summary" aria-live="polite">
            {slot ? <p>Créneau retenu : <strong>{d.k} {d.d} à {slot}</strong> · {motif}</p> : <p>Aucun créneau choisi.</p>}
            <a className={slot ? '' : 'off'} aria-disabled={!slot} href={slot ? wa(msg) : undefined} target="_blank" rel="noreferrer">Demander ce créneau</a>
          </div>
          <p className="cl-note">Créneaux d’exemple. Ils seront reliés à votre agenda réel.</p>
        </section>

        <section className="cl-care" aria-labelledby="care-t">
          <div className="cl-sec-head"><span>02</span><h2 id="care-t">Nos soins</h2></div>
          <ul>
            {care.map(([t, s]) => (
              <li key={t}><a href="#top"><b>{t}</b><span>{s}</span><i aria-hidden="true">→</i></a></li>
            ))}
          </ul>
        </section>
        <footer className="cl-foot">Qora Studio · direction de démonstration</footer>
      </main>
    </div>
  )
}
