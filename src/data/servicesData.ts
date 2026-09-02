import { ServiceCategory, Stat } from '../types';
import confidentialImg from '../assets/images/service_confidential_shredding.webp';
import residuosImg from '../assets/images/service_gestion_residuos.webp';
import reciclajeImg from '../assets/images/service_reciclaje_oficina.webp';
import discosDurosImg from '../assets/images/sub_discos_duros.webp';
import radiografiasImg from '../assets/images/sub_radiografias.webp';
import mercaderiasAduanerasImg from '../assets/images/sub_mercaderias_aduaneras.webp';
import residuosPeligrososImg from '../assets/images/sub_residuos_peligrosos.webp';
import residuosLiquidosImg from '../assets/images/sub_residuos_liquidos.webp';
import decantadoresGrasasImg from '../assets/images/sub_decantadores_grasas.webp';
import residuosSolidosImg from '../assets/images/sub_residuos_solidos.webp';
import contenedoresImg from '../assets/images/sub_contenedores.webp';
import vaciadoLocalesImg from '../assets/images/sub_vaciado_locales.webp';
import recogidaMueblesImg from '../assets/images/sub_recogida_muebles.webp';
import vaciadoTrasterosImg from '../assets/images/sub_vaciado_trasteros.webp';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'destruccion-confidencial',
    slug: 'destruccion-confidencial',
    image: confidentialImg,
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
    seoTitle: 'Destrucción Confidencial de Documentos en Barcelona | Ecoasesora',
    seoDescription: 'Servicio de destrucción confidencial de documentos y soportes digitales en Barcelona, certificado según la Normativa UNE 15713. Recogida y trituración segura.',
    items: [
      {
        slug: 'destruccion-de-materiales-confidenciales',
        image: confidentialImg,
        title: 'Destrucción de materiales confidenciales',
        description: 'Trituración certificada de papel, documentación sensible y soportes digitales con garantía de irreconstrucción.',
        longDescription: [
          'Destruimos de forma certificada todo tipo de material confidencial: documentación en papel, expedientes, carpetas y soportes digitales como discos duros o memorias USB. Cada proceso se realiza con maquinaria de trituración industrial que garantiza la irreconstrucción total del material, cumpliendo la Normativa UNE 15713 y la normativa de protección de datos vigente.',
          'No es necesario que retires grapas, clips o carpetas de plástico antes de la recogida: nuestra maquinaria industrial procesa el material tal cual, sin manipulación previa por tu parte, ahorrándote tiempo interno.',
        ],
        whoFor: 'Ideal para empresas que necesitan eliminar de forma periódica archivos, contratos, nóminas o expedientes que ya no son necesarios pero contienen información sensible.',
        seoTitle: 'Destrucción de Materiales Confidenciales en Barcelona | Ecoasesora',
        seoDescription: 'Trituración certificada de papel, documentación sensible y soportes digitales en Barcelona. Garantía de irreconstrucción según la Normativa UNE 15713.',
      },
      {
        slug: 'destruccion-de-discos-duros',
        image: discosDurosImg,
        title: 'Destrucción de discos duros y soportes digitales',
        description: 'Eliminación física y permanente de discos duros, USB y otros soportes digitales con datos sensibles.',
        longDescription: [
          'Destruimos de forma física y permanente discos duros, memorias USB, tarjetas de memoria y otros soportes digitales que contengan información sensible. El proceso garantiza que los datos queden completamente irrecuperables, cumpliendo la Normativa UNE 15713 y la normativa de protección de datos vigente.',
          'El borrado de datos mediante software no siempre es suficiente para garantizar que la información no pueda recuperarse. Por eso, para soportes digitales aplicamos destrucción física, que inutiliza el dispositivo de forma permanente.',
        ],
        whoFor: 'Recomendado para departamentos de informática que renuevan equipos, empresas que dan de baja servidores o discos duros, y cualquier organización que quiera eliminar dispositivos con datos sensibles antes de desecharlos o donarlos.',
        seoTitle: 'Destrucción de Discos Duros y Soportes Digitales en Barcelona | Ecoasesora',
        seoDescription: 'Destrucción física y permanente de discos duros, USB y soportes digitales en Barcelona. Datos irrecuperables, certificado según la Normativa UNE 15713.',
      },
      {
        slug: 'destruccion-de-radiografias',
        image: radiografiasImg,
        title: 'Destrucción de radiografías y material sanitario',
        description: 'Eliminación segura de placas radiográficas y material sanitario sensible, con tratamiento especializado.',
        longDescription: [
          'Ofrecemos un servicio especializado de destrucción de radiografías y material sanitario sensible, un tipo de residuo difícil de reciclar por métodos convencionales. Garantizamos un tratamiento seguro y conforme a la normativa, protegiendo la confidencialidad de los datos de pacientes que puedan contener.',
          'Las radiografías contienen plata en su composición, un material que puede recuperarse de forma ecológica durante el proceso de destrucción, evitando que este residuo termine en un vertedero convencional.',
        ],
        whoFor: 'Pensado para clínicas dentales, centros de radiología, hospitales y consultas médicas que necesitan eliminar placas y material sanitario obsoleto de forma segura y confidencial.',
        seoTitle: 'Destrucción de Radiografías en Barcelona | Ecoasesora',
        seoDescription: 'Destrucción segura de radiografías y material sanitario sensible en Barcelona, con tratamiento especializado y confidencial.',
      },
    ],
    faqs: [
      {
        question: '¿Qué tipo de documentos y soportes pueden destruir?',
        answer: 'Trituramos papel, carpetas, documentación sensible y soportes digitales como discos duros o pendrives, garantizando que la información quede completamente irrecuperable.',
      },
      {
        question: '¿La destrucción confidencial cumple con la normativa vigente?',
        answer: 'Sí, todo el proceso se realiza conforme a la Normativa UNE 15713, la referencia en destrucción segura de información confidencial.',
      },
    ],
  },
  {
    id: 'gestion-residuos',
    slug: 'gestion-de-residuos',
    image: residuosImg,
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
    seoTitle: 'Gestión de Residuos Industriales y Peligrosos en Barcelona | Ecoasesora',
    seoDescription: 'Gestión segura de residuos peligrosos, líquidos y mercaderías aduaneras en Barcelona. Servicios certificados y trazables para empresas.',
    items: [
      {
        slug: 'destruccion-de-mercaderias-aduaneras',
        image: mercaderiasAduanerasImg,
        title: 'Destrucción de mercaderías aduaneras',
        description: 'Eliminación segura de productos retenidos por aduanas con procesos certificados.',
        longDescription: [
          'Gestionamos la destrucción segura de mercaderías retenidas por aduanas, garantizando un proceso trazable y certificado de principio a fin. Trabajamos con los protocolos exigidos para la eliminación de productos decomisados, protegiendo a tu empresa ante cualquier responsabilidad legal.',
          'Trabajamos con los protocolos exigidos por las autoridades aduaneras para la eliminación de mercancía decomisada o retenida, dejando constancia documental de cada partida destruida.',
        ],
        whoFor: 'Dirigido a empresas importadoras, agentes de aduanas y comercios que reciben notificaciones de retención o decomiso de mercancía y necesitan gestionarla de forma legal.',
        seoTitle: 'Destrucción de Mercaderías Aduaneras en Barcelona | Ecoasesora',
        seoDescription: 'Eliminación certificada de productos retenidos por aduanas en Barcelona, con procesos seguros y trazables que cumplen la normativa vigente.',
      },
      {
        slug: 'residuos-peligrosos',
        image: residuosPeligrososImg,
        title: 'Residuos peligrosos',
        description: 'Manejo y disposición responsable de residuos peligrosos, cumpliendo normativas de seguridad.',
        longDescription: [
          'Nos encargamos del manejo, transporte y disposición final de residuos peligrosos con total seguridad para tu empresa y el medio ambiente. Cumplimos estrictamente la normativa de seguridad vigente en cada fase del proceso, desde la recogida hasta la eliminación certificada.',
          'Clasificamos cada residuo según su código LER (Lista Europea de Residuos) y lo destinamos al tratamiento específico que exige la normativa, ya sea reciclaje, valorización energética o eliminación controlada.',
        ],
        whoFor: 'Adecuado para talleres mecánicos, laboratorios, industria química y cualquier actividad que genere residuos como aceites usados, disolventes, baterías o productos químicos caducados.',
        seoTitle: 'Gestión de Residuos Peligrosos en Barcelona | Ecoasesora',
        seoDescription: 'Manejo, transporte y eliminación responsable de residuos peligrosos en Barcelona, cumpliendo la normativa de seguridad y medioambiental vigente.',
      },
      {
        slug: 'residuos-liquidos',
        image: residuosLiquidosImg,
        title: 'Servicio de residuos líquidos',
        description: 'Recogida y tratamiento eficiente de residuos líquidos industriales y domésticos.',
        longDescription: [
          'Ofrecemos recogida y tratamiento eficiente de residuos líquidos, tanto industriales como domésticos. Contamos con los medios técnicos necesarios para gestionar cualquier volumen, garantizando un tratamiento respetuoso con el medio ambiente y conforme a la normativa vigente.',
          'Contamos con camiones cisterna y equipos de bombeo adaptados para la recogida de líquidos industriales, aguas contaminadas con hidrocarburos o efluentes que no pueden verterse por el desagüe convencional.',
        ],
        whoFor: 'Especialmente útil para talleres, lavanderías industriales, gasolineras y empresas cuya actividad genera residuos líquidos que requieren un tratamiento diferenciado.',
        seoTitle: 'Gestión de Residuos Líquidos en Barcelona | Ecoasesora',
        seoDescription: 'Recogida y tratamiento de residuos líquidos industriales y domésticos en Barcelona. Servicio rápido, seguro y conforme a la normativa.',
      },
      {
        slug: 'limpieza-decantadores-de-grasas',
        image: decantadoresGrasasImg,
        title: 'Limpieza de decantadores de grasas',
        description: 'Mantenimiento profesional para prevenir obstrucciones en sistemas de separación.',
        longDescription: [
          'Realizamos el mantenimiento y limpieza profesional de decantadores de grasas para hostelería e industria alimentaria, previniendo obstrucciones, malos olores e incumplimientos normativos. Establecemos una periodicidad de mantenimiento adaptada al volumen de uso de tu negocio.',
          'Un decantador de grasas sin mantenimiento puede provocar obstrucciones, malos olores y sanciones por incumplimiento de la normativa de saneamiento. Realizamos la extracción y limpieza completa, dejando el sistema operativo.',
        ],
        whoFor: 'Imprescindible para restaurantes, bares, cocinas industriales y cualquier negocio de hostelería con obligación de mantener sus separadores de grasas en buen estado.',
        seoTitle: 'Limpieza de Decantadores de Grasas en Barcelona | Ecoasesora',
        seoDescription: 'Mantenimiento y limpieza profesional de decantadores de grasas en Barcelona para prevenir obstrucciones y malos olores.',
      },
      {
        slug: 'residuos-solidos-especiales',
        image: residuosSolidosImg,
        title: 'Gestión de residuos sólidos especiales',
        description: 'Recogida y tratamiento de residuos sólidos industriales especiales, cumpliendo la normativa de gestión de residuos.',
        longDescription: [
          'Gestionamos la recogida, transporte y tratamiento de residuos sólidos industriales especiales, adaptándonos al tipo y volumen generado por tu actividad. Contamos con los medios técnicos y las autorizaciones necesarias para garantizar una gestión segura y conforme a la normativa vigente.',
          'Gestionamos residuos sólidos que, por su composición o volumen, no pueden tratarse como residuo asimilable a urbano, coordinando su recogida, transporte y destino final autorizado.',
        ],
        whoFor: 'Pensado para fábricas, almacenes y empresas industriales que generan restos de producción, envases contaminados u otros residuos sólidos fuera del circuito habitual de recogida municipal.',
        seoTitle: 'Gestión de Residuos Sólidos Especiales en Barcelona | Ecoasesora',
        seoDescription: 'Recogida y tratamiento de residuos sólidos industriales especiales en Barcelona. Servicio autorizado y conforme a la normativa vigente.',
      },
      {
        slug: 'contenedores-de-residuos',
        image: contenedoresImg,
        title: 'Alquiler de contenedores para residuos',
        description: 'Contenedores de distintos tamaños para la recogida periódica o puntual de residuos en tu empresa.',
        longDescription: [
          'Ponemos a tu disposición contenedores de distintos tamaños para la recogida periódica o puntual de residuos, adaptados al volumen y tipo de actividad de tu empresa. Nos encargamos de la retirada, el transporte y el tratamiento final conforme a la normativa vigente.',
          'Disponemos de contenedores de varios tamaños, desde formatos compactos para oficinas hasta grandes contenedores industriales, con recogida programada o bajo demanda según la generación de residuos de tu actividad.',
        ],
        whoFor: 'Útil para obras, naves industriales, comercios y cualquier negocio que necesite un punto de recogida fijo para sus residuos, sin depender de llamadas puntuales.',
        seoTitle: 'Alquiler de Contenedores de Residuos en Barcelona | Ecoasesora',
        seoDescription: 'Contenedores de distintos tamaños para la recogida de residuos en tu empresa en Barcelona. Servicio periódico o puntual, con retirada incluida.',
      },
    ],
    faqs: [
      {
        question: '¿Gestionan residuos peligrosos y mercaderías retenidas por aduanas?',
        answer: 'Sí, ofrecemos manejo y eliminación certificada de residuos peligrosos, así como destrucción de productos retenidos por aduanas, cumpliendo la normativa de seguridad aplicable.',
      },
      {
        question: '¿Con qué frecuencia se debe limpiar un decantador de grasas?',
        answer: 'Depende del volumen de uso, pero recomendamos un mantenimiento periódico para evitar obstrucciones y malos olores; nuestro equipo te ayuda a definir la frecuencia adecuada.',
      },
    ],
  },
  {
    id: 'reciclaje-vaciado',
    slug: 'reciclaje-y-vaciado',
    image: reciclajeImg,
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
    seoDescription: 'Servicio de reciclaje de papel y cartón de oficina, y vaciado de locales, naves y pisos en Barcelona. Recogida rápida y reciclaje responsable.',
    items: [
      {
        slug: 'reciclaje-de-oficina',
        image: reciclajeImg,
        title: 'Servicio de reciclaje de oficina',
        description: 'Recogida y reciclaje de papel, cartón, plásticos y más, para entornos laborales.',
        longDescription: [
          'Facilitamos la recogida periódica de papel, cartón y plásticos en entornos de oficina, ayudando a tu empresa a cumplir con sus objetivos de sostenibilidad. Adaptamos la frecuencia de recogida al volumen generado por tu negocio.',
          'Colocamos contenedores de recogida selectiva en tu oficina y establecemos una frecuencia de recogida adaptada al volumen que generas, facilitando que todo el equipo participe en el reciclaje sin esfuerzo añadido.',
        ],
        whoFor: 'Recomendado para oficinas, coworkings y despachos profesionales que quieren gestionar de forma responsable el papel, cartón y plástico que generan en su día a día.',
        seoTitle: 'Reciclaje de Oficina en Barcelona | Ecoasesora',
        seoDescription: 'Recogida y reciclaje de papel, cartón y plásticos en oficinas de Barcelona. Servicio periódico adaptado a tu negocio.',
      },
      {
        slug: 'vaciado-de-locales-naves-y-pisos',
        image: vaciadoLocalesImg,
        title: 'Vaciado de locales, naves y pisos',
        description: 'Desalojo completo y limpieza de espacios comerciales, industriales y residenciales.',
        longDescription: [
          'Realizamos el desalojo completo y la limpieza de locales comerciales, naves industriales y pisos en Barcelona. Separamos y reciclamos el material recuperable siempre que es posible, dejando el espacio listo para su nuevo uso.',
          'Nos encargamos de todo: retirada de mobiliario, enseres, restos de obra o material en desuso, dejando el espacio completamente limpio y listo para su nuevo uso, ya sea una reforma, un traspaso o una nueva actividad.',
        ],
        whoFor: 'Dirigido a propietarios, administradores de fincas, comercios que cierran o cambian de local, y empresas que necesitan liberar naves industriales.',
        seoTitle: 'Vaciado de Locales, Naves y Pisos en Barcelona | Ecoasesora',
        seoDescription: 'Desalojo y limpieza completa de locales, naves industriales y pisos en Barcelona, con reciclaje del material recuperable.',
      },
      {
        slug: 'recogida-de-muebles',
        image: recogidaMueblesImg,
        title: 'Recogida y reciclaje de muebles',
        description: 'Retirada de muebles y enseres en desuso, con reciclaje responsable del material recuperable.',
        longDescription: [
          'Retiramos muebles y enseres en desuso de oficinas, locales y viviendas, dando prioridad al reciclaje y la reutilización del material siempre que sea posible. Un servicio pensado para empresas y particulares que necesitan liberar espacio de forma rápida y responsable con el medio ambiente.',
          'Antes de desechar cualquier mueble, valoramos si puede reutilizarse o reciclarse, dando prioridad siempre a la opción más sostenible frente al vertido directo.',
        ],
        whoFor: 'Pensado para oficinas que renuevan su mobiliario, particulares que hacen una mudanza y comunidades de vecinos que necesitan retirar enseres de zonas comunes.',
        seoTitle: 'Recogida y Reciclaje de Muebles en Barcelona | Ecoasesora',
        seoDescription: 'Retirada de muebles y enseres en oficinas, locales y viviendas de Barcelona, con reciclaje responsable del material recuperable.',
      },
      {
        slug: 'vaciado-de-trasteros-y-almacenes',
        image: vaciadoTrasterosImg,
        title: 'Vaciado de trasteros y almacenes',
        description: 'Desalojo completo de trasteros y almacenes, con separación y reciclaje del material recuperable.',
        longDescription: [
          'Realizamos el vaciado completo de trasteros y almacenes en Barcelona, separando y reciclando el material recuperable siempre que es posible. Un servicio ágil pensado para particulares y empresas que necesitan liberar espacios de almacenamiento de forma ordenada.',
          'Vaciamos trasteros y almacenes de cualquier tamaño, clasificando el contenido para reciclar o donar lo que todavía tiene utilidad y gestionando el resto como residuo.',
        ],
        whoFor: 'Ideal para particulares que liberan un trastero, empresas que reorganizan su almacén y comunidades que necesitan vaciar espacios comunes en desuso.',
        seoTitle: 'Vaciado de Trasteros y Almacenes en Barcelona | Ecoasesora',
        seoDescription: 'Desalojo completo de trasteros y almacenes en Barcelona, con separación y reciclaje del material recuperable.',
      },
    ],
    faqs: [
      {
        question: '¿Qué incluye el servicio de vaciado de locales, naves y pisos?',
        answer: 'Incluye el desalojo completo y la limpieza del espacio, con separación y reciclaje del material recuperable siempre que sea posible.',
      },
      {
        question: '¿Recogen el material de reciclaje directamente en la oficina?',
        answer: 'Sí, recogemos papel, cartón y plásticos directamente en tu oficina o local, con la periodicidad que necesites.',
      },
    ],
  },
];

export const STATS: Stat[] = [
  { value: '20+', label: 'Años de Experiencia', description: 'Gestionando residuos y reciclaje con rigor normativo.' },
  { value: '24/7', label: 'Disponibilidad', description: 'Atención y recogidas urgentes cualquier día de la semana.' },
  { value: '100%', label: 'Cumplimiento Normativo', description: 'Procesos certificados según la normativa UNE 15713 y legislación vigente.' },
  { value: '3', label: 'Áreas de Servicio', description: 'Destrucción confidencial, gestión de residuos y reciclaje y vaciado.' },
];
