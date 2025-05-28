
import { categories } from '@/data/categories';
import { CategoryCard } from '@/components/qa/CategoryCard';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CPP41419 Q&A Hub - Master Real Estate Practice',
  description: 'Unlock CPP41419 mastery with authoritative answers and data-backed insights. Your comprehensive guide to the Certificate IV in Real Estate Practice.',
  keywords: ['CPP41419', 'Certificate IV', 'Real Estate Practice', 'Real Estate Course', 'Real Estate Licensing', 'Australia Property Education', 'FAQ', 'Authoritative Answers', 'Study Guide'],
};

export default function HomePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4 pb-8 border-b text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Unlock CPP41419 Mastery: Your Authoritative Q&amp;A Hub
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Gain data-backed insights and clear answers, ensuring you're fully prepared for the Certificate IV in Real Estate Practice. Don't just study – strategize your success with our comprehensive knowledge base.
        </p>
        <div className="pt-4">
          <Button size="lg" className="rounded-full" asChild>
            <Link href={categories.length > 0 ? `/questions/${categories[0].slug}` : '/'}>
              Start Exploring Questions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </header>
      
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-foreground text-center">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
