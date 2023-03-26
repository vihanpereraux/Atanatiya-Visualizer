var xoff = 0;
var randomAngle;
var d;
var customCanvas;
var touch;
var touchUp;

let touchX = 0;
let touchY = 0;

// Connect to our websocket server , this server was created when you typed `node index.js`
const ws = new WebSocket("ws://localhost:8080")

ws.onmessage = (event) => {
    const dataAsString = event.data;
    const dataAsObject = JSON.parse(dataAsString)
    const sensorData = dataAsObject.sensordata;
    // You might want to see how the data is recieved, uncomment this line
    // console.log(sensorData.touch[0].y)

    touch = sensorData.touch[0].x;
    touchUp = sensorData.touch[0].y;
    
    if(sensorData.touch.length > 0){
        const firstFingerTouch = sensorData.touch[0];
        // set the global variables touchX, touchY
        // firstFingerTouch.x goes from -1 to 1 (also the y), so we map it to out canvas coordinates
        touchX = map(firstFingerTouch.x, -1, 1, 0, 400);
        touchY = map(firstFingerTouch.y, -1, 1, 0, 400);
    }
}

function setup() {
  customCanvas = createCanvas(800, windowHeight);
  customCanvas.position((windowWidth - 800)/2)
  background(20);

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
  console.log(touch);
  frameRate(30);

  rotate(random(1,5));

  randomAngle = random(1, 90);
  d = random(100, 120);

  noFill();
  strokeWeight(.1);
  stroke(220);
  createShape(1200, windowHeight, d);
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

    curveVertex(touch*width, touchUp*height);

    curveVertex(width/4 - d*cos(randomAngle), height*0.75 - d*sin(randomAngle));

    curveVertex(width/4, height*0.75);

    curveVertex(width*.4, height*.9);

    curveVertex(width*.57 - (d/2)*cos(randomAngle)*random(-1, 1), height*0.75 + (d/2)*sin(randomAngle)*random(-1, 1));

    curveVertex(width*.65, height*.75);

    curveVertex(touch*width, touchUp*height);

    curveVertex(width*.65, height*.3);

    curveVertex(width*.57 - (d/2)*cos(randomAngle), height*.25);

    curveVertex(width*.45, height*.15);
    curveVertex(width*.45, height*.15);
  endShape();
}
