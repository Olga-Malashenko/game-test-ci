export default function getLevel(userHealth) {
  let healthLevel;
  if (userHealth.health < 15) {
    healthLevel = 'critical';
  } else if (userHealth.health < 50) {
    healthLevel = 'wounded';
  } else if (userHealth.health <= 100) {
    healthLevel = 'healthy';
  }
  return healthLevel;
}
