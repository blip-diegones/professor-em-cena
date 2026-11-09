import React from 'react';
import { Zap } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export default function UrgencyBar() {
  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black py-2 px-4 text-center font-bold text-sm">
      <span className="inline-flex items-center justify-center gap-1.5">
        <Zap className="w-4 h-4 fill-black stroke-black" />
        Preço de lançamento: <strong>{SITE_CONFIG.price.discountPercent} OFF</strong>
      </span>
    </div>
  );
}
