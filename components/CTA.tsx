import React, { useState } from 'react';

const CTA: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('Ha ocurrido un error. Inténtalo de nuevo.');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email || !email.includes('@')) {
            setErrorMessage('Por favor, introduce un correo válido.');
            setStatus('error');
            return;
        }
        
        setStatus('submitting');
        setErrorMessage('');

        try {
            // IMPORTANTE: Reemplaza esta URL con tu propio endpoint de Formspree.
            // Ve a https://formspree.io/ para crear un formulario y obtener tu URL.
            const response = await fetch('https://formspree.io/f/mgvlpkly', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
            } else {
                const data = await response.json();
                if (data.errors) {
                    setErrorMessage(data.errors.map((error: { message: string }) => error.message).join(', '));
                } else {
                    setErrorMessage('Ha ocurrido un error al enviar el formulario.');
                }
                setStatus('error');
            }
        } catch (error) {
            setErrorMessage('Error de red. Por favor, comprueba tu conexión.');
            setStatus('error');
        }
    };

    return (
        <section id="cta" className="py-20 bg-teal-700 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold">
                    Sé el primero en probar OpoHub
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-teal-100">
                    Únete a nuestra lista de espera y recibe acceso prioritario a la beta, además de contenido exclusivo para tu preparación y danos tu opinión.
                </p>
                
                {status !== 'success' ? (
                    <form onSubmit={handleSubmit} className="mt-10 max-w-xl mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <input
                                id="email-input"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (status !== 'submitting') setStatus('idle');
                                }}
                                placeholder="Tu correo electrónico"
                                aria-label="Tu correo electrónico"
                                className="w-full flex-grow px-6 py-3 rounded-full text-slate-800 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                                required
                            />
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full sm:w-auto flex-shrink-0 bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all transform border-b-4 border-orange-700 hover:bg-orange-600 hover:-translate-y-0.5 active:bg-orange-700 active:border-b-0 active:translate-y-0 disabled:bg-orange-300 disabled:cursor-wait disabled:border-b-0"
                            >
                                {status === 'submitting' ? 'Enviando...' : 'Unirme a la lista'}
                            </button>
                        </div>
                        {status === 'error' && (
                           <p className="mt-4 text-yellow-300 font-medium">{errorMessage}</p>
                       )}
                    </form>
                ) : (
                    <div className="mt-10 text-center bg-green-500/80 text-white p-4 rounded-lg max-w-md mx-auto shadow-lg">
                        <p className="font-bold text-lg">¡Gracias por registrarte!</p>
                        <p>Te avisaremos en cuanto OpoHub esté disponible.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CTA;