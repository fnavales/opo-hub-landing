import React from 'react';

const Step: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({ number, title, children }) => {
  return (
    <div className="relative pl-16">
      <div className="absolute left-0 top-0 flex items-center justify-center h-12 w-12 rounded-full bg-teal-500 text-white font-bold text-2xl shadow-md">
        {number}
      </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{children}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="howitworks" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Tan fácil como contar hasta <span className="text-orange-500">tres</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Generar un caso práctico nunca ha sido tan sencillo e intuitivo.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-16 relative">
            {/* Dashed line connecting steps */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200 border-l-2 border-dashed border-gray-300 -z-10"></div>
            <Step number="1" title="Elige tus parámetros">
              Define con precisión los cimientos de tu caso. Especifica la temática central que deseas abordar (p. ej., gestión emocional, atención a la diversidad, resolución de conflictos), selecciona el rango de edad del alumnado y enriquece el supuesto añadiendo detalles de contexto, como un entorno rural, una ciudad específica o cualquier otra variable relevante para tu práctica.
            </Step>
            <Step number="2" title={'Haz clic en "Generar"'}>
              Nuestra inteligencia artificial se pone a trabajar, analizando tus indicaciones para crear un supuesto práctico coherente, original y adaptado a ti.
            </Step>
            <Step number="3" title="Recibe">
              En segundos, obtendrás un caso práctico completo y resuelto, listo para estudiar. Domina cientos de supuestos diferentes sin perder tiempo en su elaboración y enfócate en lo que de verdad importa.
            </Step>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;