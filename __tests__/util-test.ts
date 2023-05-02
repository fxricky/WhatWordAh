import {getRandomNumber, shuffleArray, getDifficulties} from '../src/utils';

test('always return number', () => {
  const randomNum = getRandomNumber();

  expect(typeof randomNum).toBe('number');
});

test('random number must less than or equal to max', () => {
  const randomNum = getRandomNumber(100);

  expect(randomNum).toBeLessThanOrEqual(100);
});

test('should return different array', () => {
  const initData = [1, 2, 3, 4, 5];
  const shuffledArr = shuffleArray(initData);

  expect(shuffledArr).not.toEqual(initData);
});

test('must have scores from getting difficulties', () => {
  const difficulties = [
    getDifficulties(1),
    getDifficulties(7),
    getDifficulties(12),
    getDifficulties(20),
  ];

  const mappedDifficulties = difficulties.map(config => config.score);

  expect(mappedDifficulties).toEqual([1, 2, 3, 4]);
});
