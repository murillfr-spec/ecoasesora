import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Eyebrow } from '../components/Eyebrow';

export const AvisoLegalPage: React.FC = () => {
  return (
    <>
      <section className="relative bg-neutral-950 pt-32 pb-12 sm:pt-36 sm:pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-neutral-400 mb-5">
            <a href="/" className="hover:text-white transition-colors">Inicio</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Aviso Legal</span>
          </nav>
          <Eyebrow variant="dark">Información Legal</Eyebrow>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">Aviso Legal</h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral max-w-none">
          <div className="space-y-10 text-neutral-600 leading-relaxed text-[15px]">
            <p className="text-sm text-neutral-400">Última actualización: septiembre de 2026</p>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">1. Datos identificativos</h2>
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
                Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los siguientes datos:
              </p>
              <ul className="mt-3 space-y-1.5 list-none">
                <li><strong>Denominación comercial:</strong> Ecoasesora</li>
                <li><strong>Domicilio:</strong> Carrer del Comerç, 30 · 08980 Sant Feliu de Llobregat, Barcelona</li>
                <li><strong>Correo electrónico:</strong> info@ecoasesora.com</li>
                <li><strong>Teléfono:</strong> 685 91 11 11</li>
                <li><strong>Sitio web:</strong> ecoasesora.com</li>
              </ul>
              <p className="mt-3 text-sm text-neutral-400">
                Los datos identificativos completos (NIF/CIF y datos registrales) están a disposición del usuario que
                los solicite a través de los canales de contacto anteriores.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">2. Objeto y ámbito de aplicación</h2>
              <p>
                El presente Aviso Legal regula el uso del sitio web ecoasesora.com (en adelante, "el sitio web"),
                que Ecoasesora pone a disposición de los usuarios de Internet con la finalidad de proporcionar
                información sobre sus servicios de reciclaje, gestión de residuos y destrucción confidencial de
                documentación, así como facilitar un canal de contacto y solicitud de presupuesto.
              </p>
              <p className="mt-3">
                La navegación por el sitio web atribuye la condición de usuario e implica la aceptación plena de
                todas las disposiciones incluidas en este Aviso Legal.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">3. Condiciones de acceso y uso</h2>
              <p>
                El acceso al sitio web es gratuito, salvo en lo relativo al coste de conexión a través de la red de
                telecomunicaciones suministrada por el proveedor de acceso contratado por el usuario. El usuario se
                compromete a hacer un uso adecuado y lícito del sitio web, así como de los contenidos y servicios que
                se ofrecen, y a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y al
                orden público, o que puedan causar perjuicio a los derechos e intereses de terceros o de Ecoasesora.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">4. Propiedad intelectual e industrial</h2>
              <p>
                Todos los contenidos del sitio web, incluyendo a título enunciativo y no limitativo textos,
                fotografías, gráficos, imágenes, iconos, tecnología, software, diseño gráfico y códigos fuente, así
                como el logotipo, marcas denominativas o mixtas y demás signos distintivos, son propiedad de
                Ecoasesora o de terceros licenciantes, y están protegidos por la normativa de propiedad intelectual
                e industrial. Queda expresamente prohibida su reproducción, distribución, comunicación pública o
                transformación total o parcial sin la autorización previa y por escrito de sus legítimos titulares.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">5. Exclusión de responsabilidad</h2>
              <p>
                Ecoasesora no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran
                derivarse de la falta de disponibilidad o continuidad del funcionamiento del sitio web, de la
                presencia de virus u otros elementos lesivos, del uso ilícito, negligente, fraudulento o contrario al
                presente Aviso Legal, ni de la falta de veracidad, exactitud o vigencia de los contenidos, sin
                perjuicio de las medidas técnicas razonables que se adopten para evitarlo. Los contenidos de este
                sitio web tienen carácter meramente informativo y no constituyen asesoramiento profesional
                vinculante.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">6. Enlaces a terceros</h2>
              <p>
                El sitio web puede contener enlaces a sitios web de terceros. Ecoasesora no asume ninguna
                responsabilidad sobre el contenido, exactitud o funcionamiento de dichos sitios, cuyo acceso es
                ajeno a su control.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">7. Legislación aplicable y jurisdicción</h2>
              <p>
                Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier
                controversia que pudiera derivarse del acceso o uso del sitio web, Ecoasesora y el usuario se
                someten a los Juzgados y Tribunales del domicilio del usuario, cuando la normativa aplicable permita
                pactar el fuero y en aquellos casos en que corresponda su aplicación imperativa.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 mb-3">8. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con este Aviso Legal puede contactar con nosotros a través del
                correo electrónico{' '}
                <a href="mailto:info@ecoasesora.com" className="text-green-600 font-semibold hover:underline">
                  info@ecoasesora.com
                </a>{' '}
                o del teléfono{' '}
                <a href="tel:+34685911111" className="text-green-600 font-semibold hover:underline">
                  685 91 11 11
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
