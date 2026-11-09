import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function FloatingMobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 p-3 bg-brand-dark/95 backdrop-blur-md border-t border-brand-cardBorder z-50 sm:hidden shadow-2xl"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] text-slate-400 font-semibold uppercase">Lançamento</p>
              <p className="text-base font-extrabold text-amber-400 leading-none">
                {SITE_CONFIG.price.installments}
              </p>
            </div>
            <a 
              href="#oferta" 
              className="py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-display font-extrabold text-xs uppercase tracking-wider shadow-lg flex-1 text-center inline-flex items-center justify-center gap-1.5"
            >
              <span>Garantir Vaga</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

