var PLAY = 1;
var END = 2;
var gameState = PLAY;
var man,manImage;
var mask,maskImage;
var vaccine,vaccineImage;
var sanitizer,snitizerImage;
var virus,virusImage;
var backGround,bg,ground;
var immunity = 100;
var virusGroup,vaccineGroup,maskGroup,dumbbellGroup;
var restart,restartImage;
function preload(){
maskImage = loadImage("mask.png");
vaccineImage = loadImage("vaccine.png");
sanitizerImage = loadImage("sanitizer.png");
virusImage = loadImage("virus.png");
bg = loadImage("background.jpg");
restartImage = loadImage("restart.png");
}
function setup() {
createCanvas(1500,800);

//backGround = createSprite(750,400,20000,50);
//backGround.addImage("background.jpg",bg);
//backGround.scale = 3;
//backGround.x = backGround.width/2;

ground = createSprite(750,750,1500,50);

restart = createSprite(750,400);
restart.addImage("restart",restartImage);

man = createSprite(200,500,20,400);

immunity = 100;

}

function draw() {
background(bg);

var form = new Form();

//backGround.velocityX = -(30);

//if (backGround.x < -100){
 // backGround.x = backGround.width*3;
//}



  ground.visible = false;
  restart.visible = false;

fill("red");
textSize(50,50);
text(" IMMUNITY : " + immunity,1000,100);

  if(keyDown("space")&& man.y >= 100) {
    man.velocityY = -80;
  }

  //if(mask.isTouching(man)){
  //  immunity = immunity+10
 // }
 // if(vaccine.isTouching(man)){
 //   immunity = immunity+40
 // }
  //if(sanitizer.isTouching(man)){
  // immunity = immunity+20
  //}
  
  man.velocityY = man.velocityY + 10
  man.collide(ground);
  
  spawnVirus();
  spawnVaccine();
  spawnSanitizer();
  spawnMask();
  
  //if(virusGroup.isTouching(man)){
   // virus.velocityX = 0;
  //  mask.velocityX = 0;
   // vaccine.velocityX = 0;
   // sanitizer.velocityX = 0;
    
  //  fill("black");
   // textSize(100,100);
  //  text("GAME OVER",500,500);
    
  //    ground.velocityX = 0;
        
  //    virusGroup.setLifetimeEach(-1);
  //    maskGroup.setLifetimeEach(-1);
  //    vaccineGroup.setLifetimeEach(-1);
  //    sanitizerGroup.setLifetimeEach(-1);
       
  //     virusGroup.setVelocityXEach(0);
  //     maskGroup.setVelocityXEach(0);   
   //    vaccineGroup.setVelocityXEach(0);
   //    sanitizerGroup.setVelocityXEach(0);   
    //   if(mousePressedOver(restart)) {
    //   reset();
    // }
//}
drawSprites();
}
function spawnVirus(){
  if (frameCount % 50 === 0) {
    var virus = createSprite(1500,200,40,10);
    virus.y = Math.round(random(300,750));
    virus.addImage(virusImage);
    virus.scale = 0.1;
    virus.velocityX = -30;
    
    virus.lifetime = 1500;

   // virusGroup.add(virus);
  }
}
function spawnMask(){
  if (frameCount % 500 === 0) {
    var mask = createSprite(1500,200,50,50);
    mask.y = Math.round(random(300,300));
    mask.addImage(maskImage);
    mask.scale = 0.2;
    mask.velocityX = -30;
    
    mask.lifetime = 1500;

    //maskGroup.add(mask);
  }
}
function spawnVaccine(){
  if (frameCount % 2500 === 0) {
    var vaccine = createSprite(1500,200,40,10);
    vaccine.y = Math.round(random(350,350));
    vaccine.addImage(vaccineImage);
    vaccine.scale = 0.1;
    vaccine.velocityX = -30;
    
    vaccine.lifetime = 1500;

    //vaccineGroup.add(vaccine);
  }
}
function spawnSanitizer(){
  if (frameCount % 1000 === 0) {
    var sanitizer = createSprite(1500,200,40,10);
    sanitizer.y = Math.round(random(400,400));
    sanitizer.addImage(sanitizerImage);
    sanitizer.scale = 0.2;
    sanitizer.velocityX = -30;
    
    sanitizer.lifetime = 1500;

    //sanitizerGroup.add(sanitizer);
  }
}
