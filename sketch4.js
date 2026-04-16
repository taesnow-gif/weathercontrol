let G;
let P1;
let S;
let P2;
let circleXone = 0;
let circleYone = 0;
let speed = -100;
let snowman;
//this is the mouse trail variables
var num = 40;
var mx = []; 
var my = []; 




function preload() {
  G = loadImage ("img3/Landscape.png");
  P1 = loadImage ("img3/Penguin1.png");
 P2 = loadImage ("img3/Penguin2.png");
 S = loadImage ("img3/Snowflake.png");
 snowman = loadImage ("img3/Snowman.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

   circleXone = random(width);
  circleYone = random(height);
}

function draw() {
  background('#4fa9db');

   stroke("#95a8c5");
 // strokeWeight(1);
  circle(circleXone, circleYone, 20);
  circleXone = circleXone + 1;
  circleYone = circleYone + 7;

  if (circleYone > height) {
    circleYone = 0;
    circleXone = random(width);
  }
  if (circleXone > height) {
    circleXone = 0;
    circleYone = random(width);
  }
  

 //image of the snowy landscape 
  image (G, -5, 150, 1550, 750);
  
  //penguin locations
   image (P1, 1090, 600, 95, 180);
  image (P2, 980, 500, 100, 200);
 
  //snowman location
  image (snowman, 400, 498, 250, 310 )

  //  //set shooting star to random location
  // //https://p5js.org/tutorials/variables-and-change/
  // circleXone = random(0, windowWidth);
  // circleYone = random(0, windowHeight); 
  
  
  // //snowflake cursor
  // if (mouseIsPressed === true) {
  //   cursor('img3/Snowflake.png', 8, 8);
  // } else {
  //   cursor('img3/Snowflake.png');
  // }
  //rainbow mouse cursor
  if (mouseIsPressed === true) {
    cursor('img3/Snowflake.png', 8, 8);
  } else {
    cursor('img3/Snowflake.png');
  
}
   //mouse trail
 var array_pos = (frameCount /'.5') % num; 
  mx[array_pos] = mouseX; 
  my[array_pos] = mouseY; 


  for (var i = 0; i < num; i++) {
    var index = (array_pos + 1 + i) % num; 
    image(S, mx[index], my[index], i, i); 
  }
}