import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import aboutImg from '../assets/images/about_recycling_bins.webp';

const POINTS = [
  'Más de 20 años de experiencia en gestión ambiental',
  'Cumplimiento estricto de la Normativa UNE 15713',
  'Flota propia y equipo técnico especializado',
  'Atención personalizada 24 horas, todos los días',
];

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src={aboutImg}
            alt="Contenedores de reciclaje separados por tipo de residuo"
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </div>
        <div>
          <span className="text-emerald-600 text-xs sm:text-sm font-bold tracking-widest uppercase">\ Sobre Nosotros \</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-5">
            Decisiones Sostenibles, Posibilidades Infinitas
          </h2>
          <p className="text-slate-600 mb-4">
            En Ecoasesora estamos comprometidos con la creación de un futuro más limpio a través de soluciones responsables de reciclaje, gestión de residuos y destrucción confidencial.
          </p>
          <p className="text-slate-600 mb-8">
            Nuestra misión es ayudarte a tomar decisiones respetuosas con el medio ambiente, garantizando siempre el cumplimiento normativo y la máxima seguridad para tu empresa o negocio.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 mt-0.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-full shadow-md transition-all"
          >
            Habla con Nosotros
          </a>
        </div>
      </div>
    </section>
  );
};
