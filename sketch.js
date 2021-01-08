const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,600,1200,20);
    ball = new Ball(300,300,50)
    chain = new Chain(ball.body,{x:300, y:100})
}

function draw() {
  background(128);  
 ground.display();
 ball.display();
 chain.display();
}
function mouseDragged(){
     Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
