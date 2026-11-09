import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Lock, Zap, CreditCard } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { appendTrackingParams } from '../utils/tracking';

export default function OfferPricing() {
  const checkoutHref = appendTrackingParams(SITE_CONFIG.checkoutUrl);

  const benefits = [
    "Acesso completo às 4 Aulas Práticas gravadas",
    "Apostila Didática Oficial em PDF para baixar e imprimir",
    "Fichas de Registro e Avaliação Pedagógica",
    "Acesso imediato enviado no seu e-mail",
    "Certificado de conclusão (curso livre)",
    "Acesso vitalício sem cobranças extras"
  ];

  return (
    <section id="oferta" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-gradient-to-b from-brand-dark via-brand-card/30 to-brand-dark">
      <div className="max-w-xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-brand-card border-2 border-brand-gold/60 p-6 sm:p-10 shadow-2xl text-center overflow-hidden"
        >
          {/* Fita Superior de Lançamento */}
          <div className="bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-extrabold text-xs uppercase tracking-widest py-1.5 px-6 -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-6 shadow-sm">
            Oferta Especial de Lançamento
          </div>

          <span className="text-slate-400 text-xs uppercase tracking-widest font-semibold">
            Acesso Completo & Vitalício
          </span>
          
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
            Método Professor em Cena
          </h3>

          {/* Ancoragem de Preço */}
          <div className="mt-6 mb-5">
            <p className="text-slate-500 line-through text-sm sm:text-base font-semibold">
              De {SITE_CONFIG.price.original}
            </p>
            <div className="flex items-baseline justify-center gap-1 mt-1">
              <span className="text-slate-300 text-sm font-bold">Por apenas</span>
              <span className="text-4xl sm:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                {SITE_CONFIG.price.installments}
              </span>
            </div>
            <p className="text-slate-300 text-sm mt-1">
              ou <strong>{SITE_CONFIG.price.cash}</strong> à vista no PIX ou Cartão
            </p>
          </div>

          {/* Lista de Inclusões */}
          <div className="my-6 space-y-2.5 text-left text-sm text-slate-300 max-w-sm mx-auto">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* BOTÃO PRINCIPAL DE CHECKOUT */}
          <motion.a 
            href={checkoutHref}
            onClick={() => { try { window.fbq && window.fbq("track", "InitiateCheckout"); } catch (e) {} }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="animate-pulse-glow block w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-amber-500 text-black font-display font-black text-lg sm:text-xl uppercase tracking-wider transition-all duration-300 shadow-2xl cursor-pointer"
          >
            QUERO COMEÇAR AGORA MESMO
          </motion.a>

          {/* Selos de Segurança */}
          <div className="mt-4 flex items-center justify-center gap-x-4 gap-y-1 flex-wrap text-xs text-slate-400">
            <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-emerald-400" /> Pagamento Seguro</span>
            <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-amber-400" /> Liberação Imediata</span>
            <span className="flex items-center gap-1"><CreditCard className="w-3.5 h-3.5 text-blue-400" /> PIX & Cartão</span>
          </div>

          {/* Garantia Incondicional 7 Dias */}
          <div className="mt-8 pt-6 border-t border-brand-cardBorder/70 flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Garantia Incondicional de 7 Dias</h4>
              <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                Teste o método na sua sala de aula. Se você não notar a diferença no engajamento dos seus alunos, basta um clique na plataforma para receber 100% do seu dinheiro de volta.
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

