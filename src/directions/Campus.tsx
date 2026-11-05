import { useState } from 'react'
import '@fontsource/lexend/latin-400.css'
import '@fontsource/lexend/latin-600.css'
import '@fontsource/lexend/latin-800.css'
import '@fontsource/caveat/latin-600.css'
import './campus.css'
import { DirectionFrame } from './shared'
import { wa } from './contact'

type Course = { id: string; label: string; tone: 'i' | 'a' | 'g' | 'p' }
const grid: (Course | null)[][] = [
  [{ id: 'info', label: 'Algorithmique', tone: 'i' }, { id: 'gest', label: 'Comptabilité', tone: 'a' }, null, { id: 'info', label: 'Réseaux', tone: 'i' }, { id: 'com', label: 'Marketing', tone: 'p' }],
  [{ id: 'gest', label: 'Droit des affaires', tone: 'a' }, { id: 'info', label: 'Bases de données', tone: 'i' }, { id: 'com', label: 'Rédaction', tone: 'p' }, null, { id: 'gest', label: 'Gestion', tone: 'a' }],
  [null, { id: 'com', label: 'Atelier média', tone: 'p' }, { id: 'info', label: 'Projet web', tone: 'i' }, { id: 'gest', label: 'Finance', tone: 'a' }, null],
  [{ id: 'lang', label: 'Anglais', tone: 'g' }, { id: 'lang', label: 'Anglais', tone: 'g' }, { id: 'lang', label: 'Méthodo', tone: 'g' }, { id: 'lang', label: 'Anglais', tone: 'g' }, { id: 'lang', label: 'Libre', tone: 'g' }],
]
const hours = ['8 h', '10 h', '14 h', '16 h']
const paths: Record<string, { name: string; dur: string; next: string }> = {
  info: { name: 'Informatique & numérique', dur: '3 ans · Licence', next: 'Développement, réseaux, data' },
  gest: { name: 'Gestion & comptabilité', dur: '3 ans · Licence', next: 'Comptabilité, audit, banque' },
  com: { name: 'Communication & médias', dur: '3 ans · Licence', next: 'Agence, presse, community mgmt' },
  lang: { name: 'Langues & méthode', dur: 'Tronc commun', next: 'Transverse à toutes les filières' },
}
const steps = [
  ['Ouverture des dossiers', 'Mai'], ['Concours / entretien', 'Juillet'], ['Résultats', 'Août'], ['Inscription définitive', 'Septembre'], ['Rentrée', 'Octobre'],
]
const docs = ['Acte de naissance', 'Relevé de notes du bac', 'Deux photos d’identité', 'Pièce d’identité du tuteur', 'Reçu des frais de dossier']

export default function Campus() {
  const [sel, setSel] = useState('info')
  const [done, setDone] = useState<string[]>([])
  const p = paths[sel]
  const toggle = (d: string) => setDone((x) => (x.includes(d) ? x.filter((y) => y !== d) : [...x, d]))
  return (
    <div className="cp">
      <DirectionFrame slug="campus" />
      <header className="cp-head">
        <a href="#top" className="cp-logo">Institut<b>Horizon</b></a>
        <nav aria-label="Navigation"><a href="#filieres">Filières</a><a href="#calendrier">Calendrier</a><a href="#dossier">Dossier</a></nav>
      </header>

      <section className="cp-hero" id="top">
        <div className="cp-copy">
          <p className="cp-tag">Rentrée d’octobre · inscriptions ouvertes</p>
          <h1>Votre semaine,<br /><em>avant même</em><br />de commencer.</h1>
          <p>Touchez un cours : la filière correspondante s’affiche en dessous, avec sa durée et ses débouchés.</p>
          <span className="cp-note" aria-hidden="true">essayez !
            <svg viewBox="0 0 90 60"><path d="M4 8 C 30 0, 60 20, 78 50 M78 50 l-14 -4 M78 50 l2 -15" /></svg>
          </span>
        </div>
        <div className="cp-table" role="group" aria-label="Exemple d’emploi du temps">
          <div className="cp-days" aria-hidden="true">{['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'].map((d) => <span key={d}>{d}</span>)}</div>
          {grid.map((row, r) => (
            <div className="cp-row" key={r}>
              <span className="cp-h">{hours[r]}</span>
              {row.map((c, i) => c
                ? <button key={i} className={`cp-c cp-${c.tone}${sel === c.id ? ' on' : ''}`} aria-pressed={sel === c.id} onClick={() => setSel(c.id)}>{c.label}</button>
                : <span key={i} className="cp-empty" />)}
            </div>
          ))}
        </div>
      </section>

      <section className="cp-path" id="filieres" aria-live="polite">
        <p className="cp-label">Filière sélectionnée</p>
        <h2>{p.name}</h2>
        <dl><div><dt>Durée</dt><dd>{p.dur}</dd></div><div><dt>Débouchés</dt><dd>{p.next}</dd></div></dl>
        <p className="cp-fine">Contenus d’exemple, à remplacer par vos programmes.</p>
      </section>

      <section className="cp-cal" id="calendrier" aria-labelledby="cal-t">
        <h2 id="cal-t">Le calendrier, dans l’ordre</h2>
        <ol>
          {steps.map(([s, m]) => <li key={s}><time>{m}</time><span>{s}</span></li>)}
        </ol>
      </section>

      <section className="cp-doc" id="dossier" aria-labelledby="doc-t">
        <h2 id="doc-t">Votre dossier, case par case</h2>
        <ul>
          {docs.map((d) => (
            <li key={d}><label><input type="checkbox" checked={done.includes(d)} onChange={() => toggle(d)} /><span>{d}</span></label></li>
          ))}
        </ul>
        <div className="cp-bar" role="progressbar" aria-valuemin={0} aria-valuemax={docs.length} aria-valuenow={done.length} aria-label="Pièces réunies"><i style={{ width: `${(done.length / docs.length) * 100}%` }} /></div>
        <p>{done.length} pièce{done.length > 1 ? 's' : ''} sur {docs.length}</p>
        <a className="cp-btn" href={wa(`Bonjour, je souhaite m’inscrire en ${p.name}. J’ai réuni ${done.length}/${docs.length} pièces.`)} target="_blank" rel="noreferrer">Commencer ma pré-inscription</a>
      </section>
      <footer className="cp-foot">Qora Studio · direction de démonstration</footer>
    </div>
  )
}
