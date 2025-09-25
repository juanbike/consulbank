import { Service } from '../types';
import { FaChartLine, FaSyncAlt, FaShieldAlt, FaArrowRight, FaRepublican, FaRecycle } from 'react-icons/fa';

const Servicios = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Cierre Centralizado',
      description: 'Nuestra plataforma centraliza todas las operaciones financieras en un solo sistema, automatizando cierres contables y generando reportes precisos en tiempo real. Reduce tiempos de proceso, elimina errores y garantiza cumplimiento normativo con la seguridad bancaria de ConsulBank. La solución definitiva para empresas que buscan eficiencia y control financiero integral.',
      icon: 'FaChartLine',
      link: 'https://cierrecentralizado.consulbank.com.ve/'
    },
    {
      id: 2,
      title: 'Conciliación Bancaria',
      description: 'El sistema de Conciliación Bancaria de ConsulBank automatiza la comparación de transacciones internas y extractos bancarios en tiempo real. Utiliza algoritmos inteligentes para identificar discrepancias, resolver inconsistencias y generar reportes precisos (99.8%). Procesa miles de transacciones por minuto, reduciendo el tiempo de conciliación en un 85% y minimizando errores humanos. Su interfaz intuitiva permite el seguimiento completo, garantizando cumplimiento normativo. Se integra con los sistemas de ConsulBank para una conciliación ágil y segura.',
      icon: 'FaSyncAlt',
      link: 'https://conciliacion.consulbank.com.ve/'
    },
    {
      id: 3,
      title: 'Fábrica de Software',
      description: 'Creamos soluciones innovadoras para el sector financiero, los integramos a sistemas existentes, efectuamos desarrollos a la medida. Contamos un equipo especializados en Proyecto, desarrollo y calidad (QA).',
      icon: 'FaShieldAlt',
      link: '#seguridad-bancaria'
    },
    {
      id: 4,
      title: 'Modernización de Aplicaciones RPG',
      description: 'La modernización no se trata solo de actualizar el código, sino de transformar estos valiosos activos empresariales para que sean ágiles, escalables y accesibles. Los enfoques pueden variar, desde la refactorización y la reestructuración del código existente, hasta la re-escritura completa a lenguajes modernos o la encapsulación de la lógica RPG mediante servicios web y APIs. Este proceso permite revitalizar las aplicaciones, dotándolas de interfaces gráficas intuitivas, móviles y web, y facilitando su integración con otros sistemas y plataformas en la nube.',
      icon: 'FaRepublican',
      link: '#seguridad-bancaria'
    },
    {
      id: 5,
      title: 'Suite Checkbank',
      description: 'Nuestro innovador Link de Pago y Botón de Pago convierten cada compra en una experiencia de un solo clic, eliminando fricciones y elevando la satisfacción de tus clientes. Amplía tu alcance con nuestro POS Virtual, ideal para el mundo digital, y toma el mando con nuestro intuitivo Panel Administrativo, tu centro de mando para una gestión superior. Con Checkbank, experimentarás el control total sobre tus redes y transacciones. Nuestra plataforma robusta y escalable te ofrece un seguimiento preciso y una gestión centralizada, dándote la tranquilidad que mereces.',
      icon: 'FaRecycle',
      link: '#seguridad-bancaria'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaChartLine': return <FaChartLine className="text-4xl" />;
      case 'FaSyncAlt': return <FaSyncAlt className="text-4xl" />;
      case 'FaShieldAlt': return <FaShieldAlt className="text-4xl" />;
      case 'FaRepublican': return <FaRepublican className="text-4xl" />;
      case 'FaRecycle': return <FaRecycle className="text-4xl" />;
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
       
      </div>
    </section>
  );
};

export default Servicios;