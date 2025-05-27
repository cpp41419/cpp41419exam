
import { categories } from '@/data/categories';
import { CategoryCard } from '@/components/qa/CategoryCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPP41419 Q&A Home',
  description: 'Your comprehensive, authoritative guide to the Certificate IV in Real Estate Practice. Navigate through categories to find factual answers and actionable next steps.',
  keywords: ['CPP41419', 'Certificate IV', 'Real Estate Practice', 'Real Estate Course', 'Real Estate Licensing', 'Australia Property Education', 'FAQ'],
};

export default function HomePage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2 pb-6 border-b">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">CPP41419 Questions & Answers</h1>
        <p className="text-lg text-muted-foreground">
          Your comprehensive, authoritative guide to the Certificate IV in Real Estate Practice. Navigate through categories to find factual answers and actionable next steps.
        </p>
      </header>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
