const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
 
var ground, miniGround1, miniGround2
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16
var ball,slingshot


function preload() {
    this.polygonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)

    box1=new Box(300,275,30,40)
    box2=new Box(330,275,30,40)
    box3=new Box(360,275,30,40)
    box4=new Box(390,275,30,40)
    box5=new Box(420,275,30,40)
    box6=new Box(450,275,30,40)
    box7=new Box(480,275,30,40)


    box8=new Box(330,235,30,40)
    box9=new Box(360,235,30,40)
    box10=new Box(390,235,30,40)
    box11=new Box(420,235,30,40)
    box12=new Box(450,235,30,40)


    box13=new Box(360,195,30,40)
    box14=new Box(390,195,30,40)
    box15=new Box(420,195,30,40)

    box16=new Box(390,135,30,40)


    ball=Bodies.circle(50,200,20)
    World.add(world,ball)

    slingshot=new SlingShot(this.ball,{x:100,y:200})

    ground=new Ground(390,300,250,10)
}

function draw(){
    background(149, 201, 198);
    ground.display()
    fill("#8b8fb3")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    fill("#e0bcdb")    
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill("#cde0bc")    
    box13.display();
    box14.display();
    box15.display();

    fill("#f4ffb0")    
    box16.display();

    slingshot.display();
    imageMode(CENTER);
    image(this.polygonImage,ball.position.x,ball.position.y,40,40)
    
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}