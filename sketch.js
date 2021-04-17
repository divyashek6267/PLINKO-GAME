const  Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  
  
  createCanvas(800, 820);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  

   for (var k = 0; k <=width; k = k + 70) {
     divisions.push(new Division(k, height-divisionHeight/1.88, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {

       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {

       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {

       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {

       plinkos.push(new Plinko(j,375));
    }

}

function draw() {
  background("black");  
  
  Engine.update(engine);
  ground.display();

   for (var i = 0; i < plinkos.length; i++) {

     plinkos[i].display();

   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }

  for (var p = 0; p < particles.length; p++) {

     particles[p].display();
   }
   for (var l = 0; l < divisions.length; l++) {

     divisions[l].display();
   }
}