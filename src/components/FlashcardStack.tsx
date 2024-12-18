import { useState } from 'react';
import { Flashcard, CompletionStats } from '../types/flashcard';
import SingleFlashcard from './SingleFlashcard';
import CompletionScreen from './CompletionScreen';
import ProgressIndicator from './ProgressIndicator';

interface FlashcardStackProps {
  flashcards: Flashcard[];
}

export default function FlashcardStack({ flashcards }: FlashcardStackProps) {
  const [currentCards, setCurrentCards] = useState<Flashcard[]>(flashcards);
  const [stats, setStats] = useState<CompletionStats>({
    gotIt: 0,
    knewIt: 0
  });

  const handleGotIt = () => {
    setStats(prev => ({ ...prev, gotIt: prev.gotIt + 1 }));
    setCurrentCards(prev => prev.slice(1));
  };

  const handleKnewIt = () => {
    setStats(prev => ({ ...prev, knewIt: prev.knewIt + 1 }));
    setCurrentCards(prev => prev.slice(1));
  };

  if (currentCards.length === 0) {
    return <CompletionScreen stats={stats} />;
  }

  return (
    <div className="space-y-8">
      <div className="relative min-h-[400px]">
        {currentCards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute w-full transition-all duration-300`}
            style={{
              transform: `translateY(${index * 4}px)`,
              zIndex: currentCards.length - index,
              opacity: index === 0 ? 1 : 0.5
            }}
          >
            <SingleFlashcard
              flashcard={card}
              onGotIt={handleGotIt}
              onKnewIt={handleKnewIt}
              disabled={index !== 0}
            />
          </div>
        ))}
      </div>

      <ProgressIndicator stats={stats} />
    </div>
  );
}