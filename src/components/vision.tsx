import React from 'react';



const Vision: React.FC = () => {
    return (
        <section className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/vision.png')" }}>

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            {/* Contenido */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Visión</h2>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                           Nuestra visión es ser líderes en el mercado financiero venezolano, impulsando la transformación continua a través de la innovación en nuestros productos y servicios.
                        </p>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                           Aspiramos a ser el socio estratégico preferido de las empresas, integrando sus operaciones con diversas plataformas y tecnologías para ofrecer soluciones de alto valor, construidas con nuestra experiencia y conocimientos especializados en software e infraestructura
                        </p>
                        
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Vision;