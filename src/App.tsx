import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Article from './pages/Article'
import Categories from './pages/Categories'
import About from './pages/About'
import Contact from './pages/Contact'
import ContactThanks from './pages/ContactThanks'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:slug" element={<Article />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/thanks" element={<ContactThanks />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms_and_conditions" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  )
}
