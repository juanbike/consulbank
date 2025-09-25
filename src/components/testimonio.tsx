import React from 'react';

const TestimonialsModule = () => {
  const testimonials = [
    {
      name: "Juan Carlos",
      position: "CEO de TechCorp",
      content: "ConsultBank ha revolucionado por completo nuestra gestión financiera. Hemos reducido un 85% el tiempo de conciliación y hemos eliminado por completo los errores operativos.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      position: "Directora Financiera de GlobalGroup",
      content: "La plataforma es increíblemente intuitiva y el soporte técnico es excepcional. Sin duda, la mejor solución financiera que hemos implementado.",
      rating: 5
    },
    {
      name: "Pedro Lopez",
      position: "Gerente de Operaciones de FinancePro",
      content: "ConsultBank es nuestro socio estratégico de confianza. Su seguridad y fiabilidad nos han permitido crecer con total tranquilidad.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Qué Dicen Nuestros Clientes?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiencias reales de empresas que confían en nosotros
          </p>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-1"
            >
              {/* Estrellas */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Comentario */}
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Info del Cliente */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105">
            Únete a Nuestros Clientes Satisfechos
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsModule;