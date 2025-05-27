import { getQuestionsByCategory } from '@/data/questions';
import { categories } from '@/data/categories';
import { QuestionListItem } from '@/components/qa/QuestionListItem';
import { Breadcrumbs } from '@/components/core/Breadcrumbs';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from 'lucide-react';

interface CategoryPageProps {
  params: { categorySlug: string };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categories.find(c => c.slug === params.categorySlug);
  const title = category ? `${category.name} | CPP41419 Q&A` : 'Category | CPP41419 Q&A';
  const description = category ? `Questions and answers related to ${category.name} for CPP41419.` : 'Browse questions by category.';
  return { title, description };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    categorySlug: category.slug,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(c => c.slug === params.categorySlug);
  const questionsForCategory = category ? getQuestionsByCategory(params.categorySlug) : [];

  if (!category) {
    return (
      <div className="text-center py-10">
        <Alert variant="destructive" className="max-w-md mx-auto">
          <Info className="h-4 w-4" />
          <AlertTitle>Category Not Found</AlertTitle>
          <AlertDescription>
            The category you are looking for does not exist.
          </AlertDescription>
        </Alert>
        <Button asChild className="mt-6">
          <Link href="/">Go to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: category.name }]} />
      <header className="pb-4 border-b">
        <h1 className="text-3xl font-bold tracking-tight">{category.name}</h1>
        {category.description && (
          <p className="mt-2 text-muted-foreground">{category.description}</p>
        )}
      </header>

      {questionsForCategory.length === 0 ? (
         <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>No Questions Yet</AlertTitle>
          <AlertDescription>
            There are no questions available in this category at the moment. Please check back later or explore other categories.
          </AlertDescription>
        </Alert>
      ) : (
        <div className="space-y-4">
          {questionsForCategory.map((question) => (
            <QuestionListItem key={question.id} question={question} categorySlug={params.categorySlug} />
          ))}
        </div>
      )}
    </div>
  );
}
