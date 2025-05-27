import { redirect } from 'next/navigation';
import { categories } from '@/data/categories';

export default function QuestionsBasePage() {
  // Redirect to the main home page which lists categories,
  // or to the first category if preferred.
  redirect('/'); 
  // Alternatively:
  // if (categories.length > 0) {
  //   redirect(`/questions/${categories[0].slug}`);
  // } else {
  //   redirect('/');
  // }
  return null; // This page will not render
}
