var space;
var iss, issImg;
var spacecraft, spacecraftImg, spacecraftImg2, spacecraftImg3, spacecraftImg4;
var hasDocked=false;
function preload(){
  space=loadImage("spacebg.jpg");
  issImg=loadImage("iss.png");
  spacecraftImg=loadAnimation("spacecraft1.png");
  spacecraftImg2=loadAnimation("spacecraft2.png");
  spacecraftImg3=loadAnimation("spacecraft3.png");
  spacecraftImg4=loadAnimation("spacecraft4.png");
}

function setup() {
  createCanvas(900,600);
  spacecraft=createSprite(400,400,50,50);
  spacecraft.addAnimation("space_craft",spacecraftImg);
  spacecraft.addAnimation("space_craft_straight",spacecraftImg2);
  spacecraft.addAnimation("space_craft_right",spacecraftImg3);
  spacecraft.addAnimation("space_craft_left",spacecraftImg4);
  spacecraft.scale=0.3;
  iss=createSprite(400, 250, 50, 50);
  iss.addImage(issImg);
  iss.scale=0.9;
  
}

function draw() {
  background(space);
  spacecraft.velocityY=0;
  spacecraft.velocityX=0;
  if(!hasDocked){
    if(keyDown(UP_ARROW)){
      spacecraft.changeAnimation("space_craft",spacecraftImg);
      spacecraft.velocityY=-5;
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.changeAnimation("space_craft_right",spacecraftImg3);
      spacecraft.velocityX=5;
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.changeAnimation("space_craft_left",spacecraftImg4);
      spacecraft.velocityX=-5;
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.changeAnimation("space_craft_straight",spacecraftImg2);
      //spacecraft.velocityY=5;
    }
   
  }  
  if(spacecraft.x===340 && spacecraft.y===340){
    hasDocked=true;
    textSize(25);
    fill("white");
    text("Docking Completed!!",300,500);
  }
  drawSprites();
}