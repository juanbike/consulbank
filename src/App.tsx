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
    <Soluciones1 />
    <Nosotros />
    <PorqueConsulbank/>
    <CaracterisiticasApp />
    <Servicios />
    <Testimonios />   
    <SingleCardCarousel />
    
   
    <ContactForm />
    <Footer />
  </>
);

export default App;
