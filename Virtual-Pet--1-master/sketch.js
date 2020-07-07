var dog, happyDog, database, food, foodStock,database

function preload()
{
  dog = loadImage ("dogImg.png");
  dog.scale = 0.2
  happyDog = loadImage("dogImg1.png");
  happyDog.scale = 0.2
}

function setup() {
  database = firebase.database();
  console.log(database)
  createCanvas(1000, 1000);
  
  dawg = createSprite(250,450)
  dawg.addImage("dogImg.png",dog);
  

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dawg.addImage(happyDog)
  }
  
  
  textSize(50)
  text("NOTE:Press UP_ARROW key to feed milk!",50,50)

  drawSprites();
  //add styles here

}

function readStock (data){
  food=data.val();
}

function writeStock (x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref('/').update({
    food:x
  })
}


