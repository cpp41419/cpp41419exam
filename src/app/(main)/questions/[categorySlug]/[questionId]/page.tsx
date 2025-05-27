import { getQuestionById, getQuestionsByCategory } from '@/data/questions';
import { categories }  from '@/data/categories';
import { QuestionDisplay } from '@/components/qa/QuestionDisplay';
import { Breadcrumbs } from '@/components/core/Breadcrumbs';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, MessageCircleQuestion } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface QuestionPageProps {
  params: { categorySlug: string; questionId: string };
}

export async function generateMetadata({ params }: QuestionPageProps): Promise<Metadata> {
  const question = getQuestionById(params.questionId);
  const title = question ? `${question.question.substring(0, 60)}... | CPP41419 Q&A` : 'Question | CPP41419 Q&A';
  const description = question ? question.answer.substring(0, 150) + '...' : 'View question and answer details for CPP41419.';
  return { title, description };
}

export async function generateStaticParams() {
  const paths: { categorySlug: string; questionId: string }[] = [];
  for (const category of categories) {
    const questionsInCategory = getQuestionsByCategory(category.slug);
    for (const question of questionsInCategory) {
      paths.push({
        categorySlug: category.slug,
        questionId: question.id,
      });
    }
  }
  return paths;
}

// Example of how to use the AI flow, can be uncommented and integrated
// import { generateFollowUpQuestions, GenerateFollowUpQuestionsInput } from '@/ai/flows/generate-follow-up-questions';
// async function getFollowUpQuestions(questionText: string, answerText: string) {
//   try {
//     const input: GenerateFollowUpQuestionsInput = { question: questionText, answer: answerText };
//     const result = await generateFollowUpQuestions(input);
//     return result.followUpQuestions;
//   } catch (error) {
//     console.error("Error generating follow-up questions:", error);
//     return [];
//   }
// }

export default async function QuestionPage({ params }: QuestionPageProps) {
  const question = getQuestionById(params.questionId);
  const category = categories.find(c => c.slug === params.categorySlug);

  if (!question || !category) {
    return (
       <div className="text-center py-10">
         <Alert variant="destructive" className="max-w-md mx-auto">
          <Info className="h-4 w-4" />
          <AlertTitle>Content Not Found</AlertTitle>
          <AlertDescription>
            The question or category you are looking for does not exist or the URL is incorrect.
          </AlertDescription>
        </Alert>
        <Button asChild className="mt-6">
          <Link href="/">Go to Home</Link>
        </Button>
      </div>
    );
  }

  // const followUpQuestionsList = await getFollowUpQuestions(question.question, question.answer);

  return (
    <div className="space-y-8">
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' }, 
          { label: category.name, href: `/questions/${category.slug}` },
          { label: question.question.length > 50 ? question.question.substring(0, 50) + '...' : question.question }
        ]} 
      />
      <QuestionDisplay question={question} />

      {/* Placeholder for GenAI Follow-up Questions - can be styled better */}
      {/* {followUpQuestionsList && followUpQuestionsList.length > 0 && (
        <Card className="mt-8 bg-secondary/50">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <MessageCircleQuestion className="h-5 w-5 mr-2 text-primary" />
              Further Questions You Might Have
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-foreground/90">
              {followUpQuestionsList.map((fq, index) => (
                <li key={index} className="hover:text-primary transition-colors">
                  {fq}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )} */}

      <div className="mt-10 text-center">
        <Button asChild variant="outline">
          <Link href={`/questions/${category.slug}`}>Back to {category.name}</Link>
        </Button>
      </div>
    </div>
  );
}
