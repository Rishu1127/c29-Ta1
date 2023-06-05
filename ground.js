class Ground {
    constructor(x,y,w,h) {
       this.w = w
       this.h = h
       this.image = loadImage("grass.png")
       this.body = Matter.Bodies.rectangle(x,y,this.w,this.h)
    }

    display() {
        var pos = this.body.position
        image(this.image,pos.x, pos.y, this.w,this.h)
      
    }

}
