import React from 'react';



const Mision: React.FC = () => {
    return (
        <section className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/mision.png')" }}>

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            {/* Contenido */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Misión</h2>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                           Nuestra misión es ofrecer soluciones de calidad a nuestros clientes a través de la integración, el diseño y el desarrollo de sistemas a la medida.
                        </p>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                           Nos esforzamos por empoderar a nuestros clientes con productos innovadores y una amplia conectividad con los principales "cores" y "suiches" bancarios del mercado , asegurando que sus proyectos sean ejecutados con la experiencia certificada de nuestro equipo.
                        </p>
                        
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Mision;