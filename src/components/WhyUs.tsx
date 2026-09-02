import React from 'react';
import { Leaf, Clock, Settings2, Handshake, LucideIcon } from 'lucide-react';
import { VALUE_PROPS, STATS } from '../data/servicesData';

const ICONS: Record<string, LucideIcon> = {
  Leaf,
  Clock,
  Settings2,
  Handshake,
};

export const WhyUs: React.FC = () => {
  return (
    <section id="por-que-elegirnos" className="py-20 sm:py-28 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-emerald-400 text-xs sm:text-sm font-bold tracking-widest uppercase">\ Por Qué Elegirnos \</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
            Marcamos la diferencia con hechos, no solo con palabras
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {VALUE_PROPS.map((prop) => {
            const Icon = ICONS[prop.iconName] ?? Leaf;
            return (
              <div key={prop.title} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white mb-2">{prop.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{prop.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-slate-800 pt-14">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 mb-2">{stat.value}</div>
              <div className="font-bold text-white mb-1">{stat.label}</div>
              <p className="text-xs text-slate-400 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
