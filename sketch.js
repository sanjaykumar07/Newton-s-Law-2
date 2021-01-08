
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	bg = loadImage("bg.jpg")
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;
	
	roof1 = new roof(200,150,1600,10);
	
	
	bob1 = new bob(300,450,35);
	bob2 = new bob(350,450,35);
	bob3 = new bob(400,450,35);
	bob4 = new bob(450,450,35);
	bob5 = new bob(500,450,35);
   

	chain1 = new Chain(bob1.body,roof1.body,100,20)
	chain2 = new Chain(bob2.body,roof1.body,150,20)
	chain3 = new Chain(bob3.body,roof1.body,200,20)
	chain4 = new Chain(bob4.body,roof1.body,250,20)
	chain5 = new Chain(bob5.body,roof1.body,300,20)
	




	//Create the Bodies Here.


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(bg)

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof1.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  
  

  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-800,y:800})
	}
}


