class Food{
    constructor(){
    this.bottle=loadImage("images/Milk.png")
    this.foodStock=0;
    this.lastFed;
    }
    getFoodStock(){
        return this.foodStock;
    }
    updateFoodStock(fs){
this.foodStock=fs;
    }
    getFedTime(lastFed){
this.lastFed=lastFed;
    }
    display(){
        var x=80,y=100;

        imageMode(CENTER);

        if(this.foodStock!==0){
            for(var i=0;i<this.foodStock;i++){
              if(i%10==0){
                  x=80
                  y=y+50;
              }  
              image(this.bottle,x,y,50,50);
            x=x+30;
            }

        }
    }
}