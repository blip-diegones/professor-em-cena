import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Zap, BookOpen, Video, Award, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function Hero() {
  return (
    <section className="relative pt-7 pb-14 sm:py-20 px-4 sm:px-6 spotlight-hero overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col">
        
        {/* Badge Superior */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4 order-1"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-cardBorder text-brand-goldLight text-sm font-semibold shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Apostila Didática + Vídeo Aulas Guiadas</span>
          </div>
        </motion.div>

        {/* Headline Principal */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-2 text-3xl sm:text-5xl md:text-6xl font-display font-black text-white text-center leading-[1.15] sm:leading-tight mb-4 max-w-4xl mx-auto"
        >
          Transforme sua sala de aula em um{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
            palco de atenção, foco e desinibição
          </span>.
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-3 text-base sm:text-xl text-slate-300 text-center max-w-2xl mx-auto mb-6 leading-relaxed font-normal"
        >
          O método em <strong>4 aulas estruturadas + apostila pronta para impressão</strong> para você engajar qualquer turma através de jogos teatrais —{' '}
          <em>mesmo que você nunca tenha pisado num palco</em>.
        </motion.p>

        {/* Card Central com Foto de Vagner Ralph */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="order-5 relative max-w-[300px] sm:max-w-md mx-auto mt-10 mb-2"
        >
          {/* Brilho cênico de fundo */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 opacity-35 blur-xl"></div>
          
          <div className="relative bg-brand-card rounded-3xl overflow-hidden border border-brand-cardBorder shadow-2xl">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full bg-slate-900 overflow-hidden">
              <img 
                src="/vagner-hero.jpeg" 
                alt="Vagner Ralph - Mentor e Criador do Método Professor em Cena" 
                className="w-full h-full object-cover object-top"
                loading="eager" fetchpriority="high" width="600" height="750"
              />
              
              {/* Gradiente escuro na base da foto */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent"></div>

              {/* Tag de destaque no topo da imagem */}
              <div className="absolute top-3.5 left-3.5">
                <span className="bg-amber-500 text-black font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  100% Prático e Aplicável
                </span>
              </div>

              {/* Card de identificação do Mentor sobre a foto */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-brand-dark/90 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center gap-3 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-xl font-bold flex-shrink-0">
                    <Award className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm leading-tight">{SITE_CONFIG.expert.name}</h4>
                    <p className="text-slate-400 text-xs">{SITE_CONFIG.expert.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Botão de Ação Principal (CTA) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="order-4 text-center w-full max-w-md mx-auto"
        >
          <motion.a 
            href="#oferta" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="animate-pulse-glow block w-full py-4 sm:py-5 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-amber-500 text-black font-display font-black text-base sm:text-xl uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer"
          >
            QUERO DOMINAR O MÉTODO EM CENA
          </motion.a>
          
          <div className="mt-3 text-sm text-slate-400 flex items-center justify-center gap-x-3 gap-y-1 flex-wrap">
            <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-emerald-400" /> Compra Segura</span>
                        <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-amber-400" /> Acesso Imediato</span>
                        <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Garantia de 7 Dias</span>
          </div>
        </motion.div>

        {/* Grade de 4 Destaques Rápidos */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="order-6 mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl mx-auto text-center"
        >
          <div className="bg-brand-card/70 border border-brand-cardBorder rounded-2xl p-3 shadow-sm hover:border-brand-gold/30 transition-colors">
            <p className="text-brand-gold font-extrabold text-xl sm:text-2xl">4 Aulas</p>
            <p className="text-slate-400 text-xs mt-0.5">Completas & Estruturadas</p>
          </div>
          <div className="bg-brand-card/70 border border-brand-cardBorder rounded-2xl p-3 shadow-sm hover:border-brand-gold/30 transition-colors">
            <p className="text-brand-gold font-extrabold text-xl sm:text-2xl">Apostila</p>
            <p className="text-slate-400 text-xs mt-0.5">Pronta para Impressão</p>
          </div>
          <div className="bg-brand-card/70 border border-brand-cardBorder rounded-2xl p-3 shadow-sm hover:border-brand-gold/30 transition-colors">
            <p className="text-brand-gold font-extrabold text-xl sm:text-2xl">100%</p>
            <p className="text-slate-400 text-xs mt-0.5">Foco no Chão de Sala</p>
          </div>
          <div className="bg-brand-card/70 border border-brand-cardBorder rounded-2xl p-3 shadow-sm hover:border-brand-gold/30 transition-colors">
            <p className="text-brand-gold font-extrabold text-xl sm:text-2xl">Vitalício</p>
            <p className="text-slate-400 text-xs mt-0.5">Acesso Sem Mensalidade</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

