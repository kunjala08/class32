const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score=0;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,2000,20);

    ball1 = new ball(10,160,50);

    chain   = new Slingshot(ball1.body,{x:200,y:395});
    box1 = new Box(500,370,80,80)
    box2 = new Box(600,370,80,80)
    box3 = new Box(700,370,80,80)
    box4 = new Box(800,370,80,80)
    
    box5 = new Box(550,270,80,80)
    box6 = new Box(650,270,80,80)
    box7 = new Box(750,270,80,80)

    box8 = new Box(595,170,80,80)
    box9 = new Box(695,170,80,80)

    box10 = new Box(635,70,80,80)
    
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    ball1.display();
    chain.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
}
function mouseDragged(){
   Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
    
//make my angry bird fly/launch
  //  chain.fly();

}