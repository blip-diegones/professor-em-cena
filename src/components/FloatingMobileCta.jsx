import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function FloatingMobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const o = document.getElementById('oferta');
      const r = o ? o.getBoundingClientRect() : null;
      const naOferta = r && r.top < window.innerHeight * 0.7 && r.bottom > 0;
      setIsVisible(window.scrollY > 400 && !naOferta);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
          className="fixed bottom-0 left-0 right-0 px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-brand-dark/95 backdrop-blur-md border-t border-brand-cardBorder z-50 sm:hidden shadow-2xl"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase">Lançamento</p>
              <p className="text-base font-extrabold text-amber-400 leading-none">
                {SITE_CONFIG.price.installments}
              </p>
            </div>
            <a 
              href="#oferta" 
              className="py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-display font-extrabold text-sm uppercase tracking-wider shadow-lg flex-1 text-center inline-flex items-center justify-center gap-1.5"
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

