import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-yellow-500/20 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="text-yellow-400">Alpha</span>
              <span className="text-white">Pages</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando tráfego em faturamento.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('portfolio')} className="block text-gray-400 hover:text-yellow-400 transition-colors">
                Portfólio
              </button>
              <button onClick={() => scrollToSection('why-choose')} className="block text-gray-400 hover:text-yellow-400 transition-colors">
                Por que a Alpha?
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block text-gray-400 hover:text-yellow-400 transition-colors">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('faq')} className="block text-gray-400 hover:text-yellow-400 transition-colors">
                FAQ
              </button>
              <button className="block text-gray-400 hover:text-yellow-400 transition-colors">
                Termos de Uso
              </button>
              <button className="block text-gray-400 hover:text-yellow-400 transition-colors">
                Contato
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="p-3 bg-zinc-900 rounded-lg hover:bg-yellow-400 hover:text-black transition-all group">
                <Instagram size={24} />
              </a>
              <a href="#" className="p-3 bg-zinc-900 rounded-lg hover:bg-yellow-400 hover:text-black transition-all group">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 bg-zinc-900 rounded-lg hover:bg-yellow-400 hover:text-black transition-all group">
                <Mail size={24} />
              </a>
            </div>

            <a href="#" className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all">
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-yellow-500/20 pt-8 text-center text-gray-400">
          <p>© 2026 AlphaPages - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
