import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { SubServicePage } from './pages/SubServicePage';
import { SERVICE_CATEGORIES } from './data/servicesData';
import { buildServiceCategorySchemas, buildSubServiceSchemas, injectJsonLd } from './lib/seo';

type Route =
  | { view: 'home' }
  | { view: 'servicio'; categorySlug: string }
  | { view: 'subservicio'; categorySlug: string; subSlug: string };

function getRoute(): Route {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const segments = path.split('/').filter(Boolean);

  if (segments[0] === 'servicios' && segments[1]) {
    const category = SERVICE_CATEGORIES.find((s) => s.slug === segments[1]);
    if (category) {
      if (segments[2]) {
        const sub = category.items.find((i) => i.slug === segments[2]);
        if (sub) {
          return { view: 'subservicio', categorySlug: category.slug, subSlug: sub.slug };
        }
      } else {
        return { view: 'servicio', categorySlug: category.slug };
      }
    }
  }

  return { view: 'home' };
}

const SITE_URL = 'https://ecoasesora.com';
const DEFAULT_TITLE = 'Ecoasesora | Reciclaje y Gestión de Residuos en Barcelona';
const DEFAULT_DESCRIPTION = 'Ecoasesora: reciclaje y vaciado, gestión de residuos peligrosos y líquidos, y destrucción confidencial de documentos en Barcelona. Atención 24 horas.';

export default function App() {
  const route = getRoute();

  useEffect(() => {
    let title = DEFAULT_TITLE;
    let description = DEFAULT_DESCRIPTION;
    let canonicalPath = '/';

    if (route.view === 'servicio') {
      const service = SERVICE_CATEGORIES.find((s) => s.slug === route.categorySlug);
      if (service) {
        title = service.seoTitle;
        description = service.seoDescription;
        canonicalPath = `/servicios/${service.slug}`;
        injectJsonLd(buildServiceCategorySchemas(service));
      }
    } else if (route.view === 'subservicio') {
      const service = SERVICE_CATEGORIES.find((s) => s.slug === route.categorySlug);
      const sub = service?.items.find((i) => i.slug === route.subSlug);
      if (service && sub) {
        title = sub.seoTitle;
        description = sub.seoDescription;
        canonicalPath = `/servicios/${service.slug}/${sub.slug}`;
        injectJsonLd(buildSubServiceSchemas(service, sub));
      }
    } else {
      injectJsonLd([]);
    }

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `${SITE_URL}${canonicalPath}`);

    window.scrollTo({ top: 0 });
  }, [route]);

  return (
    <div className="min-h-screen bg-white text-neutral-800 flex flex-col font-sans selection:bg-green-500 selection:text-white">
      <Header />
      <main className="flex-1">
        {route.view === 'subservicio' ? (
          <SubServicePage categorySlug={route.categorySlug} subSlug={route.subSlug} />
        ) : route.view === 'servicio' ? (
          <ServiceDetailPage slug={route.categorySlug} />
        ) : (
          <HomePage />
        )}
      </main>
      <Footer />
    </div>
  );
}
