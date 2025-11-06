import { FaChartLine, FaSyncAlt, FaShieldAlt } from 'react-icons/fa';

const Soluciones1 = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden font-sans bg-gradient-to-br from-white to-blue-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 relative z-10 transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="grid lg:grid-cols-1 gap-12 items-center min-h-screen">
          {/* Hero Content */}
          <div className="text-gray-800 text-center dark:text-gray-200">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up bg-gradient-to-r from-blue-900 to-blue-600 text-transparent bg-clip-text dark:from-blue-500 dark:to-cyan-400">
              Soluciones Tecnológicas para el Sector Financiero
            </h1>

            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-700 my-4 animate-fade-in-up dark:text-gray-300" style={{ animationDelay: '0.1s' }}>
              En Consulbank C.A. hacemos que la tecnología se convierta en tu mejor aliado para optimizar procesos, reducir costos y potenciar la seguridad de tus operaciones bancarias.
            </h3>
            
            <p className="text-lg lg:text-xl mb-8 leading-relaxed animate-fade-in-up font-light text-gray-600 dark:text-gray-400" style={{ animationDelay: '0.2s' }}>
              Con más de 25 años de experiencia en el sector financiero, en Consulbank construimos soluciones tecnológicas a la medida que impulsan la eficiencia operativa, la seguridad y el crecimiento de su negocio. No solo creamos software; somos socios estratégicos que lo guían hacia la innovación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Soluciones1;