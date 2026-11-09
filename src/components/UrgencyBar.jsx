import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function UrgencyBar() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black py-2.5 px-4 text-center font-bold text-xs sm:text-sm tracking-wide sticky top-0 z-50 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <motion.div
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <Zap className="w-4 h-4 fill-black stroke-black inline" />
        </motion.div>
        <span>
          OFERTA DE LANÇAMENTO: <strong>{SITE_CONFIG.price.discountPercent} OFF</strong> + Todos os Bônus Inclusos
        </span>
        <span className="inline-flex items-center gap-1 bg-black text-amber-400 px-2 py-0.5 rounded text-xs font-mono font-black tracking-wider ml-1 shadow-inner">
          <Clock className="w-3 h-3 text-amber-400 inline" />
          {minutes}:{seconds}
        </span>
      </div>
    </div>
  );
}

