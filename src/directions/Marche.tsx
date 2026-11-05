import { useState } from 'react'
import '@fontsource/bowlby-one/latin-400.css'
import '@fontsource/rubik/latin-400.css'
import '@fontsource/rubik/latin-500.css'
import '@fontsource/rubik/latin-700.css'
import './marche.css'
import { DirectionFrame } from './shared'
import { wa } from './contact'

const products = [
  { id: 'wax', name: 'Pagne wax', unit: '6 yards', price: 12000, tilt: -3 },
  { id: 'attieke', name: 'Attiéké frais', unit: '1 kg', price: 1500, tilt: 2 },
  { id: 'savon', name: 'Savon noir', unit: 'pot 250 g', price: 2500, tilt: -1.5 },
  { id: 'raphia', name: 'Sac en raphia', unit: 'taille M', price: 8000, tilt: 3 },
  { id: 'piment', name: 'Piment séché', unit: 'sachet', price: 1000, tilt: -2.5 },
  { id: 'huile', name: 'Huile de palme', unit: '1 litre', price: 2000, tilt: 1.5 },
]
const fcfa = (n: number) => `${n.toLocaleString('fr-FR').replace(/\u202f/g, ' ')} F`

export default function Marche() {
  const [cart, setCart] = useState<Record<string, number>>({})
  const lines = products.filter((p) => cart[p.id])
  const total = lines.reduce((s, p) => s + p.price * cart[p.id], 0)
  const count = lines.reduce((s, p) => s + cart[p.id], 0)
  const add = (id: string, d: number) => setCart((c) => ({ ...c, [id]: Math.max(0, (c[id] ?? 0) + d) }))
  const message = lines.length
    ? `Bonjour, je commande :\n${lines.map((p) => `• ${cart[p.id]} × ${p.name} (${p.unit})`).join('\n')}\nTotal : ${fcfa(total)}`
    : 'Bonjour, je souhaite voir votre catalogue.'

  return (
    <div className="mk">
      <DirectionFrame slug="marche" />
      <div className="mk-wax" aria-hidden="true" />
      <header className="mk-head">
        <a href="#top" className="mk-logo">Chez&nbsp;Adjoua<span>marché · Abidjan</span></a>
        <nav aria-label="Navigation">
          <a href="#etal">L’étal</a>
          <a href="#livraison">Livraison</a>
          <a className="mk-panier-link" href="#etal">Panier ({count})</a>
        </nav>
      </header>

      <section className="mk-hero" id="top">
        <p className="mk-kicker">Ouvert 24 h/24, comme le téléphone</p>
        <h1>
          <span>Le marché</span>
          <span className="mk-h1-b">dans la poche.</span>
        </h1>
        <p className="mk-lead">Choisissez vos produits, touchez « + », envoyez le panier sur WhatsApp. Pas de compte à créer, pas de formulaire de dix pages.</p>
        <a className="mk-btn" href="#etal">Voir l’étal ↓</a>
        <div className="mk-sticker" aria-hidden="true">Livré<br />le jour<br />même*</div>
      </section>

      <section className="mk-stall" id="etal" aria-labelledby="etal-t">
        <div className="mk-stall-head">
          <h2 id="etal-t">L’étal du jour</h2>
          <p>Prix d’exemple, à remplacer par les vôtres.</p>
        </div>
        <div className="mk-tags">
          {products.map((p) => (
            <article key={p.id} className="mk-tag" style={{ ['--tilt' as string]: `${p.tilt}deg` }}>
              <span className="mk-hole" aria-hidden="true" />
              <h3>{p.name}</h3>
              <p className="mk-unit">{p.unit}</p>
              <p className="mk-price">{fcfa(p.price)}</p>
              <div className="mk-qty" role="group" aria-label={`Quantité ${p.name}`}>
                <button type="button" onClick={() => add(p.id, -1)} aria-label={`Retirer ${p.name}`} disabled={!cart[p.id]}>−</button>
                <output aria-live="polite">{cart[p.id] ?? 0}</output>
                <button type="button" onClick={() => add(p.id, 1)} aria-label={`Ajouter ${p.name}`}>+</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mk-chalk" id="livraison" aria-labelledby="liv-t">
        <h2 id="liv-t">Ardoise de livraison</h2>
        <ul>
          <li><span>Cocody · Plateau · Marcory</span><i /><b>1 000 F</b></li>
          <li><span>Yopougon · Abobo · Koumassi</span><i /><b>1 500 F</b></li>
          <li><span>Bingerville · Port-Bouët</span><i /><b>2 000 F</b></li>
          <li><span>Retrait sur place</span><i /><b>Gratuit</b></li>
        </ul>
        <p>* Exemple de grille. Délais et zones à définir avec vous.</p>
      </section>

      {count > 0 && <aside className="mk-cart" id="panier" aria-label="Panier">
        <div>
          <strong>{count ? `${count} article${count > 1 ? 's' : ''}` : 'Panier vide'}</strong>
          <span>{count ? fcfa(total) : 'Touchez + sur une étiquette'}</span>
        </div>
        <a className="mk-btn mk-btn-wa" href={wa(message)} target="_blank" rel="noreferrer">
          Envoyer sur WhatsApp
        </a>
      </aside>}
    </div>
  )
}
