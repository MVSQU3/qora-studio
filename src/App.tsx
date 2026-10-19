import { Route, Routes } from 'react-router'
import Showcase from './Showcase'
import PremiumPage from './PremiumPage'
import StudioPage from './StudioPage'
import AtelierPage from './AtelierPage'
import SignalPage from './SignalPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Showcase />} />
      <Route path="/premium" element={<PremiumPage />} />
      <Route path="/studio" element={<StudioPage />} />
      <Route path="/atelier" element={<AtelierPage />} />
      <Route path="/signal" element={<SignalPage />} />
    </Routes>
  )
}
