
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ball,ground

function setup() {
	createCanvas(800*2, 400);


	engine = Engine.create();
	world = engine.world;

	
	
    ball1=new Paper(300,100)
    ground=new Ground(800,390,1600,20);
    b1=new Ground(935,315,20,100)
    
    b3=new Ground(1115,315,20,100)
    b2=new Ground(1025,370,200,20)
  
}


function draw() {
	Engine.update(engine);
  
  background(0);

  

  
  
  fill ("yellow")
  ball1.display();
  fill("brown")
  ground.display();
  fill("red")
  b1.display();
  b3.display();
  b2.display();
}
function keyPressed(){
if(keyCode === UP_ARROW){

  Matter.Body.applyForce(ball1.body,ball1.position,{x:65,y:-85});
}

}
