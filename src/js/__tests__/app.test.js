import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call getLevel once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));
  const response = getLevel(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

/* test.each([
  [90, { name: 'Маг', health: 90 }, 'healthy'],
  [45, { name: 'Маг', health: 45 }, 'wounded'],
  [10, { name: 'Маг', health: 10 }, 'critical'],
])('testing getLevel function with %i health', (_, amount, expected) => {
  const result = getLevel(amount);
  expect(result).toBe(expected);
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
}); */
