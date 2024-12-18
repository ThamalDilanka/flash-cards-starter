import React from 'react';
import FlashcardStack from './components/FlashcardStack';
import { flashcardsData } from './data/flashcards';
import { GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="text-blue-600" size={32} />
            <h1 className="text-3xl font-bold text-gray-800">Flashcards</h1>
          </div>
          <p className="text-gray-600">Click on a card to reveal the answer</p>
        </div>
        
        <FlashcardStack flashcards={flashcardsData} />
      </div>
    </div>
  );
}

export default App;