import React, { useEffect, useState } from 'react';
import { loadPixel } from '../utils/pixel';

const KEY = 'cookie-consent';
const read = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
const write = (v) => { try { localStorage.setItem(KEY, v); } catch (e) {} };

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const c = read();
    if (c === 'granted') loadPixel();
    else if (!c) setShow(true);
  }, []);

  const decide = (value) => {
    write(value);
    if (value === 'granted') loadPixel();
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 inset-x-0 z-[60] bg-brand-card border-t border-brand-cardBorder px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-2xl"
    >
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center gap-3">
        <p className="text-sm text-slate-300 leading-relaxed flex-1">
          Usamos cookies para o site funcionar e, se você permitir, para medir e melhorar nossos anúncios (Meta).
          Saiba mais na{' '}
          <a href="/privacidade.html" className="underline text-brand-goldLight">Política de Privacidade</a>.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => decide('denied')}
            className="flex-1 sm:flex-none min-h-[44px] px-4 rounded-xl border border-brand-cardBorder text-slate-200 text-sm font-bold"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => decide('granted')}
            className="flex-1 sm:flex-none min-h-[44px] px-5 rounded-xl bg-brand-gold text-black text-sm font-extrabold"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
