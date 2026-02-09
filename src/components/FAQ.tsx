import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona o pagamento após aprovação?',
      answer: 'Nós desenvolvemos o projeto, apresentamos para você e, somente após você validar que o site está perfeito e atende às suas expectativas, liberamos o acesso e o pagamento é efetuado.'
    },
    {
      question: 'O site já vem pronto para anúncios?',
      answer: 'Sim! Diferente de agências comuns, entregamos o site com tags de rastreamento e UTMs configuradas para facilitar sua vida (ou do seu gestor de tráfego).'
    },
    {
      question: 'Qual o prazo de entrega?',
      answer: 'Trabalhamos com foco em agilidade, geralmente entregamos em até 5 dias úteis.'
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-yellow-950/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Perguntas <span className="text-yellow-400">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-400">Tudo o que você precisa saber</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-xl font-bold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus size={24} className="text-yellow-400 flex-shrink-0" />
                ) : (
                  <Plus size={24} className="text-yellow-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20">
            AINDA TEM DÚVIDAS? FALE CONOSCO
          </button>
        </div>
      </div>
    </section>
  );
}
