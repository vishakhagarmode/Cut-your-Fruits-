var PLAY=1;
var END=0;
var gameState=1;

var sword, fruit , Enemy ,monster, fruitGroup, EnemyGroup, score, r, randomFruit;

var swordImage , fruit1, fruit2 ,fruit3,fruit4, monsterImage, gameOverImage

function preload(){
  swordImage = loadImage("knife.png");
  monsterImage =loadAnimation  
    ("alien1.png","alien2.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  gameOverImage = loadImage("gameover.png");
  
  cutSound = loadSound ("knifeSwoosh.mp3");
  
  gameOverSound = loadSound ("gameover.mp3");
 
}
function setup(){
  createCanvas(600, 600);
  
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7
  sword.setCollider("rectangle",0,0,40,40);

  score=0;
  
  fruitGroup=createGroup();
  enemyGroup=createGroup();
    
    }

function draw(){

  background("lightblue");
  
  if(gameState===PLAY){
    
    fruits();
    fruits1();
    Enemy();
    
    sword.y=World.mouseY;
    sword.x=World.mouseX;
    
  
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      cutSound.play();
      score=score+2;
    }
    
    
    else
      
    {
      if(enemyGroup.isTouching(sword)){
        gameState=END;
        
        fruitGroup.destroyEach();
        
        enemyGroup.destroyEach();
        
        gameOverSound.play();
        
        fruitGroup.setVelocityXEach(0);
        
        enemyGroup.setVelocityXEach(0);
        
        
        
        sword.addImage(gameOverImage);
        sword.x=300;
        sword.y=300;
        sword.scale = 2.5;
        
      }
    }
  }
  
  
  drawSprites();
  
  text("Score : "+ score,300,30);

}

function Enemy(){

  if(World.frameCount%200===0){
    
    monster=createSprite(400,200,20,20);
    
    monster.addAnimation("moving", monsterImage);
    
    monster.y=Math.round(random(100,300));
    
    monster.velocityX=-(5+3*score/10);
  
    monster.setLifetime=50;
    
    enemyGroup.add(monster);
    
  }
}



function fruits(){
  if(World.frameCount % 50 === 0){
    
    fruit=createSprite(400,200,20,20);
    
    fruit.scale=0.2;
  
     r=Math.round(random(1,4));
    
    
    if (r == 1) {
      
      fruit.addImage(fruit1);
      
    } else if (r == 2) {
      fruit.addImage(fruit2);
      
    } else if (r == 3) {
      fruit.addImage(fruit3);
      
    } else {
      fruit.addImage(fruit4);
    }
    
    
    
    fruit.y=Math.round(random(50,340));
   
    fruit.velocityX= -(4+3*score/4);
  
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
  }
  
}
  

  function fruits1(){
  if(World.frameCount % 50 === 0){
    
    fruit=createSprite(200,400,20,20);
    
    fruit.scale=0.2;
  
     r=Math.round(random(1,4));
    
    
    if (r == 1) {
      
      fruit.addImage(fruit1);
      
    } else if (r == 2) {
      fruit.addImage(fruit2);
      
    } else if (r == 3) {
      fruit.addImage(fruit3);
      
    } else {
      fruit.addImage(fruit4);
    }
    
    
    
    fruit.y=Math.round(random(50,340));
   
    fruit.velocityX= 5
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
  }
}

