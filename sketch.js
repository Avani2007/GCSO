var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  car.shapeColor = 250
  wall.shapeColor = 80,80,80
  speed = random(55,90);
weight = random(400,1500);

}


function draw() {
  background(10,10,250);
  car.velocityX = speed;  
  collide(wall,car);
  drawSprites();
}

function collide(object1, object2){
  if (object1.x - object2.x < (object2.width + object1.width)/2) {
  object2.velocityX = 0
  var deformation = 0.5*weight*speed*speed/22500
   if (deformation<100){
     car.shapeColor = 0,255,0        
   } 
   if (deformation<180 && deformation>100){
    car.shapeColor = 230,230,0        
  } 
   if (deformation>180){
    car.shapeColor = 255,0,0        
  } 

     }

}