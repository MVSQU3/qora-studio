import { useState } from 'react'
import '@fontsource/young-serif/latin-400.css'
import '@fontsource/karla/latin-400.css'
import '@fontsource/karla/latin-700.css'
import './table.css'
import { DirectionFrame } from './shared'
import { wa } from './contact'

const menu: Record<string, [string, string, string][]> = {
  Entrées: [['Salade d’avocat et crevettes', 'citron vert, piment doux', '3 500'], ['Soupe de poisson fumé', 'gingembre, basilic', '3 000'], ['Alloco braisé', 'oignons, sauce tomate', '2 000']],
  Plats: [['Poulet braisé', 'attiéké, tomates, oignons', '6 500'], ['Kedjenou de pintade', 'cuit à l’étouffée, légumes', '7 500'], ['Poisson capitaine grillé', 'foutou banane, sauce graine', '9 000'], ['Riz gras', 'viande de bœuf, légumes', '5 500']],
  Desserts: [['Banane flambée', 'rhum, noix de coco', '3 000'], ['Gâteau de manioc', 'vanille, lait de coco', '2 500'], ['Salade de fruits', 'fruits de saison', '2 500']],
}

export default function Table() {
  const [tab, setTab] = useState<keyof typeof menu>('Plats')
  const [n, setN] = useState(2)
  const [hour, setHour] = useState('20:00')
  const msg = `Bonjour, je réserve une table pour ${n} personne${n > 1 ? 's' : ''} à ${hour.replace(':', ' h ')}.`
  return (
    <div className="tb">
      <DirectionFrame slug="table" />
      <header className="tb-head">
        <a href="#top" className="tb-logo">Maquis Bonheur</a>
        <nav aria-label="Navigation"><a href="#carte">La carte</a><a href="#reserver">Réserver</a></nav>
      </header>

      <section className="tb-hero" id="top">
        <div className="tb-stamp" aria-hidden="true">
          <svg viewBox="0 0 200 200">
            <defs><path id="tb-c" d="M100 100 m-78 0 a78 78 0 1 1 156 0 a78 78 0 1 1 -156 0" /></defs>
            <circle cx="100" cy="100" r="96" /><circle cx="100" cy="100" r="62" />
            <text><textPath href="#tb-c" startOffset="0" textLength="480" lengthAdjust="spacing">PLAT DU JOUR • FAIT MAISON • PLAT DU JOUR • FAIT MAISON • </textPath></text>
          </svg>
          <b>Kedjenou<br />de pintade</b>
        </div>
        <h1>On<br />mange<br /><em>ici.</em></h1>
        <p>Cuisine ivoirienne servie jusqu’à tard. La carte change avec le marché : ce que vous lisez ici, c’est ce qui est en cuisine ce soir.</p>
        <a className="tb-btn" href="#reserver">Réserver une table</a>
      </section>

      <section className="tb-carte" id="carte" aria-labelledby="carte-t">
        <h2 id="carte-t">La carte</h2>
        <div className="tb-tabs" role="tablist">
          {Object.keys(menu).map((k) => <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>{k}</button>)}
        </div>
        <ul key={tab}>
          {menu[tab].map(([name, desc, price]) => (
            <li key={name}>
              <div className="tb-line"><span className="tb-name">{name}</span><i /><span className="tb-price">{price} F</span></div>
              <p>{desc}</p>
            </li>
          ))}
        </ul>
        <p className="tb-fine">Plats et prix d’exemple.</p>
      </section>

      <section className="tb-book" id="reserver" aria-labelledby="book-t">
        <h2 id="book-t">À quelle heure ?</h2>
        <div className="tb-form">
          <div className="tb-field"><span>Couverts</span>
            <div className="tb-step"><button type="button" aria-label="Moins de couverts" onClick={() => setN(Math.max(1, n - 1))}>−</button><output>{n}</output><button type="button" aria-label="Plus de couverts" onClick={() => setN(n + 1)}>+</button></div>
          </div>
          <div className="tb-field"><span>Heure</span>
            <div className="tb-hours" role="group" aria-label="Heure">
              {['12:30', '13:30', '19:30', '20:00', '21:00'].map((h) => <button key={h} aria-pressed={hour === h} className={hour === h ? 'on' : ''} onClick={() => setHour(h)}>{h.replace(':', ' h ')}</button>)}
            </div>
          </div>
          <a className="tb-btn tb-btn-l" href={wa(msg)} target="_blank" rel="noreferrer">Confirmer sur WhatsApp</a>
        </div>
      </section>
      <footer className="tb-foot">Qora Studio · direction de démonstration</footer>
    </div>
  )
}
