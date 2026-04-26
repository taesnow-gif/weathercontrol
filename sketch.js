let ratio;
let btn;

let C;
let C2, C3;
let cloudX = -150;
let cloud2X = -250;
let cloud3X = -100;
let B;
let L;
//this is the mouse trail variables
var num = 40;
var mx = [];
var my = [];

function preload() {
  C = loadImage("img1/Cloud.png");
  C2 = loadImage("img1/Cloud2.png");
  C3 = loadImage("img1/Cloud3.png");
  B = loadImage("img4/titlebox.png");
  L = loadImage("img4/glasses.png");
}

function setup() {
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  createCanvas(windowWidth, windowHeight);

  noCursor();

  btn = createButton("click to play");
  btn.style("background", "#31cf23");
  btn.style("font-family", "Schoolbell");
  btn.style("font-size", "32px");
  btn.style("padding", "18px 32px");
  btn.style("border", "none");
  btn.style("border-radius", "40px");
  btn.style("font-weight", "bold");
  btn.style("box-shadow", "4px 6px 0px #1d7e43");
  btn.style("border", "2px solid #333");
  btn.style("cursor", "pointer");

  nextButton();

  // btn.mousePressed(() => {
  //   window.location.href = "page2.html";
  // });
  // positionButton();
}

function draw() {
  background("#78b6df");

  //lines 138-158 is the coding for the cloud animation
  //here is to help place the speed of the clouds
  cloudX = cloudX + 2;
  cloud2X = cloud2X + 1;
  cloud3X = cloud3X + 2;

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
  image(C2, cloud2X, 400, 300, 150);
  image(C3, cloud3X, 450, 200, 100);

  // fill("#d48611");
  // rect(-100 * ratio, 100 * ratio, 3000 * ratio, 400 * ratio);
  //   noStroke();
  image(B, -640, 100, 2800, 330);

  //   fill("#78b6df");
  // rect(200 * ratio, 120 * ratio, 1350 * ratio, 350 * ratio);
  //   noStroke();

  fill("#e1a65e");
  rect(220 * ratio, 150 * ratio, 1300 * ratio, 300 * ratio);
  noStroke();

  // circle(height/2, width/2, 100, 100);
  textAlign(CENTER);
  fill("white");
  textFont("Schoolbell");
  textSize(150);
  text("Weather Play", 750, 270);

  image(L, 600, 325, 300, 380);

  //custom cursor
  textSize(30);
  textAlign(CENTER, CENTER);
  //text("🦋", mouseX, mouseY);

  //mouse trail
  var array_pos = (frameCount / ".5") % num;
  mx[array_pos] = mouseX;
  my[array_pos] = mouseY;

  for (var i = 0; i < num; i++) {
    var index = (array_pos + 1 + i) % num;
    text("🦋", mx[index], my[index], i, i);
  }
}

function nextButton() {
  btn.position((width / 2.05) * ratio, (height / 1.07) * ratio);

  btn.mousePressed(() => {
    window.location.href = "page2.html";
  });
}

function windowResized() {
  const design_w = 1440;
  const design_h = 1024;
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  createCanvas(windowWidth, windowHeight);
  nextButton();
}
