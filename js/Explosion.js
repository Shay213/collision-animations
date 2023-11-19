export default class Explosion{
  constructor(x, y){
    this.spriteWidth = 200
    this.spriteHeight = 179
    this.width = this.spriteWidth * 0.5
    this.height = this.spriteHeight * 0.5

    this.x = x - this.width * 0.5
    this.y = y - this.height * 0.5

    this.img = new Image()
    this.img.src = '../assets/boom.png'

    this.frame = 0
    this.gameFrame = 0
  }

  update(){
    this.gameFrame++
    if(this.gameFrame % 5 === 0){
      this.frame < 5 ? this.frame++ : this.frame = 0
    }
  }

  draw(ctx){
    ctx.drawImage(this.img, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
  }
}