import { Feature } from '../types';
import { 
  FaChartLine, 
  FaShieldAlt, 
  FaLightbulb, 
  FaUserTie, 
  FaChartBar
} from 'react-icons/fa';

const CaracterisiticasApp = () => {
  const features: (Feature & { color: string })[] = [
    {
      id: 1,
      title: 'Mayor eficiencia y control',
      description: 'Los clientes pueden lograr una eficiencia operativa significativa y tener un control total sobre sus finanzas, lo que les permite tomar decisiones más inteligentes.',
      icon: 'FaChartLine',
      color: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Tranquilidad y seguridad',
      description: 'Nuestros clientes pueden sentirse seguros sabiendo que la plataforma está construida con la misma infraestructura segura que utilizan los grandes bancos, con encriptación de grado militar y certificaciones relevantes.',
      icon: 'FaShieldAlt',
      color: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Enfoque estratégico',
      description: 'La automatización libera al equipo financiero de tareas repetitivas y les permite enfocarse en el análisis estratégico para el crecimiento del negocio',
      icon: 'FaLightbulb',
      color: 'text-blue-600'
    },
    {
      id: 4,
      title: 'Asesoramiento experto',
      description: 'Los clientes reciben un "Diagnóstico de Madurez Financiera Digital" que les ofrece recomendaciones estratégicas para optimizar aún más sus procesos financieros.',
      icon: 'FaUserTie',
      color: 'text-blue-600'
    },
    {
      id: 5,
      title: 'Inversión inteligente',
      description: 'El valor percibido de la solución de Consulbank es significativamente mayor que su costo, lo que hace que la compra se perciba como una inversión excepcional con un retorno de inversión rápido y claro.',
      icon: 'FaChartBar',
      color: 'text-green-600'
    }
    
  ];

  const getIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'FaChartLine': return <FaChartLine className={`text-3xl ${color}`} />;
      case 'FaShieldAlt': return <FaShieldAlt className={`text-3xl ${color}`} />;
      case 'FaLightbulb': return <FaLightbulb className={`text-3xl ${color}`} />;
      case 'FaUserTie': return <FaUserTie className={`text-3xl ${color}`} />;
      case 'FaChartBar': return <FaChartBar className={`text-3xl ${color}`} />;
      default: return <FaChartLine className={`text-3xl ${color}`} />;
    }
  };

  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition-transform duration-300 ease-in-out hover:scale-105">
            La Tranquilidad de un Banco, la Agilidad de una Fintech
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo la Solución de Consulbank Aumenta la Rentabilidad de tu Empresa.
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

export default CaracterisiticasApp;