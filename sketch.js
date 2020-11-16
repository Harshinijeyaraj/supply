const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,helicopter,helicopter1;

function preload(){

    helicopter1 = loadImage("helicopter.png");
}
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
  
   helicopter.addImage(helicopter1);
   helicopter = createSprite(200,10,20,20);

    box1 = new Box(200,300,50,50);
    box2 = new Box(225,100,50,60);
    ground = new Ground(200,380,400,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    helicopter.display();
    helicopter1.display();
    ground.display();
   
}