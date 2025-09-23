import { Feature } from '../types';
import { 
  FaRobot, 
  FaCloud, 
  FaMobileAlt, 
  FaLock, 
  FaChartBar, 
  FaUsers,
  FaClock,
  FaShieldAlt
} from 'react-icons/fa';

const CaracterisiticasApp = () => {
  const features: (Feature & { color: string })[] = [
    {
      id: 1,
      title: 'Automatización',
      description: 'Procesos automatizados que reducen tiempos y errores humanos',
      icon: 'FaRobot',
      color: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Cloud Computing',
      description: 'Acceso seguro desde cualquier lugar y en cualquier momento',
      icon: 'FaCloud',
      color: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Móvil First',
      description: 'Diseño optimizado para dispositivos móviles y tablets',
      icon: 'FaMobileAlt',
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
      title: 'Reportes',
      description: 'Reportes detallados y análisis en tiempo real',
      icon: 'FaChartBar',
      color: 'text-green-600'
    },
    {
      id: 6,
      title: 'Soporte 24/7',
      description: 'Asistencia técnica especializada disponible siempre',
      icon: 'FaUsers',
      color: 'text-blue-600'
    }
  ];

  const getIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'FaRobot': return <FaRobot className={`text-3xl ${color}`} />;
      case 'FaCloud': return <FaCloud className={`text-3xl ${color}`} />;
      case 'FaMobileAlt': return <FaMobileAlt className={`text-3xl ${color}`} />;
      case 'FaLock': return <FaLock className={`text-3xl ${color}`} />;
      case 'FaChartBar': return <FaChartBar className={`text-3xl ${color}`} />;
      case 'FaUsers': return <FaUsers className={`text-3xl ${color}`} />;
      default: return <FaRobot className={`text-3xl ${color}`} />;
    }
  };

  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Características Principales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas para una gestión financiera eficiente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group"
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

        {/* Performance Metrics */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <FaClock className="text-2xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">85%</h3>
              <p className="text-gray-600">Reducción en tiempo de procesamiento</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <FaShieldAlt className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">99.8%</h3>
              <p className="text-gray-600">Precisión en conciliación</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <FaChartBar className="text-2xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Disponibilidad del sistema</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaracterisiticasApp;