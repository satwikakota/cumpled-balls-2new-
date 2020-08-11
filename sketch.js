
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1= new Ground(350,height,900,5); 
	paper1= new Paper(100,630,70); 
	dustbin1= new Dustbin(600,650,20,300); 
	dusbin2= new Dustbin(500,700,200,20); 
	dustbin3= new Dustbin(400,650,20,300); 
	dustbinIMG= new DustbinIMG(500,580,250,250); 
  }


function draw() {
	Engine.update(engine); 
  rectMode(CENTER);
  background("white");
  ground1.display();
  paper1.display(); 
  dustbin1.display();
  dusbin2.display();
  dustbin3.display();
  dustbinIMG.display(); 
  keyPressed(); 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85, y:-70})
	}

}


