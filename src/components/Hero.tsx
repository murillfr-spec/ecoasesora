import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero_waste_facility.webp';
import { Eyebrow } from './Eyebrow';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Planta de gestión de residuos y reciclaje de Ecoasesora"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-900/60 to-neutral-900/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="max-w-2xl">
          <Eyebrow variant="dark" className="mb-5">Bienvenido a Ecoasesora</Eyebrow>
          <h1 className="text-5xl sm:text-6xl lg:text-[74px] font-extrabold text-white leading-[1.05] mb-6">
            Reciclaje y Gestión de Residuos con Garantía Legal
          </h1>
          <p className="text-neutral-200 text-base sm:text-lg mb-8 max-w-xl">
            Destrucción confidencial, residuos peligrosos, reciclaje de oficina y vaciados. Servicio 24 horas en Barcelona y toda su área metropolitana.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
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
