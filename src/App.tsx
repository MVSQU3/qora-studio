import { Navigate, Route, Routes, useParams } from 'react-router'
import Showcase from './Showcase'
import PremiumPage from './PremiumPage'
import StudioPage from './StudioPage'
import AtelierPage from './AtelierPage'
import SignalPage from './SignalPage'
import Seo from './components/Seo'
import { Suspense, lazy } from 'react'

const pages = {
  marche: lazy(() => import('./directions/Marche')),
  savane: lazy(() => import('./directions/Savane')),
  clinique: lazy(() => import('./directions/Clinique')),
  campus: lazy(() => import('./directions/Campus')),
  table: lazy(() => import('./directions/Table')),
  fondation: lazy(() => import('./directions/Fondation')),
  manufacture: lazy(() => import('./directions/Manufacture')),
  cabinet: lazy(() => import('./directions/Cabinet')),
  scene: lazy(() => import('./directions/Scene')),
  terroir: lazy(() => import('./directions/Terroir')),
} as const

function Direction() {
  const { slug } = useParams()
  const Page = slug && slug in pages ? pages[slug as keyof typeof pages] : null
  if (!Page) return <Navigate to="/directions" replace />
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/premium"
        element={
          <>
            <Seo
              noindex
              title="Maquette Corporate Premium — Qora Studio"
              description="Direction créative corporate premium : un univers sobre et rassurant en bleu nuit et or, pensé pour les entreprises B2B."
            />
            <PremiumPage />
          </>
        }
      />
      <Route
        path="/"
        element={
          <>
            <Seo
              title="Qora Studio — Création de sites web et applications web"
              description="Qora Studio conçoit votre site web ou application web, votre identité visuelle et votre communication digitale. Demandez un devis."
            />
            <StudioPage />
          </>
        }
      />
      <Route path="/studio" element={<Navigate to="/" replace />} />
      <Route
        path="/directions"
        element={
          <>
            <Seo
              noindex
              title="Directions créatives — Qora Studio — Création de sites web et applications web"
              description="Qora Studio conçoit votre site web ou application web, votre identité visuelle et votre communication digitale. Découvrez 4 directions et demandez un devis."
            />
            <Showcase />
          </>
        }
      />
      <Route
        path="/atelier"
        element={
          <>
            <Seo
              noindex
              title="Maquette Artisanale & Humaine — Qora Studio"
              description="Direction créative artisanale et humaine : un univers éditorial chaleureux en papier et terracotta, pensé pour la proximité."
            />
            <AtelierPage />
          </>
        }
      />
      <Route
        path="/signal"
        element={
          <>
            <Seo
              noindex
              title="Maquette Digitale & Contrastée — Qora Studio"
              description="Direction créative digitale et contrastée : un univers sombre et modulaire en noir et lime, pensé pour les marques tech."
            />
            <SignalPage />
          </>
        }
      />
      <Route path="/:slug" element={<Direction />} />
    </Routes>
  )
}
