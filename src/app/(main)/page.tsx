import { getAllQuestions } from '@/data/questions';
import BlogPostCard from '@/app/(main)/popular-blogs/page';

const HomePage = () => {
  const questions = getAllQuestions();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questions.map((question) => (
          <BlogPostCard
            key={question.id}
            title={question.question}
            description={question.answer}
            imageUrl="https://placehold.co/600x400.png"
            imageHint="real estate question"
            href={question.category ? `/questions/${question.category.toLowerCase().replace(/ /g, '-')}/${question.id}` : `/questions/${question.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
