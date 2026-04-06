let G;
let P1;
let S;
let P2;

function preload() {
  G = loadImage ("img3/Landscape.png");
  P1 = loadImage ("img3/Penguin1.png");
 // P2 = loadImage ("Penguin2.png");
 S = loadImage ("img3/Snowflake.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#4fa9db');
  
 //image of the snowy landscape 
  image (G, -5, 150, 1550, 750);
  
  //penguin locations
   image (P1, 1090, 600, 95, 180);
  image (P2, 980, 500, 100, 200);
 
  
  
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
  
}