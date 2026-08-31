import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import TermsOfUse from './pages/TermsOfUse.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ham/terms" element={<TermsOfUse />} />
          <Route path="ham/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
