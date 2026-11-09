import React from 'react';
import { Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 bg-black border-t border-brand-cardBorder/60 text-center text-xs text-slate-500">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-brand-gold" />
          <span className="font-display font-bold text-slate-300 text-sm tracking-wider uppercase">
            Professor em Cena
          </span>
        </div>
        <p>
          Idealizado por <strong>{SITE_CONFIG.expert.name}</strong> • Todos os direitos reservados.
        </p>
        {SITE_CONFIG.supportEmail && <p>Suporte: {SITE_CONFIG.supportEmail}</p>}
        <p><a href="/privacidade.html" className="underline hover:text-slate-300">Política de Privacidade</a></p>
        <p className="text-xs max-w-xl mx-auto text-slate-600 leading-relaxed">
          Aviso Legal: Os resultados podem variar de acordo com o engajamento e a aplicação prática de cada educador. Este produto não garante resultados milagrosos sem a dedicação e o respeito às diretrizes pedagógicas.
        </p>
      </div>
    </footer>
  );
}

