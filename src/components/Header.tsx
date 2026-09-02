import React, { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X } from 'lucide-react';
import companyLogo from '../assets/images/ecoasesora_logo.png';

const NAV_ITEMS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#por-que-elegirnos', label: 'Por Qué Elegirnos' },
  { href: '#nosotros', label: 'Sobre Nosotros' },
  { href: '#faq', label: 'Preguntas Frecuentes' },
  { href: '#contacto', label: 'Contacto' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200">
      <div className="bg-slate-900 text-slate-300 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs">
            <a
              href="tel:+34685911111"
              className="flex items-center gap-1.5 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>685 91 11 11 (Atención 24h)</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>Carrer del Comerç, 30 · Sant Feliu de Llobregat, Barcelona</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded text-[11px] font-medium">
            <Clock className="w-3 h-3" /> Abierto 24 horas
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[84px] h-auto py-2">
          <a href="#inicio" className="flex items-center gap-3 group shrink-0">
            <img
              src={companyLogo}
              alt="Ecoasesora"
              className="h-14 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold text-slate-700">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-2">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>Solicitar Presupuesto</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-800 font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-emerald-600 text-white font-bold text-sm py-3 rounded-full shadow mt-3"
          >
            Solicitar Presupuesto
          </a>
        </div>
      )}
    </header>
  );
};
