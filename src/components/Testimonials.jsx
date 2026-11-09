import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote, Star, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function Testimonials() {
  const reviews = SITE_CONFIG.testimonials || [];
  if (!reviews.length) return null;

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-brand-darkSurface border-t border-brand-cardBorder/70">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-brand-gold font-bold uppercase tracking-widest text-xs mb-1">
            <MessageSquareQuote className="w-3.5 h-3.5 text-brand-gold" />
            <span>Resultados no Chão de Sala</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white mt-1.5">
            Quem já aplica o método recomenda
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Educadores reais transformando turmas desatentas em ambientes de cooperação e escuta ativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-brand-card p-5 rounded-2xl border border-brand-cardBorder flex flex-col justify-between shadow-md relative"
            >
              <div>
                {/* 5 Estrelas */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic mb-4">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-brand-cardBorder/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black font-extrabold text-xs flex-shrink-0 shadow-sm">
                  {rev.avatar}
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1">
                    <h4 className="text-white font-bold text-xs truncate">{rev.name}</h4>
                    <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                  </div>
                  <p className="text-slate-400 text-[10px] truncate">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

