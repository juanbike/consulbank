import { Feature } from '../types';
import { 
  FaTachometerAlt, 
  FaPiggyBank, 
  FaUniversity, 
  FaLock, 
  FaHandshake, 
  FaHeadset,
  FaClock,
  FaShieldAlt,
  FaChartBar
} from 'react-icons/fa';

const PorqueConsulbank = () => {
  const features: (Feature & { color: string })[] = [
    {
      id: 1,
      title: 'Reducción de errores y tiempo',
      description: ' Las aplicaciones automatizadas de Consulbank ayuda a reducir los errores de conciliación en un 95% y puede disminuir el tiempo de cierre financiero de semanas a días.',
      icon: 'FaTachometerAlt',
      color: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Ahorro de costos significativo',
      description: 'La solución puede ahorrar a una empresa hasta 200 horas-hombre mensuales en tareas de conciliación manual, lo que se traduce en un ahorro anual considerable en costos operativos.',
      icon: 'FaPiggyBank',
      color: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Experiencia y solidez bancaria',
      description: 'Nuestros sistemas se desarrollan con la misma infraestructura de seguridad que utilizan los bancos internacionales líderes. Esto garantiza una encriptación de nivel militar y certificaciones relevantes para proteger sus datos.',
      icon: 'FaUniversity',
      color: 'text-blue-600'
    },
    {
      id: 4,
      title: 'Seguridad',
      description: 'Encriptación de nivel bancario y protección de datos',
      icon: 'FaLock',
      color: 'text-blue-600'
    },
    {
      id: 5,
      title: 'Posicionamiento como socio estratégico',
      description: 'Consulbank se posiciona como un socio que ayuda a sus clientes a enfocarse en el crecimiento del negocio en lugar de en la gestión de números.',
      icon: 'FaHandshake',
      color: 'text-green-600'
    },
    {
      id: 6,
      title: 'Soporte 24/7',
      description: 'Asistencia técnica especializada disponible siempre',
      icon: 'FaHeadset',
      color: 'text-blue-600'
    }
  ];

  const getIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'FaTachometerAlt': return <FaTachometerAlt className={`text-3xl ${color}`} />;
      case 'FaPiggyBank': return <FaPiggyBank className={`text-3xl ${color}`} />;
      case 'FaUniversity': return <FaUniversity className={`text-3xl ${color}`} />;
      case 'FaLock': return <FaLock className={`text-3xl ${color}`} />;
      case 'FaHandshake': return <FaHandshake className={`text-3xl ${color}`} />;
      case 'FaHeadset': return <FaHeadset className={`text-3xl ${color}`} />;
      default: return <FaTachometerAlt className={`text-3xl ${color}`} />;
    }
  };

  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por qué Consulbank
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas para una gestión financiera eficiente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group transform hover:scale-105"
            >
              <div className="mb-4">
                {getIcon(feature.icon, feature.color)}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default PorqueConsulbank;