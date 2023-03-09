class Game {
    constructor(){

    }
start(){
    text("press enter to start")
    ball = createSprite(windowHeight - 600,windowHeight/2)
    ball.addImage("football",ballIMG)
    //obstacle = createSprite(windowWidth - 600,windowHeight/2)
   // obstacle.addImage("messi", obstacleIMG)
    goal = createSprite(windowWidth - 300, windowHeight/2)
    goal.addImage("scoreit", goalIMG)
    goal.scale = 0.7
    obstacles = new Group()
    var obstacle1Positions = [
        { x: width / 2 - 150, y: height - 1300, image: obstacleIMG },
        { x: width / 2 + 250, y: height - 1800, image: obstacleIMG },
        { x: width / 2 - 180, y: height - 3300, image: obstacleIMG },
       
        { x: width / 2 - 150, y: height - 4300, image: obstacleIMG},
        { x: width / 2, y: height - 5300, image: obstacleIMG },
      ];
   
    this.addSprites(obstacles,2,obstacleIMG,scale,0.4)
    if (keyDown(ENTER)) {
     gameState = 2
    }

    
}
play (){
    

drawSprites()
}
end () {

}
restart(){

}

addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
    for (var i = 0; i < numberOfSprites; i++) {
      var x, y;

      //C41 //SA
      if (positions.length > 0) {
        x = positions[i].x;
        y = positions[i].y;
        spriteImage = positions[i].image;
      } else {
        x = random(width / 2 + 150, width / 2 - 150);
        y = random(-height * 4.5, height - 400);
      }
      var sprite = createSprite(x, y);
      sprite.addImage("sprite", spriteImage);

      sprite.scale = scale;
      spriteGroup.add(sprite);
    }
  }










}