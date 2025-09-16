import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import BankPromoSection from './components/cierrecentralizado';
import AboutSectionV2 from './components/AbouSection';
import Conciliacion from './components/conciliacion';
import Mision from './components/mision';
import CheckBank from './components/checkbank';
import BlogPage from './components/BlogPage';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const MainPage = () => (
  <>
    <HeroSection />
    <BankPromoSection />
    <AboutSectionV2 />
    <Conciliacion />
    <Mision />
    <CheckBank />
    <ContactForm />
    <Footer />
  </>
);

export default App;
