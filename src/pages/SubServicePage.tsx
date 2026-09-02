import React from 'react';
import { ChevronRight, Phone, ArrowRight, ShieldCheck, Clock4, Award } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import confidentialImg from '../assets/images/service_confidential_shredding.webp';
import residuosImg from '../assets/images/service_gestion_residuos.webp';
import reciclajeImg from '../assets/images/service_reciclaje_oficina.webp';

const IMAGES: Record<string, string> = {
  'destruccion-confidencial': confidentialImg,
  'gestion-residuos': residuosImg,
  'reciclaje-vaciado': reciclajeImg,
};

const TRUST_POINTS = [
  { icon: ShieldCheck, title: 'Cumplimiento Normativo', text: 'Procesos certificados conforme a la normativa vigente en cada servicio.' },
  { icon: Clock4, title: 'Disponibilidad 24/7', text: 'Atención y recogidas urgentes cualquier día de la semana.' },
  { icon: Award, title: '20+ Años de Experiencia', text: 'Trayectoria consolidada gestionando residuos en Barcelona.' },
];

interface SubServicePageProps {
  categorySlug: string;
  subSlug: string;
}

export const SubServicePage: React.FC<SubServicePageProps> = ({ categorySlug, subSlug }) => {
  const category = SERVICE_CATEGORIES.find((c) => c.slug === categorySlug) ?? SERVICE_CATEGORIES[0];
  const sub = category.items.find((i) => i.slug === subSlug) ?? category.items[0];
  const otherItems = category.items.filter((i) => i.slug !== sub.slug);

  return (
    <>
      <section className="relative min-h-[46vh] flex items-end overflow-hidden">
        <img
          src={IMAGES[category.id]}
          alt={sub.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 w-full">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-300 mb-5">
            <a href="/" className="hover:text-white transition-colors">Inicio</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <a href="/#servicios" className="hover:text-white transition-colors">Servicios</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <a href={`/servicios/${category.slug}`} className="hover:text-white transition-colors">{category.title}</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">{sub.title}</span>
          </nav>
          <span className="text-green-400 text-xs sm:text-sm font-bold tracking-widest uppercase">\ {category.title} \</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 max-w-3xl leading-tight">
            {sub.title} en Barcelona
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-neutral-600 leading-relaxed">{sub.longDescription}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-10">
            Ventajas de contratar este servicio con Ecoasesora
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TRUST_POINTS.map((point) => (
              <div key={point.title} className="bg-white border border-neutral-200 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-neutral-900 mb-2">{point.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {otherItems.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-8">
              Otros servicios dentro de {category.title}
            </h2>
            <ul className="space-y-3">
              {otherItems.map((item) => (
                <li key={item.slug}>
                  <a
                    href={`/servicios/${category.slug}/${item.slug}`}
                    className="flex items-center justify-between gap-4 bg-neutral-50 hover:bg-green-50 border border-neutral-200 hover:border-green-300 rounded-xl px-5 py-4 transition-colors group"
                  >
                    <div>
                      <h3 className="font-bold text-neutral-900 text-sm">{item.title}</h3>
                      <p className="text-xs text-neutral-500 mt-0.5">{item.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-green-600 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            ¿Necesitas este servicio para tu empresa?
          </h2>
          <p className="text-green-50 mb-8 max-w-xl mx-auto">
            Solicita presupuesto sin compromiso y te contactaremos en menos de 24 horas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-900 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all"
            >
              Solicitar Presupuesto
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+34685911111"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 text-white font-bold text-sm px-6 py-3.5 rounded-full backdrop-blur-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              685 91 11 11
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
