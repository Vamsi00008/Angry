var movingRect,fixedRect;



function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
 movingRect=createSprite(100,100,80,60);
 fixedRect.shapeColor="black";
 movingRect.shapeColor="black";
 movingRect.debug=true;
 fixedRect.debug=true;

}

function draw() {
  background(255,255,255);  
  //movingRect.x-fixedRect.x=movingRect.width/2+fixedRect.width/2
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  console.log("sum of half rectangles height");
  console.log(movingRect.height/2+fixedRect.height/2);
console.log("distance from top/bottom");
console.log(fixedRect.y-movingRect.y);


  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
   &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
   &&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else{
    fixedRect.shapeColor="black";
 movingRect.shapeColor="black";
  }
  drawSprites();
}