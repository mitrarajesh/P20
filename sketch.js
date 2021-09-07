var bg, sleep, brush, gym, eat, drink, move, bath;
var astronaut;

function preload() {
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png", "gym2.png");
  gym2 = loadAnimation("gym11.png", "gym12.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  move = loadAnimation("move3.png", "move2.png");
  bath  = loadAnimation("bath1.png", "bath2.png");
}

function setup() {
  createCanvas(1000, 500);

  bG = createSprite(500, 250, 50, 50);
  bG.addImage(bg);
  bG.scale = 0.2;

  astronaut = createSprite(500, 380);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.addAnimation("moving", move);
  astronaut.addAnimation("brushing", brush);
  astronaut.addAnimation("gym", gym);
  astronaut.addAnimation("exercise", gym2);
  astronaut.addAnimation("eating", eat);
  astronaut.addAnimation("bathing", bath);
  astronaut.addAnimation("drinking", drink);
  astronaut.scale = 0.1;
}

function draw() { 
  background(0);

  if (keyDown("1")) {
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.x = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  else if (keyDown("2")) {
    astronaut.changeAnimation("gym");
    astronaut.y = 380;
    astronaut.x = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  else if (keyDown("3")) {
    astronaut.changeAnimation("exercise");
    astronaut.y = 380;
    astronaut.x = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  else if (keyDown("4")) {
    astronaut.changeAnimation("eating");
    astronaut.y = 380;
    astronaut.x = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  else if (keyDown("5")) {
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.x = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  else if (keyDown("right")) {
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 2;
    astronaut.velocityY = 0;
  }
  else if (keyDown("up")) {
    astronaut.changeAnimation("moving");
    astronaut.velocityY = -2;
    astronaut.velocityX = 0;
  }
  else if (keyDown("down")) {
    astronaut.changeAnimation("moving");
    astronaut.velocityY = 2;
    astronaut.velocityX = 0;
  }
  else if (keyDown("left")) {
    astronaut.changeAnimation("moving");
    astronaut.velocityX = -2;
    astronaut.velocityY = 0;
  }
  else if (keyDown("6")) {
    astronaut.changeAnimation("drinking");
    astronaut.y = 350;
    astronaut.x = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  else if (keyDown("7")) {
    astronaut.changeAnimation("sleeping");
    astronaut.y = 380;
    astronaut.x = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  edges = createEdgeSprites();
  astronaut.collide(edges);

  drawSprites();

  // Text works after drawsprites
  textSize(20);
  fill("white");
  text("Instructions: ", 10, 20);
  textSize(15);
  fill("white");
  text("1 = Brushing ", 10, 35);
  text("2 = Exercise 1 ", 10, 50);
  text("3 = Exercise 2 ", 10, 65);
  text("4 = Eating ", 10, 80);
  text("5 = Bathing ", 10, 95);
  text("6 = Drinking ", 10, 110);
  text("7 = Sleeping ", 10, 125);
  text("Right Arrow = Right ", 10, 170);
  text("Up Arrow = Up ", 10, 140);
  text("Down Arrow = Down ", 10, 155);
  text("Left Arrow = Left ", 10, 185);
}