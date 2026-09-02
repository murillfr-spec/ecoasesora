import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <span className="text-emerald-600 text-xs sm:text-sm font-bold tracking-widest uppercase">\ Contacto \</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-5">
            Pregúntanos qué podemos hacer por ti
          </h2>
          <p className="text-slate-600 mb-8">
            Comprometidos con la sostenibilidad y el medio ambiente. Solicita presupuesto sin compromiso.
          </p>

          <div className="space-y-4 text-sm">
            <a href="tel:+34685911111" className="flex items-center gap-3 text-slate-800 hover:text-emerald-700 font-semibold">
              <span className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Phone className="w-4.5 h-4.5" />
              </span>
              685 91 11 11
            </a>
            <a href="mailto:info@ecoasesora.com" className="flex items-center gap-3 text-slate-800 hover:text-emerald-700 font-semibold">
              <span className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Mail className="w-4.5 h-4.5" />
              </span>
              info@ecoasesora.com
            </a>
            <div className="flex items-center gap-3 text-slate-800">
              <span className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <MapPin className="w-4.5 h-4.5" />
              </span>
              Carrer del Comerç, 30 · Sant Feliu de Llobregat, Barcelona
            </div>
            <div className="flex items-center gap-3 text-slate-800">
              <span className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Clock className="w-4.5 h-4.5" />
              </span>
              Abierto 24 horas
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          {status === 'sent' ? (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">¡Gracias!</h3>
              <p className="text-slate-600">Hemos recibido tu solicitud, te contactaremos en menos de 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nombre*"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
                />
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Teléfono*"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
                />
              </div>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
              />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm text-slate-600"
              >
                <option value="">Selecciona un servicio (opcional)</option>
                {SERVICE_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.title}>{cat.title}</option>
                ))}
              </select>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Cuéntanos qué necesitas"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none text-sm resize-none"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold text-sm py-3.5 rounded-full shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                {status === 'sending' ? 'Enviando...' : 'Solicitar Presupuesto'}
              </button>
              {status === 'error' && (
                <p className="text-xs text-red-600 text-center">No se pudo enviar. Prueba llamando al 685 91 11 11.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
