var bckimg,mntin,mountimg,hillgroup,cloudgrp,cloudimg,clouds
var rand;
var cloudimg2;
var cloudes

function preload(){
bckimg  = loadImage("sprites/back.png")
 mountimg = loadImage("sprites/hill.png")
 cloudimg = loadImage("sprites/Cloud.png")
 cloudimg2 = loadImage("sprites/Cloud spr.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)
hillgroup = new Group()
invisibleGround = createSprite(windowWidth-690,windowHeight-96,2700	,10)
invisibleGround.visible = false
invisibleGround.velocityX = -4

rand =Math.round(random(1,100))
}

function draw(){
background(bckimg)
if(invisibleGround.x < 0){
invisibleGround.x = invisibleGround.width/2
}

drawSprites()
hill()
cloud()

}

function hill(){
	if(frameCount % 135 === 0){
	mntin =  createSprite(windowWidth-1,windowHeight-171)
	mntin.addImage("mountimg",mountimg)
	mntin.scale = 0.3	
	mntin.velocityX=-5

	mntin.lifetime = 350
	}
}

function cloud (){
	if(frameCount % 120 === 0){
		clouds =  createSprite(windowWidth-10,windowHeight-560)
		cloudes =  createSprite(windowWidth-400,windowHeight-560)
		
		 
		clouds.addImage("cloudimg",cloudimg)
		clouds.scale = 0.3
        cloudes.addImage("cloudimg2",cloudimg2)
		cloudes.scale = 0.3
		
		clouds.y = Math.round(random(windowHeight-470,windowHeight-560))
		cloudes.y = Math.round(random(windowHeight-480,windowHeight-560))
		cloudes.x = Math.round(random(windowWidth-400,windowWidth-500))
		clouds.velocityX=-5
	    cloudes.velocityX=-5

		clouds.lifetime = 350
        cloudes.lifetime = 350

		
		

		
		
		
          
}
}
