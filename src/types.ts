export interface Package {
  id: string;
  name: string;
  type: 'One Day Service' | '2 Hari 1 Malam' | '5 Hari' | '7 Hari' | string;
  price: string;
  numericPrice?: number;
  itinerary: string[];
  description?: string;
  popular?: boolean;
}

export interface RegionData {
  region: string;
  slug: string;
  image: string;
  description: string;
  hotels: string[];
  packages: Package[];
}

export interface FacilitiesData {
  tour: string[];
  peserta: string[];
  bonus: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  tripName: string;
  comment: string;
  rating: number;
  avatar: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  region: string;
  imageUrl: string;
  category: 'pantai' | 'gunung' | 'budaya' | 'rekreasi';
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email?: string;
  region: string;
  packageName: string;
  tripType: 'Open Trip' | 'Private Trip';
  departureDate: string;
  participantsCount: number;
  notes: string;
}

export interface CustomTripPrompt {
  destination: string;
  participants: number;
  durationDays: number;
  budgetPerPerson: number;
  preferences: string[];
}
