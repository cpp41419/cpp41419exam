import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChevronRight, FileQuestion } from 'lucide-react';
import type { FAQQuestion } from '@/types';

interface QuestionListItemProps {
  question: FAQQuestion;
  categorySlug: string;
}

export function QuestionListItem({ question, categorySlug }: QuestionListItemProps) {
  return (
    <Link href={`/questions/${categorySlug}/${question.id}`} className="group block">
      <Card className="hover:bg-accent/80 hover:shadow-md transition-all duration-200 rounded-lg">
        <CardHeader className="flex flex-row items-center justify-between p-4">
          <div className="flex items-start gap-3">
            <span className="p-2 bg-secondary text-secondary-foreground rounded-md mt-1">
                <FileQuestion className="h-5 w-5"/>
            </span>
            <div>
              <CardTitle className="text-base font-medium leading-snug group-hover:text-primary">{question.question}</CardTitle>
              {question.keywords && question.keywords.length > 0 && (
                <CardDescription className="mt-1.5 text-xs text-muted-foreground">
                  Keywords: {question.keywords.slice(0, 3).join(', ')}{question.keywords.length > 3 ? '...' : ''}
                </CardDescription>
              )}
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4" />
        </CardHeader>
      </Card>
    </Link>
  );
}
