var ball


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
	//Create the Bodies Here.
   Bodies.circle(200,100,20,ball_options)
   World.add(world,ball)

	Engine.run(engine);
    
}


function draw() {
	ellipse(ball.position.x,ball.position.y,20)
  rectMode(CENTER);
  ellipseMode(CENTER)
  background(220);
  
  drawSprites();
 
}



