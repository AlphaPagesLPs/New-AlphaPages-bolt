import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. Lucas',
      profession: 'Medicina',
      text: 'Minha taxa de conversão subiu 40% na primeira semana com a AlphaPages.',
      rating: 5
    },
    {
      name: 'Mariana',
      profession: 'Advocacia',
      text: 'O fato de só pagar depois de aprovado me deu a segurança que eu precisava. O site ficou impecável.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            O que nossos clientes <span className="text-yellow-400">dizem</span>
          </h2>
          <p className="text-xl text-gray-400">Resultados reais de quem confiou na AlphaPages</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-500/50 transition-all"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.profession}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
