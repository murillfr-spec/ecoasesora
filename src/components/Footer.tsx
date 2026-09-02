import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import companyLogo from '../assets/images/ecoasesora_logo.png';
import { SERVICE_CATEGORIES } from '../data/servicesData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t-4 border-green-500 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-neutral-800">
          <div className="space-y-4">
            <img
              src={companyLogo}
              alt="Ecoasesora"
              className="h-14 w-auto object-contain bg-white rounded-lg p-1"
            />
            <p className="text-xs text-neutral-400 leading-relaxed">
              Empresa especializada en reciclaje, gestión de residuos y destrucción confidencial de documentos en Sant Feliu de Llobregat y el área metropolitana de Barcelona.
            </p>
            <div className="space-y-2 text-xs">
              <a href="tel:+34685911111" className="flex items-center gap-2 text-green-400 font-bold hover:underline">
                <Phone className="w-4 h-4" />
                <span>685 91 11 11</span>
              </a>
              <a href="mailto:info@ecoasesora.com" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-green-500" />
                <span>info@ecoasesora.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span>Carrer del Comerç, 30 · 08980 Sant Feliu de Llobregat, Barcelona</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-500 shrink-0" />
                <span>Abierto 24 horas</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Servicios
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a href={`/servicios/${cat.slug}`} className="hover:text-green-400 transition-colors flex items-center gap-1.5">
                    <span className="text-green-500">›</span>
                    <span>{cat.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Enlaces
            </h3>
            <ul className="space-y-2 text-xs">
              <li><a href="/#nosotros" className="hover:text-green-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="/#faq" className="hover:text-green-400 transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="/#contacto" className="hover:text-green-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Ubicación
            </h3>
            <div className="rounded-lg overflow-hidden border border-neutral-700 shadow-md h-36 bg-neutral-800">
              <iframe
                title="Ubicación Ecoasesora Sant Feliu de Llobregat"
                src="https://maps.google.com/maps?q=Carrer%20del%20Comer%C3%A7%2030%20Sant%20Feliu%20de%20Llobregat%20Barcelona&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>© {new Date().getFullYear()} Ecoasesora | Reciclaje y gestión de residuos | Sant Feliu de Llobregat, Barcelona</div>
        </div>
      </div>
    </footer>
  );
};
