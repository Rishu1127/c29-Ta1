const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var sun;
var xPos;
var cloudsArray;
var clouds;
var fruit, rope, linkFruit;
var fruit1, rope1, linkFruit1
var randomFruit, randomFruit1, randomFruit2
var cucumber, tomato, carrot, fruitImage

var switchStation, points;

var bunnyPng, bunnyEat;

function preload() {
 sun = loadImage("sun.png")
  cucumber = loadImage("cucumber.jpg")
  tomato = loadImage("tomato.jpg")
  carrot = loadImage("carrot.jpg")
  bunnyEat = loadAnimation(
    "eat_0.png", "eat_1.png", "eat_2.png", "eat_3.png", "eat_4.png"
  )
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 270, height - 70, width * 3, 50)
  xPos = Math.round(random(width - 800, 800))
  bunnyPng = loadImage("bunny.jpg")
  cloudsArray = [0, 1, 2]
  switchStation = 1

  randomFruit = Math.round(random(1, 3))
  randomFruit1 = Math.round(random(1, 3))
  randomFruit2 = Math.round(1, 3)



 





  for (var i = 0; i < cloudsArray.length; i++) {
    clouds = new Clouds(xPos, 100, 50, 30)
  }


  if (switchStation == 1) {
    rope = new Rope(5, { x: xPos + 300, y: 100 })
    fruitOptions = {
      density: 0.001,

    }
    fruit = Matter.Bodies.circle(300, 300, 15, fruitOptions)

    Matter.Composite.add(rope.body, fruit)

    linkFruit = new Link(rope, fruit)


    rope1 = new Rope(5, { x: xPos + 570, y: 100 })

    fruit1 = Matter.Bodies.circle(300, 300, 15, fruitOptions)

    Matter.Composite.add(rope1.body, fruit1)

    linkFruit1 = new Link(rope1, fruit1)

    rope2 = new Rope(5, { x: xPos + 30, y: 100 })

    fruit2 = Matter.Bodies.circle(300, 300, 15, fruitOptions)

    Matter.Composite.add(rope2.body, fruit2)

    linkFruit2 = new Link(rope2, fruit2)
  }



  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}


function draw() {

  background("#2887e5");
  console.log("Game  started")
  Engine.update(engine);
  image(sun, -200, -200, 500, 500)
  image(bunnyPng, width / 1.12, height / 1.2, 150, 150)
  ground.display()

  for (var i = 0; i < cloudsArray.length; i++) {
    clouds.display()
  }


  switch (randomFruit) {
    case 1: image(cucumber, fruit.position.x, fruit.position.y, 100, 100)
      break
    case 2: image(tomato, fruit.position.x, fruit.position.y, 70, 70)
      break
    case 3: image(carrot, fruit.position.x, fruit.position.y, 100, 100)
  }

  switch (randomFruit1) {
    case 1: image(cucumber, fruit1.position.x, fruit1.position.y, 100, 100)
      break
    case 2: image(tomato, fruit1.position.x, fruit1.position.y, 70, 70)
      break
    case 3: image(carrot, fruit1.position.x, fruit1.position.y, 100, 100)
  }

  switch (randomFruit2) {
    case 1: image(cucumber, fruit2.position.x, fruit2.position.y, 100, 100)
      break
    case 2: image(tomato, fruit2.position.x, fruit2.position.y, 70, 70)
      break
    case 3: image(carrot, fruit2.position.x, fruit2.position.y, 100, 100)
  }


  if (switchStation == 1) {

    fill("blue")
    rope.show()


    fill("brown")
    rope1.show()

    fill("black")
    rope2.show()
  }



  drawSprites()

}

function mousePressed() {
  if (clouds.sprite.mouseOver) {
    draw()
  }
}

function drop(obRope, connect) {
  obRope.break()
  connect.detach()
  connect = null
}





