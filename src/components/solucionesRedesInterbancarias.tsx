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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SolucionesRedesInterbancarias = () => {
  const features: (Feature & { color: string, extraDescription?: string })[] = [
    {
      id: 1,
      title: 'La base tecnológica robusta y escalable que garantiza la operación de su red interbancaria',
      description: 'Nuestra plataforma ofrece las <strong>Soluciones para Redes Interbancarias</strong> que garantizan el <strong>Control Total de Compensación y Liquidación.</strong> Automatizamos todas las actividades interbancarias esenciales, lo que incluye la <strong>conciliación de transacciones interbancarias</strong> y la interconexión con redes externas. ',
      extraDescription:'Además, gestionamos con precisión la <strong>transferencia de fondos</strong> y la <strong>compensación</strong> de las transacciones el proceso de <strong>liquidación.</strong> La solución integra el <strong>cálculo automatizado de comisiones</strong> para los bancos participantes y facilita el <strong>envío de la posición al ente regulador</strong> (Banco Central/LBTR). ',
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
    <section id="caracteristicas" className="py-20 bg-white dark:bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
          Soluciones para Redes Interbancarias - Suite Checkbank®
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
          Plataforma Core para la Red Interbancaria Digital.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img src="/images/redesInterbancarias.png" alt="Compensación Centralizada" className="rounded-lg shadow-lg h-full object-cover" />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group transform hover:scale-105 w-full dark:bg-gray-800 dark:hover:bg-gray-700"
              >


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
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105 dark:bg-blue-700 dark:hover:bg-blue-800">
          <a
            href="https://cierrecentralizado.consulbank.com.ve/"
            target="_blank"
            rel="noopener noreferrer"
            // Se añaden clases para que el enlace ocupe todo el botón y herede el color de texto
            className="block text-white w-full h-full"
          >
            Conoce Nuestra Plataforma de Cierre Centralizado
          </a>
        </button>
      </div>

    </section>

  );
};

export default SolucionesRedesInterbancarias;