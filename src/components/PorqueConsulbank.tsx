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
  FaChartBar,
  FaAward,
  FaCheckCircle,
  FaServer,
  FaStore,
  FaLink,
  FaCreditCard,
  FaShoppingCart,
  FaCode,
  FaRocket
} from 'react-icons/fa';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PorqueConsulbank = () => {
  const features: (Feature & { color: string, extraDescription?: string })[] = [
    {
      id: 1,
      title: 'Más de 25 Años Respaldando la Banca con Innovación.',
      description: 'Nuestra ventaja principal radica en nuestra <strong>vasta experiencia y robustez tecnológica.</strong> Con más de <strong>25 años en el sector financiero</strong>',
      extraDescription:' y una marcada orientación hacia la <strong>innovación Fintech</strong>, proveemos desarrollo de software y <strong>soluciones personalizadas.</strong> Estas se caracterizan por su <strong>escalabilidad, potencia y seguridad extrema</strong>, lo que simplifica enormemente la adición de nuevos servicios.',
      icon: 'FaAward',
      color: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Tecnología probada: Ya en Funcionamiento en Bancos Líderes.',
      description: '<strong>Consulbank</strong> le ofrece la confianza de un <strong>socio experimentado</strong>, destacando que nuestra tecnología ya ha sido validada. Nuestros sistemas, ',
      extraDescription:'desarrollados bajo los más rigurosos <strong>estándares bancarios</strong>, se encuentran <strong>actualmente en producción a gran escala</strong>. Esto le permite implementar soluciones con <strong>casos de uso probados</strong> que gestionan transacciones para <strong>importantes instituciones bancarias</strong> y <strong>redes interbancarias</strong>. Elija una tecnología que ya ha demostrado su eficacia.',
      icon: 'FaCheckCircle',
      color: 'text-green-600'
    },
    {
      id: 3,
      title: 'Arquitectura de Élite: El Poder Comprobado de IBM.',
      description: 'Nuestras soluciones se fundamentan en la <strong>arquitectura IBM Power</strong>, la plataforma predilecta del sector bancario. Esto asegura una <strong>velocidad de ',
      extraDescription:'procesamiento superior y una solidez inquebrantable para sus datos más críticos</strong>. <strong>Garantizamos</strong> la conformidad normativa y una <strong>integración completa</strong> y <strong>sin interrupciones</strong> con sus <strong>sistemas actuales</strong>. La fiabilidad es nuestro pilar fundamental.',
      icon: 'FaServer',
      color: 'text-blue-600'
    },

    {
      id: 4,
      title: 'Fabrica de Software Enfocada en el Sector Bancario.',
      description: 'Contamos con un equipo de <strong>profesionales altamente cualificados</strong> y especializados en cada fase del ciclo de vida del proyecto. Nuestro equipo de <strong>Gestión de Proyectos',
      extraDescription:'</strong> garantiza una ejecución impecable y una comunicación transparente en todo momento. Los <strong>expertos en Desarrollo</strong> se encargan de transformar las ideas en <strong>funcionalidades robustas y escalables</strong>, mientras que nuestro <strong>equipo de Calidad (QA)</strong> se dedica a asegurar la <strong>fiabilidad, seguridad y rendimiento óptimo</strong> de cada solución antes de su implementación. Con <strong>Consulbank</strong>, usted invierte en soluciones tecnológicas que impulsan su crecimiento y fortalecen su posición en el mercado financiero.',
      icon: 'FaCode',
      color: 'text-orange-600'
    },
    {
      id: 5,
      title: 'Modernización de Aplicaciones Legadas',
      description: '<strong>La Modernización</strong> convierte sus activos empresariales legados en <strong>aplicaciones ágiles y escalables.</strong> Renovamos sus sistemas (mediante refactorización o re-escritura) ',
      extraDescription:'e <strong>integramos su lógica central</strong> a través de APIs, ofreciendo interfaces modernas (web y móvil) y <strong>conectividad total con la nube.</strong> El resultado es dotar a las aplicaciones de </strong>interfaces gráficas</strong> intuitivas (móviles y web) y facilitar su </strong>integración con otros sistemas</strong> y la nube.',
      icon: 'FaRocket',
      color: 'text-orange-600'
    },
    
    {
      id: 6,
      title: 'Soporte Experto 24/7 y Ticket Support.',
      description: 'Tu negocio no descansa, y nosotros tampoco. Accede a asistencia técnica especializada y experta 24/7. Para garantizar la máxima eficiencia y trazabilidad, todas tus solicitudes se gestionan a través de nuestro sistema automatizado de ticket support.',
      icon: 'FaHeadset',
      color: 'text-orange-600'
    }

  ];

  const getIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'FaTachometerAlt': return <FaTachometerAlt className={`text-7xl ${color}`} />;
      case 'FaPiggyBank': return <FaPiggyBank className={`text-7xl ${color}`} />;
      case 'FaUniversity': return <FaUniversity className={`text-7xl ${color}`} />;
      case 'FaLock': return <FaLock className={`text-7xl ${color}`} />;
      case 'FaHandshake': return <FaHandshake className={`text-7xl ${color}`} />;
      case 'FaHeadset': return <FaHeadset className={`text-7xl ${color}`} />;
      case 'FaClock': return <FaClock className={`text-7xl ${color}`} />;
      case 'FaShieldAlt': return <FaShieldAlt className={`text-7xl ${color}`} />;
      case 'FaChartBar': return <FaChartBar className={`text-7xl ${color}`} />;
      case 'FaAward': return <FaAward className={`text-7xl ${color}`} />;
      case 'FaCheckCircle': return <FaCheckCircle className={`text-7xl ${color}`} />;
      case 'FaServer': return <FaServer className={`text-7xl ${color}`} />;
      case 'FaStore': return <FaStore className={`text-7xl ${color}`} />;
      case 'FaLink': return <FaLink className={`text-7xl ${color}`} />;
      case 'FaCreditCard': return <FaCreditCard className={`text-7xl ${color}`} />;
      case 'FaShoppingCart': return <FaShoppingCart className={`text-7xl ${color}`} />;
      case 'FaCode': return <FaCode className={`text-7xl ${color}`} />;
      case 'FaRocket': return <FaRocket className={`text-7xl ${color}`} />;
      default: return <FaTachometerAlt className={`text-7xl ${color}`} />;
    }
  };

  return (
    <section id="caracteristicas" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
            ¿Por qué Elegir a Consulbank?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Todo lo que necesitas para una gestión financiera eficiente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group transform hover:scale-105 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="mb-4">
                {getIcon(feature.icon, feature.color)}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3 dark:text-white">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-justify dark:text-gray-300" dangerouslySetInnerHTML={{ __html: feature.description }} />
              {feature.extraDescription && (
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Leer más</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 leading-relaxed text-justify dark:text-gray-300" dangerouslySetInnerHTML={{ __html: feature.extraDescription }} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default PorqueConsulbank;