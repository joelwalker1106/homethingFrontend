export type ProductTab = 'hot' | 'new' | 'sale';
export type ProductBadge = 'hot' | 'new';

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: 'shield' | 'truck' | 'card' | 'headset';
}

export interface CategoryItem {
  name: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: ProductBadge;
  tabs: ProductTab[];
}

export interface PromoBanner {
  id: string;
  eyebrow: string;
  title: string;
  image: string;
  cta: string;
  tone: 'sale' | 'member';
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}
