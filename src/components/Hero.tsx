import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black to-yellow-950/10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Você está gastando fortunas em anúncios para enviar pessoas para um{' '}
          <span className="text-yellow-400">site que não vende?</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto">
          Sites lentos e amadores são o "buraco negro" do seu lucro. Na AlphaPages, criamos máquinas de vendas rápidas e responsivas.{' '}
          <span className="text-yellow-400 font-semibold">O melhor? Você só paga quando o site estiver aprovado e pronto para rodar.</span>
        </p>

        <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-yellow-500/20">
          QUERO PARAR DE PERDER DINHEIRO
          <ArrowRight size={24} />
        </button>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-sm text-gray-400">Responsivo</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">1s</div>
            <div className="text-sm text-gray-400">Tempo de Carga</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">0$</div>
            <div className="text-sm text-gray-400">Antes da Aprovação</div>
          </div>
        </div>
      </div>
    </section>
  );
}
