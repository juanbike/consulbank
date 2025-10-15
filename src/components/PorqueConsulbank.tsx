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
      title: 'Información a Tiempo para Decidir Mejor',
      description: 'El tiempo es dinero, y la precisión es poder. Al reducir los errores de conciliación en un 95% y acortar los cierres de semanas a días, Consulbank te da acceso inmediato a datos impecables.',
      icon: 'FaTachometerAlt',
      color: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Reduce Costos Operacionales',
      description: 'Este ahorro de tiempo se traduce directamente en una reducción significativa en tus costos operativos, permitiendo que tu talento humano se enfoque en tareas de alto valor.',
      icon: 'FaPiggyBank',
      color: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Tecnología Sólida y Probada en Producción',
      description: 'Consulbank te da la seguridad de un socio con experiencia. Nuestros sistemas están desarrollados bajo estrictos estándares bancarios y cuentan con casos de uso implementados en instituciones bancarias y redes transaccionales, actualmente en producción a gran escala.',
      icon: 'FaUniversity',
      color: 'text-blue-600'
    },
    {
      id: 4,
      title: 'Arquitectura Sólida y Probada: El Poder de IBM',
      description: 'La solidez de nuestras soluciones reside en su infraestructura: Utilizamos IBM Power para garantizar un procesamiento rápido y la máxima seguridad de la data crítica. Esto se complementa con un riguroso cumplimiento normativo y una arquitectura diseñada para la integración total con sistemas.',
      icon: 'FaLock',
      color: 'text-blue-600'
    },
    {
      id: 5,
      title: 'El Socio que Impulsa tu Crecimiento',
      description: 'Dejamos la gestión de números en manos de la tecnología para liberar tu potencial. Consulbank se posiciona como tu socio estratégico que elimina las distracciones operativas, permitiéndote a ti y a tu equipo enfocarse 100% en el crecimiento del negocio, la innovación y la toma de decisiones estratégicas. Tu éxito es nuestro único objetivo.',
      icon: 'FaHandshake',
      color: 'text-green-600'
    },
    {
      id: 6,
      title: 'Soporte Experto 24/7 y Gestión Automatizada',
      description: 'Tu negocio no descansa, y nosotros tampoco. Accede a asistencia técnica especializada y experta 24/7. Para garantizar la máxima eficiencia y trazabilidad, todas tus solicitudes se gestionan a través de nuestro sistema automatizado de ticket support.',
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
            Por qué Elegir Consulbank
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