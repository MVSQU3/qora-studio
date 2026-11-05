import { useState } from 'react'
import '@fontsource/anton/latin-400.css'
import '@fontsource/space-grotesk/latin-400.css'
import '@fontsource/space-grotesk/latin-700.css'
import './scene.css'
import { DirectionFrame } from './shared'
import { wa } from './contact'

const nights = [
  { d: 'Ven 14', theme: 'Électrique', acts: [['22:30', 'Kora Machine'], ['21:15', 'Maya Dioula'], ['20:00', 'Lagune Sound System']] },
  { d: 'Sam 15', theme: 'Danse', acts: [['23:00', 'Soukous Cosmique'], ['21:30', 'Les Sœurs Niamey'], ['20:00', 'DJ Banco']] },
  { d: 'Dim 16', theme: 'Famille', acts: [['19:00', 'Orchestre du Plateau'], ['17:30', 'Contes en musique'], ['16:00', 'Atelier percussions']] },
]
const tickets = [
  { id: 'std', name: 'Entrée', price: 5000, note: 'Accès à la soirée' },
  { id: 'vip', name: 'Carré VIP', price: 25000, note: 'Place assise · 1 boisson' },
  { id: 'pass', name: 'Pass 3 nuits', price: 12000, note: 'Ven + Sam + Dim' },
]
const f = (n: number) => `${n.toLocaleString('fr-FR').replace(/\u202f/g, ' ')} F`
const ticker = 'NUIT D’ÉTÉ FESTIVAL • 14 → 16 AOÛT • ABIDJAN • BILLETS EN LIGNE • '

export default function Scene() {
  const [day, setDay] = useState(0)
  const [q, setQ] = useState<Record<string, number>>({})
  const n = nights[day]
  const total = tickets.reduce((s, t) => s + t.price * (q[t.id] ?? 0), 0)
  const set = (id: string, d: number) => setQ((o) => ({ ...o, [id]: Math.max(0, (o[id] ?? 0) + d) }))
  const lines = tickets.filter((t) => q[t.id])
  const msg = lines.length ? `Bonjour, je réserve : ${lines.map((t) => `${q[t.id]} × ${t.name}`).join(', ')}. Total ${f(total)}.` : 'Bonjour, je souhaite des informations sur la billetterie.'
  return (
    <div className="sc">
      <DirectionFrame slug="scene" />
      <div className="sc-marq" aria-hidden="true"><div>{ticker.repeat(6)}</div></div>

      <section className="sc-hero">
        <h1><span>Nuit</span><span className="o">d’été</span><span>Festival</span></h1>
        <div className="sc-side">
          <p>Trois soirs, neuf concerts, un seul lieu.</p>
          <a href="#billets" className="sc-btn">Prendre ma place</a>
        </div>
        <div className="sc-sticker" aria-hidden="true">3<small>nuits</small></div>
      </section>

      <section className="sc-lineup" aria-labelledby="lu-t">
        <h2 id="lu-t" className="sc-sr">Programme</h2>
        <div className="sc-days" role="tablist">
          {nights.map((x, i) => <button key={x.d} role="tab" aria-selected={day === i} className={day === i ? 'on' : ''} onClick={() => setDay(i)}>{x.d}<small>{x.theme}</small></button>)}
        </div>
        <ol key={day}>
          {n.acts.map(([h, a]) => <li key={a}><time>{h}</time><b>{a}</b></li>)}
        </ol>
        <p className="sc-fine">Artistes et horaires d’exemple.</p>
      </section>

      <section className="sc-tix" id="billets" aria-labelledby="tx-t">
        <h2 id="tx-t">Billets</h2>
        <div className="sc-tickets">
          {tickets.map((t) => (
            <article key={t.id} className="sc-ticket">
              <div><h3>{t.name}</h3><p>{t.note}</p><strong>{f(t.price)}</strong></div>
              <div className="sc-qty"><button aria-label={`Retirer ${t.name}`} onClick={() => set(t.id, -1)} disabled={!q[t.id]}>−</button><output>{q[t.id] ?? 0}</output><button aria-label={`Ajouter ${t.name}`} onClick={() => set(t.id, 1)}>+</button></div>
            </article>
          ))}
        </div>
        <div className="sc-total"><span>Total</span><b>{f(total)}</b><a className="sc-btn" href={wa(msg)} target="_blank" rel="noreferrer">{lines.length ? 'Réserver' : 'Poser une question'}</a></div>
      </section>
      <footer className="sc-foot">Qora Studio · direction de démonstration</footer>
    </div>
  )
}
