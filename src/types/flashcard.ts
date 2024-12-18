export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  tags: string[];
  publishedStatus: boolean;
  flashcardSetId: number;
  createdBy: number;
  createdAt: string;
  ratings: any[];
}

export interface CompletionStats {
  gotIt: number;
  knewIt: number;
}