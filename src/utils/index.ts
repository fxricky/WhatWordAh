import {DIFFICULTIES} from '../constants';
import {DifficultiesConfig} from '../type';

export const getRandomNumber = (max = 1) => {
  return Math.floor(Math.random() * max);
};

export const shuffleArray = (array: any[]) => {
  const cloneArray = [...array];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloneArray[i], cloneArray[j]] = [cloneArray[j], cloneArray[i]];
  }
  return cloneArray;
};

export const getDifficulties = (wordLength: number): DifficultiesConfig => {
  for (const level in DIFFICULTIES) {
    const config = DIFFICULTIES[level];
    if (wordLength >= config.min && config.max && wordLength <= config.max) {
      return config;
    }
  }

  return DIFFICULTIES['SUPER_HARD'];
};
