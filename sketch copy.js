const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, wall1, wall2, wall3;

var divisions = [];
var plinkos = [];

var divisionHieght = 250;

var gameState = "PLAY";
var score = 0;
var count = 0;
var particle;


function setup() {
	createCanvas(400, 600);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,600,400,10);
	wall1 = new Ground(0,300,10,600);
	wall2 = new Ground(200,0,400,10);
	wall3 = new Ground(400,300,10,600);

	for(var k = 0;k <=width; k =k + 50){
		divisions.push(new Division(k , height-divisionHieght/2, 6, divisionHieght))
	}
	
	for(var j = 40;j <=width-10;j = j+40){
		plinkos.push(new Plinko(j,50));
		plinkos.push(new Plinko(j,130));
		plinkos.push(new Plinko(j,210));
		plinkos.push(new Plinko(j,290));
	}

	for(var l = 20;l <=width-10;l = l+40){
		plinkos.push(new Plinko(l,90));
		plinkos.push(new Plinko(l,170));
		plinkos.push(new Plinko(l,250));
	}
	

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  noStroke();
  textSize(20)
  fill("white")
  text("Score: " + score, 15, 30);
  text("500   500   500   100   100   200   200   200", 10, 370)
  
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
 
  for(var k = 0; k < divisions.length; k++){
	  divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++){
	plinkos[j].display();
  }

  for(var l = 0; l < plinkos.length; l++){
	plinkos[l].display();
  }

 
  	if(gameState === "PLAY"){
		if(particle !== null){
			
			particle.display();
			
			if(particle.body.position.y<350){
				
				if(particle.body.position.x>0 && particle.body.position.x<150){
					score = score + 500;
					particle = null;

					if(count >= 5){
						gameState = "END";
					}

				}

				if(particle.body.position.x>150 && particle.body.position.x<250){
					score = score + 100;
					particle = null;

					if(count >= 5){
						gameState = "END";
					}

				}

				if(particle.body.position.x>250 && particle.body.position.x<400){
					score = score + 200;
					particle = null;

					if(count >= 5){
						gameState = "END";
					}

				}

			}
		}
	}
	  
	if(gameState === "END"){
		textSize(80);
		fill("red")
		text("GAME",80,200);
		text("OVER",80,300);
	}


}


function mousePressed(){
	if(gameState === "PLAY"){
		particle = new Particles( mouseX, 20);
		count++
	}	
}
