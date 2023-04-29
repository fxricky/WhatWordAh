import animals from '../../jsonData/animals';
import cities from '../../jsonData/cities';
import fruits from '../../jsonData/fruits';
import movies from '../../jsonData/movies';
import sports from '../../jsonData/sports';
import {DifficultiesConfig} from '../type';

export const CATEGORIES = {
  animals,
  cities,
  fruits,
  movies,
  sports,
} as Record<string, string[]>;

export const DIFFICULTIES: Record<string, DifficultiesConfig> = {
  EASY: {
    min: 1,
    max: 5,
    score: 1,
  },
  MEDIUM: {
    min: 6,
    max: 10,
    score: 2,
  },
  HARD: {
    min: 11,
    max: 15,
    score: 3,
  },
  SUPER_HARD: {
    min: 16,
    score: 4,
  },
};
