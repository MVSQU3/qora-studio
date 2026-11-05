import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import Seo from '../components/Seo'
import { concepts } from '../concepts'


/** Métadonnées + petit bandeau de retour, communs à toutes les directions. */
export function DirectionFrame({ slug }: { slug: string }) {
  const c = concepts.find((x) => x.slug === slug)!
  return (
    <>
      <Seo noindex title={`Direction ${c.name} — ${c.sector} — Qora Studio`} description={`${c.tagline} ${c.description}`} />
      <Link to="/directions" className="dir-back" aria-label="Retour à toutes les directions">
        <ArrowLeft size={14} aria-hidden="true" /> Qora Studio · {c.name} · 14 directions
      </Link>
    </>
  )
}
