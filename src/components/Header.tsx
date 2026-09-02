import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Linkedin, Menu, X, ChevronDown, Phone } from 'lucide-react';
import companyLogo from '../assets/images/ecoasesora_logo.png';
import { SERVICE_CATEGORIES } from '../data/servicesData';

const NAV_ITEMS = [
  { href: '/#nosotros', label: 'Sobre Nosotros' },
  { href: '/#faq', label: 'Preguntas' },
  { href: '/#contacto', label: 'Contacto' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28">
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src={companyLogo}
              alt="Ecoasesora"
              className={`h-16 sm:h-20 w-auto object-contain transition-all ${solid ? '' : 'brightness-0 invert drop-shadow'}`}
            />
          </a>

          <nav
            className={`hidden lg:flex items-center gap-1 text-sm font-bold uppercase tracking-wide transition-colors ${
              solid ? 'text-neutral-700' : 'text-white'
            }`}
          >
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a
                href="/#servicios"
                className={`flex items-center gap-1 px-4 py-2 rounded-full transition-colors ${
                  solid ? 'hover:bg-neutral-100' : 'hover:bg-white/10'
                }`}
              >
                Servicios
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </a>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-xl border border-neutral-200 py-2 normal-case">
                  {SERVICE_CATEGORIES.map((s) => (
                    <a
                      key={s.slug}
                      href={`/servicios/${s.slug}`}
                      className="block px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                    >
                      {s.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full transition-colors ${
                  solid ? 'hover:bg-neutral-100' : 'hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+34685911111"
              className={`hidden xl:flex items-center gap-2 text-sm font-bold transition-colors ${
                solid ? 'text-neutral-800 hover:text-green-600' : 'text-white hover:text-green-300'
              }`}
            >
              <Phone className="w-4 h-4" />
              685 91 11 11
            </a>
            <div className={`hidden xl:flex items-center gap-2 ${solid ? 'text-neutral-500' : 'text-white/80'}`}>
              <a href="https://facebook.com" aria-label="Facebook" className="w-8 h-8 rounded-full border border-current flex items-center justify-center hover:text-green-500 hover:border-green-500 transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="w-8 h-8 rounded-full border border-current flex items-center justify-center hover:text-green-500 hover:border-green-500 transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-current flex items-center justify-center hover:text-green-500 hover:border-green-500 transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Contactar
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg focus:outline-none ${solid ? 'text-neutral-800' : 'text-white'}`}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          <a
            href="tel:+34685911111"
            className="flex items-center gap-2 px-3 py-2.5 text-green-600 font-bold text-sm"
          >
            <Phone className="w-4 h-4" />
            685 91 11 11
          </a>
          <div className="pb-1">
            <span className="block px-3 pt-2 pb-1 text-xs font-bold text-neutral-400 uppercase tracking-wider">Servicios</span>
            {SERVICE_CATEGORIES.map((s) => (
              <a
                key={s.slug}
                href={`/servicios/${s.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-neutral-100 text-neutral-700 text-sm"
              >
                {s.title}
              </a>
            ))}
          </div>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg hover:bg-neutral-100 text-neutral-800 font-semibold"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-green-500 text-white font-bold text-sm py-3 rounded-full shadow mt-3"
          >
            Contactar
          </a>
        </div>
      )}
    </header>
  );
};
