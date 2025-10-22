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
  FaMoneyBillWave,
  FaBitcoin
} from 'react-icons/fa';

const SolucionesComercios = () => {
  const features: (Feature & { color: string })[] = [
    {
      id: 1,
      title: 'Suite Checkbank® Comercios: Maximiza tus Ventas Omnicanal.',
      description: '<strong>Suite Checkbank</strong> es la plataforma digital <strong>omnicanal</strong> diseñada para impulsar las ventas de tu comercio y facilitar cada cobro. Integra todas tus herramientas esenciales: desde el Botón de Pago y el Enlace de Pago para transacciones rápidas, hasta el <strong>POS Virtual y Whatsapp Banking</strong>. Gestiona todo desde un <strong>Panel Administrativo centralizado</strong>. Con <strong>Checkbank</strong>, haces que cobrar sea fácil y que tu negocio crezca.',
      icon: 'FaShoppingCart',
      color: 'text-orange-600'
    },
    {
      id: 2,
      title: 'Suite Checkbank® CriptoCobros',
      description: '<strong>Checkbank®</strong> permite a comercios corporativos <strong>cobrar y preservar valor en activos digitales</strong> estables, protegiendo sus balances de la devaluación. Con una </strong>conciliación automatizada</strong> y plena trazabilidad, no solo garantiza el cumplimiento, sino que abre una nueva y lucrativa fuente de ingresos, asegurando el liderazgo de su institución en la economía del futuro.',
      icon: 'FaBitcoin',
      color: 'text-orange-600'
    },
    {
      id: 3,
      title: 'Suite Checkbank® Créditos: Backend para el Modelo "Compra Ahora, Paga Después"',
      description: 'Nuestra Plataforma de Créditos y Cobranzas es el <strong>backend paramétrico y robusto</strong> que impulsa el modelo <strong>Buy Now, Pay Later (BNPL)</strong> en Fintechs (estilo Cashea). Esta arquitectura les permite <strong>lanzar en minutos</strong> esquemas de <strong>financiamiento a corto plazo</strong> y asegurar una <strong>integración rápida</strong> con la banca. Al usar nuestra plataforma, sus clientes tecnológicos obtienen la <strong>seguridad y escalabilidad bancaria</strong> para ofrecer la velocidad del crédito instantáneo <strong>directamente en el punto de venta</strong> al consumidor final.',
      icon: 'FaCreditCard',
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
      case 'FaSyncAlt': return <FaSyncAlt className={`text-7xl ${color}`} />;
      case 'FaExchangeAlt': return <FaExchangeAlt className={`text-7xl ${color}`} />;
      case 'FaBalanceScale': return <FaBalanceScale className={`text-7xl ${color}`} />;
      case 'FaChartLine': return <FaChartLine className={`text-7xl ${color}`} />;
      case 'FaMoneyBillWave': return <FaMoneyBillWave className={`text-7xl ${color}`} />;
      case 'FaBitcoin': return <FaBitcoin className={`text-7xl ${color}`} />;
      default: return <FaTachometerAlt className={`text-7xl ${color}`} />;
    }
  };

  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Soluciones para Comercios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Impulsa las ventas de tu comercio con nuestras soluciones omnicanal diseñadas para facilitar cada cobro y maximizar tu crecimiento.
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

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: feature.description }} />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SolucionesComercios;