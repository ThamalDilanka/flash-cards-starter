import { useEffect } from 'react';
import { fireConfetti } from '../utils/confetti';

export const useConfetti = (shouldFire: boolean) => {
  useEffect(() => {
    if (shouldFire) {
      fireConfetti();
    }
  }, [shouldFire]);
}