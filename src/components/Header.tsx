import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">
            <span className="text-yellow-400">Alpha</span>
            <span className="text-white">Pages</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-yellow-400 transition-colors">
              Portfólio
            </button>
            <button onClick={() => scrollToSection('why-choose')} className="text-gray-300 hover:text-yellow-400 transition-colors">
              Por que a Alpha?
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-yellow-400 transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-yellow-400 transition-colors">
              FAQ
            </button>
            <a href="https://api.whatsapp.com/send?phone=5581988548132&text=Gostaria%20de%20mais%20informações%20sobre%20as%20landing%20pages" target='_blank'>
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105">
                QUERO UM SITE DE ALTA CONVERSÃO
              </button>
            </a>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white" aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav id="menu-mobile" className="md:hidden py-4 space-y-4 border-t border-yellow-500/20">
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left text-gray-300 hover:text-yellow-400 transition-colors">
              Portfólio
            </button>
            <button onClick={() => scrollToSection('why-choose')} className="block w-full text-left text-gray-300 hover:text-yellow-400 transition-colors">
              Por que a Alpha?
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-300 hover:text-yellow-400 transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-gray-300 hover:text-yellow-400 transition-colors">
              FAQ
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=5581988548132&text=Gostaria%20de%20mais%20informações%20sobre%20as%20landing%20pages"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 inline-block text-center"
            >
              QUERO UM SITE DE ALTA CONVERSÃO
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
