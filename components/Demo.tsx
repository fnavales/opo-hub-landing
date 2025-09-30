import React from 'react';

const FormField: React.FC<{ label: string; children: React.ReactNode; className?: string }> = ({ label, children, className }) => (
    <div className={`mb-4 ${className}`}>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
            {label}
        </label>
        {children}
    </div>
);


const Demo: React.FC = () => {
    return (
        <section id="demo" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        Personalización al <span className="text-orange-500">detalle</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Visualiza cómo puedes ajustar cada parámetro para crear el caso práctico perfecto.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-gray-50">
                        <span className="h-3.5 w-3.5 bg-red-400 rounded-full border border-red-500/50"></span>
                        <span className="h-3.5 w-3.5 bg-yellow-400 rounded-full border border-yellow-500/50"></span>
                        <span className="h-3.5 w-3.5 bg-green-400 rounded-full border border-green-500/50"></span>
                    </div>

                    <div className="p-4 sm:p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            
                            {/* Left Column: Controls */}
                            <div className="md:col-span-2 p-6 bg-gray-50/70 rounded-xl border border-gray-200 pointer-events-none opacity-75">
                                <h3 className="text-xl font-bold text-slate-800 mb-6">Personaliza tu caso</h3>
                                
                                <FormField label="Tema del caso práctico">
                                    <input type="text" value="Resolución de conflictos" className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm" readOnly />
                                </FormField>
                                
                                <FormField label="Edad del alumnado">
                                    <select className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm">
                                        <option>3 - 4 años</option>
                                        <option selected>4 - 5 años</option>
                                        <option>5 - 6 años</option>
                                    </select>
                                </FormField>

                                <FormField label="Contexto (opcional)">
                                    <textarea rows={4} placeholder="Ej: Zona rural o urbana, nivel socioeconómico..." className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm resize-none"></textarea>
                                </FormField>

                                <button className="w-full mt-2 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-md border-b-2 border-orange-700 hover:bg-orange-600 active:bg-orange-700 active:border-b-0">
                                    Generar caso práctico
                                </button>
                            </div>

                            {/* Right Column: Generated Case */}
                            <div className="md:col-span-3 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-slate-800 mb-4">Caso Práctico Generado</h3>
                                <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
                                    <h4 className="font-bold text-teal-500 text-lg">Título: El castillo de la amistad</h4>
                                    <p><strong className="text-slate-800">Edad:</strong> 4-5 años</p>
                                    <p><strong className="text-slate-800">Temática:</strong> Resolución de conflictos y trabajo cooperativo.</p>

                                    <div className="mt-5 border-t pt-4 border-gray-200">
                                        <p className="font-bold text-slate-800">Introducción</p>
                                        <p className="font-bold italic text-slate-800 mt-2">Estructuración del supuesto.</p>
                                        <p className="text-slate-600 mt-1 text-justify">Mi compromiso por la educación infantil me lleva a desarrollar el siguiente supuesto práctico en el que todos los elementos se unen para conformar un gran tejido educativo a través del cual transformar la teoría en herramientas para que mi alumnado (...)</p>
                                    </div>

                                    <div className="mt-4">
                                        <p className="font-bold italic text-slate-800">Fundamentación teórica.</p>
                                        <p className="text-slate-600 mt-1 text-justify">La convivencia en el aula es un aspecto central en el desarrollo emocional, social y cognitivo de los niños de 4 a 5 años. La resolución de conflictos promueve habilidades de cooperación, empatía, comunicación y autorregulación, fundamentales para su desarrollo integral (...)</p>
                                        <p className="text-slate-600 mt-2 text-justify">El producto final del proyecto será la creación de un “el rincón de la amistad” en el aula, un espacio físico y simbólico donde los niños puedan identificar, reflexionar y resolver conflictos mediante técnicas aprendidas, apoyados en materiales visuales, rutinas grupales y asambleas de convivencia (...)</p>
                                    </div>
                                    
                                    <div className="mt-4">
                                        <p className="font-bold italic text-slate-800">Fundamentación legislativa.</p>
                                        <p className="text-slate-600 mt-1 text-justify">Todo ello queda justificado además en la normativa (...)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;