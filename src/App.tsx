import { Route, Routes } from 'react-router'
import Showcase from './Showcase'
import PremiumPage from './PremiumPage'
import StudioPage from './StudioPage'
import AtelierPage from './AtelierPage'
import SignalPage from './SignalPage'
import Seo from './components/Seo'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Seo
              title="Qora Studio — Création de sites web et applications web"
              description="Qora Studio conçoit votre site web ou application web, votre identité visuelle et votre communication digitale. Découvrez 4 directions et demandez un devis."
            />
            <Showcase />
          </>
        }
      />
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
        path="/studio"
        element={
          <>
            <Seo
              noindex
              title="Maquette Moderne & Dynamique — Qora Studio"
              description="Direction créative moderne et dynamique : un univers expressif en vert et corail, pensé pour convertir l’attention en contacts."
            />
            <StudioPage />
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
    </Routes>
  )
}
