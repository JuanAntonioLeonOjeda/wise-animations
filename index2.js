const player = {
  name: 'player',
  sprite: document.getElementById('player'),
  posX: 0,
  posY: 0,
  width: 100,
  height: 100,
  directionX: 0,
  directionY: 0
}

window.addEventListener('keydown', (e) => {
  switch (e.code) {
    case "KeyA":
      player.directionX = -1
      break
    case "KeyD":
      player.directionX = 1
      break
    case "KeyW":
      player.directionY = -1
      break
    case "KeyS":
      player.directionY = 1
      break
  }
})

window.addEventListener('keyup', (e) => {
  if (e.code === 'KeyA' || e.code === 'KeyD') {
    player.directionX = 0
  }
  if (e.code === 'KeyW' || e.code === 'KeyS') {
    player.directionY = 0
  }
})

const movePlayerY = () => {
  player.posY = player.posY + 20 * player.directionY
  let aux = a
  // if (player.posY === 400 || player.posY === 0) {
  //   player.direction *= -1;
  // }
  player.sprite.style.top = `${player.posY}px`;
}

const movePlayerX = () => {
  player.posX = player.posX + 20 * player.directionX;
  // if (player.posX === 400 || player.posX === 0) {
  //   player.direction *= -1;
  // }
  player.sprite.style.left = `${player.posX}px`;
}

const gameLoop = setInterval(() => {
  movePlayerY()
  movePlayerX()
}, 100)