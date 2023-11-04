import { getLevel, getList } from '../app';

test.each([
  [90, { name: 'Маг', health: 90 }, 'healthy'],
  [45, { name: 'Маг', health: 45 }, 'wounded'],
  [10, { name: 'Маг', health: 10 }, 'critical'],
])('testing getLevel function with %i health', (_, amount, expected) => {
  const result = getLevel(amount);
  expect(result).toBe(expected);
});

test('should get sorted list', () => {
  const unsortedList = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const result = getList(unsortedList);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(result).toBe(expected);
});
