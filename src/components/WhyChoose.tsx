import { Zap, Smartphone, ShieldCheck, TrendingUp } from 'lucide-react';

export default function WhyChoose() {
  const features = [
    {
      icon: Zap,
      title: 'Velocidade Extrema',
      description: 'Seu site carrega em milissegundos. Menos tempo de espera, mais vendas.'
    },
    {
      icon: Smartphone,
      title: '100% Responsivo',
      description: 'Experiência perfeita no desktop e no celular (onde 90% do seu tráfego está).'
    },
    {
      icon: ShieldCheck,
      title: 'Risco ZERO (Pague depois)',
      description: 'Você não precisa confiar na nossa palavra, confie no resultado. O pagamento só é realizado após você aprovar o design final.'
    },
    {
      icon: TrendingUp,
      title: 'BÔNUS: Rastreamento Inteligente',
      description: 'Configuramos todo o tracking (Pixel, API) e a criação de UTMs para que você saiba exatamente de onde vem cada centavo de lucro do seu tráfego pago.'
    }
  ];

  return (
    <section id="why-choose" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-yellow-950/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Por que escolher a <span className="text-yellow-400">AlphaPages</span>?
          </h2>
          <p className="text-xl text-gray-400">Os diferenciais que transformam visitantes em clientes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-500/50 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-yellow-400 rounded-lg">
                    <feature.icon size={28} className="text-black" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20">
            QUERO COMEÇAR AGORA
          </button>
        </div>
      </div>
    </section>
  );
}
