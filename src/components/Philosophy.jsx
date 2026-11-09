import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-brand-card rounded-3xl p-6 sm:p-10 border border-brand-cardBorder grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center shadow-xl"
        >
          {/* Foto de Perfil / Olhar Inspirador */}
          <div className="md:col-span-5 text-center">
            <div className="relative inline-block max-w-[260px] mx-auto">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 opacity-25 blur-md"></div>
              <img 
                src="/vagner-filosofia.jpeg" 
                alt="Vagner Ralph - Visão Pedagógica Teatral" 
                className="relative rounded-2xl w-full object-cover border border-brand-cardBorder shadow-xl"
                loading="lazy"
              />
              <div className="mt-2 text-center">
                <span className="text-xs text-brand-gold font-bold uppercase tracking-wider">
                  A Arte de Conduzir o Palco
                </span>
              </div>
            </div>
          </div>

          {/* Conteúdo Textual */}
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-1.5 text-brand-gold font-bold uppercase tracking-widest text-xs mb-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>A Filosofia do Método</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1 mb-3">
              O Professor como Condutor de Emoções
            </h2>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-3">
              Quando você entra em sala, o espaço físico é seu palco. Se o professor fala olhando para baixo ou preso à lousa, a turma se dispersa e o celular ganha.
            </p>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              O <strong>Professor em Cena</strong> foi desenhado para te dar o controle e a segurança cênica: exercícios simples de respiração, posicionamento, olhar e jogos cooperativos que geram conexão imediata, sem necessidade de gritar ou impor regras rígidas.
            </p>

            <div className="space-y-2 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Quebra imediata da apatia e da timidez logo nos primeiros 10 minutos.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Sem necessidade de materiais caros ou espaços especiais.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Atividades pensadas para escolas públicas, privadas e projetos sociais.</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

