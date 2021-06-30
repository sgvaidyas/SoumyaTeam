
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world;
var paper;
var dustbin1;

function setup() {
	var canvas=createCanvas(1600,700);

	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
  
	dustbin1= new Dustbin(1200,650);
  paper=new Paper(200,450,40);
  ground=new Ground(800,670,1600,20)
	
  var render=Render.create({
    element:document.body,
    engine:engine,
    options:{
      width:1200,
      height:700,
      wireframes:false
    }
  })
  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin1.display();
  paper.display();
  ground.display();
  //drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
}


