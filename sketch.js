var sky,bird,plane,ground;

function preload(){
sky1=loadImage("sky.png")
bird1=loadImage("bird.png")
plane1=loadAnimation("0.png","1.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png")


}

function setup(){
createCanvas (600,200)

//sky=createSprite(300,100,600,200);
ground=createSprite(300,190,600,20);
ground.addImage("ground",sky1)
ground.scale=1

plane=createSprite(40,150,40,40);
plane.addAnimation("plane",plane1)
plane.scale=0.5

}
 
function draw(){
background("blue")
ground.velocityX=-3
if(ground.x<0){
ground.x=ground.width/2
}
spawnBird()
drawSprites()


}
function spawnBird(){

if(frameCount%100 ===0){
    bird=createSprite(50,150,10,10);
    bird.y=Math.round(random(50,180))
    bird.addImage("bird",bird1)
    bird.scale=0.2
    bird.velocityX=3;
    bird.lifetime=200

}



}