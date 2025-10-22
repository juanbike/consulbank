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

const SolucionesRedesInterbancarias = () => {
  const features: (Feature & { color: string })[] = [
    {
      id: 1,
      title: 'Nuestra Suite Checkbank® para Redes Interbancarias: Soluciones Integrales',
      description: 'Nuestra plataforma ofrece las <strong>Soluciones para Redes Interbancarias</strong> que garantizan el <strong>Control Total de Compensación y Liquidación.</strong> Automatizamos todas las actividades interbancarias esenciales, lo que incluye la <strong>conciliación de transacciones interbancarias</strong> y la interconexión con redes externas. Además, gestionamos con precisión la <strong>transferencia de fondos</strong> y la <strong>compensación</strong> de las transacciones el proceso de <strong>liquidación.</strong> La solución integra el <strong>cálculo automatizado de comisiones</strong> para los bancos participantes y facilita el <strong>envío de la posición al ente regulador</strong> (Banco Central/LBTR). Con nuestra tecnología, su red obtiene la robustez y la eficiencia necesarias para operar de manera fluida, segura y en estricto <strong>cumplimiento normativo.</strong>',
      icon: 'FaExchangeAlt',
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
      case 'FaBitcoin': return <FaBitcoin className={`text-7xl ${color}`} />;
      default: return <FaTachometerAlt className={`text-7xl ${color}`} />;
    }
  };

  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Soluciones para Redes Interbancarias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plataforma Core para la Red Interbancaria Digital.
          </p>
        </div>

        <div className="flex justify-center gap-8">
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

              <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.description }} />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SolucionesRedesInterbancarias;