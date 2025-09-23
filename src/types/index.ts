export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: {
    name: string;
    position: string;
    company: string;
    initials: string;
  };
}

export interface NavItem {
  id: number;
  label: string;
  href: string;
}