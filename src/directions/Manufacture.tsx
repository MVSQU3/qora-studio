import { useState } from 'react'
import '@fontsource/barlow-condensed/latin-600.css'
import '@fontsource/barlow-condensed/latin-800.css'
import '@fontsource/jetbrains-mono/latin-400.css'
import '@fontsource/jetbrains-mono/latin-700.css'
import './manufacture.css'
import { DirectionFrame } from './shared'
import { wa } from './contact'

const works = [
  { ref: 'CH-001', name: 'Entrepôt logistique', type: 'Charpente métallique', surf: '2 400 m²', dur: '7 mois' },
  { ref: 'CH-002', name: 'Immeuble R+4', type: 'Gros œuvre', surf: '1 150 m²', dur: '11 mois' },
  { ref: 'CH-003', name: 'Ligne de conditionnement', type: 'Maintenance industrielle', surf: '—', dur: 'Contrat annuel' },
]
const kinds = ['Gros œuvre', 'Charpente métallique', 'Terrassement', 'Maintenance', 'Électricité industrielle']

export default function Manufacture() {
  const [sel, setSel] = useState<string[]>(['Gros œuvre'])
  const [surface, setSurface] = useState('')
  const toggle = (k: string) => setSel((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k]))
  const msg = `Demande de devis — ${sel.join(', ') || 'à préciser'}${surface ? ` — surface : ${surface} m²` : ''}.`
  return (
    <div className="mf">
      <DirectionFrame slug="manufacture" />
      <div className="mf-hazard" aria-hidden="true" />
      <header className="mf-head">
        <a href="#top" className="mf-logo">BÂTIR<i>&amp;</i>FORGER</a>
        <nav aria-label="Navigation"><a href="#chantiers">Chantiers</a><a href="#devis">Devis</a></nav>
      </header>

      <section className="mf-hero" id="top">
        <div className="mf-copy">
          <p className="mf-mono">PLAN N°01 — ÉLÉVATION FACE NORD</p>
          <h1>Du plan<br />au <em>béton.</em></h1>
          <p className="mf-lead">Gros œuvre, charpente et maintenance industrielle. Chaque chantier est documenté, daté et chiffré avant d’être lancé.</p>
          <a className="mf-btn" href="#devis">Demander un devis</a>
        </div>
        <svg className="mf-draw" viewBox="0 0 520 420" role="img" aria-label="Plan d’une structure métallique avec cotes">
          <g className="mf-grid">{Array.from({ length: 14 }, (_, i) => <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="420" />)}{Array.from({ length: 11 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 40} x2="520" y2={i * 40} />)}</g>
          <g className="mf-line">
            <path d="M80 340 H440 V160 L260 60 L80 160 Z" />
            <path d="M80 160 H440 M160 340 V160 M260 340 V60 M360 340 V160 M80 340 L260 160 L440 340 M80 160 L160 340 M440 160 L360 340" />
            <rect x="225" y="270" width="70" height="70" />
          </g>
          <g className="mf-dim">
            <path d="M80 380 H440 M80 372 V388 M440 372 V388" /><text x="260" y="374">36,00 m</text>
            <path d="M480 340 V60 M472 340 H488 M472 60 H488" /><text x="498" y="210" transform="rotate(90 498 210)">18,50 m</text>
          </g>
        </svg>
      </section>

      <section className="mf-sheets" id="chantiers" aria-labelledby="ch-t">
        <h2 id="ch-t">Fiches chantier <small>(exemples)</small></h2>
        <div className="mf-table" role="table" aria-label="Chantiers de référence">
          <div role="row" className="mf-th"><span role="columnheader">Réf.</span><span role="columnheader">Ouvrage</span><span role="columnheader">Nature</span><span role="columnheader">Surface</span><span role="columnheader">Durée</span></div>
          {works.map((w) => (
            <div role="row" key={w.ref}><span role="cell" className="mf-ref">{w.ref}</span><b role="cell">{w.name}</b><span role="cell">{w.type}</span><span role="cell">{w.surf}</span><span role="cell">{w.dur}</span></div>
          ))}
        </div>
      </section>

      <section className="mf-quote" id="devis" aria-labelledby="dv-t">
        <h2 id="dv-t">Bon de demande de devis</h2>
        <fieldset><legend>Nature des travaux</legend>
          <div className="mf-chips">{kinds.map((k) => <button type="button" key={k} aria-pressed={sel.includes(k)} className={sel.includes(k) ? 'on' : ''} onClick={() => toggle(k)}>{k}</button>)}</div>
        </fieldset>
        <label className="mf-field">Surface estimée (m²)<input inputMode="numeric" value={surface} onChange={(e) => setSurface(e.target.value.replace(/[^0-9]/g, ''))} placeholder="ex. 1200" /></label>
        <a className="mf-btn" href={wa(msg)} target="_blank" rel="noreferrer">Envoyer la demande</a>
      </section>
      <div className="mf-hazard" aria-hidden="true" />
      <footer className="mf-foot">Qora Studio · direction de démonstration</footer>
    </div>
  )
}
