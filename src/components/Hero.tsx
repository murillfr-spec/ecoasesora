import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero_waste_facility.webp';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[640px] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Planta de gestión de residuos y reciclaje de Ecoasesora"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-emerald-400 text-xs sm:text-sm font-bold tracking-widest uppercase mb-5">
            \ Bienvenido a Ecoasesora \
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6">
            Reciclaje y Gestión de Residuos con Garantía Legal
          </h1>
          <p className="text-slate-200 text-base sm:text-lg mb-8 max-w-xl">
            Destrucción confidencial, residuos peligrosos, reciclaje de oficina y vaciados. Servicio 24 horas en Sant Feliu de Llobregat y toda el área metropolitana de Barcelona.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Solicitar Presupuesto
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+34685911111"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm px-6 py-3.5 rounded-full backdrop-blur-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
