import sum from '../basic';

test('baic test', () => {
  const result = 4;
  expect(result).toBe(4);
});

test('should sum', () => {
  const result = sum([1, 2, 3]);
  expect(result).toBe(6);
});
