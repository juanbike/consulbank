import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SingleCardCarouselAdaptiveContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [


    {
      title: 'Cierre Centralizado de Operaciones Electrónicas Interbancarias.',
      description: '<strong>Proyecto de Éxito Ejecutado (2023-2025)</strong>. Hemos completado con éxito la implementación del sistema <strong>SCCC</strong>, redefiniendo la <strong>compensación y transferencia electrónica de fondos</strong> entre entidades bancarias.',
      extraDescription: '<strong>Magnitud del Impacto:</strong> La infraestructura del SCCCoporta una porción crítica de la economía digital. La red procesa en promedio <strong>60 millones de transacciones mensuales</strong>, lo que se traduce en <strong>aproximadamente 3 millones de transacciones diarias.<strong> <strong>Liderazgo y Capacidad:</strong> Este sistema robusto y escalable está diseñado para gestionar cargas de trabajo intensivas con total <strong>precisión y eficiencia.</strong> Actualmente, su red procesa el <strong>40% del total de transacciones del país</strong> en modalidades <strong>P2P</strong> (Persona a Persona), <strong>P2C</strong> (Persona a Comercio) y <strong>C2P</strong> (Comercio a Persona), asegurando la alta fiabilidad de las operaciones financieras diarias.',
      image: 'images/logoConexusVigente.png',
      color: 'from-indigo-500 to-indigo-600',
      features: ["2023-2025"]
    },
    
    {
      title: "Transformación Digital",
      description: "<strong>¡Proyecto Finalizado con Éxito en BFC Banco Fondo Común! </strong>Implementamos <strong>Checkbank</strong>, una plataforma tecnológica Multi-Moneda diseñada para potenciar la adquirencia del Banco BFC, con un fuerte enfoque humanista e inclusivo. Checkbank es una solución <strong>innovadora, disruptiva y única</strong> que rompe las barreras de los sistemas tradicionales. Está estratégicamente <strong>dirigida a Comercios e Instituciones de todos los sectores</strong> para trabajar con <strong>múltiples canales de pago</strong>, y está al servicio de un amplio espectro de la población, incluyendo <strong>sectores no bancarizados</strong>, Personas Naturales, Firmas Personales y Gobierno. ",
      extraDescription: '<strong>Características Clave:</strong> <strong>•	Experiencia Disruptiva: </strong>Integra medios de pago como <strong>P2P, P2C, C2P y C2C</strong> con la simplicidad de la <strong>tecnología QR.</strong> </strong>•	Flexibilidad Financiera: Los usuarios definen la cuenta de débito, y los comercios eligen el banco para la recaudación. <strong>•	Canales de Vanguardia (Omnicanal):</strong> La plataforma soporta una amplia gama de canales de pago digitales, incluyendo: <strong>•	WhatsApp Banking</strong> (ChatBOT como Punto de Venta virtual) <strong>•	Botón de Pago (E-Commerce)</strong> <strong>•	Enlace de Pago</strong> <strong>•	POS Virtual</strong> <strong>•	App Móvil (PP Móvil)</strong> Su robusto servidor central garantiza el efectivo control con indicadores de gestión de la transaccionalidad, la seguridad y la escalabilidad del servicio.',
      image: "images/bfc.png",
      color: "from-indigo-500 to-indigo-600",
      features: ["2022"]

    },

    {
      title: "Conciliación de transacciones Electrónicas",
      description: "<strong>¡Eficiencia Operativa Elevada!</strong> Hemos implementado exitosamente el proyecto <strong>Fondo Común</strong>, una solución estratégica diseñada para garantizar la <strong>verificación y certificación de alto rendimiento</strong> de todas las transacciones generadas en los canales y medios de pago del Banco BFC. Este sistema es un pilar de la gestión de riesgos y la eficiencia operativa. <strong>Logros y Capacidad:</strong> <strong>•	Precisión Superior:</strong> Opera con una <strong>precisión comprobada del 99.8%</strong> en la certificación de transacciones. <strong>•	Velocidad Extrema: </strong>Procesa <strong>miles de transacciones por minuto</strong>, ",
      extraDescription: 'lo que permite una <strong>reducción del tiempo de conciliación en un 95%.</strong> <strong>•	Inteligencia de Riesgo:</strong> Es una herramienta esencial para <strong>mitigar el riesgo reputacional</strong> al identificar y resolver inmediatamente posibles reclamos. </strong>•	Optimización Continua: </strong>Proporciona inteligencia valiosa para mejorar continuamente el funcionamiento y rendimiento de cada medio de pago del banco. Fondo Común asegura operaciones impecables, brindando confianza y eficiencia a la gestión diaria del banco.',
      image: "images/bfc.png",
      color: "from-indigo-500 to-indigo-600",
      features: ["2022"]
    },
    {
      title: "Cumplimiento Regulatorio Átomos Sudeban - Bancamiga",
      description: "El Banco <strong>Bancamiga</strong> implementó <strong>CheckBank</strong> para revolucionar su cumplimiento regulatorio. <strong>CheckBank</strong> automatizó la captura y validación de los archivos Átomos, aplicando en <strong>tiempo real</strong> todas las reglas de SUDEBAN. <strong>Resultados Clave:</strong> <strong>•	Reducción Extrema de Tiempos:</strong> Simplificación total del proceso de validación. <strong>•	Precisión Garantizada: </strong>Reportes de Errores (Forma, Fondo y Cuadre Contable) generados al instante. <strong>•	Cero Rechazos Recurrentes: </strong>Eliminación de las devoluciones de SUDEBAN, asegurando la entrega a la primera. ",
      extraDescription: ' <strong>CheckBank transformó la gestión de Átomos en Bancamiga, pasando de un proceso complejo a una operación de cumplimiento rápida y totalmente precisa.</strong>',
      image: "images/bancaamiga.png",
      color: "from-indigo-500 to-indigo-600",
      features: ["2021"]
    },
    {
      title: "Cumplimiento Regulatorio Átomos Sudeban - Bamplus",
      description: "El Banco <strong>Bamplus</strong> implementó <strong>CheckBank</strong> para revolucionar su cumplimiento regulatorio. <strong>CheckBank</strong> automatizó la captura y validación de los archivos Átomos, aplicando en <strong>tiempo real</strong> todas las reglas de SUDEBAN. <strong>Resultados Clave:</strong> <strong>•	Reducción Extrema de Tiempos:</strong> Simplificación total del proceso de validación. <strong>•	Precisión Garantizada: </strong>Reportes de Errores (Forma, Fondo y Cuadre Contable) generados al instante. <strong>•	Cero Rechazos Recurrentes: </strong>Eliminación de las devoluciones de SUDEBAN, asegurando la entrega a la primera.",
      extraDescription: '<strong>CheckBank transformó la gestión de Átomos en Bancamiga, pasando de un proceso complejo a una operación de cumplimiento rápida y totalmente precisa.</strong>',
      image: "images/bamplus.png",
      color: "from-yellow-500 to-yellow-600",
      features: ["2019"]
    },

    {
      title: "Conciliación de transacciones Electrónicas en Banplus",
      description: "🚀 <strong>Éxito 2015: Conciliación de Transacciones Electrónicas en Banplus</strong> <strong>¡Eficiencia Operativa Elevada!</strong> El Banco <strong>Banplus</strong> implementó exitosamente su solución estratégica de <strong>Conciliación de Transacciones Electrónicas</strong>, diseñada para garantizar la verificación y certificación de alto rendimiento de todas las transacciones generadas en canales clave, incluyendo <strong>Puntos de Venta, Pago Móvil y ATM (Cajeros Automáticos).</strong> Este sistema es un pilar fundamental para la gestión de riesgos y la eficiencia operativa del banco. <strong>Logros y Capacidades Destacadas</strong> ",
      extraDescription: 'La solución opera con una <strong>precisión superior comprobada del 99.8%</strong> en la certificación de transacciones, estableciendo un nuevo estándar de fiabilidad. Respecto a la velocidad, el sistema procesa miles de transacciones por minuto, lo que ha permitido una <strong>reducción del tiempo de conciliación en un impresionante 95%.</strong> Además de la velocidad y precisión, esta herramienta es esencial para la <strong>Inteligencia de Riesgo</strong>, ya que ayuda a mitigar el riesgo reputacional al identificar y resolver inmediatamente posibles reclamos. Finalmente, el sistema ofrece <strong>Optimización Continua</strong> al proporcionar inteligencia valiosa que mejora constantemente el funcionamiento y rendimiento de cada medio de pago del banco. <strong>Conclusión:</strong> La Conciliación de Transacciones Electrónicas asegura operaciones <strong>impecables</strong> en Puntos de Venta, Pago Móvil y ATM, brindando <strong>confianza y eficiencia</strong> a la gestión diaria del Banco Banplus.',
      image: "images/bamplus.png",
      color: "from-green-500 to-green-600",
      features: ["2005"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="trayectoria" >
      <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">
              Nuestra Trayectoria en Innovación Financiera
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Descubre Cómo Nuestras Soluciones Transforman la Banca Tradicional
            </p>
          </div>

          {/* Carrusel */}
          <div className="relative">
            {/* Contenedor principal */}
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-800">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Lado izquierdo - Imagen con contenedor adaptativo */}
                      <div className="w-full">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-auto"
                        />
                      </div>

                      {/* Lado derecho - Contenido */}
                      <div className="p-8 md:p-12">
                        <div className="h-full flex flex-col justify-center">
                          {/* Título */}
                          <h3 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
                            {card.title}
                          </h3>

                          {/* Descripción */}
                          <p className="text-gray-600 leading-relaxed text-justify dark:text-gray-300" dangerouslySetInnerHTML={{ __html: card.description }} />
                          {card.extraDescription && (
                            <Accordion type="single" collapsible>
                              <AccordionItem value="item-1">
                                <AccordionTrigger>Leer más</AccordionTrigger>
                                <AccordionContent>
                                  <p className="text-gray-600 leading-relaxed text-justify dark:text-gray-300" dangerouslySetInnerHTML={{ __html: card.extraDescription }} />
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}
                          {/* Características */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {card.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flechas de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 z-10 dark:bg-gray-700 dark:hover:bg-gray-600"
              aria-label="Anterior"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 z-10 dark:bg-gray-700 dark:hover:bg-gray-600"
              aria-label="Siguiente"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores (dots) */}
            <div className="flex justify-center mt-8 space-x-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
                    }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default SingleCardCarouselAdaptiveContainer;