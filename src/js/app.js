import { fetchData } from './http';

export default function getLevel(userId) {
  const response = JSON.parse(fetchData(`https://server/user/${userId}`));
  if (response.status === 'ok') {
    const userHealth = response.data;
    let healthLevel;
    if (userHealth.health <= 0) {
      return 'Произошла ошибка: у персонажа не может быть отрицательного здоровья';
    }
    if (userHealth.health < 15) {
      healthLevel = 'critical';
    } else if (userHealth.health < 50) {
      healthLevel = 'wounded';
    } else if (userHealth.health <= 100) {
      healthLevel = 'healthy';
    } else {
      return 'Произошла ошибка: у персонажа не может быть здоровье больше 100%';
    }
    return `Ваш текущий уровень: ${healthLevel}`;
  }
  return 'Информация об уровне временно недоступна';
}
