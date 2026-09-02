import React from 'react';
import { STATS } from '../data/servicesData';
import { Eyebrow } from './Eyebrow';

export const Stats: React.FC = () => {
  return (
    <section className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="mb-8"><Eyebrow variant="dark">Ecoasesora en Cifras</Eyebrow></h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2">{stat.value}</div>
              <div className="text-green-400 text-xs font-bold uppercase tracking-wide mb-1">{stat.label}</div>
              <p className="text-xs text-neutral-400 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
