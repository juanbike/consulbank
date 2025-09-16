import React from 'react';



const AboutSectionV2: React.FC = () => {
    return (
        <section className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            {/* Contenido */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Quienes Somos</h2>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                            Somos una empresa venezolana con más de 25 años de experiencia en el mercado financiero. Estamos dedicados a ofrecer productos de calidad y a integrar soluciones con una amplia cobertura de los diferentes "cores" bancarios como IBS, Paradise y SIAF. Además, tenemos amplia experiencia en la conectividad con diversos "suiches" transaccionales, incluyendo Postilion, Cactus y Cats. Como fábrica de software, nos especializamos en la integración, diseño y desarrollo de sistemas a la medida.
                        </p>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                            Nuestro equipo de expertos tiene experiencia certificada en el manejo de plataformas como IBM Power, web e infraestructuras en la nube , y nos integramos con plataformas de redes sociales como WhatsApp Business, Telegram, Facebook e Instagram
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-400 mb-2">8M+</div>
                                <div className="text-lg text-gray-300">Clientes Activos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                                <div className="text-lg text-gray-300">Países</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                                <div className="text-lg text-gray-300">Uptime</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default AboutSectionV2;