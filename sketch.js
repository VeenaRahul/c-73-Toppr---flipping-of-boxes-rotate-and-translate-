var Engine = Matter.Engine;
var Bodies = Matter.Bodies;
var World = Matter.World;
var Composite = Matter.Composite;

var ground,platform, platform1, box1, box2;
var engine, world;

function setup(){
    var canvas = createCanvas(500,600);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(250, 590, 500, 20);
    

    box1 = new Box(100, 400, 100, 100);
    box2 = new Box(170, 200, 100, 100);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    

    push ();
    ellipseMode(RADIUS);
    fill('green');
    ellipse(50, 50, 20, 40);
    pop ();

    push ();
    stroke ('white');
    strokeWeight(4)
    fill('pink')
    ellipse(200, 50, 60, 40);
    pop ();

    box1.display();
    box2.display();
    
}
