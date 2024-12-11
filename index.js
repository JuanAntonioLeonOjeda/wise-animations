const player = {
  name: 'player',
  sprite: document.getElementById('player'),
  posX: 0,
  posY: 0,
  width: 100,
  height: 100,
  direction: 1
}

const enemy = {
  name: "enemy",
  sprite: document.getElementById("enemy"),
  posY: 300,
  posX: 400,
  width: 100,
  height: 100,
  direction: -1,
}

const moveElement = (element) => {
  let movement = element.name === 'player' ? 'posY' : 'posX'
  let coord = element.name === "player" ? "top" : "left";

  element[movement] = element[movement] + 50 * element.direction;
  if (element[movement] === 400 || element[movement] === 0) {
    element.direction *= -1;
  }
  element.sprite.style[coord] = `${element[movement]}px`;
}

const checkCollision = () => {
  return (
    player.posY < enemy.posY + enemy.height &&
    player.posY + player.height > enemy.posY &&
    player.posX < enemy.posX + enemy.width &&
    player.posX + player.width > enemy.posX
  )
}

const timerId = setInterval(() => {
  moveElement(player)
  moveElement(enemy)
  const gameOver = checkCollision()
  if (gameOver) {
    
  }
}, 500)