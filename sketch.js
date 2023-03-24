var xoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);

  stroke(255);
  strokeWeight(8);
  point(windowWidth/2, 0);
  point(windowWidth/4, windowHeight/5);
  point(0, windowHeight/2);
  point(windowWidth/4, windowHeight*0.75);
  point(windowWidth/2, windowHeight);
  point(windowWidth, windowHeight/2);
}

// function draw() {
//   noErase();
//   noFill();
  
//   frameRate(2);

//   stroke(255);
//   strokeWeight(0.1);
  
  

//   beginShape();
//     // curveVertex(windowWidth/2, 0);
//     // curveVertex(windowWidth/2, 0);

//     // curveVertex(00, windowHeight/2);

//     // curveVertex(50, windowHeight/2);

//     // curveVertex(windowWidth/2, windowHeight);

//     // curveVertex(windowWidth, windowHeight/2);

//     // curveVertex(windowWidth/2, 0);
//     // curveVertex(windowWidth/2, 0);
//   endShape();

//   // fill(255, 0, 0);
//   // circle(mouseX, mouseY, 100);
// }
