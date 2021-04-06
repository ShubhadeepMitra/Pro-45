//making variables
var target,line1,line2,target_img,arrow_img,dart;

//loading images in function preload
function preload(){
  target_img = loadImage("pic.png");
  arrow_img = loadImage("arrow.png");
  }

//defining the variables
function setup() {
  createCanvas(600,600);

  //creating line 1
  line1=createSprite(200,200,600,5);
  line1.shapeColor="red";
  line1.velocityY=5;
  

  //creating line 2
  line2=createSprite(200,200,5,600);
  line2.shapeColor="blue";
  line2.velocityX=5;

  //creating the target sprite
  target=createSprite(300,300,10,10);
  target.addImage(target_img);
  target.scale=0.1;

  dartGroup=createGroup();

  score=0;

}


function draw() {
  //making the background
  background(255,255,255);
  
  dart();

  //stopping line 1 from moving by pressing up key
  if(keyDown("up")){
    line1.velocityY=0;
  }

  if(dartGroup.isTouching(target)){
  score=score+10
  }

  line1.depth=target.depth+1;
  line2.depth=target.depth+1;
  //stopping line 2 from moving by pressing down key
  if(keyDown("down")){
    line2.velocityX=0;
  }
  //making the edge sprites
  edges=createEdgeSprites();

  //making the line 1 and 2
  line1.bounceOff(edges);
  line2.bounceOff(edges);
  
  drawSprites();

  text("Score: "+score,10,20)
}

function dart(){
  if(keyDown("space")){
    darts=createSprite(line1.y,line2.x,5,5);
  darts.addImage(arrow_img);
  dartGroup.add(darts);
  dartGroup.lifetime=1;
  }
}