import React from 'react';

const Conciliaicon: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Imagen izquierda */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/conciliacion2.png"
                alt="Mujer en oficina bancaria" 
                className="w-full h-auto object-cover"
              />
              
            </div>
          </div>
          
          {/* Contenido derecho */}
          <div className="w-full md:w-1/2">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center font-sans bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Conciliación Bancaria Inteligente 
              </h2>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center font-sans bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Precisión y Eficiencia en tus Operaciones
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2 text-center font-sans">
                   La solución avanzada de ConsulBank para automatizar y optimizar la reconciliación de transacciones financieras.
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300">
                  El sistema de Conciliación Bancaria de ConsulBank automatiza la comparación de transacciones internas y extractos bancarios en tiempo real. Utiliza algoritmos inteligentes para identificar discrepancias, resolver inconsistencias y generar reportes precisos (99.8%). Procesa miles de transacciones por minuto, reduciendo el tiempo de conciliación en un 85% y minimizando errores humanos. Su interfaz intuitiva permite el seguimiento completo, garantizando cumplimiento normativo. Se integra con los sistemas de ConsulBank para una conciliación ágil y segura.

                  </p>
                </div>
                {/*
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    FACEBANK
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      Calidad de préstamos excepcional con tasas competitivas.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Ventaja regional sin necesidad de garantías o抵押品.
                    </p>
                  </div>
                </div>
                */}
              </div>
              
              <button className="mt-8 bg-blue-400 hover:bg-blue-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
                <a
                  href="https://conciliacion.consulbank.com.ve/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-900 no-underline"
                >
                  Saber más
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conciliaicon;