var car, wall;
var speed, weight;

function setup() {
  createCanvas(1200,400);
  car = createSprite(50,200,50,50);

  speed = random(55,90);
  weight = random(400,1500);
  wall = createSprite(1000,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  car.velocityX = speed;

  

}

function draw() {
  background(255,255,255);  
  if (wall.x - car.x < (car.width + wall.width)){
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22500;
  if (deformation > 180){
  car.shapeColor = color(255,0,0); //red
    }
  if (deformation < 180 && deformation > 100){
    car.shapeColor = color(230,230,0); //yellow
  }
  if (deformation < 100){
  car.shapeColor = color(0,255,0);//green

  }
  }
  drawSprites();
}