//Create variables here

function preload()
{
	//load images here
  dogImg1=loadImage ("images/dogImg.png");
 dogImg2= loadImage ("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  dog= createSprite(250,250,10,10);
  dog.addImage(dogImg1);
  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog.scale=0.5
}


function draw() {  
    background(46,139,87);

    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dogImg2)
    }

  drawSprites();
  textSize(12);
  fill("red");
  text ("NOTE: Press UP_ARROW key to feed Drago the milk.", 50,50);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  });

}



