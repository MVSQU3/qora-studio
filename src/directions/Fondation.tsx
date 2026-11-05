import { useState } from 'react'
import '@fontsource/newsreader/latin-400.css'
import '@fontsource/newsreader/latin-400-italic.css'
import '@fontsource/newsreader/latin-600.css'
import '@fontsource/figtree/latin-400.css'
import '@fontsource/figtree/latin-700.css'
import './fondation.css'
import { DirectionFrame } from './shared'
import { wa } from './contact'

const programmes = [
  ['Eau', 'Des puits et des points d’eau entretenus par les villageois eux-mêmes.', 'Puits · Formation · Suivi'],
  ['École', 'Kits scolaires, cantines et soutien aux enseignants des zones rurales.', 'Kits · Cantine · Soutien'],
  ['Santé', 'Consultations mobiles et campagnes de prévention dans les villages isolés.', 'Mobile · Prévention'],
]
const journal = [
  ['Lundi', 'Départ à 5 h. La piste est coupée après la pluie, on continue à pied sur les deux derniers kilomètres.'],
  ['Mardi', 'Réunion avec le comité du village. Ce sont eux qui choisissent l’emplacement du puits.'],
  ['Jeudi', 'Premier seau d’eau tiré. Les enfants arrivent avant même que les ouvriers aient fini.'],
]
const amounts = [5000, 10000, 25000, 50000]

export default function Fondation() {
  const [a, setA] = useState(10000)
  const [freq, setFreq] = useState<'ponctuel' | 'mensuel'>('mensuel')
  const f = (n: number) => `${n.toLocaleString('fr-FR').replace(/\u202f/g, ' ')} F`
  return (
    <div className="fd">
      <DirectionFrame slug="fondation" />
      <header className="fd-head">
        <a href="#top" className="fd-logo">Fondation Sahel<span>Côte d’Ivoire</span></a>
        <nav aria-label="Navigation"><a href="#programmes">Programmes</a><a href="#terrain">Terrain</a><a className="fd-don" href="#don">Faire un don</a></nav>
      </header>

      <section className="fd-hero" id="top">
        <p className="fd-kicker">Reportage · Printemps</p>
        <h1>Le puits,<br />puis <em>l’école</em>,<br />puis le reste.</h1>
        <div className="fd-cols">
          <p className="fd-drop">Notre travail commence par un geste simple : écouter ce qu’un village décide d’abord. Ensuite seulement, nous construisons. Cette page raconte ce que nous faisons, lieu par lieu, sans rien enjoliver.</p>
          <p className="fd-aside">Texte d’exemple.<br />Les histoires réelles de votre association remplaceront celles-ci.</p>
        </div>
      </section>

      <section className="fd-prog" id="programmes" aria-labelledby="prog-t">
        <h2 id="prog-t" className="fd-sr">Programmes</h2>
        {programmes.map(([t, d, tags]) => (
          <article key={t}>
            <b aria-hidden="true">{t[0]}</b>
            <div><h3>{t}</h3><p>{d}</p><small>{tags}</small></div>
          </article>
        ))}
      </section>

      <section className="fd-journal" id="terrain" aria-labelledby="j-t">
        <h2 id="j-t">Journal de terrain</h2>
        <ol>
          {journal.map(([d, t]) => <li key={d}><time>{d}</time><p>{t}</p></li>)}
        </ol>
      </section>

      <section className="fd-give" id="don" aria-labelledby="g-t">
        <h2 id="g-t">Donner, simplement.</h2>
        <div className="fd-freq" role="group" aria-label="Fréquence">
          {(['mensuel', 'ponctuel'] as const).map((x) => <button key={x} aria-pressed={freq === x} className={freq === x ? 'on' : ''} onClick={() => setFreq(x)}>{x}</button>)}
        </div>
        <div className="fd-amounts" role="group" aria-label="Montant">
          {amounts.map((x) => <button key={x} aria-pressed={a === x} className={a === x ? 'on' : ''} onClick={() => setA(x)}>{f(x)}</button>)}
        </div>
        <p className="fd-sum">Vous donnez <strong>{f(a)}</strong>{freq === 'mensuel' ? ' par mois' : ' une fois'}.</p>
        <a className="fd-go" href={wa(`Bonjour, je souhaite faire un don ${freq} de ${f(a)}.`)} target="_blank" rel="noreferrer">Continuer vers le don</a>
        <small>Les moyens de paiement seront reliés à votre solution de paiement mobile.</small>
      </section>
      <footer className="fd-foot">Qora Studio · direction de démonstration</footer>
    </div>
  )
}
