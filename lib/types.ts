// Type definitions for Bar do Jaba website

export interface RestaurantConfig {
  name: string;
  tagline: string;
  whatsapp: string;
  phone: string;
  instagram: string;
  email: string;
  address: Address;
  hours: Hours;
  pricing: Pricing;
  services: Services;
  reviews: Reviews;
  about: About;
  seo: SEO;
  paymentMethods: PaymentMethods;
  amenities: Amenities;
}

export interface Address {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  fullAddress: string;
  coordinates: {
    lat: number | null;
    lng: number | null;
  };
  reference: string;
}

export interface Hours {
  monday: DayHours;
  tuesday: DayHours;
  wednesday: DayHours;
  thursday: DayHours;
  friday: DayHours;
  saturday: DayHours;
  sunday: DayHours;
}

export interface DayHours {
  open: string;
  close: string;
  closed: boolean;
}

export interface Pricing {
  model: "per_kg" | "per_person" | "per_item";
  pricePerKg: number | null;
  pricePerPerson: number | null;
  drinkPrices: Record<string, number>;
}

export interface Services {
  selfService: boolean;
  churrasco: boolean;
  delivery: Delivery;
  reservations: Reservations;
  marmitex: Marmitex;
}

export interface Delivery {
  available: boolean;
  platforms: string[];
  ownDelivery: boolean;
  deliveryArea: string;
}

export interface Reservations {
  available: boolean;
  method: "whatsapp" | "system";
}

export interface Marmitex {
  available: boolean;
}

export interface Reviews {
  platform: string;
  link: string;
  averageRating: number | null;
  totalReviews: number | null;
}

export interface About {
  history: string;
  since: number | null;
  specialties: string[];
  team: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | null;
  image: string;
  featured: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export interface MenuConfig {
  categories: MenuCategory[];
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  discount: number | null;
  originalPrice: number | null;
  promotionalPrice: number | null;
  startDate: string;
  endDate: string;
  conditions: string;
}

export interface PromotionsConfig {
  active: boolean;
  items: Promotion[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface GalleryConfig {
  images: GalleryImage[];
}

export interface ReservationFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  people: number;
  notes: string;
}

export interface PaymentMethods {
  cash: boolean;
  credit: boolean;
  debit: boolean;
  pix: boolean;
  vr: boolean;
  va: boolean;
}

export interface Amenities {
  parking: string;
  wifi: boolean;
  airConditioning: boolean;
  accessibility: boolean;
}
