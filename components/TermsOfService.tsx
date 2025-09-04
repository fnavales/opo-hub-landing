import React from 'react';

const Section: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
        <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            {children}
        </div>
    </div>
);

const TermsOfService: React.FC = () => {
    const handleGoHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '';
    };

    return (
        <article className="bg-white py-24 sm:py-32">
            <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
                <div className="text-left">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Términos de Uso de OpoHub</h1>
                    <p className="mt-4 text-lg leading-8 text-slate-500">Última actualización: 4 de septiembre de 2025</p>
                </div>

                <div className="mt-12">
                    <p className="text-slate-600 leading-relaxed">Bienvenido a OpoHub. Al acceder o utilizar nuestro sitio web y servicios, aceptas cumplir y estar sujeto a estos Términos de Uso. Si no estás de acuerdo con alguno de los términos aquí descritos, te recomendamos no utilizar nuestros servicios.</p>

                    <Section title="1. Uso de la plataforma">
                        <p>OpoHub proporciona información, herramientas y servicios relacionados con la preparación de oposiciones de educación infantil mediante la generación de casos prácticos con IA.</p>
                        <p>Al utilizar nuestra plataforma, te comprometes a:</p>
                         <ul className="list-disc list-inside space-y-2">
                            <li>Usar los servicios de manera legal, ética y conforme a estos Términos de Uso.</li>
                            <li>No intentar acceder, interferir o dañar el funcionamiento de OpoHub o de sus sistemas.</li>
                        </ul>
                    </Section>

                    <Section title="2. Registro y cuentas de usuario">
                        <p>Al registrarte, proporcionas información veraz, completa y actualizada.</p>
                        <p>Eres responsable de mantener la confidencialidad de tus credenciales y de todas las actividades realizadas bajo tu cuenta.</p>
                    </Section>

                    <Section title="3. Propiedad intelectual">
                        <p>Todo el contenido disponible en OpoHub, incluyendo textos, gráficos, logotipos, imágenes, software y demás materiales, es propiedad de OpoHub o de sus licenciantes y está protegido por leyes de propiedad intelectual.</p>
                        <p>No se permite copiar, reproducir, distribuir, modificar o crear trabajos derivados sin autorización expresa.</p>
                    </Section>

                    <Section title="4. Privacidad y protección de datos">
                       <p>Tu privacidad es importante para nosotros. La información recopilada se rige por nuestra Política de Privacidad, disponible en nuestro sitio web.</p>
                       <p>OpoHub no comparte datos personales con terceros, garantizando la confidencialidad de tu información.</p>
                    </Section>
                    
                    <Section title="5. Contenido generado por usuarios">
                        <p>Si publicas contenido en OpoHub, otorgas a OpoHub una licencia no exclusiva, libre de regalías y transferible para usar, reproducir, modificar y mostrar dicho contenido únicamente con fines de prestación de servicios.</p>
                        <p>Eres responsable de que tu contenido no infrinja derechos de terceros, sea legal y adecuado para su publicación.</p>
                    </Section>

                     <Section title="6. Limitación de responsabilidad">
                        <p>OpoHub no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso de la plataforma.</p>
                        <p>Los servicios se proporcionan “tal cual” y “según disponibilidad”, sin garantías explícitas de funcionamiento continuo o ausencia de errores.</p>
                    </Section>

                    <Section title="7. Modificaciones y terminación">
                        <p>OpoHub se reserva el derecho de modificar estos Términos de Uso en cualquier momento.</p>
                        <p>El uso continuado de la plataforma después de dichas modificaciones implica la aceptación de los nuevos términos.</p>
                        <p>Podemos suspender o terminar tu acceso a OpoHub si se detecta un incumplimiento de estos términos.</p>
                    </Section>

                    <Section title="8. Ley aplicable y jurisdicción">
                        <p>Estos Términos de Uso se rigen por las leyes del país donde OpoHub tenga su sede. Cualquier disputa relacionada con el uso de la plataforma será sometida a los tribunales competentes de dicha jurisdicción.</p>
                    </Section>

                     <div className="mt-16 text-center">
                        <a href="#" onClick={handleGoHome} className="inline-block rounded-full bg-orange-500 px-8 py-3 text-lg font-semibold text-white shadow-md transition-all transform border-b-4 border-orange-700 hover:bg-orange-600 hover:-translate-y-0.5 active:bg-orange-700 active:border-b-0 active:translate-y-0">Volver al inicio</a>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default TermsOfService;