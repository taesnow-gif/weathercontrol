let G;
let P1;
let S;
let P2;
let L;
let circleXone = 0;
let circleYone = 0;
let speed = -100;
let snowman;
let H;
let LH;
let H2;
let img;
let img2;
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
 L = loadImage ("img3/Lego3.png");
 H = loadImage ("img3/Hat.png");
 LH = loadImage ("img3/LegoHat.png");
 H2 = loadImage ("img3/Hat2.png");
 img = loadImage ("img3/Happy.png");
 img2 = loadImage ("img3/Question.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

   circleXone = random(width);
  circleYone = random(height);

//code for the next page
  let btn = createButton('Next ➜');
  btn.position(1380, 730);
  btn.style ('background', '#8cc4de');
  btn.style('font-family', 'Schoolbell');
  btn.style ('font-size', '20px');
  btn.style('padding', '10px 18px');
  btn.style ('border', 'none');
  btn.style('border-radius', '25px');
  btn.style ('font-weight', 'bold');
  btn.style('box-shadow', '2px 4px 0px #0b8ad0');
  btn.style('border', '2px solid #333');
  btn.style('cursor', 'pointer');
  btn.mousePressed(() => {
    window.location.href = 'index.html';
  });
  
  let prevbtn = createButton ('⬅ Previous');
  prevbtn.position (40, 730);
   prevbtn.style ('background', '#8cc4de');
  prevbtn.style('font-family', 'Schoolbell');
  prevbtn.style ('font-size', '20px');
  prevbtn.style('padding', '10px 18px');
  prevbtn.style ('border', 'none');
  prevbtn.style('border-radius', '25px');
  prevbtn.style ('font-weight', 'bold');
  prevbtn.style('box-shadow', '2px 4px 0px #0b8ad0');
  prevbtn.style('border', '2px solid #333');
  prevbtn.style('cursor', 'pointer');
  prevbtn.mousePressed (() => {
    window.location.href = 'page3.html';
  });
}

function draw() {
  background('#4fa9db');

  
//part of the code for the snowfall animation
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
  
  //snowman location
  image (snowman, 400, 498, 250, 310);

  //  //set shooting star to random location
  // //https://p5js.org/tutorials/variables-and-change/
  // circleXone = random(0, windowWidth);
  // circleYone = random(0, windowHeight); 
  
  
  
  //rainbow mouse cursor
  if (mouseIsPressed === true) {
    cursor('img3/Snowflake.png', 8, 8);
  } else {
    cursor('img3/Snowflake.png');
  
}
   //mouse trail fdor the snowflake cursor
 var array_pos = (frameCount /'.5') % num; 
  mx[array_pos] = mouseX; 
  my[array_pos] = mouseY; 

  for (var i = 0; i < num; i++) {
    var index = (array_pos + 1 + i) % num; 
    image(S, mx[index], my[index], i, i); 
  }

  //mousepressed for when you click on the lego character holding the hat
if (mouseIsPressed === true) {
  image (LH, 200, 400, 300, 300);
  image (H, 480, 420, 100, 100);
} else {
  image (L, 197, 400, 280, 300);
  image (H, 463, 390, 100, 100);
}

//hover function over penguin 1&2 
if (mouseX < 1390 && mouseX > 1090 && mouseY < 700 && mouseY > 600) {
  image (img, 1350, 546, 300, 400);
} else {
   image (P1, 1090, 600, 95, 180);
}
if (mouseX < 1080 && mouseX > 870 && mouseY < 700 && mouseY > 500) {
  image (img2, 808, 700, 300, 400);
} else {
  image (P2, 870, 500, 100, 200);
}

 //take out before submitting
  //  textSize(24);
  // text("X: "+mouseX, 0, height/4);
  // text("Y: "+mouseY, 0, height/2);


}


