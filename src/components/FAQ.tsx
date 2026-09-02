import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-green-600 text-xs sm:text-sm font-bold tracking-widest uppercase">\ Preguntas Frecuentes \</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-3">
            ¿Tienes dudas? Aquí tienes las respuestas
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold text-neutral-900"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base">{faq.question}</h3>
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
  );
};
