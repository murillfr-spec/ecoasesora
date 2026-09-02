import React from 'react';
import offerImg from '../assets/images/ofrecemos_section.webp';
import { Eyebrow } from './Eyebrow';

const STEPS = [
  {
    title: 'Diagnóstico Personalizado',
    description: 'Analizamos el tipo y volumen de residuos de tu negocio para diseñar el servicio adecuado.',
  },
  {
    title: 'Recogida y Ejecución',
    description: 'Ejecutamos el servicio con flota y equipo propio, cumpliendo todos los protocolos de seguridad.',
  },
  {
    title: 'Certificación y Seguimiento',
    description: 'Te entregamos la documentación que acredita el proceso, según la Normativa UNE 15713.',
  },
];

export const Offer: React.FC = () => {
  return (
    <section id="que-ofrecemos" className="py-20 sm:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
          <img
            src={offerImg}
            alt="Equipo de Ecoasesora gestionando residuos"
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </div>
        <div className="order-1 lg:order-2">
          <Eyebrow>Qué Ofrecemos</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-3 mb-4 leading-tight">
            Así Trabajamos en Ecoasesora
          </h2>
          <p className="text-neutral-500 mb-2 font-semibold">
            Nuestra misión es hacer que la gestión de residuos sea simple, segura y accesible para todos.
          </p>
          <p className="text-neutral-500 mb-8">
            Un proceso claro y 100% trazable, adaptado a las necesidades de tu negocio o comunidad.
          </p>
          <ul className="space-y-6">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex items-start gap-4">
                <span className="w-9 h-9 rounded-full bg-green-500 text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-extrabold text-neutral-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-neutral-500">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
