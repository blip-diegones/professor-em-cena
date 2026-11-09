import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Preciso ter alguma experiência prévia com teatro para aplicar?",
      a: "Não! Essa é a proposta principal do Professor em Cena. O curso foi feito para quem nunca pisou num palco. Cada dinâmica vem explicada nos mínimos detalhes: o comando exato que você deve dar, como organizar a sala e como conduzir cada exercício com calma e controle."
    },
    {
      q: "Para qual faixa etária de alunos as atividades servem?",
      a: "As dinâmicas são adaptáveis e funcionam perfeitamente com crianças (fundamental I e II), adolescentes do ensino médio, turmas de EJA e até grupos de adultos em projetos sociais, prefeituras e CRAS."
    },
    {
      q: "Como e quando recebo o acesso ao material?",
      a: "Assim que seu pagamento for confirmado (no PIX ou Cartão é instantâneo), você recebe automaticamente por e-mail os dados de acesso à plataforma para assistir aos vídeos e baixar a apostila oficial em PDF."
    },
    {
      q: "Posso imprimir a apostila para levar para a escola?",
      a: "Sim! A apostila oficial foi diagramada e organizada exatamente para facilitar a impressão e encadernação, com páginas dedicadas para o seu registro e anotações pedagógicas."
    },
    {
      q: "O acesso ao curso expira?",
      a: "Não, o seu acesso é vitalício! Você poderá consultar as aulas e o material sempre que precisar preparar novos planos de aula ao longo de todo o ano letivo."
    },
    {
      q: "E se eu não gostar ou achar que não serviu para a minha turma?",
      a: "Você tem 7 dias de garantia incondicional. Basta solicitar o reembolso dentro desse prazo que devolvemos 100% do valor pago, sem burocracia."
    }
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 border-t border-brand-cardBorder">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-brand-gold font-bold uppercase tracking-widest text-xs mb-1">
            <HelpCircle className="w-3.5 h-3.5 text-brand-gold" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white mt-1.5">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-brand-card rounded-2xl border border-brand-cardBorder overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 text-brand-gold" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 sm:px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-brand-cardBorder/40 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

