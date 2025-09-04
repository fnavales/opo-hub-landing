import React from 'react';

const Section: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
        <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            {children}
        </div>
    </div>
);

const PrivacyPolicy: React.FC = () => {
    const handleGoHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '';
    };

    return (
        <article className="bg-white py-24 sm:py-32">
            <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
                <div className="text-left">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Política de Privacidad de OpoHub</h1>
                    <p className="mt-4 text-lg leading-8 text-slate-500">Última actualización: 4 de septiembre de 2025</p>
                </div>

                <div className="mt-12">
                    <p className="text-slate-600 leading-relaxed">En OpoHub nos comprometemos a proteger la privacidad de nuestros usuarios y a garantizar la seguridad de su información personal. Esta Política de Privacidad explica cómo recopilamos, usamos y resguardamos los datos que nos proporcionas al utilizar nuestro sitio web y servicios.</p>

                    <Section title="1. Recopilación de información">
                        <p>Recopilamos únicamente la información que nos proporcionas de manera voluntaria, como:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Datos de registro (nombre, correo electrónico, contraseña, etc.).</li>
                            <li>Información relacionada con consultas o solicitudes enviadas a través de nuestros canales de contacto.</li>
                        </ul>
                        <p>No recopilamos información sensible sin tu consentimiento explícito.</p>
                    </Section>

                    <Section title="2. Uso de la información">
                        <p>La información que recopilamos se utiliza exclusivamente para:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
                            <li>Gestionar tu cuenta y comunicaciones relacionadas con tu uso de OpoHub.</li>
                            <li>Enviarte notificaciones relevantes, únicamente si has otorgado tu consentimiento previo.</li>
                        </ul>
                    </Section>

                    <Section title="3. Protección de la información">
                        <p>Implementamos medidas de seguridad técnicas, administrativas y físicas adecuadas para proteger tus datos personales frente a pérdida, acceso no autorizado, alteración o divulgación.</p>
                    </Section>

                    <Section title="4. Confidencialidad y no compartición de datos">
                        <p>En OpoHub garantizamos que no compartimos, vendemos ni alquilamos tu información personal a terceros. Todos los datos recopilados son utilizados exclusivamente para fines internos relacionados con la prestación y mejora de nuestros servicios.</p>
                    </Section>
                    
                    <Section title="5. Cookies y tecnologías similares">
                         <p>Nuestro sitio puede utilizar cookies y herramientas de análisis para optimizar la experiencia del usuario y mejorar la funcionalidad del sitio web. Estas tecnologías no recopilan información personal identificable para fines externos.</p>
                    </Section>

                     <Section title="6. Derechos del usuario">
                        <p>Tienes derecho a acceder, rectificar o eliminar tus datos personales en cualquier momento. Para ejercer estos derechos, puedes contactarnos a través del correo electrónico proporcionado en nuestro sitio web.</p>
                    </Section>

                     <Section title="7. Cambios en la Política de Privacidad">
                        <p>Nos reservamos el derecho de actualizar esta política cuando sea necesario. Cualquier cambio será publicado en esta página con la fecha de la última actualización.</p>
                    </Section>

                     <div className="mt-16 text-center">
                        <a href="#" onClick={handleGoHome} className="inline-block rounded-full bg-orange-500 px-8 py-3 text-lg font-semibold text-white shadow-md transition-all transform border-b-4 border-orange-700 hover:bg-orange-600 hover:-translate-y-0.5 active:bg-orange-700 active:border-b-0 active:translate-y-0">Volver al inicio</a>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default PrivacyPolicy;