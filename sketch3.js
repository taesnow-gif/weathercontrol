let G;
let C1;
let lineXone = 0;
let lineYone = 0;
let L;
let l;
let B;
let showB = false;
let U;
let C;
let F;
let frogY1 = 752;
let frogY2 = 700;
let frogY3 = 500;
let frogSpeed1 = 3;
let frogSpeed2 = 3;
let frogSpeed3 = 2;
let cheerful = false;
let r = 255;
let g = 255;
let b = 255;
//this is the mouse trail variables
var num = 40;
var mx = []; 
var my = []; 


function preload () {
  G = loadImage("img2/Wetfloor.png");
  C1 = loadImage("img2/Cloud1.png");
  L = loadImage ("img2/Leaf.png");
  B = loadImage ("img2/Lighting.PNG");
  l = loadImage ("img2/Lego2.png");
  U = loadImage ("img2/Umbrella.png");
  C = loadImage ("img2/Cheerful.png");
  F = loadImage ("img2/frog.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

//code for the next page
  let btn = createButton('Next ➜');
  btn.position(1380, 730);
  btn.style ('background', '#aa81f3');
  btn.style('font-family', 'Schoolbell');
  btn.style ('font-size', '20px');
  btn.style('padding', '10px 18px');
  btn.style ('border', 'none');
  btn.style('border-radius', '25px');
  btn.style ('font-weight', 'bold');
  btn.style('box-shadow', '2px 4px 0px #591be0');
  btn.style('border', '2px solid #333');
  btn.style('cursor', 'pointer');
  btn.mousePressed(() => {
    window.location.href = 'page4.html';
  });
  
  let prevbtn = createButton ('⬅ Previous');
  prevbtn.position (40, 730);
   prevbtn.style ('background', '#aa81f3');
  prevbtn.style('font-family', 'Schoolbell');
  prevbtn.style ('font-size', '20px');
  prevbtn.style('padding', '10px 18px');
  prevbtn.style ('border', 'none');
  prevbtn.style('border-radius', '25px');
  prevbtn.style ('font-weight', 'bold');
  prevbtn.style('box-shadow', '2px 4px 0px #591be0');
  prevbtn.style('border', '2px solid #333');
  prevbtn.style('cursor', 'pointer');
  prevbtn.mousePressed (() => {
    window.location.href = 'page2.html';
  });
}
function draw() {
  background('#425c84');
  
 //line of code for the rain animation in the background 
  stroke("#95a8c5");
  strokeWeight(4);
  line(lineXone, lineYone, lineXone + 30, lineYone - 30);

  //set shooting star to random location
  //https://p5js.org/tutorials/variables-and-change/
  lineXone = random(0, windowWidth);
  lineYone = random(0, windowHeight); 
  
  //wetfloor at the bottom of the screen
  image (G, 1400, 800, 700, 100);
  image (G, 700, 800, 700, 100);
    image (G, 0, 800, 700, 100);
  
  
    //hover function for the lighting bolt to appear
  if (mouseX > 390 && mouseX < 1030 &&
    mouseY > 70 && mouseY < 300) {
      image (B, 390, 150, 600, 600); 
    }
  
  //for the thunderclouds in the sky
  image (C1, -300, -150, 2000, 500);
  
  //Lego character location
  image (l, 960, 550, 200, 300);

  //if statement for the cheerful image, currently turned off but when mousepressed on Umbrella it will activate the cheerful image on
if (cheerful) {
  image (C, 960, 550, 200, 300);
  }

  //umbrella location
 tint(r, g, b);
  image (U, 857, 360, 300, 300);
  noTint();

  //adding a bounce function to setup for the froggies to jump
  bounce ();
  //frog image location
  image (F, 350, frogY1, 80, 80);
   image (F, 200, frogY2, 80, 80);
    image (F, 500, frogY2, 80, 80);
  
  
  
  //leaf mouse cursor
  if (mouseIsPressed === true) {
    cursor('img2/Leaf.png', 8, 8);
  } else {
    cursor('img2/Leaf.png');
  
}
 //mouse trail
 var array_pos = (frameCount /'.5') % num; 
  mx[array_pos] = mouseX; 
  my[array_pos] = mouseY; 

  for (var i = 0; i < num; i++) {
    var index = (array_pos + 1 + i) % num; 
    image(L, mx[index], my[index], i, i); 
  }

  //take out before submitting
// textSize(24);
//   text("X: "+mouseX, 0, height/4);
//   text("Y: "+mouseY, 0, height/2);

  
}

// When the user clicks the mouse on the umbrella it will throw a random color also while the lego character changes its facial expression to happy
function mousePressed() {
  
  if (mouseX > 857 && mouseX < 857 + 300 && mouseY > 360 && mouseY < 360 + 300) {
    r = random(255);
    g = random(255);
    b = random(255);

     cheerful = true;

  
  }  

}


//bounce function to have the frogs jump up and down lol
//https://editor.p5js.org/carriehott/sketches/3fIbayWzS 
function bounce() {
  if (frogY1 > 752) {
    frogSpeed1 = -3; 
  }
  if (frogY1 < 702) {
    frogSpeed1 = 3;
  }
  frogY1 += frogSpeed1;

  if (frogY2 > 752) {
    frogSpeed2 = -3; 
  }
  if (frogY2 < 702) {
    frogSpeed2 = 3;
  }
  frogY2 += frogSpeed2;

  if (frogY3 > 752) {
    frogSpeed3 = -2; 
  }
  if (frogY3 < 702) {
    frogSpeed3 = 2;
  }
  frogY3 += frogSpeed3;
}

