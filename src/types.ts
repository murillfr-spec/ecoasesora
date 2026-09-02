export interface SubService {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  seoTitle: string;
  seoDescription: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  iconName: string;
  title: string;
  description: string;
  longDescription: string;
  seoTitle: string;
  seoDescription: string;
  items: SubService[];
  faqs: FaqItem[];
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
