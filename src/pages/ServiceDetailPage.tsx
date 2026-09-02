import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Phone, ArrowRight, ArrowUpRight, Users, ExternalLink } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { Eyebrow } from '../components/Eyebrow';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const service = SERVICE_CATEGORIES.find((s) => s.slug === slug) ?? SERVICE_CATEGORIES[0];
  const otherServices = SERVICE_CATEGORIES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 w-full">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-neutral-300 mb-5">
            <a href="/" className="hover:text-white transition-colors">Inicio</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <a href="/#servicios" className="hover:text-white transition-colors">Servicios</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">{service.title}</span>
          </nav>
          <Eyebrow variant="dark">Servicio</Eyebrow>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-3 max-w-3xl leading-tight">
            {service.title} en Barcelona
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {service.longDescription.map((paragraph, i) => (
            <p key={i} className="text-lg text-neutral-600 leading-relaxed">{paragraph}</p>
          ))}
          {service.sourceLinks && service.sourceLinks.length > 0 && (
            <ul className="pt-2 space-y-1.5">
              {service.sourceLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-700 hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
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
              <p className="text-sm text-neutral-600 leading-relaxed">{service.whoFor}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-10">
            ¿Cómo funciona el proceso?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {service.process.map((step, i) => (
              <div key={step.title}>
                <div className="w-9 h-9 rounded-full bg-green-500 text-white font-extrabold text-sm flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="font-extrabold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-10">
            ¿Qué incluye este servicio?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.items.map((item) => (
              <a
                key={item.slug}
                href={`/servicios/${service.slug}/${item.slug}`}
                className="group bg-white border border-neutral-200 hover:border-green-300 rounded-2xl overflow-hidden transition-colors"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-neutral-400 group-hover:text-green-600 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-extrabold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-10">
            Preguntas frecuentes sobre {service.title.toLowerCase()}
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => {
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

      <section className="py-16 sm:py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-10">
            Otros servicios que te pueden interesar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherServices.map((other) => (
              <a
                key={other.id}
                href={`/servicios/${other.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-[16/9]"
              >
                <img src={other.image} alt={other.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between">
                  <h3 className="text-white font-extrabold">{other.title}</h3>
                  <ArrowRight className="w-5 h-5 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto-servicio" className="py-16 sm:py-20 bg-green-500">
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
