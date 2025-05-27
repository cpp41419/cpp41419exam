import type { Category } from '@/types';
import { slugify } from '@/lib/utils';

const categoryNames: string[] = [
  "Course Fundamentals",
  "State Requirements",
  "Costs & Funding",
  "Delivery & Duration",
  "Provider Selection",
  "Career Outcomes",
  "Compliance Issues",
  "Technical Support"
];

export const categories: Category[] = categoryNames.map(name => ({
  name,
  slug: slugify(name),
  description: `Explore questions related to ${name.toLowerCase()} for the CPP41419 qualification.`,
}));
