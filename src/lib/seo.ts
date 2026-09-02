import { ServiceCategory, SubService } from '../types';

const SITE_URL = 'https://ecoasesora.com';

interface Crumb {
  name: string;
  path: string;
}

function breadcrumbList(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

function faqPage(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.url}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: opts.areaServed ?? ['Barcelona', 'Área Metropolitana de Barcelona'],
  };
}

export function buildServiceCategorySchemas(category: ServiceCategory) {
  return [
    serviceSchema({
      name: category.title,
      description: category.seoDescription,
      url: `/servicios/${category.slug}`,
    }),
    breadcrumbList([
      { name: 'Inicio', path: '/' },
      { name: 'Servicios', path: '/#servicios' },
      { name: category.title, path: `/servicios/${category.slug}` },
    ]),
    ...(category.faqs.length ? [faqPage(category.faqs)] : []),
  ];
}

export function buildSubServiceSchemas(category: ServiceCategory, sub: SubService) {
  return [
    serviceSchema({
      name: sub.title,
      description: sub.seoDescription,
      url: `/servicios/${category.slug}/${sub.slug}`,
    }),
    breadcrumbList([
      { name: 'Inicio', path: '/' },
      { name: 'Servicios', path: '/#servicios' },
      { name: category.title, path: `/servicios/${category.slug}` },
      { name: sub.title, path: `/servicios/${category.slug}/${sub.slug}` },
    ]),
    ...(sub.faqs.length ? [faqPage(sub.faqs)] : []),
  ];
}

const SCRIPT_ID = 'dynamic-jsonld';

export function injectJsonLd(schemas: object[]) {
  const existing = document.getElementById(SCRIPT_ID);
  if (existing) existing.remove();

  if (!schemas.length) return;

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
  document.head.appendChild(script);
}
