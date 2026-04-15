export type CourseCategory =
  | "Panadería"
  | "Cocina"
  | "Pastelería"
  | "Gestión";

export interface OnlineCourse {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  previousPrice?: number;
  dollarPrice?: number;
  category: CourseCategory;
  image: string;
  access: string;
  featured: boolean;
  learnings: string[];
  targetAudience: string;
  requirements: string;
  syllabus: string[];
  resources: string[];
  imagePosition?: string;  // "top" | "center" | "bottom";
}

export interface InPersonCourse {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  dollarPrice: number;
  image: string;
  date: string;
  schedule: string;
  location: string;
  address: string;
  spots: number;
  learnings: string[];
  includes: string[];
}

export interface Book {
  slug: string;
  name: string;
  description: string;
  image: string;
  purchaseLink: string;
  price?: number;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  course: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
}

export interface StatItem {
  value: string;
  label: string;
}