import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function FloatingWhatsApp() {
  if (!SITE_CONFIG.whatsappNumber) return null;
  const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessage
  )}`;

  return (
    <motion.a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl transition-colors cursor-pointer"
      title="Tirar dúvidas no WhatsApp"
      aria-label="Tirar dúvidas no WhatsApp com nossa equipe"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white stroke-none" />
    </motion.a>
  );
}

