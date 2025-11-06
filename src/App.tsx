import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';

import BlogPage from './components/BlogPage';
import ContactForm from './components/ContactForm';
import Servicios from './components/Servicios';

import CaracterisiticasApp from './components/CaracteristicasApp';
import Nosotros from './components/Nosotros';
import PorqueConsulbank from './components/PorqueConsulbank';
import Testimonios from './components/testimonio';
import Soluciones1 from './components/soluciones1';
import  SingleCardCarousel  from './components/carousel';
import SolucionesBancarias from './components/solucionesBancarias';
import SolucionesComercios from './components/solucionesComercios';
import SolucionesRedesInterbancarias from './components/solucionesRedesInterbancarias';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ThemeSwitcher from './components/ThemeSwitcher';
import AcercaDe from './components/AcercaDe';
import './App.css';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
        <ThemeSwitcher />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

const MainPage = () => (
  <>
    <HeroSection />
    <Soluciones1 />
     <PorqueConsulbank/>
    <SolucionesBancarias />
    <SolucionesComercios />
    <SolucionesRedesInterbancarias />
    <CaracterisiticasApp />
    
    <Testimonios /> 
    <SingleCardCarousel />
    <ContactForm />
    <Footer />
  </>
);

export default App;
