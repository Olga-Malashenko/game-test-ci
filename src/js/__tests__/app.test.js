import getLevel from '../app';

test.each([
    [90, { name: 'Маг', health: 90 }, 'healthy'],
    [45, { name: 'Маг', health: 45 }, 'wounded'],
    [10, { name: 'Маг', health: 10 }, 'critical']
])
('testing getLevel function with %i health', (health, amount, expected) => {
    const result = getLevel(amount);
    expect(result).toBe(expected);
  });
