
import type { Category } from '@/types';
import { slugify } from '@/lib/utils';

const categoryNames: string[] = [
  "Course Basics & Enrollment",
  "Study Options & Duration",
  "Costs & Payment",
  "State Licensing Requirements",
  "Assessment & Completion",
  "Career & Employment",
  "Provider Selection",
  "Technical Requirements",
  "Advanced Questions"
];

export const categories: Category[] = categoryNames.map(name => ({
  name,
  slug: slugify(name),
  description: `Explore questions related to ${name.toLowerCase()} for the CPP41419 qualification.`,
}));
