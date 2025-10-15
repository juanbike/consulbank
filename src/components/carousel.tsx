import React, { useState, useEffect } from 'react';

const SingleCardCarouselAdaptiveContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
  
	
	{
	  title: "Cierre Centralizado de Operaciones Electrónicas Interbancarias.",
      description: "Facilita la transferencia y compensación electrónica de fondos entre bancos, manejando cargas de trabajo intensivas y datos escalables. Esta solución asegura la precisión y eficiencia en el procesamiento de transacciones financieras, optimizando las operaciones bancarias diarias.",
      image: "images/cierrecentralizado.png",
      color: "from-indigo-500 to-indigo-600",
      features: ["2023-2025"] 
	}, 
	{
      title: "Conciliación de Transacciones Electrónicas Bancarias",
      description: "Nuestra solución de conciliación electrónica optimiza la gestión financiera al garantizar una precisión inigualable. Esta se logra al sincronizar cada movimiento monetario entre los registros internos y la facturación de proveedores.",
      image: "images/conciliacion.png",
      color: "from-indigo-500 to-indigo-600",
      features: ["2023-2025"] 
    },
	
	{
      title: "Emprendimiento Tecnológico",
      description: "Checkbank funciona como una herramienta integral que facilita las operaciones diarias de los comerciantes, incorporando diversas funciones esenciales. Estas incluyen un botón y un enlace de pago, un POS virtual y un panel administrativo. Todas estas características están diseñadas para optimizar la gestión de pagos y cobros en pequeños negocios.",
      image: "images/checkbank.jpg",
      color: "from-indigo-500 to-indigo-600",
      features: ["2021"] 
    },
	{
      title: "Reconversión Monetaria",
      description: "Adaptación de las operaciones activas y pasivas del banco para que refleje el nuevo cono monetario.",
      image: "images/bancodeltesoro.png",
      color: "from-indigo-500 to-indigo-600",
      features: ["2017"] 
    },
	{
      title: "Fusión Bancos",
      description: "Se implemento una migración del Banco Caroní al Banco Guayana.",
      image: "images/bancoguayana.png",
      color: "from-yellow-500 to-yellow-600",
      features: ["2015"] 
	},
	{
      title: "Transformación Digital",
      description: "Implementamos la aplicación Atomos Sudeban para Bamplus, BFC, Banca Amiga.",
      image: "images/bfc.png",
      color: "from-red-500 to-red-600",
      features: ["2010"] 
    },
	{
      title: "Innovación Bancaria",
      description: "Reconversión Monetaria: Desarrollamos soluciones tecnológicas para facilitar la transición durante la reconversión monetaria en Venezuela, asegurando la continuidad operativa de nuestros clientes: Banco Sofitasa, Banco Guayana, Banco Caroní y Banco del Tesoro.",
      image: "images/sofitasa.png",
      color: "from-purple-500 to-purple-600",
      features: ["2007"] 
    },
	{
      title: "Innovación Bancaria",
      description: "Lanzamos la aplicación de Conciliación de Transacciones Electrónicas y Medios de Pago para el Banco del Tesoro, Bamplus, BFC, Banco Guayana, Banco Caroní ",
      image: "images/bamplus.png",
      color: "from-green-500 to-green-600",
      features: ["2005"] 
    },
	{
      title: "Innovación Bancaria",
      description: "Se crean varios SISTEMAS DE CRÉDITO: Cremerca - Sistema de Crédito al Consumo. Banco Industrial - Sistema de Factoring. Banco Federal - Sistema de Crédito. Banco Consolidado: Sistema de Crédito Hipotecario. Sociedad Financiera - Sistema de Crédito", 
      image: "images/bancoconsolidado.png",
      color: "from-green-500 to-green-600",
      features: ["2000"] 
    },
	{
      title: "Nace Consulbank",
      description: "Implementamos la App de Administración de Créditos y Cobranzas para Banco Guayana y Banco Federal. (Aplicación de crédito y cobranza para clientes naturales o juridicos) marcando el inicio de nuestra trayectoria en innovación financiera.",
      image: "images/bancoguayana.png",
      color: "from-blue-500 to-blue-600",
      features: ["1998"] 
    },
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
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestra trayectoria en innovación financiera
          </h2>
          <p className="text-xl text-gray-600">
            Descubre cómo nuestras soluciones transforman la banca tradicional
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative">
          {/* Contenedor principal */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
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
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          {card.title}
                        </h3>
                        
                        {/* Descripción */}
                        <p className="text-lg text-gray-600 mb-8">
                          {card.description}
                        </p>
                        
                        {/* Características */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                          {card.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Botón */}
                        <button className={`bg-gradient-to-r ${card.color} text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 self-start`}>
                          Conocer Más
                        </button>
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 z-10"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 z-10"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores (dots) */}
          <div className="flex justify-center mt-8 space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCardCarouselAdaptiveContainer;