var car, wall;
var speed, weight;
var Deformation;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  
  
  car.velocityX = speed;
  Deformation = (0.5*weight*speed*speed)/22500;
}

function draw() {
  background(255,255,255);  
  wall.shapeColour = color(80,80,80);
  console.log(Deformation);
  if (wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX = 0;

  if (Deformation<100){
    car.shapeColour = color(0,255,0);
  }

  if (Deformation>100 && Deformation<180){
    car.shapeColour = color(230,230,0);
  }

  if (Deformation>180){
    car.shapeColour = color(255,0,0);
  }
  }
  drawSprites();
}