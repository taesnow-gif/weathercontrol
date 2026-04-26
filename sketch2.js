let ratio;
let btn;
let prevbtn;

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
let M;
var speed = 70;
//this is the mouse trail variables
var num = 30;
var mx = [];
var my = [];
let star;
let L;
//let butterflies = [];
let img;



//grass image
function preload() {
  G1 = loadImage("img1/Grass.png");
  S = loadImage("img1/Sun.png");
  C = loadImage("img1/Cloud.png");
  C2 = loadImage("img1/Cloud2.png");
  C3 = loadImage("img1/Cloud3.png");
  F1 = loadImage("img1/Flower1.png");
  F2 = loadImage("img1/Flower2.png");
  R = loadImage("img1/Rainbow.png");
  // L = loadImage ("img2/Leaf.png");
  E1 = loadImage("img1/Face1.png");
  E2 = loadImage("img1/Face2.png");
  E3 = loadImage("img1/Face3.png");
  M = loadImage("img1/Moon.png");
  star = loadImage("img1/Star.png");
  L = loadImage("img1/Lego1.png");
  img = loadImage("img1/butter2.png");
}
function setup() {

   const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  createCanvas(windowWidth, windowHeight);

  //   //code to the next page of the site
  btn = createButton("Next ➜");

  btn.style("background", "#ecdc50");
  btn.style("font-family", "Schoolbell");
  btn.style("font-size", "20px");
  btn.style("padding", "10px 18px");
  btn.style("border", "none");
  btn.style("border-radius", "25px");
  btn.style("font-weight", "bold");
  btn.style("box-shadow", "2px 4px 0px #be971c");
  btn.style("border", "2px solid #333");
  btn.style("cursor", "pointer");

  nextButton();

  prevbtn = createButton("⬅ Previous");
 
  prevbtn.style("background", "#ecdc50");
  prevbtn.style("font-family", "Schoolbell");
  prevbtn.style("font-size", "20px");
  prevbtn.style("padding", "10px 18px");
  prevbtn.style("border", "none");
  prevbtn.style("border-radius", "25px");
  prevbtn.style("font-weight", "bold");
  prevbtn.style("box-shadow", "2px 4px 0px #be971c");
  prevbtn.style("border", "2px solid #333");
  prevbtn.style("cursor", "pointer");

 previousButton();

  //part of butterfly function to follow the cursor
  x = width / 2;
  y = height / 2;

}

function draw() {
  background("#23d2fd");
  frameRate(60);

sun();
moon();
grass ();
flower ();
lego ();
clouds();

 
  // //flowers location
  // image(F1, 750, 615, 250, 248);
  // image(F2, 450, 680, 150, 148);
  // image(F2, 1200, 680, 150, 148);

  // //face click location
  // image(E1, 910, 700, 60, 60);
  // image(E2, 877, 630, 58, 58);
  // image(E3, 770, 733, 50, 50);

  // if (mouseIsPressed) {
  //   image(E1, E2, E3);
  // } else {
  //   image(F1, 750, 615, 250, 248);
  // }
 

    //butterfly follow cursor
  x += (mouseX - x) * 0.02;
  y += (mouseY - y) * 0.02;


  image(img, x, y, 90, 60);

  //Lego character
  //image(L, 200, 550, 200, 300);

  
  //rainbow mouse cursor
  if (mouseIsPressed === true) {
    cursor("img1/Rainbow.png", 8, 8);
  } else {
    cursor("img1/Rainbow.png");
  }
  //mouse trail for rainbow cursor
  var array_pos = (frameCount / ".5") % num;
  mx[array_pos] = mouseX;
  my[array_pos] = mouseY;

  for (var i = 0; i < num; i++) {
    var index = (array_pos + 1 + i) % num;
    image(R, mx[index], my[index], i, i);
  }
}

function previousButton() {
 prevbtn.position(width/25 * ratio, height/1.02 * ratio);

  prevbtn.mousePressed(() => {
    window.location.href = "index.html";
  });
}

function nextButton() {
  btn.position(width/1.01 * ratio, height/1.02 * ratio);

    btn.mousePressed(() => {
    window.location.href = "page3.html";
  });

}

function sun() {
  //sun location
  image(S, 40 * ratio, 40 * ratio, 250 * ratio, 250 * ratio);
}

function moon() {
    //hover function for the moon to appear when hovering over the sun
  if (mouseX <= 240 * ratio && mouseX >= 40 * ratio && mouseY <= 240 * ratio && mouseY >= 40 * ratio ) {
    background("#142e93");
    image(M, 70 * ratio, 70 * ratio, 170 * ratio, 170 * ratio);
    image(star, 500 * ratio, 141 * ratio, 50 * ratio, 50 * ratio);
    image(star, 884 * ratio, 136 * ratio, 50 * ratio, 50 * ratio);
    image(star, 594 * ratio, 250 * ratio, 70 * ratio, 70 * ratio);
    image(star, 1135 * ratio, 158 * ratio, 70 * ratio, 70 * ratio);
    image(star, 966 * ratio, 288 * ratio, 30 * ratio, 30 * ratio);
    image(star, 288 * ratio, 271 * ratio, 30 * ratio, 30 * ratio);
    image(star, 1374 * ratio, 286 * ratio, 50 * ratio, 50 * ratio);
  }
}
function grass() {
  //location for the grass
  image(G1, 2000 * ratio, 830 * ratio, 800 * ratio, 200 * ratio); 
image(G1, 1422 * ratio, 830 * ratio, 800 * ratio, 200 * ratio);
  image(G1, 700 * ratio, 830 * ratio, 800 * ratio, 200 * ratio);
  image(G1, 0 * ratio, 830 * ratio, 800 * ratio, 200 * ratio);


}

function flower () {
  //flowers location
  image(F1, 880 * ratio, 745 * ratio, 250 * ratio, 248 * ratio);
  image(F2, 600 * ratio, 815 * ratio, 150 * ratio, 148 * ratio);
  image(F2, 1300 * ratio, 815 * ratio, 150 * ratio, 148 * ratio);


    //face click location
  image(E1, 1040 * ratio, 830 * ratio, 60 * ratio, 60 * ratio);
  image(E2, 1008 * ratio, 760 * ratio, 58 * ratio, 58 * ratio);
  image(E3, 900 * ratio, 868 * ratio, 50 * ratio, 50 * ratio);
  
  if (mouseIsPressed) {
    image(E1, E2, E3);
  } else {
    image(F1, 880 * ratio, 745 * ratio, 250 * ratio, 248 * ratio);


  }
}

function lego () {
  //lego character location
  image(L, 350 * ratio, 650 * ratio, 200 * ratio, 300 * ratio);
}

function clouds () {
  //lines 138-158 is the coding for the cloud animation
  //here is to help place the speed of the clouds
  cloudX = cloudX + 2;
  cloud2X = cloud2X + 1;
  cloud3X = cloud3X + 3;

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

  //cloud location
  image(C, cloudX, 30, 300, 150);
  image(C2, cloud2X, 150, 300, 150);
  image(C3, cloud3X, 160, 200, 100);

}

function windowResized() {
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  createCanvas(windowWidth, windowHeight);

  nextButton();
  previousButton();
  sun();
   moon();
grass ();
flower ();
lego ();
clouds ();
}
