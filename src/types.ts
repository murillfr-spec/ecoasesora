export interface SubService {
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  iconName: string;
  title: string;
  description: string;
  items: SubService[];
}

export interface ValueProp {
  iconName: string;
  title: string;
  description: string;
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
