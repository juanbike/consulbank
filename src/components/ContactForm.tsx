import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Send, User, Building, Mail, Phone } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t, i18n } = useTranslation(); // Initialize translation hook
  const handleClick = () => {
    // Ejemplo de cómo cambiar el idioma desde cualquier componente
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  //Crea una variable de estado (formData) que almacena los datos de un formulario. También crea una función (setFormData) para actualizar ese estado.

  {
    /* ***********Crea una variable de estado - Form************** 
      const [formData, setFormData] = useState({
        fullName: "",
        company: "",
        email: "",
        phone: "",
      });
  */
  }

  ///Crea una variable de estado (isSubmitted) que indica si el formulario ha sido enviado.

  {
    /* ***********Crea una variable de estado (isSubmitted) - Form**************
     const [isSubmitted, setIsSubmitted] = useState(false);
  */
  }

  //Crea una variable de estado (isLoading) que indica si el formulario está siendo enviado.

  {
    /* ***********Crea una variable de estado(isLoading) - Form**************
    const [isLoading, setIsLoading] = useState(false);
   */
  }

  //Crea una variable de estado (errors) que almacena los errores de validación del formulario.

  {
    /* ***********Crea una variable de estado(isLoading) - Form**************
  const [errors, setErrors] = useState<Record<string, string>>({});
  */
  }

  // Función para validar el formulario
  // Esta función verifica que los campos requeridos no estén vacíos y que el correo electrónico tenga un formato válido.
  // Si hay errores, los almacena en el estado 'errors' y devuelve false. Si no hay errores, devuelve true.

  {
    /* ***********Crea una función (validateForm) -
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "El nombre completo es obligatorio";
    }

    if (!formData.company.trim()) {
      newErrors.company = "La empresa es obligatoria";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingrese un correo electrónico válido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  */
  }

  // Función para manejar el envío del formulario y el envío de datos a la API
  // Esta función se ejecuta cuando el usuario envía el formulario. Verifica si el formulario es válido y luego simula una llamada a una API para enviar los datos.
  // Si la llamada a la API es exitosa, establece el estado 'isSubmitted' en true para mostrar un mensaje de éxito.
  // Después de 3 segundos, establece el estado 'isSubmitted' en false y restablece el formulario.
  // Durante el envío, establece 'isLoading' en true para mostrar un indicador de carga.
  // Si hay errores de validación, no se envían los datos y se muestran los mensajes de error.

  {
    /* ***********Crea una función (handleSubmit) - Form**************
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ fullName: "", company: "", email: "", phone: "" });
      }, 3000);
    }, 1500);
  };
  */
  }

  // Función para manejar los cambios en los campos del formulario
  // Esta función se ejecuta cada vez que el usuario escribe en un campo del formulario. Actualiza el estado 'formData' con los nuevos valores y borra los errores de validación si el usuario comienza a escribir en un campo.
  // Si hay errores de validación, se muestran los mensajes de error correspondientes.
  // Se utiliza el evento 'onChange' de los campos de entrada para llamar a esta función.
  // Esto permite que el formulario sea reactivo y muestre los errores en tiempo real mientras
  // el usuario interactúa con él.
  // También se asegura de que los errores se borren cuando el usuario comienza a escribir en un campo.
  // Esto mejora la experiencia del usuario al evitar que los mensajes de error persistan una vez que el usuario comienza a corregirlos.
  // Además, se utiliza el evento 'onChange' de los campos de entrada para llamar to this function.
  // Esto permite que el formulario sea reactivo y muestre los errores en tiempo real mientras
  // el usuario interactua con el.
  // formulario.
  // Esto mejora la experiencia del usuario al evitar que los mensajes de error persistan una vez
  // que el usuario comienza a corregirlos.
  // También se asegura de que los errores se borren cuando el usuario comienza a escribir en un
  // campo. Esto mejora la experiencia del usuario al evitar que los mensajes de error persistan una
  // vez que el usuario comienza a corregirlos.

  {
    /* ***********Crea una función (handleChange) - Form**************
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  */
  }

  // Si el formulario ha sido enviado, muestra un mensaje de éxito
  // Si 'isSubmitted' es true, se muestra una sección con un mensaje de éxito
  // que indica que la solicitud se ha enviado correctamente.
  // Este mensaje incluye un ícono de verificación y una lista de los próximos pasos. Este mensaje
  // proporciona retroalimentación al usuario sobre el estado de su solicitud.

  {
    /* ***********Crea una función (handleChange) - Form**************
  if (isSubmitted) {
    return (
      <section className="py-20 bg-white dark:bg-gray-900" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 dark:bg-green-900/50 dark:border-green-800">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-green-800 mb-4 dark:text-green-300">
                ¡Solicitud Enviada Exitosamente!
              </h3>
              <p className="text-green-700 text-lg mb-6 dark:text-green-400">
                Gracias por su interés en nuestro Sistema de Cierre Centralizado
                Bancario.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-sm dark:bg-gray-800">
                <h4 className="font-semibold text-gray-900 mb-3 dark:text-white">
                  Próximos Pasos:
                </h4>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div>
                    ✅ Nuestro equipo revisará su solicitud en las próximas 2
                    horas
                  </div>
                  <div>
                    📞 Lo contactaremos para agendar una demo personalizada
                  </div>
                  <div>
                    🎯 Prepararemos una propuesta adaptada a sus necesidades
                  </div>
                  <div>⚡ Tiempo estimado de respuesta: Menos de 24 horas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  */
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* **********Left Column - Information********** */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                {t("contactTitle")}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed dark:text-gray-300">
                {t("contactSubTitle")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center dark:bg-blue-900/50">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("contactTitleOne")}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-gray-400">
                    {t("contactSubTitleOne")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center dark:bg-green-900/50">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("contactTitleTwo")}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-gray-400">
                    {t("contactSubTitleTwo")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center dark:bg-purple-900/50">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("contactTitleThree")}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-gray-400">
                    {t("contactSubTitleThree")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 dark:bg-blue-900/50">
              <h3 className="font-bold text-blue-900 mb-3 dark:text-blue-200">
                {" "}
                {t("chooseTitle")}
              </h3>
              <div className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
                <div>🏆 {t("chooseSubTitleOne")}</div>
                <div>🔧 {t("chooseSubTitleTwo")}</div>
                <div>⚡ {t("chooseSubTitleThree")}</div>
                <div>✅ {t("chooseSubTitleFour")}</div>
                <div>🚀 {t("chooseSubTitleFive")}</div>
              </div>
            </div>
          </div>

          {/* ***********Right Column - Form************** */}
          <section id="contacto"      className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-12 px-4 rounded-xl shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              {/* Título del CTA */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                
                 {t("contactFormL1")}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
               {t("contactFormL2")}
              </p>

              {/* Botones de contacto */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2"></h3>
                <a
                    href="https://wa.me/13054001178" // ← Formato internacional para WhatsApp
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-blue-500 hover:text-blue-700 transition-colors duration-300 mb-2 dark:text-blue-400 dark:hover:text-blue-500"
                  >
                  <img
                    src="/images/whatsapp.webp"
                    alt="WhatsApp"
                    className="h-24 w-24 mb-2"
                  />
                  {t("contactFormL4")}
                </a>
              </div>
              

              {/* Sección para España */}
              

              {/* Sección para correo electrónico */}

              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2"></h3>
                <a
                  href="mailto:info@consulbank.com.ve"
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-300 flex flex-col items-center dark:text-blue-400 dark:hover:text-blue-500"
                >
                  <img
                    src="/images/email.webp"
                    alt="Email"
                    className="h-24 w-24 mb-2"
                  />
                  {t("contactFormL6")}
                </a>
              </div>
              
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
