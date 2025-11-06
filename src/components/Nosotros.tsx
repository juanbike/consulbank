import { Network, Landmark, ShieldCheck, Users, BarChart3, Smartphone } from "lucide-react"
import { useTranslation } from 'react-i18next';



const Nosotros = () => {
  const { t, i18n } = useTranslation(); // Initialize translation hook
  const handleClick = () => {
    // Ejemplo de cómo cambiar el idioma desde cualquier componente
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const features = [
    {
    icon: <Network className="h-8 w-8" />,
    title: t('features.feature1.title'),
    description: t('features.feature1.description'),
    color: "bg-blue-500"
  },
  {
    icon: <Landmark className="h-8 w-8" />,
    title: t('features.feature2.title'),
    description: t('features.feature2.description'),
    color: "bg-green-500"
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: t('features.feature3.title'),
    description: t('features.feature3.description'),
    color: "bg-purple-500"
  },
  
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900" id="caracteristicas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={`feature-${index}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-lg text-white mb-6`}>
                {feature.icon}
              </div>

                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight dark:text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default Nosotros
