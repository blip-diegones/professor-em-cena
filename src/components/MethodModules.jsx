import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Compass, Scale, Palette, SlidersHorizontal, ArrowDown } from 'lucide-react';

export default function MethodModules() {
  const modules = [
    {
      badge: "AULA 1",
      title: "Os Primeiros Contatos com o Palco",
      focus: "Foco: Espaço cênico, contato visual nos olhos, desinibição e integração em grupo.",
      icon: <Compass className="w-6 h-6 text-amber-400" />,
      items: [
        "Caminhadas pelo espaço em 3 planos (alto, médio e baixo)",
        "Formação dinâmica de grupos para quebrar panelinhas",
        "O Exercício do Espelho em duplas (atenção e sincronia)",
        "Dinâmica do 'Bom Dia!' com diferentes intensidades emocionais"
      ],
      improviso: "Improviso Final: 'Uma Visita Muito Estranha!'"
    },
    {
      badge: "AULA 2",
      title: "Brincando com o Equilíbrio e o Foco",
      focus: "Foco: Atenção sustentada, imaginação coletiva e exploração cômica do movimento.",
      icon: <Scale className="w-6 h-6 text-amber-400" />,
      items: [
        "Pique-pega na corda bamba suspensa imaginária",
        "O Jogo da Hipnose em duplas pelo espaço com foco no dedo",
        "Corrida em Câmera Lenta (equilíbrio corporal e humor)",
        "Criação de desequilíbrios físicos convincentes e controlados"
      ],
      improviso: "Improviso Final: 'Uma Viagem Espacial e Dialeto de Outro Planeta'"
    },
    {
      badge: "AULA 3",
      title: "Mímica e Corporificação",
      focus: "Foco: Precisão gestual, manipulação de objetos invisíveis e narrativa não-verbal.",
      icon: <Palette className="w-6 h-6 text-amber-400" />,
      items: [
        "A Massa de Modelar Imaginária em círculo (peso e textura)",
        "Técnica dos 9 Passos da Mímica (abrir, pegar, guardar)",
        "Mímicas em dupla com contagem cronometrada em voz alta",
        "Noção espacial precisa e detalhamento de ações cotidianas"
      ],
      improviso: "Improviso Final: 'O Grande Assalto na Festa!'"
    },
    {
      badge: "AULA 4",
      title: "O Controlador: Intensidade, Silêncio e Escuta",
      focus: "Foco: Autocontrole emocional, cooperação, foco auditivo e silêncio coletivo.",
      icon: <SlidersHorizontal className="w-6 h-6 text-amber-400" />,
      items: [
        "As Cadeiras das Emoções (do ponto neutro ao exagero cênico)",
        "A Fila das Emoções com comandos rápidos de troca",
        "Corrida em Silêncio com olhos fechados e atenção ao som",
        "O Jogo da Embolada (desafio de união e cooperação contra o relógio)"
      ],
      improviso: "Bônus Incluso: Modelo da Ficha de Registro e Acompanhamento do Professor"
    }
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-brand-dark/95 border-t border-brand-cardBorder">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">
            Conteúdo Programático
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white mt-1.5">
            As 4 Aulas Práticas do Método
          </h2>
          <p className="text-slate-400 text-xs sm:text-base mt-2 max-w-xl mx-auto">
            Cada encontro tem objetivo psicopedagógico claro, passo a passo detalhado e dicas exclusivas para o professor.
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((m, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ borderColor: 'rgba(245, 158, 11, 0.4)' }}
              className="bg-brand-card rounded-2xl p-5 sm:p-6 border border-brand-cardBorder transition-all shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-block text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md mb-2">
                    {m.badge}
                  </span>
                  <h3 className="text-base sm:text-xl font-display font-bold text-white">
                    {m.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    {m.focus}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  {m.icon}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-brand-cardBorder/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {m.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 sm:col-span-2 text-brand-goldLight font-bold mt-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 flex-shrink-0" />
                  <span>{m.improviso}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link Intermediário */}
        <div className="mt-8 text-center">
          <motion.a
            href="#oferta"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-card border border-brand-gold/40 text-brand-gold font-bold text-sm hover:bg-brand-gold hover:text-black transition-all shadow-md cursor-pointer"
          >
            <span>Quero acessar a apostila completa e as aulas</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}

