import Explosion from "./Explosion.js"

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 500
const CANVAS_HEIGHT = canvas.height = 700

const canvasPos = canvas.getBoundingClientRect()

window.addEventListener('click', (e) => {
  ctx.fillStyle = 'white'
  ctx.fillRect(e.x - canvasPos.left, e.y - canvasPos.top, 20, 20)
})