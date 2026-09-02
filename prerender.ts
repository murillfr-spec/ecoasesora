import fs from 'fs';
import path from 'path';
import { ServiceCategory } from './src/types';
import { buildServiceCategorySchemas, buildSubServiceSchemas } from './src/lib/seo';

// Plain-data mirror of src/data/servicesData.ts (no image imports, so this
// file can run standalone under tsx without going through Vite's asset
// pipeline). Keep the text fields in sync with servicesData.ts by hand.
const SITE_URL = 'https://ecoasesora.com';

const CATEGORIES: ServiceCategory[] = [
  {
    id: 'destruccion-confidencial',
    slug: 'destruccion-confidencial',
    image: '',
    iconName: 'ShieldCheck',
    title: 'Destrucción Confidencial',
    description: 'Trituración segura de documentos y soportes, cumpliendo la Normativa UNE 15713.',
    longDescription: [
      'En Ecoasesora ofrecemos un servicio integral de destrucción confidencial de documentos, papel y soportes digitales para empresas, despachos y administraciones en Barcelona. Trituramos cada material de forma irrecuperable, cumpliendo estrictamente la Normativa UNE 15713 y la normativa de protección de datos vigente, para que tu empresa quede protegida ante cualquier fuga de información.',
      'Cada vez más empresas están obligadas a demostrar cómo gestionan la información confidencial que ya no necesitan, especialmente desde la entrada en vigor del Reglamento General de Protección de Datos (RGPD). Un simple contenedor de reciclaje no es suficiente: la documentación con datos personales, información financiera o secretos comerciales debe destruirse de forma que resulte imposible reconstruirla. Por eso trabajamos con maquinaria de trituración industrial de alta seguridad y emitimos un certificado de destrucción tras cada servicio, que acredita el cumplimiento normativo ante una posible inspección o auditoría.',
    ],
    whoFor: 'Este servicio está pensado para despachos de abogados, clínicas y centros médicos, asesorías y gestorías, entidades financieras, administraciones públicas y cualquier empresa que maneje documentación con datos personales, contratos, nóminas o información sensible que deba eliminarse de forma segura.',
    process: [
      { title: 'Recogida programada o puntual', description: 'Recogemos la documentación y los soportes digitales en tus instalaciones, en contenedores de seguridad precintados, con la frecuencia que necesites.' },
      { title: 'Trituración industrial certificada', description: 'El material se destruye mediante maquinaria de trituración de alta seguridad, garantizando que resulte irrecuperable.' },
      { title: 'Certificado de destrucción', description: 'Emitimos un certificado que acredita la fecha, el volumen y el proceso de destrucción, válido ante cualquier auditoría o inspección.' },
    ],
    sourceLinks: [
      { label: 'AENOR — Norma UNE 15713 de destrucción segura de información', url: 'https://oferta-certificacion.aenor.com/destruccion-segura-y-confidencial-de-informacion-une-15713/' },
    ],
    seoTitle: 'Destrucción Confidencial de Documentos en Barcelona | Ecoasesora',
    seoDescription: 'Servicio de destrucción confidencial de documentos y soportes digitales en Barcelona, certificado según la Normativa UNE 15713. Recogida y trituración segura.',
    items: [
      {
        slug: 'destruccion-de-materiales-confidenciales',
        image: '',
        title: 'Destrucción de materiales confidenciales',
        description: 'Trituración certificada de papel, documentación sensible y soportes digitales con garantía de irreconstrucción.',
        longDescription: [
          'Destruimos de forma certificada todo tipo de material confidencial: documentación en papel, expedientes, carpetas y soportes digitales como discos duros o memorias USB. Cada proceso se realiza con maquinaria de trituración industrial que garantiza la irreconstrucción total del material, cumpliendo la Normativa UNE 15713 y la normativa de protección de datos vigente.',
          'No es necesario que retires grapas, clips o carpetas de plástico antes de la recogida: nuestra maquinaria industrial procesa el material tal cual, sin manipulación previa por tu parte, ahorrándote tiempo interno.',
        ],
        whoFor: 'Ideal para empresas que necesitan eliminar de forma periódica archivos, contratos, nóminas o expedientes que ya no son necesarios pero contienen información sensible.',
        seoTitle: 'Destrucción de Materiales Confidenciales en Barcelona | Ecoasesora',
        seoDescription: 'Trituración certificada de papel, documentación sensible y soportes digitales en Barcelona. Garantía de irreconstrucción según la Normativa UNE 15713.',
        faqs: [
          { question: '¿Necesito preparar los documentos antes de la recogida?', answer: 'No, no hace falta separar grapas, clips ni carpetas; nuestra maquinaria industrial procesa el material tal cual.' },
          { question: '¿Puedo presenciar el proceso de destrucción?', answer: 'Sí, si lo prefieres podemos realizar la trituración in situ en tus instalaciones o mostrarte el proceso en nuestra planta.' },
        ],
      },
      {
        slug: 'destruccion-de-discos-duros',
        image: '',
        title: 'Destrucción de discos duros y soportes digitales',
        description: 'Eliminación física y permanente de discos duros, USB y otros soportes digitales con datos sensibles.',
        longDescription: [
          'Destruimos de forma física y permanente discos duros, memorias USB, tarjetas de memoria y otros soportes digitales que contengan información sensible. El proceso garantiza que los datos queden completamente irrecuperables, cumpliendo la Normativa UNE 15713 y la normativa de protección de datos vigente.',
          'El borrado de datos mediante software no siempre es suficiente para garantizar que la información no pueda recuperarse. Por eso, para soportes digitales aplicamos destrucción física, que inutiliza el dispositivo de forma permanente.',
        ],
        whoFor: 'Recomendado para departamentos de informática que renuevan equipos, empresas que dan de baja servidores o discos duros, y cualquier organización que quiera eliminar dispositivos con datos sensibles antes de desecharlos o donarlos.',
        seoTitle: 'Destrucción de Discos Duros en Barcelona | Ecoasesora',
        seoDescription: 'Destrucción física y permanente de discos duros, USB y soportes digitales en Barcelona. Datos irrecuperables, certificado según la Normativa UNE 15713.',
        faqs: [
          { question: '¿El borrado por software es suficiente en vez de la destrucción física?', answer: 'No lo recomendamos: el borrado por software puede revertirse con herramientas de recuperación de datos, mientras que la destrucción física es irreversible.' },
          { question: '¿Puedo saber qué dispositivos concretos se destruyeron?', answer: 'Sí, te entregamos un listado con el número de serie de cada dispositivo destruido junto con el certificado.' },
        ],
      },
      {
        slug: 'destruccion-de-radiografias',
        image: '',
        title: 'Destrucción de radiografías y material sanitario',
        description: 'Eliminación segura de placas radiográficas y material sanitario sensible, con tratamiento especializado.',
        longDescription: [
          'Ofrecemos un servicio especializado de destrucción de radiografías y material sanitario sensible, un tipo de residuo difícil de reciclar por métodos convencionales. Garantizamos un tratamiento seguro y conforme a la normativa, protegiendo la confidencialidad de los datos de pacientes que puedan contener.',
          'Las radiografías contienen plata en su composición, un material que puede recuperarse de forma ecológica durante el proceso de destrucción, evitando que este residuo termine en un vertedero convencional.',
        ],
        whoFor: 'Pensado para clínicas dentales, centros de radiología, hospitales y consultas médicas que necesitan eliminar placas y material sanitario obsoleto de forma segura y confidencial.',
        seoTitle: 'Destrucción de Radiografías en Barcelona | Ecoasesora',
        seoDescription: 'Destrucción segura de radiografías y material sanitario sensible en Barcelona, con tratamiento especializado y confidencial. Presupuesto en 24h.',
        faqs: [
          { question: '¿Qué pasa con la plata que contienen las radiografías?', answer: 'Se recupera de forma ecológica durante el proceso de destrucción, en lugar de terminar en un vertedero convencional.' },
          { question: '¿Sirve este servicio para cualquier tipo de placa médica?', answer: 'Sí, gestionamos radiografías convencionales, digitales y otros materiales sanitarios sensibles similares.' },
        ],
      },
    ],
    faqs: [
      { question: '¿Qué tipo de documentos y soportes pueden destruir?', answer: 'Trituramos papel, carpetas, documentación sensible y soportes digitales como discos duros o pendrives, garantizando que la información quede completamente irrecuperable.' },
      { question: '¿La destrucción confidencial cumple con la normativa vigente?', answer: 'Sí, todo el proceso se realiza conforme a la Normativa UNE 15713, la referencia en destrucción segura de información confidencial.' },
    ],
  },
  {
    id: 'gestion-residuos',
    slug: 'gestion-de-residuos',
    image: '',
    iconName: 'Recycle',
    title: 'Gestión de Residuos',
    description: 'Eliminación segura y trazable de todo tipo de residuos, cumpliendo la normativa vigente.',
    longDescription: [
      'Gestionamos de forma segura y trazable todo tipo de residuos industriales, peligrosos y líquidos en Barcelona. Desde mercaderías retenidas por aduanas hasta la limpieza de decantadores de grasas, contamos con los medios técnicos y las autorizaciones necesarias para garantizar el cumplimiento normativo en cada servicio.',
      'La correcta gestión de residuos no es solo una cuestión medioambiental: es una obligación legal. Las empresas que generan residuos peligrosos o especiales deben acreditar su trazabilidad completa, desde la recogida hasta el tratamiento final, mediante documentación oficial. Un incumplimiento puede derivar en sanciones económicas importantes. En Ecoasesora nos encargamos de todo el proceso documental y logístico, para que puedas centrarte en tu actividad con la tranquilidad de estar cumpliendo con la normativa medioambiental vigente en Cataluña.',
    ],
    whoFor: 'Trabajamos con talleres y empresas industriales, hostelería y restauración, comercios que reciben mercaderías con incidencias aduaneras, y cualquier negocio que genere residuos peligrosos, líquidos o especiales que requieran una gestión autorizada.',
    process: [
      { title: 'Diagnóstico del residuo', description: 'Identificamos el tipo de residuo, su volumen y la normativa aplicable para definir el tratamiento adecuado.' },
      { title: 'Recogida y transporte autorizado', description: 'Recogemos el residuo con vehículos y contenedores homologados para cada tipo de material.' },
      { title: 'Tratamiento y documentación', description: 'Gestionamos el tratamiento final y te entregamos la documentación que acredita la trazabilidad del proceso.' },
    ],
    sourceLinks: [
      { label: 'Agència de Residus de Catalunya — normativa de gestión de residuos', url: 'https://residus.gencat.cat/en/inici/index.html' },
    ],
    seoTitle: 'Gestión de Residuos Industriales en Barcelona | Ecoasesora',
    seoDescription: 'Gestión segura de residuos peligrosos, líquidos y mercaderías aduaneras en Barcelona. Servicios certificados y trazables. Presupuesto en 24h.',
    items: [
      {
        slug: 'destruccion-de-mercaderias-aduaneras',
        image: '',
        title: 'Destrucción de mercaderías aduaneras',
        description: 'Eliminación segura de productos retenidos por aduanas con procesos certificados.',
        longDescription: [
          'Gestionamos la destrucción segura de mercaderías retenidas por aduanas, garantizando un proceso trazable y certificado de principio a fin. Trabajamos con los protocolos exigidos para la eliminación de productos decomisados, protegiendo a tu empresa ante cualquier responsabilidad legal.',
          'Trabajamos con los protocolos exigidos por las autoridades aduaneras para la eliminación de mercancía decomisada o retenida, dejando constancia documental de cada partida destruida.',
        ],
        whoFor: 'Dirigido a empresas importadoras, agentes de aduanas y comercios que reciben notificaciones de retención o decomiso de mercancía y necesitan gestionarla de forma legal.',
        seoTitle: 'Destrucción de Mercaderías Aduaneras en Barcelona | Ecoasesora',
        seoDescription: 'Eliminación certificada de productos retenidos por aduanas en Barcelona, procesos seguros y trazables. Presupuesto en 24h.',
        faqs: [
          { question: '¿Quién puede solicitar este servicio?', answer: 'Empresas importadoras, agentes de aduanas y comercios que reciban una notificación de retención o decomiso de mercancía.' },
          { question: '¿Qué documentación se entrega tras la destrucción?', answer: 'Un certificado que acredita la eliminación de cada partida, válido para justificar el cumplimiento ante las autoridades.' },
        ],
      },
      {
        slug: 'residuos-peligrosos',
        image: '',
        title: 'Residuos peligrosos',
        description: 'Manejo y disposición responsable de residuos peligrosos, cumpliendo normativas de seguridad.',
        longDescription: [
          'Nos encargamos del manejo, transporte y disposición final de residuos peligrosos con total seguridad para tu empresa y el medio ambiente. Cumplimos estrictamente la normativa de seguridad vigente en cada fase del proceso, desde la recogida hasta la eliminación certificada.',
          'Clasificamos cada residuo según su código LER (Lista Europea de Residuos) y lo destinamos al tratamiento específico que exige la normativa, ya sea reciclaje, valorización energética o eliminación controlada.',
        ],
        whoFor: 'Adecuado para talleres mecánicos, laboratorios, industria química y cualquier actividad que genere residuos como aceites usados, disolventes, baterías o productos químicos caducados.',
        seoTitle: 'Gestión de Residuos Peligrosos en Barcelona | Ecoasesora',
        seoDescription: 'Manejo, transporte y eliminación responsable de residuos peligrosos en Barcelona, cumpliendo la normativa vigente. Llama ahora.',
        faqs: [
          { question: '¿Cómo saben qué tratamiento aplicar a cada residuo?', answer: 'Clasificamos cada residuo según su código LER (Lista Europea de Residuos) para aplicarle el tratamiento específico que exige la normativa.' },
          { question: '¿Qué tipo de residuos peligrosos gestionan?', answer: 'Aceites usados, disolventes, baterías, productos químicos caducados y otros residuos peligrosos generados por talleres, laboratorios e industria.' },
        ],
      },
      {
        slug: 'residuos-liquidos',
        image: '',
        title: 'Servicio de residuos líquidos',
        description: 'Recogida y tratamiento eficiente de residuos líquidos industriales y domésticos.',
        longDescription: [
          'Ofrecemos recogida y tratamiento eficiente de residuos líquidos, tanto industriales como domésticos. Contamos con los medios técnicos necesarios para gestionar cualquier volumen, garantizando un tratamiento respetuoso con el medio ambiente y conforme a la normativa vigente.',
          'Contamos con camiones cisterna y equipos de bombeo adaptados para la recogida de líquidos industriales, aguas contaminadas con hidrocarburos o efluentes que no pueden verterse por el desagüe convencional.',
        ],
        whoFor: 'Especialmente útil para talleres, lavanderías industriales, gasolineras y empresas cuya actividad genera residuos líquidos que requieren un tratamiento diferenciado.',
        seoTitle: 'Gestión de Residuos Líquidos en Barcelona | Ecoasesora',
        seoDescription: 'Recogida y tratamiento de residuos líquidos industriales y domésticos en Barcelona. Servicio rápido y seguro. Presupuesto en 24h.',
        faqs: [
          { question: '¿Qué tipo de residuos líquidos pueden recoger?', answer: 'Aguas contaminadas con hidrocarburos, efluentes industriales y otros líquidos que no pueden verterse por el desagüe convencional.' },
          { question: '¿Con qué medios cuentan para la recogida?', answer: 'Camiones cisterna y equipos de bombeo adaptados a distintos volúmenes y tipos de líquido.' },
        ],
      },
      {
        slug: 'limpieza-decantadores-de-grasas',
        image: '',
        title: 'Limpieza de decantadores de grasas',
        description: 'Mantenimiento profesional para prevenir obstrucciones en sistemas de separación.',
        longDescription: [
          'Realizamos el mantenimiento y limpieza profesional de decantadores de grasas para hostelería e industria alimentaria, previniendo obstrucciones, malos olores e incumplimientos normativos. Establecemos una periodicidad de mantenimiento adaptada al volumen de uso de tu negocio.',
          'Un decantador de grasas sin mantenimiento puede provocar obstrucciones, malos olores y sanciones por incumplimiento de la normativa de saneamiento. Realizamos la extracción y limpieza completa, dejando el sistema operativo.',
        ],
        whoFor: 'Imprescindible para restaurantes, bares, cocinas industriales y cualquier negocio de hostelería con obligación de mantener sus separadores de grasas en buen estado.',
        seoTitle: 'Limpieza de Decantadores de Grasas en Barcelona | Ecoasesora',
        seoDescription: 'Mantenimiento y limpieza profesional de decantadores de grasas en Barcelona para prevenir obstrucciones y malos olores. Presupuesto en 24h.',
        faqs: [
          { question: '¿Con qué frecuencia debo limpiar mi decantador de grasas?', answer: 'Depende del volumen de uso de tu cocina; te ayudamos a definir una periodicidad de mantenimiento adecuada para evitar obstrucciones.' },
          { question: '¿Qué pasa si no mantengo el decantador en buen estado?', answer: 'Puede provocar obstrucciones, malos olores y sanciones por incumplimiento de la normativa de saneamiento.' },
        ],
      },
      {
        slug: 'residuos-solidos-especiales',
        image: '',
        title: 'Gestión de residuos sólidos especiales',
        description: 'Recogida y tratamiento de residuos sólidos industriales especiales, cumpliendo la normativa de gestión de residuos.',
        longDescription: [
          'Gestionamos la recogida, transporte y tratamiento de residuos sólidos industriales especiales, adaptándonos al tipo y volumen generado por tu actividad. Contamos con los medios técnicos y las autorizaciones necesarias para garantizar una gestión segura y conforme a la normativa vigente.',
          'Gestionamos residuos sólidos que, por su composición o volumen, no pueden tratarse como residuo asimilable a urbano, coordinando su recogida, transporte y destino final autorizado.',
        ],
        whoFor: 'Pensado para fábricas, almacenes y empresas industriales que generan restos de producción, envases contaminados u otros residuos sólidos fuera del circuito habitual de recogida municipal.',
        seoTitle: 'Gestión de Residuos Sólidos Especiales en Barcelona | Ecoasesora',
        seoDescription: 'Recogida y tratamiento de residuos sólidos industriales especiales en Barcelona. Servicio autorizado. Presupuesto en 24h.',
        faqs: [
          { question: '¿Qué diferencia hay entre un residuo sólido especial y uno urbano?', answer: 'Los residuos sólidos especiales no pueden tratarse como residuo asimilable a urbano por su composición o volumen, y requieren un circuito de gestión autorizado.' },
          { question: '¿Qué tipo de empresas generan este tipo de residuo?', answer: 'Fábricas, almacenes y empresas industriales con restos de producción o envases contaminados, entre otros.' },
        ],
      },
      {
        slug: 'contenedores-de-residuos',
        image: '',
        title: 'Alquiler de contenedores para residuos',
        description: 'Contenedores de distintos tamaños para la recogida periódica o puntual de residuos en tu empresa.',
        longDescription: [
          'Ponemos a tu disposición contenedores de distintos tamaños para la recogida periódica o puntual de residuos, adaptados al volumen y tipo de actividad de tu empresa. Nos encargamos de la retirada, el transporte y el tratamiento final conforme a la normativa vigente.',
          'Disponemos de contenedores de varios tamaños, desde formatos compactos para oficinas hasta grandes contenedores industriales, con recogida programada o bajo demanda según la generación de residuos de tu actividad.',
        ],
        whoFor: 'Útil para obras, naves industriales, comercios y cualquier negocio que necesite un punto de recogida fijo para sus residuos, sin depender de llamadas puntuales.',
        seoTitle: 'Alquiler de Contenedores de Residuos en Barcelona | Ecoasesora',
        seoDescription: 'Contenedores de distintos tamaños para la recogida de residuos en tu empresa en Barcelona. Servicio periódico o puntual. Llama ahora.',
        faqs: [
          { question: '¿Qué tamaños de contenedores ofrecen?', answer: 'Desde formatos compactos para oficinas hasta grandes contenedores industriales, según el volumen de residuos de tu actividad.' },
          { question: '¿La recogida es periódica o puntual?', answer: 'Ambas opciones están disponibles; adaptamos la frecuencia de retirada a las necesidades de tu empresa.' },
        ],
      },
    ],
    faqs: [
      { question: '¿Gestionan residuos peligrosos y mercaderías retenidas por aduanas?', answer: 'Sí, ofrecemos manejo y eliminación certificada de residuos peligrosos, así como destrucción de productos retenidos por aduanas, cumpliendo la normativa de seguridad aplicable.' },
      { question: '¿Con qué frecuencia se debe limpiar un decantador de grasas?', answer: 'Depende del volumen de uso, pero recomendamos un mantenimiento periódico para evitar obstrucciones y malos olores; nuestro equipo te ayuda a definir la frecuencia adecuada.' },
    ],
  },
  {
    id: 'reciclaje-vaciado',
    slug: 'reciclaje-y-vaciado',
    image: '',
    iconName: 'Trash2',
    title: 'Reciclaje y Vaciado',
    description: 'Recogida, reciclaje y desalojo integral para entornos laborales y espacios en desuso.',
    longDescription: [
      'Facilitamos la recogida y reciclaje de papel, cartón y plásticos en entornos de oficina, además del vaciado integral de locales, naves y pisos en Barcelona. Un servicio pensado para empresas y particulares que necesitan liberar espacios de forma rápida, ordenada y respetuosa con el medio ambiente.',
      'Ya sea el reciclaje periódico de una oficina o el vaciado completo de un local, una nave o una vivienda, nuestro objetivo es siempre el mismo: dar al material recuperable una segunda vida y reducir al máximo lo que termina en vertedero. Separamos cada tipo de residuo en origen y lo destinamos a plantas de reciclaje autorizadas, ofreciendo a tu empresa o comunidad de vecinos un servicio ágil que además contribuye a sus objetivos de sostenibilidad.',
    ],
    whoFor: 'Este servicio está dirigido a oficinas y coworkings que generan papel y cartón de forma habitual, comunidades de vecinos y administradores de fincas, propietarios que necesitan vaciar un piso o trastero, y empresas que deben liberar locales o naves industriales.',
    process: [
      { title: 'Visita y presupuesto', description: 'Valoramos el espacio o el volumen de material a reciclar y te damos un presupuesto sin compromiso.' },
      { title: 'Recogida o desalojo', description: 'Ejecutamos el servicio con nuestro propio equipo, en la fecha que mejor te convenga.' },
      { title: 'Separación y reciclaje', description: 'Separamos el material recuperable y lo enviamos a plantas de reciclaje autorizadas.' },
    ],
    seoTitle: 'Reciclaje de Oficina y Vaciado de Locales en Barcelona | Ecoasesora',
    seoDescription: 'Servicio de reciclaje de papel y cartón de oficina, y vaciado de locales, naves y pisos en Barcelona. Recogida rápida. Llama ahora.',
    items: [
      {
        slug: 'reciclaje-de-oficina',
        image: '',
        title: 'Servicio de reciclaje de oficina',
        description: 'Recogida y reciclaje de papel, cartón, plásticos y más, para entornos laborales.',
        longDescription: [
          'Facilitamos la recogida periódica de papel, cartón y plásticos en entornos de oficina, ayudando a tu empresa a cumplir con sus objetivos de sostenibilidad. Adaptamos la frecuencia de recogida al volumen generado por tu negocio.',
          'Colocamos contenedores de recogida selectiva en tu oficina y establecemos una frecuencia de recogida adaptada al volumen que generas, facilitando que todo el equipo participe en el reciclaje sin esfuerzo añadido.',
        ],
        whoFor: 'Recomendado para oficinas, coworkings y despachos profesionales que quieren gestionar de forma responsable el papel, cartón y plástico que generan en su día a día.',
        seoTitle: 'Reciclaje de Oficina en Barcelona | Ecoasesora',
        seoDescription: 'Recogida y reciclaje de papel, cartón y plásticos en oficinas de Barcelona. Servicio periódico adaptado a tu negocio. Presupuesto en 24h.',
        faqs: [
          { question: '¿Con qué frecuencia pasan a recoger el material?', answer: 'Adaptamos la frecuencia de recogida al volumen que genera tu oficina, ya sea semanal, quincenal o mensual.' },
          { question: '¿Qué tipo de materiales reciclan?', answer: 'Papel, cartón, plásticos y otros materiales habituales de un entorno de oficina.' },
        ],
      },
      {
        slug: 'vaciado-de-locales-naves-y-pisos',
        image: '',
        title: 'Vaciado de locales, naves y pisos',
        description: 'Desalojo completo y limpieza de espacios comerciales, industriales y residenciales.',
        longDescription: [
          'Realizamos el desalojo completo y la limpieza de locales comerciales, naves industriales y pisos en Barcelona. Separamos y reciclamos el material recuperable siempre que es posible, dejando el espacio listo para su nuevo uso.',
          'Nos encargamos de todo: retirada de mobiliario, enseres, restos de obra o material en desuso, dejando el espacio completamente limpio y listo para su nuevo uso, ya sea una reforma, un traspaso o una nueva actividad.',
        ],
        whoFor: 'Dirigido a propietarios, administradores de fincas, comercios que cierran o cambian de local, y empresas que necesitan liberar naves industriales.',
        seoTitle: 'Vaciado de Locales, Naves y Pisos en Barcelona | Ecoasesora',
        seoDescription: 'Desalojo y limpieza completa de locales, naves industriales y pisos en Barcelona, con reciclaje del material recuperable. Presupuesto en 24h.',
        faqs: [
          { question: '¿Se encargan también de la limpieza final?', answer: 'Sí, el servicio incluye el desalojo completo y la limpieza del espacio, dejándolo listo para su nuevo uso.' },
          { question: '¿Qué pasa con los muebles y enseres que quedan en el espacio?', answer: 'Los retiramos y separamos el material recuperable para reciclarlo siempre que sea posible.' },
        ],
      },
      {
        slug: 'recogida-de-muebles',
        image: '',
        title: 'Recogida y reciclaje de muebles',
        description: 'Retirada de muebles y enseres en desuso, con reciclaje responsable del material recuperable.',
        longDescription: [
          'Retiramos muebles y enseres en desuso de oficinas, locales y viviendas, dando prioridad al reciclaje y la reutilización del material siempre que sea posible. Un servicio pensado para empresas y particulares que necesitan liberar espacio de forma rápida y responsable con el medio ambiente.',
          'Antes de desechar cualquier mueble, valoramos si puede reutilizarse o reciclarse, dando prioridad siempre a la opción más sostenible frente al vertido directo.',
        ],
        whoFor: 'Pensado para oficinas que renuevan su mobiliario, particulares que hacen una mudanza y comunidades de vecinos que necesitan retirar enseres de zonas comunes.',
        seoTitle: 'Recogida y Reciclaje de Muebles en Barcelona | Ecoasesora',
        seoDescription: 'Retirada de muebles y enseres en oficinas, locales y viviendas de Barcelona, con reciclaje responsable. Presupuesto en 24h.',
        faqs: [
          { question: '¿Recogen muebles de cualquier tamaño?', answer: 'Sí, desde piezas individuales hasta el mobiliario completo de una oficina o vivienda.' },
          { question: '¿Qué pasa con los muebles que todavía están en buen estado?', answer: 'Priorizamos su reutilización o reciclaje antes que el vertido directo, siempre que sea posible.' },
        ],
      },
      {
        slug: 'vaciado-de-trasteros-y-almacenes',
        image: '',
        title: 'Vaciado de trasteros y almacenes',
        description: 'Desalojo completo de trasteros y almacenes, con separación y reciclaje del material recuperable.',
        longDescription: [
          'Realizamos el vaciado completo de trasteros y almacenes en Barcelona, separando y reciclando el material recuperable siempre que es posible. Un servicio ágil pensado para particulares y empresas que necesitan liberar espacios de almacenamiento de forma ordenada.',
          'Vaciamos trasteros y almacenes de cualquier tamaño, clasificando el contenido para reciclar o donar lo que todavía tiene utilidad y gestionando el resto como residuo.',
        ],
        whoFor: 'Ideal para particulares que liberan un trastero, empresas que reorganizan su almacén y comunidades que necesitan vaciar espacios comunes en desuso.',
        seoTitle: 'Vaciado de Trasteros y Almacenes en Barcelona | Ecoasesora',
        seoDescription: 'Desalojo completo de trasteros y almacenes en Barcelona, con separación y reciclaje del material recuperable. Presupuesto en 24h.',
        faqs: [
          { question: '¿Clasifican el contenido antes de desecharlo?', answer: 'Sí, separamos lo que puede reciclarse o donarse del resto, que gestionamos como residuo.' },
          { question: '¿Es necesario que esté presente durante el vaciado?', answer: 'No es imprescindible, podemos coordinar el acceso y el servicio según tu disponibilidad.' },
        ],
      },
    ],
    faqs: [
      { question: '¿Qué incluye el servicio de vaciado de locales, naves y pisos?', answer: 'Incluye el desalojo completo y la limpieza del espacio, con separación y reciclaje del material recuperable siempre que sea posible.' },
      { question: '¿Recogen el material de reciclaje directamente en la oficina?', answer: 'Sí, recogemos papel, cartón y plásticos directamente en tu oficina o local, con la periodicidad que necesites.' },
    ],
  },
];

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function categoryBodyHtml(cat: ServiceCategory): string {
  const itemsHtml = cat.items
    .map((item) => `
        <li>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </li>`)
    .join('');
  const faqsHtml = cat.faqs
    .map((f) => `
        <div><h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p></div>`)
    .join('');
  return `
      <nav aria-label="Breadcrumb"><a href="/">Inicio</a> &gt; <a href="/#servicios">Servicios</a> &gt; ${escapeHtml(cat.title)}</nav>
      <h1>${escapeHtml(cat.title)} en Barcelona</h1>
      ${cat.longDescription.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n      ')}
      ${(cat.sourceLinks ?? []).map((l) => `<p><a href="${l.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)}</a></p>`).join('\n      ')}
      <h2>¿Para quién es este servicio?</h2>
      <p>${escapeHtml(cat.whoFor)}</p>
      <h2>¿Cómo funciona el proceso?</h2>
      <ol>
        ${cat.process.map((s) => `<li><h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(s.description)}</p></li>`).join('\n        ')}
      </ol>
      <h2>¿Qué incluye este servicio?</h2>
      <ul>${itemsHtml}
      </ul>
      <h2>Preguntas frecuentes sobre ${escapeHtml(cat.title.toLowerCase())}</h2>
      ${faqsHtml}
      <p><a href="tel:+34685911111">685 91 11 11</a> · <a href="/#contacto">Solicitar presupuesto</a></p>
  `;
}

function subServiceBodyHtml(cat: ServiceCategory, sub: ServiceCategory['items'][number]): string {
  const faqsHtml = sub.faqs
    .map((f) => `
        <div><h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p></div>`)
    .join('');
  return `
      <nav aria-label="Breadcrumb"><a href="/">Inicio</a> &gt; <a href="/#servicios">Servicios</a> &gt; <a href="/servicios/${cat.slug}">${escapeHtml(cat.title)}</a> &gt; ${escapeHtml(sub.title)}</nav>
      <h1>${escapeHtml(sub.title)} en Barcelona</h1>
      ${sub.longDescription.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n      ')}
      <h2>¿Para quién es este servicio?</h2>
      <p>${escapeHtml(sub.whoFor)}</p>
      ${sub.faqs.length ? `<h2>Preguntas frecuentes sobre ${escapeHtml(sub.title.toLowerCase())}</h2>\n      ${faqsHtml}` : ''}
      <p><a href="tel:+34685911111">685 91 11 11</a> · <a href="/#contacto">Solicitar presupuesto</a></p>
  `;
}

interface PageDef {
  urlPath: string;
  title: string;
  description: string;
  schemas: object[];
  bodyHtml: string | null;
}

function buildPages(): PageDef[] {
  const pages: PageDef[] = [];

  for (const cat of CATEGORIES) {
    pages.push({
      urlPath: `/servicios/${cat.slug}`,
      title: cat.seoTitle,
      description: cat.seoDescription,
      schemas: buildServiceCategorySchemas(cat),
      bodyHtml: categoryBodyHtml(cat),
    });
    for (const sub of cat.items) {
      pages.push({
        urlPath: `/servicios/${cat.slug}/${sub.slug}`,
        title: sub.seoTitle,
        description: sub.seoDescription,
        schemas: buildSubServiceSchemas(cat, sub),
        bodyHtml: subServiceBodyHtml(cat, sub),
      });
    }
  }

  return pages;
}

function main() {
  const distPath = path.join(process.cwd(), 'dist');
  const templatePath = path.join(distPath, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error(`Build output not found at ${templatePath}. Run "vite build" first.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');
  const pages = buildPages();

  for (const page of pages) {
    let html = baseHtml;
    const canonical = `${SITE_URL}${page.urlPath}`;

    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);
    html = html.replace(
      /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(page.description)}" />`
    );
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i,
      `<link rel="canonical" href="${canonical}" />`
    );
    html = html.replace(/<meta\s+property="og:title"[\s\S]*?\/?>/i, `<meta property="og:title" content="${escapeHtml(page.title)}" />`);
    html = html.replace(/<meta\s+property="og:description"[\s\S]*?\/?>/i, `<meta property="og:description" content="${escapeHtml(page.description)}" />`);
    html = html.replace(/<meta\s+property="og:url"[\s\S]*?\/?>/i, `<meta property="og:url" content="${canonical}" />`);
    html = html.replace(/<meta\s+name="twitter:title"[\s\S]*?\/?>/i, `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`);
    html = html.replace(/<meta\s+name="twitter:description"[\s\S]*?\/?>/i, `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`);

    const schemaScripts = page.schemas
      .map((schema) => `\n    <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n    </script>`)
      .join('');
    html = html.replace('</head>', `${schemaScripts}\n  </head>`);

    if (page.bodyHtml) {
      const rootOpenTag = '<div id="root">';
      const rootStart = html.indexOf(rootOpenTag);
      if (rootStart !== -1) {
        const insertAt = rootStart + rootOpenTag.length;
        html = `${html.slice(0, insertAt)}\n      <!-- Pre-rendered fallback content for non-JS crawlers -->\n      <article>${page.bodyHtml}</article>\n    ${html.slice(insertAt)}`;
      }
    }

    const routeDir = path.join(distPath, page.urlPath);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
    console.log(`Pre-rendered: ${page.urlPath}`);
  }

  console.log(`Done. Pre-rendered ${pages.length} service routes.`);
}

main();
