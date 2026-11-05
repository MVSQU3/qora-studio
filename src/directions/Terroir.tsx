import { useState } from 'react'
import '@fontsource/stardos-stencil/latin-400.css'
import '@fontsource/stardos-stencil/latin-700.css'
import '@fontsource/libre-franklin/latin-400.css'
import '@fontsource/libre-franklin/latin-600.css'
import './terroir.css'
import { DirectionFrame } from './shared'
import { wa, EMAIL } from './contact'

const products = [
  { id: 'cacao', name: 'Cacao', form: 'Fèves fermentées et séchées', code: 'CAC' },
  { id: 'cafe', name: 'Café', form: 'Vert, robusta, en sac', code: 'CAF' },
  { id: 'cajou', name: 'Anacarde', form: 'Noix brutes ou amandes', code: 'ANA' },
  { id: 'karite', name: 'Karité', form: 'Amandes ou beurre brut', code: 'KAR' },
]
const fields = ['Variété', 'Région de production', 'Campagne de récolte', 'Taux d’humidité', 'Certifications']

export default function Terroir() {
  const [id, setId] = useState('cacao')
  const [qty, setQty] = useState(1)
  const p = products.find((x) => x.id === id)!
  const msg = `Hello / Bonjour — sample request: ${p.name}, ${qty} kg. Please send specifications and price per tonne.`
  return (
    <div className="tr">
      <DirectionFrame slug="terroir" />
      <header className="tr-head">
        <a href="#top" className="tr-logo">Coopérative<br />Les Trois Rives</a>
        <span className="tr-lang" aria-hidden="true">FR · EN</span>
      </header>

      <section className="tr-hero" id="top">
        <div className="tr-sack" aria-label={`Sac de ${p.name}`}>
          <i className="tr-stitch" aria-hidden="true" />
          <p>CÔTE D’IVOIRE</p>
          <b key={p.id}>{p.name}</b>
          <p className="tr-line">{p.form}</p>
          <div className="tr-meta"><span>LOT N° {p.code}-0000</span><span>60 KG NET</span></div>
          <span className="tr-mark" aria-hidden="true">✺</span>
        </div>
        <div className="tr-copy">
          <h1>Ce qui est écrit<br />sur le sac,<br /><em>nous le prouvons.</em></h1>
          <p>Origine, lot, conditionnement : chaque produit a sa fiche. Choisissez une filière et demandez un échantillon.</p>
          <div className="tr-picks" role="group" aria-label="Produit">
            {products.map((x) => <button key={x.id} aria-pressed={id === x.id} className={id === x.id ? 'on' : ''} onClick={() => setId(x.id)}>{x.name}</button>)}
          </div>
        </div>
      </section>

      <section className="tr-sheet" aria-labelledby="fl-t">
        <h2 id="fl-t">Fiche lot — {p.name}</h2>
        <dl>
          {fields.map((f) => <div key={f}><dt>{f}</dt><dd>À renseigner</dd></div>)}
        </dl>
        <p className="tr-fine">Champs à compléter avec vos données réelles de traçabilité.</p>
      </section>

      <section className="tr-ask" aria-labelledby="as-t">
        <h2 id="as-t">Demander un échantillon</h2>
        <div className="tr-row">
          <span>Quantité</span>
          <div className="tr-qty"><button type="button" aria-label="Moins" onClick={() => setQty(Math.max(1, qty - 1))}>−</button><output>{qty} kg</output><button type="button" aria-label="Plus" onClick={() => setQty(qty + 1)}>+</button></div>
        </div>
        <div className="tr-actions">
          <a className="tr-btn" href={wa(msg)} target="_blank" rel="noreferrer">Envoyer par WhatsApp</a>
          <a className="tr-btn tr-btn-o" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Sample request – ' + p.name)}&body=${encodeURIComponent(msg)}`}>Envoyer par e-mail</a>
        </div>
      </section>
      <footer className="tr-foot">Qora Studio · direction de démonstration</footer>
    </div>
  )
}
