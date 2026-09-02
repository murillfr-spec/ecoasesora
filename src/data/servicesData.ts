import { ServiceCategory, ValueProp, Stat } from '../types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'destruccion-confidencial',
    iconName: 'ShieldCheck',
    title: 'Destrucción Confidencial',
    description: 'Trituración segura de documentos y soportes, cumpliendo la Normativa UNE 15713.',
    items: [
      {
        title: 'Destrucción de materiales confidenciales',
        description: 'Trituración certificada de papel, documentación sensible y soportes digitales con garantía de irreconstrucción.',
      },
    ],
  },
  {
    id: 'gestion-residuos',
    iconName: 'Recycle',
    title: 'Gestión de Residuos',
    description: 'Eliminación segura y trazable de todo tipo de residuos, cumpliendo la normativa vigente.',
    items: [
      {
        title: 'Destrucción de mercaderías aduaneras',
        description: 'Eliminación segura de productos retenidos por aduanas con procesos certificados.',
      },
      {
        title: 'Residuos peligrosos',
        description: 'Manejo y disposición responsable de residuos peligrosos, cumpliendo normativas de seguridad.',
      },
      {
        title: 'Servicio de residuos líquidos',
        description: 'Recogida y tratamiento eficiente de residuos líquidos industriales y domésticos.',
      },
      {
        title: 'Limpieza de decantadores de grasas',
        description: 'Mantenimiento profesional para prevenir obstrucciones en sistemas de separación.',
      },
    ],
  },
  {
    id: 'reciclaje-vaciado',
    iconName: 'Trash2',
    title: 'Reciclaje y Vaciado',
    description: 'Recogida, reciclaje y desalojo integral para entornos laborales y espacios en desuso.',
    items: [
      {
        title: 'Servicio de reciclaje de oficina',
        description: 'Recogida y reciclaje de papel, cartón, plásticos y más, para entornos laborales.',
      },
      {
        title: 'Vaciado de locales, naves y pisos',
        description: 'Desalojo completo y limpieza de espacios comerciales, industriales y residenciales.',
      },
    ],
  },
  {
    id: 'servicios-especializados',
    iconName: 'Wrench',
    title: 'Servicios Especializados',
    description: 'Soluciones a medida para necesidades técnicas y legales concretas.',
    items: [
      {
        title: 'Administradores concursales',
        description: 'Gestión profesional de bienes y activos en procesos concursales.',
      },
      {
        title: 'Servicios de desatrancos',
        description: 'Desobstrucción rápida y eficaz de tuberías y sistemas de drenaje.',
      },
      {
        title: 'Camiones cuba',
        description: 'Transporte especializado de líquidos y residuos en contenedores seguros.',
      },
    ],
  },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    iconName: 'Leaf',
    title: 'Compromiso Real y Medible',
    description: 'Tu impacto ambiental, minimizado. Operamos con una flota de bajas emisiones y materiales 100% sostenibles.',
  },
  {
    iconName: 'Clock',
    title: 'Tranquilidad 24/7',
    description: 'Más de 20 años de experiencia a tu servicio. Nuestro equipo experto te respalda día y noche.',
  },
  {
    iconName: 'Settings2',
    title: 'Soluciones a Tu Medida',
    description: 'Olvídate de los planes genéricos. Diseñamos una estrategia específica para ti, usando tecnología avanzada.',
  },
  {
    iconName: 'Handshake',
    title: 'Tu Socio de Confianza',
    description: 'La transparencia es la base de todo. Te mantenemos informado en cada paso del proceso de forma clara.',
  },
];

export const STATS: Stat[] = [
  { value: '20+', label: 'Años de Experiencia', description: 'Gestionando residuos y reciclaje con rigor normativo.' },
  { value: '24/7', label: 'Disponibilidad', description: 'Atención y recogidas urgentes cualquier día de la semana.' },
  { value: '100%', label: 'Cumplimiento Normativo', description: 'Procesos certificados según la normativa UNE 15713 y legislación vigente.' },
  { value: '4', label: 'Áreas de Servicio', description: 'Destrucción confidencial, residuos, reciclaje y servicios especializados.' },
];
