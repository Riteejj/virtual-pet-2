var dog,dogImage,happyDogImage,database,foodS,foodStock;
var feedBtn,addbtn
var fedTime,lastFed
var foodObj

function preload()

{
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/happydogImg.png");
  
}
  
  //load images here

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
 

  feed=createButton("Feed the dog");
  feed.position(600,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(700,95);
  addFood.mousePressed(addFoods);
foodObj=new Food();


  
 
  dog = createSprite(250,350,10,60);
  dog.addImage(dogImage); 

  dog.scale = 0.2;

}

function draw() {  
   
background("green");

drawSprites();
foodObj.display();
fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
});
if(foodS===0){
  dog.addAnimition(dogImage);

}

  textSize(20);
  fill(255);
  
text("food Remaining:"+foodS,150,450);



fill(255,154);
textSize(15);
if(lastFed>=12){
  text("Last Feed : "+ lastFed%12 + "PM",350,30);
}else if(lastFed==0){
  text("last feed : 12 AM",350,30);
}else{
text("last Feed : "+lastFed + "AM",350,30);
}
}






function readStock(data){
  foodS = data.val();
  foodObj.updateFoodStock(foodS);
  if(foodS<0){
    foodS=0;
  }
}
function feedDog(){
  dog.addImage(happyDogImage);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}





































