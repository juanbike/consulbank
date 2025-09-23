import { FaChartLine, FaSyncAlt, FaShieldAlt } from 'react-icons/fa';

const Soluciones = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden font-sans">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-1 gap-12 items-center min-h-screen">
          {/* Hero Content */}
          <div className="text-white text-center">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text">
              Soluciones Financieras Inteligentes
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed animate-fade-in-up font-light bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text" style={{ animationDelay: '0.2s' }}>
              Automatiza tus procesos contables, reduce tiempos y aumenta la eficiencia con la tecnología bancaria más avanzada del mercado.
            </p>
            
            

            {/* Trust Indicators */}
            <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">6M+</div>
                  <div className="text-sm text-gray-400">Transacciones Diarias</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">ATM - P2P - P2C - C2P</div>
                  <div className="text-sm text-gray-400">Canales</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">Escalable y Adaptable</div>
                  <div className="text-sm text-gray-400">Sistema</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Soluciones;