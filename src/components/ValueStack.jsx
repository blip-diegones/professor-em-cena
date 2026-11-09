import React from 'react';
import { motion } from 'framer-motion';
import { Video, FileText, ClipboardList, PackageCheck } from 'lucide-react';

export default function ValueStack() {
  const items = [
    {
      icon: <Video className="w-6 h-6 text-amber-400" />,
      title: "Vídeo Aulas Passo a Passo",
      desc: "Vagner Ralph demonstrando na prática como conduzir cada aquecimento, jogo e improviso com segurança.",
      value: "R$ 97,00"
    },
    {
      icon: <FileText className="w-6 h-6 text-amber-400" />,
      title: "Apostila Didática Oficial em PDF",
      desc: "Material completo diagramado para impressão e atualização, pronto para encadernar e consultar em sala.",
      value: "R$ 67,00",
      featured: true
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-amber-400" />,
      title: "Fichas de Registro do Professor",
      desc: "Folhas estruturadas para documentar a evolução da turma, adaptações e comprovação pedagógica.",
      value: "R$ 47,00"
    }
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 border-t border-brand-cardBorder/80 spotlight-card">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-1.5 text-brand-gold font-bold uppercase tracking-widest text-xs mb-1">
          <PackageCheck className="w-4 h-4 text-brand-gold" />
          <span>Tudo Incluso</span>
        </div>
        
        <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white mt-1.5 mb-2">
          O que você recebe ao garantir sua vaga
        </h2>
        <p className="text-slate-400 text-xs sm:text-base max-w-xl mx-auto mb-10">
          Um kit pedagógico completo para você baixar, imprimir e levar direto para a sua próxima aula.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-brand-card p-5 rounded-2xl border flex flex-col justify-between relative shadow-lg ${
                item.featured ? 'border-brand-gold/50' : 'border-brand-cardBorder'
              }`}
            >
              {item.featured && (
                <div className="absolute -top-3 right-4 bg-amber-500 text-black text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                  Principal
                </div>
              )}
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base mb-1">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-brand-cardBorder/60 text-xs text-amber-400 font-bold">
                Valor Real: {item.value}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

