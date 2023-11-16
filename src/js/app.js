import fetchData from './http';

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  // TODO: логика обработки
  /* let healthLevel;
  if (userID.health < 15) {
    healthLevel = 'critical';
  } else if (userID.health < 50) {
    healthLevel = 'wounded';
  } else if (userID.health <= 100) {
    healthLevel = 'healthy';
  }
  return healthLevel; */

  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }

  return 'Информация об уровне временно недоступна';
}
