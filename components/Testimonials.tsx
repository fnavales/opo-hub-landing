import React from 'react';

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    avatar: string;
}

const QuoteIcon = () => (
     <svg className="h-10 w-10 text-orange-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.333 22.667H4V16C4 11.583 7.583 8 12 8V13.333C10.167 13.333 9.333 14.167 9.333 16V22.667ZM22.667 22.667H17.333V16C17.333 11.583 20.917 8 25.333 8V13.333C23.5 13.333 22.667 14.167 22.667 16V22.667Z" />
    </svg>
);


const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, avatar }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
            <div className="flex-shrink-0">
                <QuoteIcon />
            </div>
            <p className="text-slate-600 my-6 flex-grow text-lg">"{quote}"</p>
            <div className="flex items-center mt-auto">
                <img src={avatar} alt={author} className="h-14 w-14 rounded-full object-cover border-4 border-white shadow-md" />
                <div className="ml-4">
                    <p className="font-bold text-slate-800 text-lg">{author}</p>
                    <p className="text-sm text-slate-500">{role}</p>
                </div>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
    const testimonialsData: TestimonialCardProps[] = [
        {
            quote: "¡Increíble! Los casos son súper originales y me han ayudado a pensar de otra manera. He perdido el miedo a la parte práctica gracias a OpoHub.",
            author: "Laura García",
            role: "Opositora, Madrid",
            avatar: "https://i.imgur.com/HEybheL.jpeg"
        },
        {
            quote: "La personalización es fantástica. Puedo enfocar mi estudio en los temas que más me cuestan. Una herramienta imprescindible.",
            author: "Carlos Pérez",
            role: "Opositor, Valencia",
            avatar: "https://i.imgur.com/CsIZSOo.jpeg"
        },
        {
            quote: "Ahorro horas de trabajo. Antes tardaba mucho en crear supuestos, ahora los tengo al instante. ¡Totalmente recomendado!",
            author: "Ana Martínez",
            role: "Preparadora, Sevilla",
            avatar: "https://i.imgur.com/7ytbmkO.jpeg"
        }
    ];

    // FIX: The component was not returning any JSX, causing a type error. It also needed to be exported to be used in App.tsx.
    return (
        <section id="testimonials" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        Lo que dicen nuestros <span className="text-orange-500">usuarios</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Opiniones reales de opositores y preparadores que ya están revolucionando su estudio.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            role={testimonial.role}
                            avatar={testimonial.avatar}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;