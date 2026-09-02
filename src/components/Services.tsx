import React from 'react';
import { ShieldCheck, Recycle, Trash2, Wrench, Check, LucideIcon } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  Recycle,
  Trash2,
  Wrench,
};

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-emerald-600 text-xs sm:text-sm font-bold tracking-widest uppercase">\ Servicios \</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Aprovechando la Naturaleza para un Futuro Sostenible
          </h2>
          <p className="text-slate-600">
            Soluciones ecológicas de limpieza y gestión de residuos usando productos y procesos no tóxicos, para promover entornos de trabajo más saludables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_CATEGORIES.map((cat) => {
            const Icon = ICONS[cat.iconName] ?? Recycle;
            return (
              <div
                key={cat.id}
                id={cat.id}
                className="group bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg scroll-mt-24"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{cat.description}</p>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item.title} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong className="text-slate-800">{item.title}:</strong> {item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
