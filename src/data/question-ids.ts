import { questions } from './questions';

const generateId = () => {
  if (typeof window !== 'undefined' && typeof window.crypto !== 'undefined') {
    return window.crypto.randomUUID();
  } else {
    // Fallback for server-side environments
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
};

export const questionIds = questions.reduce((acc: Record<string, string>, question) => {
  acc[question.question] = generateId();
  return acc;
}, {});