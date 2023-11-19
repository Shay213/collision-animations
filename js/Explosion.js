export default class Explosion{
  constructor(x, y){
    this.spriteWidth = 200
    this.spriteHeight = 179
    this.width = this.spriteWidth * 0.5
    this.height = this.spriteHeight * 0.5

    this.x = x
    this.y = y

    this.img = new Image()
    this.img.src = '../assets/boom.png'
    this.sound = new Audio()
    this.sound.src = '../assets/boom.wav'
    this.sound.volume = 0.2

    this.frame = 0
    this.gameFrame = 0
    this.angle = Math.random() * 6.2
  }

  isAnimationDone(){
    return this.frame > 5
  }

  update(){
    if(this.frame === 0) this.sound.play()
    this.gameFrame++
    if(this.gameFrame % 5 === 0){
      this.frame++
    }
  }

  draw(ctx){
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.angle)
    ctx.drawImage(this.img, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, 0 - this.width * 0.5, 0 - this.height * 0.5, this.width, this.height)
    ctx.restore()
  }
}