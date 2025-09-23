import { Service } from '../types';
import { FaChartLine, FaSyncAlt, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const Servicios = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Cierre Centralizado',
      description: 'Automatización y control total de tus procesos contables con tecnología de punta.',
      icon: 'FaChartLine',
      link: '#cierre-centralizado'
    },
    {
      id: 2,
      title: 'Conciliación Bancaria',
      description: 'Precisión y eficiencia en tus operaciones con algoritmos inteligentes.',
      icon: 'FaSyncAlt',
      link: '#conciliacion-bancaria'
    },
    {
      id: 3,
      title: 'Seguridad Bancaria',
      description: 'Protección de nivel bancario para todas tus transacciones y datos.',
      icon: 'FaShieldAlt',
      link: '#seguridad-bancaria'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaChartLine': return <FaChartLine className="text-4xl" />;
      case 'FaSyncAlt': return <FaSyncAlt className="text-4xl" />;
      case 'FaShieldAlt': return <FaShieldAlt className="text-4xl" />;
      default: return <FaChartLine className="text-4xl" />;
    }
  };

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales para la gestión financiera de tu empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-blue-600 mb-6 group-hover:text-blue-800 transition-colors duration-300">
                {getIcon(service.icon)}
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <a 
                href={service.link}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 group-hover:translate-x-1"
              >
                Conocer más
                <FaArrowRight className="ml-2 text-sm" />
              </a>
            </div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-primary-600 to-purple-700 rounded-2xl p-8 text-white">
            <div className="flex items-center mb-4">
              <FaChartLine className="text-3xl mr-4" />
              <h3 className="text-2xl font-bold">Integración Total</h3>
            </div>
            <p className="text-lg opacity-90 mb-6">
              Conectamos con los principales sistemas bancarios y plataformas transaccionales del mercado.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                IBS, Paradise y SIAF
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                Postilion, Cactus y Cats
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                WhatsApp Business, Telegram
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-secondary-600 to-red-700 rounded-2xl p-8 text-white">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-3xl mr-4" />
              <h3 className="text-2xl font-bold">Tecnología Avanzada</h3>
            </div>
            <p className="text-lg opacity-90 mb-6">
              Plataformas modernas con infraestructura en la nube y soporte 24/7.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                IBM Power y Cloud Computing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Certificaciones de seguridad
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Soporte técnico especializado
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;