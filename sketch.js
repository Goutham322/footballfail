var ball,canvas
var backgroundImage
var goal,goalIMG
var obstacle,obstacleIMG,obstacles
var game,ballIMG,positions
var gameState = 1


function preload(){
    backgroundImage = loadImage("./background.jpg");
    ballIMG = loadImage("./football.jpg")   
    obstacleIMG = loadImage("./obstacle.jpg")
    goalIMG = loadImage("./goalpost.png")
}
function setup(){
canvas = createCanvas(windowWidth, windowHeight);
game = new Game()
}
function draw(){
background (backgroundImage)

if (gameState === 1) {
    game.start();
  }

 if (gameState === 2) {
 
    game.play();
  }
  if (gameState === 3) {
    
    game.end();
  }


}