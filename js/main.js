import Explosion from "./Explosion.js"

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 500
const CANVAS_HEIGHT = canvas.height = 700

const canvasPos = canvas.getBoundingClientRect()

const explosions = []

window.addEventListener('click', (e) => {
  const posX = e.x - canvasPos.left
  const posY = e.y - canvasPos.top
  
  explosions.push(new Explosion(posX, posY))
})

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

  explosions.forEach((explosion) => {
    explosion.update()
    explosion.draw(ctx)
  })

  requestAnimationFrame(animate)
}

animate()