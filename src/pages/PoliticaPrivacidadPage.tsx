import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Eyebrow } from '../components/Eyebrow';

export const PoliticaPrivacidadPage: React.FC = () => {
  return (
    <>
      <section className="relative bg-neutral-950 pt-32 pb-12 sm:pt-36 sm:pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-neutral-400 mb-5">
            <a href="/" className="hover:text-white transition-colors">Inicio</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Política de Privacidad</span>
          </nav>
          <Eyebrow variant="dark">Información Legal</Eyebrow>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">Política de Privacidad</h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral max-w-none">
          <div className="space-y-10 text-neutral-600 leading-relaxed text-[15px]">
            <p className="text-sm text-neutral-400">Última actualización: septiembre de 2026</p>

            <p>
              En Ecoasesora respetamos y protegemos la privacidad de nuestros usuarios. Esta Política de Privacidad
              describe cómo recogemos, tratamos y protegemos los datos personales facilitados a través del sitio web
              ecoasesora.com, de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de 5 de
              diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
            </p>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">1. Responsable del tratamiento</h2>
              <ul className="space-y-1.5 list-none">
                <li><strong>Denominación:</strong> Ecoasesora</li>
                <li><strong>Domicilio:</strong> Carrer del Comerç, 30 · 08980 Sant Feliu de Llobregat, Barcelona</li>
                <li><strong>Correo electrónico:</strong> info@ecoasesora.com</li>
                <li><strong>Teléfono:</strong> 685 91 11 11</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">2. Datos que recogemos</h2>
              <p>
                A través del formulario de contacto presente en el sitio web recogemos los siguientes datos que el
                usuario facilita voluntariamente: nombre, correo electrónico, teléfono, servicio de interés y
                mensaje. No se recogen categorías especiales de datos ni se realiza ninguna decisión automatizada ni
                elaboración de perfiles con la información facilitada.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">3. Finalidad del tratamiento</h2>
              <p>Los datos facilitados a través del formulario de contacto se tratan con las siguientes finalidades:</p>
              <ul className="mt-3 space-y-1.5 list-disc pl-5">
                <li>Atender y responder a las solicitudes de información o presupuesto realizadas por el usuario.</li>
                <li>Gestionar la relación comercial previa a la eventual contratación de nuestros servicios.</li>
                <li>Enviar comunicaciones relacionadas con la solicitud realizada por el usuario.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">4. Legitimación</h2>
              <p>
                La base legal para el tratamiento de los datos es el consentimiento del usuario, prestado de forma
                libre e inequívoca al cumplimentar y enviar el formulario de contacto, así como el interés legítimo
                de Ecoasesora en atender las solicitudes de información recibidas.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">5. Destinatarios y encargados del tratamiento</h2>
              <p>
                Los datos no se cederán a terceros salvo obligación legal. Para el envío del formulario de contacto
                utilizamos un proveedor de servicios de correo electrónico que actúa como encargado del tratamiento
                bajo las garantías exigidas por la normativa de protección de datos, con el único fin de hacer llegar
                la solicitud del usuario a Ecoasesora.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">6. Plazo de conservación</h2>
              <p>
                Los datos se conservarán mientras se mantenga la relación comercial o durante el tiempo necesario
                para atender la solicitud realizada, y posteriormente, en su caso, durante los plazos legalmente
                establecidos para atender eventuales responsabilidades derivadas del tratamiento.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">7. Derechos de las personas interesadas</h2>
              <p>El usuario puede ejercer, en cualquier momento y de forma gratuita, los siguientes derechos:</p>
              <ul className="mt-3 space-y-1.5 list-disc pl-5">
                <li>Derecho de acceso a sus datos personales.</li>
                <li>Derecho de rectificación de datos inexactos.</li>
                <li>Derecho de supresión de sus datos.</li>
                <li>Derecho de oposición al tratamiento.</li>
                <li>Derecho a la limitación del tratamiento.</li>
                <li>Derecho a la portabilidad de los datos.</li>
              </ul>
              <p className="mt-3">
                Estos derechos pueden ejercerse enviando una solicitud, junto con copia de un documento identificativo,
                al correo electrónico{' '}
                <a href="mailto:info@ecoasesora.com" className="text-green-600 font-semibold hover:underline">info@ecoasesora.com</a>.
                Asimismo, el usuario tiene derecho a presentar una reclamación ante la Agencia Española de Protección
                de Datos (www.aepd.es) si considera que el tratamiento de sus datos no se ajusta a la normativa
                vigente.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">8. Política de cookies</h2>
              <p>
                Este sitio web utiliza únicamente cookies técnicas y funcionales, estrictamente necesarias para su
                correcto funcionamiento (por ejemplo, para recordar la preferencia sobre el aviso de cookies).
                Actualmente el sitio web no utiliza cookies de análisis, personalización ni publicidad de terceros.
                Si en el futuro se incorporasen este tipo de cookies, se solicitará el consentimiento previo del
                usuario conforme a la normativa aplicable. El usuario puede eliminar o bloquear las cookies en
                cualquier momento configurando su navegador.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">9. Medidas de seguridad</h2>
              <p>
                Ecoasesora adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad de los
                datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta
                del estado de la tecnología, la naturaleza de los datos y los riesgos a los que están expuestos.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">10. Modificaciones</h2>
              <p>
                Ecoasesora se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a
                novedades legislativas o jurisprudenciales, así como a prácticas del sector. Cualquier cambio será
                publicado en esta misma página.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
