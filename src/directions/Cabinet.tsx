import { useState } from 'react'
import '@fontsource/libre-caslon-text/latin-400.css'
import '@fontsource/libre-caslon-text/latin-400-italic.css'
import '@fontsource/libre-caslon-text/latin-700.css'
import '@fontsource/public-sans/latin-400.css'
import '@fontsource/public-sans/latin-600.css'
import './cabinet.css'
import { DirectionFrame } from './shared'
import { wa } from './contact'

const articles = [
  { n: 1, t: 'Du droit des affaires', body: 'Constitution de sociétés, contrats commerciaux, structuration d’opérations. Nous rédigeons ce que vous signez, et nous vous expliquons ce que vous signez.', note: 'Premier échange gratuit, 30 minutes.' },
  { n: 2, t: 'De la comptabilité et de la fiscalité', body: 'Tenue des comptes, déclarations, optimisation dans le cadre de la loi. Un point trimestriel avec l’associé responsable de votre dossier.', note: 'Tarif forfaitaire sur devis.' },
  { n: 3, t: 'Du contentieux', body: 'Négocier d’abord, plaider si nécessaire. Vous savez à chaque étape ce que coûte la suite et ce qu’elle peut rapporter.', note: 'Honoraires annoncés avant d’agir.' },
  { n: 4, t: 'De la confidentialité', body: 'Tout ce que vous nous confiez est couvert par le secret professionnel. Les échanges par ce site ne sont lus que par l’associé concerné.', note: 'Aucune donnée n’est revendue ni partagée.' },
]

export default function Cabinet() {
  const [dom, setDom] = useState('Droit des affaires')
  return (
    <div className="cb">
      <DirectionFrame slug="cabinet" />
      <header className="cb-head"><a href="#top">Cabinet Équinoxe</a><span>Avocats · Experts-comptables · Abidjan</span></header>
      <main>
        <article className="cb-sheet" id="top">
          <p className="cb-ref">Réf. QS/2026 — Acte de présentation</p>
          <h1>Entre les soussignés, <em>un cabinet</em> et vous.</h1>
          <p className="cb-pre">Il a été convenu ce qui suit, en termes clairs et sans formules inutiles.</p>

          {articles.map((a) => (
            <section key={a.n} className="cb-art">
              <aside className="cb-margin"><span>Note</span>{a.note}</aside>
              <div>
                <h2><span>Article {a.n}.</span> {a.t}</h2>
                <p>{a.body}</p>
              </div>
            </section>
          ))}

          <section className="cb-art cb-rdv">
            <aside className="cb-margin"><span>À signer</span>Le premier rendez-vous ne vous engage à rien.</aside>
            <div>
              <h2><span>Article 5.</span> Du premier rendez-vous</h2>
              <label>Domaine concerné
                <select value={dom} onChange={(e) => setDom(e.target.value)}>
                  {['Droit des affaires', 'Comptabilité et fiscalité', 'Contentieux', 'Autre'].map((d) => <option key={d}>{d}</option>)}
                </select>
              </label>
              <a className="cb-btn" href={wa(`Bonjour, je souhaite un rendez-vous confidentiel (${dom}).`)} target="_blank" rel="noreferrer">Demander un rendez-vous</a>
            </div>
          </section>

          <div className="cb-sign">
            <svg viewBox="0 0 260 90" aria-hidden="true"><path d="M8 62 C 30 8, 54 8, 50 48 C 48 72, 70 30, 88 40 C 100 48, 96 66, 112 54 C 130 40, 140 40, 146 52 C 152 64, 170 36, 188 44 C 206 52, 220 70, 252 34" /></svg>
            <span>Fait à Abidjan, pour valoir ce que de droit.</span>
            <i className="cb-seal" aria-hidden="true">É</i>
          </div>
        </article>
      </main>
      <footer className="cb-foot">Qora Studio · direction de démonstration</footer>
    </div>
  )
}
