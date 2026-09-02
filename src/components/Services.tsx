import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import confidentialImg from '../assets/images/service_confidential_shredding.webp';
import residuosImg from '../assets/images/service_gestion_residuos.webp';
import reciclajeImg from '../assets/images/service_reciclaje_oficina.webp';

const IMAGES: Record<string, string> = {
  'destruccion-confidencial': confidentialImg,
  'gestion-residuos': residuosImg,
  'reciclaje-vaciado': reciclajeImg,
};

const SPANS: Record<number, string> = {
  0: 'lg:col-span-3 lg:row-span-2',
  1: 'lg:col-span-3 lg:row-span-1',
  2: 'lg:col-span-3 lg:row-span-1',
};

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-green-500 text-xs sm:text-sm font-bold tracking-widest uppercase">\ Servicios \</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 leading-tight">
              Aprovechando la Naturaleza para un Futuro Sostenible
            </h2>
          </div>
          <p className="text-neutral-400 max-w-sm text-sm">
            Soluciones ecológicas de limpieza y gestión de residuos usando productos y procesos no tóxicos, para promover entornos de trabajo más saludables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-[320px_320px] gap-5">
          {SERVICE_CATEGORIES.map((cat, i) => (
            <a
              key={cat.id}
              id={cat.id}
              href={`/servicios/${cat.slug}`}
              className={`group relative overflow-hidden rounded-3xl scroll-mt-24 aspect-[4/3] lg:aspect-auto ${SPANS[i]}`}
            >
              <img
                src={IMAGES[cat.id]}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent transition-opacity duration-500 group-hover:from-neutral-950/95" />

              <span className="absolute top-6 left-6 text-white/25 font-extrabold text-6xl sm:text-7xl leading-none select-none transition-colors duration-500 group-hover:text-green-500/40">
                {String(i + 1).padStart(2, '0')}
              </span>

              <span className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <ArrowUpRight className="w-5 h-5" />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-neutral-300 mb-3 max-w-md">{cat.description}</p>
                <div className="flex flex-wrap gap-2 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300">
                  {cat.items.map((item) => (
                    <span key={item.title} className="text-[11px] font-semibold text-white/90 bg-white/10 border border-white/20 rounded-full px-2.5 py-1">
                      {item.title}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
