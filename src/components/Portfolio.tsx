import { Stethoscope, Scale, Sparkles, Smile } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      icon: Stethoscope,
      title: 'Médicos',
      description: 'Landing pages de agendamento com foco em credibilidade.',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Smile,
      title: 'Dentistas',
      description: 'Foco em estética e prova social visual.',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: Scale,
      title: 'Advogados',
      description: 'Design sóbrio, rápido e otimizado para captação de leads.',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Sparkles,
      title: 'Nails/Estética',
      description: 'Visual impactante, portfólio de fotos e conversão via WhatsApp.',
      color: 'from-yellow-500 to-yellow-700'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Soluções sob medida para quem busca{' '}
            <span className="text-yellow-400">autoridade</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-zinc-900 to-black border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105"
            >
              <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${project.color} mb-6`}>
                <project.icon size={32} className="text-black" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-yellow-500/10 rounded-xl transition-all pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
