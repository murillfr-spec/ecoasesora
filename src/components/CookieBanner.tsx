import React, { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';

const CONSENT_KEY = 'ecoasesora_cookie_consent';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = window.localStorage.getItem(CONSENT_KEY);
      if (!consent) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      window.localStorage.setItem(CONSENT_KEY, 'accepted');
    } catch {
      /* ignore storage errors */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-neutral-950 text-white rounded-2xl shadow-2xl border border-neutral-800 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-green-500/15 text-green-400 flex items-center justify-center shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <p className="text-sm text-neutral-300 leading-relaxed flex-1">
          Utilizamos únicamente cookies técnicas necesarias para el funcionamiento del sitio web. No usamos cookies
          de análisis ni de publicidad. Puedes consultar más información en nuestra{' '}
          <a href="/politica-privacidad" className="text-green-400 font-semibold hover:underline">
            Política de Privacidad
          </a>.
        </p>
        <button
          onClick={accept}
          className="shrink-0 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold text-sm px-6 py-3 rounded-full shadow-md transition-colors"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};
