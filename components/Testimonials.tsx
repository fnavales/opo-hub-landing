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
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
        },
        {
            quote: "Lo que más valoro es el ahorro de tiempo. Antes tardaba horas buscando y adaptando casos. Ahora los tengo personalizados al instante. Una herramienta imprescindible.",
            author: "Carlos Pérez",
            role: "Opositor, Andalucía",
            avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
        },
        {
            quote: "Como preparadora, recomiendo OpoHub a todos mis alumnos. La calidad y personalización de los supuestos les permite practicar de forma mucho más eficaz.",
            author: "Elena Navarro",
            role: "Preparadora de oposiciones",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        Lo que dicen <span className="text-orange-500">nuestros usuarios</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        La confianza de opositores y preparadores es nuestro mayor aval.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;