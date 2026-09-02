export interface SubService {
  slug: string;
  title: string;
  description: string;
  longDescription: string[];
  whoFor: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  iconName: string;
  title: string;
  description: string;
  longDescription: string[];
  whoFor: string;
  process: ProcessStep[];
  image: string;
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
