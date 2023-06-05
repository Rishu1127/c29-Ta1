class Clouds {
    constructor(x,y,w,h) {
        this.w = w
        this.h = h
        this.image = loadImage("cloud.png")
        this.body = Matter.Bodies.rectangle(x,y,w,h)
        this.sprite = createSprite(x,y,w,h)
        this.sprite1 = createSprite(x + 270, y,w,h)
        this.sprite2 = createSprite(x + 540, y,w,h)
    }

    display() {
        var pos = this.body.position
        this.sprite.addImage(this.image, pos.x, pos.y, this.w,this.h)
        this.sprite1.addImage(this.image, pos.x + 270, pos.y, this.w , this.h)
        this.sprite2.addImage(this.image, pos.x + 540, pos.y, this.w, this.h)
        this.sprite.scale = 0.29
        this.sprite1.scale = 0.29
        this.sprite2.scale = 0.29

        if (this.sprite.mousePressed()) {
            
        }

    }
    
}