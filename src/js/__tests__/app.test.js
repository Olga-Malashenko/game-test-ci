import getLevel from '../app';
import { fetchData } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test.each([
  [-3, {
    status: 'ok',
    data: {
      health: -3,
    },
  }, 'Произошла ошибка: у персонажа не может быть отрицательного здоровья'],
  [0, {
    status: 'ok',
    data: {
      health: 0,
    },
  }, 'Произошла ошибка: у персонажа не может быть отрицательного здоровья'],
  [5, {
    status: 'ok',
    data: {
      health: 5,
    },
  }, 'Ваш текущий уровень: critical'],
  [15, {
    status: 'ok',
    data: {
      health: 15,
    },
  }, 'Ваш текущий уровень: wounded'],
  [20, {
    status: 'ok',
    data: {
      health: 20,
    },
  }, 'Ваш текущий уровень: wounded'],
  [50, {
    status: 'ok',
    data: {
      health: 50,
    },
  }, 'Ваш текущий уровень: healthy'],
  [70, {
    status: 'ok',
    data: {
      health: 70,
    },
  }, 'Ваш текущий уровень: healthy'],
  [100, {
    status: 'ok',
    data: {
      health: 100,
    },
  }, 'Ваш текущий уровень: healthy'],
  [101, {
    status: 'ok',
    data: {
      health: 101,
    },
  }, 'Произошла ошибка: у персонажа не может быть здоровье больше 100%'],
  [20, {
    status: '404',
    data: {
      health: 20,
    },
  }, 'Информация об уровне временно недоступна'],
])('should getLevel return the correct level with health %i', (health, obj, expected) => {
  fetchData.mockReturnValue(JSON.stringify(obj));
  const result = getLevel(1);
  expect(result).toEqual(expected);
  expect(fetchData).toHaveBeenCalledTimes(1);
  expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
});
