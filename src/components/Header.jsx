import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 border-b border-brand-cardBorder/60 bg-brand-dark/90 backdrop-blur-md relative z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-black text-lg shadow-sm">
            <Sparkles className="w-5 h-5 text-black fill-black" />
          </div>
          <div>
            <span className="font-display font-extrabold text-lg sm:text-xl text-white tracking-wider uppercase block leading-none">
              Professor em Cena
            </span>
            <span className="text-[10px] text-brand-gold tracking-widest font-bold uppercase">
              Iniciação Teatral Prática
            </span>
          </div>
        </div>

        <motion.a
          href="#oferta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-brand-gold hover:bg-brand-goldLight rounded-full transition-colors shadow-md"
        >
          <span>Garantir Vaga</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </motion.a>
      </div>
    </header>
  );
}

