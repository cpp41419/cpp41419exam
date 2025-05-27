export interface FAQQuestion {
  id: string; // UUID
  question: string;
  answer: string;
  category: string; // Matches Category['name']
  subcategory?: string;
  keywords: string[];
  state_specific?: string; // e.g., "NSW", "Victoria"
  provider_specific: boolean;
  priority: number;
  last_updated: string; // ISO date string
  schema_markup?: Record<string, any>; // For JSONB
}

export interface Category {
  name: string;
  slug: string;
  description?: string;
}
