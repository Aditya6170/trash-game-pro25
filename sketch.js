const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world,paper,log1,log2,log3,obs1;


function setup() {
	var canvas = createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(200,200,70);
    ground = new Ground(600,height,1200,20);

    log1 = new Log(780,390,10,200);
    log2 = new Log(680,300,180,20);
    log3 = new Log(890,300,180,20);

	  obs1 = new OBS(785,280,0.001,0.001);
  
}


function draw() {
  background("white");
  Engine.update(engine);

  
  ground.display();
  log1.display();
  log2.display();
  log3.display();
  obs1.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-50})
  }
  if(keyCode === LEFT_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:-50,y:10})
  }
  
}

