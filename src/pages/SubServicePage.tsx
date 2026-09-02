import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Phone, ArrowRight, ShieldCheck, Clock4, Award, Users } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { Eyebrow } from '../components/Eyebrow';

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
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const category = SERVICE_CATEGORIES.find((c) => c.slug === categorySlug) ?? SERVICE_CATEGORIES[0];
  const sub = category.items.find((i) => i.slug === subSlug) ?? category.items[0];
  const otherItems = category.items.filter((i) => i.slug !== sub.slug);

  return (
    <>
      <section className="relative min-h-[46vh] flex items-end overflow-hidden">
        <img
          src={sub.image}
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
          <Eyebrow variant="dark">{category.title}</Eyebrow>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 max-w-3xl leading-tight">
            {sub.title} en Barcelona
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {sub.longDescription.map((paragraph, i) => (
            <p key={i} className="text-lg text-neutral-600 leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8">
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-neutral-900 mb-2">¿Para quién es este servicio?</h2>
              <p className="text-sm text-neutral-600 leading-relaxed">{sub.whoFor}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
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

      {sub.faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-10">
              Preguntas frecuentes sobre {sub.title.toLowerCase()}
            </h2>
            <div className="space-y-3">
              {sub.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={faq.question} className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold text-neutral-900"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-base font-semibold">{faq.question}</h3>
                      <ChevronDown className={`w-5 h-5 text-green-600 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-sm text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {otherItems.length > 0 && (
        <section className="py-16 sm:py-20 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-8">
              Otros servicios dentro de {category.title}
            </h2>
            <ul className="space-y-3">
              {otherItems.map((item) => (
                <li key={item.slug}>
                  <a
                    href={`/servicios/${category.slug}/${item.slug}`}
                    className="flex items-center gap-4 bg-white hover:bg-green-50 border border-neutral-200 hover:border-green-300 rounded-xl pr-5 overflow-hidden transition-colors group"
                  >
                    <img src={item.image} alt={item.title} className="w-20 h-16 sm:w-24 sm:h-20 object-cover shrink-0" />
                    <div className="flex-1 py-3">
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
