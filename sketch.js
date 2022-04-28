var path,girl;
var pw1,pw2,pw3,pw4,pw5,pw6,pw7,pw8;
var pathImg

var clap;
var clown;
var dance;
var eyeroll;
var float;
var hello;
var hug;
var jump;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;

var pennyWise;

function preload(){

  standingLeft = loadAnimation("MC2/standingL.png")
  standingRight = loadAnimation("MC/standingR.png")
  runningRight = loadAnimation("MC/MC_00.png", "MC/MC_01.png", "MC/MC_02.png", 
  "MC/MC_03.png", "MC/MC_04.png", "MC/MC_05.png", "MC/MC_06.png", "MC/MC_07.png", 
  "MC/MC_08.png", "MC/MC_09.png", "MC/MC_10.png", "MC/MC_11.png", "MC/MC_12.png", 
  "MC/MC_13.png", "MC/MC_14.png", "MC/MC_15.png", "MC/MC_16.png");

  runningLeft = loadAnimation("MC2/MC2_00.png", "MC2/MC2_01.png", "MC2/MC2_02.png", 
  "MC2/MC2_03.png", "MC2/MC2_04.png", "MC2/MC2_05.png", "MC2/MC2_06.png", "MC2/MC2_07.png", 
  "MC2/MC2_08.png", "MC2/MC2_09.png", "MC2/MC2_10.png", "MC2/MC2_11.png", "MC2/MC2_12.png", 
  "MC2/MC2_13.png", "MC2/MC2_14.png", "MC2/MC2_15.png", "MC2/MC2_16.png")
}

function setup(){
  
createCanvas(800,800);
MCharacter = createSprite(400, 600, 15, 30);
MCharacter.addAnimation("runningR", runningRight);
MCharacter.addAnimation("runningL", runningLeft);
MCharacter.addAnimation("standingL",standingLeft)
MCharacter.addAnimation("standingR",standingRight)
MCharacter.scale = 0.75
}

function draw() {
  background(0);
  frameRate(100)
  drawSprites();

  playerControl()

}

function playerControl(){
        if (keyIsDown(RIGHT_ARROW)){
        MCharacter.x += 3;
        }

        if (keyIsDown(LEFT_ARROW)){
        MCharacter.x -= 3;
        }
        if (keyIsDown(UP_ARROW)){
        MCharacter.y -= 3;
        }

        if (keyIsDown(DOWN_ARROW)){
        MCharacter.y += 3;
        }
  }

  function keyPressed(){
        if(keyCode===37){
                MCharacter.changeAnimation("runningL",runningLeft);
        }
        if(keyCode===39){
                MCharacter.changeAnimation("runningR",runningRight);
        }
  }
    


  
  function keyReleased(){
        if(keyCode===37){
                MCharacter.changeAnimation('standingL');
        }
        if(keyCode===39){
                MCharacter.changeAnimation('standingR');
        }
  }
    
