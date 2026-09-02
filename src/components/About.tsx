import React from 'react';
import { Leaf, ShieldCheck, Truck, Clock4, ArrowRight } from 'lucide-react';
import aboutImg from '../assets/images/about_recycling_bins.webp';

const POINTS = [
  { icon: Leaf, text: 'Gestión ambiental con más de 20 años de trayectoria' },
  { icon: ShieldCheck, text: 'Cumplimiento estricto de la Normativa UNE 15713' },
  { icon: Truck, text: 'Flota propia y equipo técnico especializado' },
  { icon: Clock4, text: 'Atención personalizada 24 horas, todos los días' },
];

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 relative">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-60 -z-10" />
          <div className="rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src={aboutImg}
              alt="Espacio de trabajo sostenible de Ecoasesora"
              className="w-full h-full object-cover aspect-[5/4]"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 sm:right-4 bg-neutral-900 text-white rounded-2xl shadow-2xl px-6 py-5 sm:px-8 sm:py-6 max-w-[220px]">
            <div className="text-3xl sm:text-4xl font-extrabold text-green-400 mb-1">20+</div>
            <p className="text-xs text-neutral-300 leading-snug">Años ayudando a empresas a gestionar sus residuos de forma responsable</p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <span className="text-green-600 text-xs sm:text-sm font-bold tracking-widest uppercase">\ Sobre Nosotros \</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-3 mb-5 leading-tight">
            Decisiones Sostenibles, Posibilidades Infinitas
          </h2>
          <p className="text-neutral-500 mb-8">
            En Ecoasesora estamos comprometidos con la creación de un futuro más limpio a través de soluciones responsables de reciclaje, gestión de residuos y destrucción confidencial, garantizando siempre el máximo cumplimiento normativo.
          </p>
          <ul className="space-y-4 mb-9">
            {POINTS.map((point) => (
              <li key={point.text} className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  <point.icon className="w-4.5 h-4.5" />
                </span>
                <span className="text-sm text-neutral-700 font-medium">{point.text}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Habla con Nosotros
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
