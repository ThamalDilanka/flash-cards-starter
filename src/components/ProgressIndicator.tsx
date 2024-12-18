import { Brain, CheckCircle2 } from 'lucide-react';
import { CompletionStats } from '../types/flashcard';

interface ProgressIndicatorProps {
  stats: CompletionStats;
}

export default function ProgressIndicator({ stats }: ProgressIndicatorProps) {
  return (
    <div className='flex justify-center gap-8'>
      <div className='flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg'>
        <CheckCircle2 className='text-green-500' size={20} />
        <span className='text-green-700 font-medium'>Got it: {stats.gotIt}</span>
      </div>
      <div className='flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg'>
        <Brain className='text-blue-500' size={20} />
        <span className='text-blue-700 font-medium'>Already knew: {stats.knewIt}</span>
      </div>
    </div>
  );
}
