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
  FaRocket,
  FaSyncAlt,
  FaExchangeAlt,
  FaBalanceScale,
  FaChartLine,
  FaMoneyBillWave
} from 'react-icons/fa';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SolucionesBancarias = () => {
  const features: (Feature & { color: string, extraDescription?: string })[] = [
    {
      id: 1,
      title: 'Módulo de Transacciones Electrónicas y Medios de Pago',
      description: 'Garantiza una <strong>verificación y certificación</strong> de alto rendimiento de todas las transacciones de los </strong>canales y medios de pago del banco,',
      extraDescription: '</strong>  operando con una <strong>precisión del 99.8%.</strong> Procesa miles de transacciones por minuto para reducir el tiempo de <strong>conciliación en 95%.</strong> Es una herramienta esencial para <strong>mitigar el riesgo reputacional</strong> y al identificar inmediatamente <strong>posibles reclamos</strong>, a la vez que proporciona inteligencia para mejorar el funcionamiento de cada medio de pago.',
      icon: 'FaSyncAlt',
      color: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Módulo para Bancos. Impulsa La Adquirencia y Liderazgo',
      description: '<strong>Suite Checkbank® </strong>es la plataforma <strong>omnicanal</strong> que su banco necesita para <strong>potenciar la adquirencia</strong>, más ingresos',
      extraDescription: ' y modernizar sus servicios. Ofrecemos a sus clientes comercios herramientas esenciales como el <strong>Botón de Pago, Enlace de Pago, POS Virtual y Whatsapp Banking</strong>, todas gestionadas desde un <strong>Panel Administrativo centralizado.</strong> Con Checkbank, su banco <strong>impulsa directamente las ventas</strong> de sus clientes, fortaleciendo su liderazgo en el mercado de soluciones de cobro.',
      icon: 'FaUniversity',
      color: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Módulo para Comercios Multibancos',
      description: '<strong>Suite Checkbank®</strong> es la plataforma digital <strong>omnicanal</strong> diseñada para impulsar las ventas de tu comercio y facilitar cada cobro. ',
      extraDescription: 'Integra todas tus herramientas esenciales: desde el Botón de Pago y el Enlace de Pago para transacciones rápidas, hasta el <strong>POS Virtual y Whatsapp Banking</strong>. Gestiona todo desde un <strong>Panel Administrativo centralizado</strong>. Con <strong>Checkbank</strong>, haces que cobrar sea fácil y que tu negocio crezca.',
      icon: 'FaStore',
      color: 'text-blue-600'
    },

    {
      id: 4,
      title: 'Módulo de Administración de Créditos y Cobranzas',
      description: '<strong>Agilidad Crediticia con Control Total</strong>. Nuestra <strong>plataforma de Créditos y Cobranzas</strong>, probada por bancos líderes en ',
      extraDescription: '<strong>créditos de automóviles</strong>, <strong>factoring y consumo</strong>, le ofrece la clave para la expansión. Gracias al <strong>módulo paramétrico de producto</strong>, su banco puede definir y lanzar nuevos productos crediticios al mercado con <strong>velocidad récord</strong>. Esto le permite competir ágilmente y garantizar la seguridad de una <strong>solución con historial de éxito comprobado.</strong>',
      icon: 'FaCreditCard',
      color: 'text-blue-600'
    },
    {
      id: 5,
      title: 'Módulo de Financiamiento "Compra Ahora, Paga Después"',
      description: 'Somos la <strong>columna vertebral</strong> tecnológica que permite a las <strong>Fintechs</strong> operar con éxito el modelo de financiación <strong>',
      extraDescription: '"Compra Ahora, Paga Después"</strong> (Buy Now, Pay Later). Nuestra robusta Plataforma de <strong>Créditos y Cobranzas</strong> actúa como un backend paramétrico de alto rendimiento, gestionando de forma eficiente la <strong>administración de créditos</strong>, la originación y la recuperación de cartera"',
      icon: 'FaMoneyBillWave',
      color: 'text-blue-600'
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
      case 'FaSyncAlt': return <FaSyncAlt className={`text-7xl ${color}`} />;
      case 'FaExchangeAlt': return <FaExchangeAlt className={`text-7xl ${color}`} />;
      case 'FaBalanceScale': return <FaBalanceScale className={`text-7xl ${color}`} />;
      case 'FaChartLine': return <FaChartLine className={`text-7xl ${color}`} />;
      case 'FaMoneyBillWave': return <FaMoneyBillWave className={`text-7xl ${color}`} />;
      default: return <FaTachometerAlt className={`text-7xl ${color}`} />;
    }
  };

  return (
    <section id="SolucionesBancariasUno" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
            Soluciones para Bancos - Suite Checkbank®
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            La Plataforma Central que Impulsa la Banca Moderna. Transforme sus operaciones: desde la Conciliación de transacciones de los Canales Electrónicos hasta la Cobranza y la Administración de Créditos
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
              {feature.id === 1 && (
                <button className="mt-4 px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-800">
                  <a
                    href="https://conciliacion.consulbank.com.ve/"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                    className="block text-white w-full h-full"
                  >
                    Conoce Nuestra Plataforma de Conciliación
                  </a>
                </button>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SolucionesBancarias;