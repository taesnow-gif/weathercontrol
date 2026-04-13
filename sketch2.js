let G1;
let F1;
let F2;
let S; 
let R;
let sunX = 700;
let C;
let C2, C3;
let cloudX = -150;
let cloud2X = -250; 
let cloud3X = -100;
let E1; 
let E2;
let E3;
var speed = 70;
 
//grass image
  function preload() {
    G1 = loadImage ("img1/Grass.png");
    S = loadImage ("img1/Sun.png");
    C = loadImage ("img1/Cloud.png");
   C2 = loadImage ("img1/Cloud2.png");
   C3 = loadImage ('img1/Cloud3.png');
    F1 = loadImage ("img1/Flower1.png");
    F2 = loadImage ("img1/Flower2.png");
    //R = loadImage ("img1/Rainbow(2).png"); 
   // L = loadImage ("img2/Leaf.png");
    E1 = loadImage ("img1/Face1.png");
    E2 = loadImage ("img1/Face2.png");
    E3 = loadImage ("img1/Face3.png");
    
  }
function setup() {
  createCanvas(windowWidth, windowHeight);
  
 
  
}

function draw() {
  
 background('#23d2fd');
 frameRate(60);


  //x,y coordinates
  
  frameRate(12);
   textSize(24);
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);
  
  //grass location
  image (G1, 1422, 660, 800, 200);
  image (G1, 700, 660, 800, 200);
    image (G1, 0, 660, 800, 200);
  
  //flowers location
  image(F1, 750, 575, 250, 248);
  image (F2, 300, 670, 150, 148);
  image (F2, 1200, 670, 150, 148);

  //face click location
  image (E1,910, 663, 60, 60 )
  image (E2, 877, 588, 58, 58);
  image (E3, 770, 696, 50, 50);

  if (mouseIsPressed) {
    image(E1, E2, E3);
  } else {
   image(F1, 750, 575, 250, 248);
}
  
  //sun location
  image (S, 40, 40, 250, 250);
  
   cloudX = cloudX + 3;
  cloud2X = cloud2X + 2;
  cloud3X = cloud3X + 6;
  
  //lines 79-88 below reset the clouds to come from 300 or 200 pixels to the left of zero (well off screen) which gives the illusion of floating
    if (cloudX > windowWidth) {
       cloudX = -600;
    }
  
    if (cloud2X > windowWidth) {    
      cloud2X = -300;
    }
    if (cloud3X > windowWidth) {
      cloud3X = -200;
    }
  
 
 
  //cloud location + animation
  image (C, cloudX, 30, 300, 150); 
  image (C2, cloud2X, 150, 300, 150);
  image (C3, cloud3X, 160, 200, 100);


  
  
  //sun animation, will have to come back to figure out
// function mousePressed() {
 //   S.click();
 // }
  
//function clicked () {
//   let d = dist(mouseX, mouseY, 40, 40);
//   if (d < 100) {
  //   image(S, sunX, 250, 250);
  // }
// }
  //rainbow mouse cursor
  // if (mouseIsPressed === true) {
  //   cursor(R);
  // } else {
  //   cursor(R);
  // }

//rainbow mouse cursor
  // if (mouseIsPressed === true) {
  //   cursor('img1/Rainbow.png', 8, 8); 
  // } else {
  //   cursor('img1/Rainbow.png');
  
}
//}
