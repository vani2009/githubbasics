var ball,ball_img,paddle,paddle_img;
score=0;
function preload() {
  ball_img= loadImage("ball.png");
  paddle_img=loadImage("paddle.png");
                       
}
function setup() {
  createCanvas(400, 400);
   ball=createSprite(50,200,10,10);
   ball.addImage("ball",ball_img);
  
  paddle=createSprite(350,200,20,20);
  paddle.addImage("paddle",paddle_img);
  
  ball.velocityX=9;
  ball.velocityY=5;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  randomVelocity();
  drawSprites();
  
}

function randomVelocity()
{
  if(ball.isTouching(paddle)){
    ball.velocityX=ball.velocityX+2;
    ball.velocityY=ball.velocityY+2;
   score=score+1;
  }
}

