var ball
var ground
var leftBin
var rightBin
var button
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(700, 400);

	//button=createImg("rightArrow.png");
	//button.position(350,20);
	//button.size(50,50);
	//button.mouseClicked(v_force);

	
	


	engine = Engine.create();
	world = engine.world;

	ground= new Ground(350,360,700,15)
	leftBin= new Ground(380,300,15,125)
	rightBin=new Ground(575,300,15,125)

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.4,
		friction:0,
		density:1.2

	
		
	}

	
	
	ellipseMode(RADIUS)
	ball=Bodies.circle(100,10,20,ball_options)
	World.add(world,ball)
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y,20,20);
  ground.show();
  leftBin.show();
  rightBin.show();
  Engine.update(engine); 
  

 
  drawSprites();
  
}


    function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:12,y:-10})
	console.log("applyforce")
	}
  }

