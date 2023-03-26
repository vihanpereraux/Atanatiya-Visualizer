var xoff = 0;
var randomAngle;
var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);

  angleMode(DEGREES);
  randomAngle = random(1, 90);
  d = random(100, 120);

  stroke(255);
  strokeWeight(8);
  createPoints(windowWidth, windowHeight, d);

  // noFill();
  // strokeWeight(.5);
  // createShape(windowWidth, windowHeight, d);
}

function draw() {
  frameRate(20);

  randomAngle = random(1, 90);
  d = random(100, 120);

  noFill();
  strokeWeight(.1);
  stroke(150);
  createShape(windowWidth, windowHeight, d);
}

function createPoints(width, height, d){
  point(width*.45, height*.15);

  point(width/4 + d*cos(randomAngle), windowHeight/5 - d*sin(randomAngle));

  point(width/4, height/5);

  point(width*.3, height*.4);

  point(width/4 - d*cos(randomAngle), height*0.75 - d*sin(randomAngle));

  point(width/4, height*0.75);

  point(width*.4, height*.95);

  point(width*.57 - (d/2)*cos(randomAngle), height*0.75 + (d/2)*sin(randomAngle));

  point(width*.65, height*.75);

  point(width*.6, height/2);

  point(width*.65, height*.3);

  point(width*.57 - (d/2)*cos(randomAngle), height*.3 - d*sin(randomAngle));
}

function createShape(width, height, d){
  beginShape();
    curveVertex(width*.45, height*.15);
    curveVertex(width*.45, height*.15);

    curveVertex(width/4 + d*cos(randomAngle), height/5 - d*sin(randomAngle));

    curveVertex(width/4, height/5);

    curveVertex(width*.3, height*.4);

    curveVertex(width/4 - d*cos(randomAngle), height*0.75 - d*sin(randomAngle));

    curveVertex(width/4, height*0.75);

    curveVertex(width*.4, height*.95);

    curveVertex(width*.57 - (d/2)*cos(randomAngle), height*0.75 + (d/2)*sin(randomAngle));

    curveVertex(width*.65, height*.75);

    curveVertex(width*.6, height/2);

    curveVertex(width*.65, height*.3);

    curveVertex(width*.57 - (d/2)*cos(randomAngle), height*.3 - d*sin(randomAngle));

    curveVertex(width*.45, height*.15);
    curveVertex(width*.45, height*.15);
  endShape();
}
