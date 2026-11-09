import React from 'react';
import { motion } from 'framer-motion';
import { Award, Quote } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function Mentor() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-brand-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-brand-card rounded-3xl p-6 sm:p-10 border border-brand-cardBorder relative shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Foto Sorridente de Vagner */}
            <div className="md:col-span-5 text-center">
              <div className="relative inline-block max-w-[260px] mx-auto">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 opacity-30 blur-md"></div>
                <img 
                  src="/vagner-mentor.jpeg" 
                  alt="Vagner Ralph Sorrindo" 
                  className="relative rounded-2xl w-full object-cover border border-brand-cardBorder shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Biografia e Autoridade */}
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-1.5 text-brand-gold font-bold uppercase tracking-widest text-xs mb-1">
                <Award className="w-3.5 h-3.5 text-brand-gold" />
                <span>Quem é o seu Mentor</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1 mb-3">
                {SITE_CONFIG.expert.name}
              </h2>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                Ator, diretor e educador teatral com longa trajetória dedicada à formação humana através da arte e da expressão cênica.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                Com ampla vivência prática no chão de instituições públicas e privadas — incluindo <strong>Institutos Federais (IFs), Secretarias de Educação e Assistência Social (CRAS), Prefeituras e Estúdios de Arte</strong> —, Vagner criou o método <em>Professor em Cena</em> para simplificar e desmistificar a linguagem teatral, entregando um roteiro seguro que qualquer educador pode aplicar imediatamente.
              </p>

              <blockquote className="p-3.5 rounded-xl bg-brand-darkSurface border-l-4 border-amber-500 text-slate-300 text-xs sm:text-sm italic relative">
                <Quote className="w-4 h-4 text-amber-500/40 absolute top-2 right-2" />
                "Minha missão com este curso não é transformar seus alunos em atores de novela, mas dar a você, professor, o poder e a segurança de reger uma sala cheia de vida, curiosidade e respeito mútuo."
              </blockquote>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

