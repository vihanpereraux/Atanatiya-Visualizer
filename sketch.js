var xoff = 0;
var randomAngle;
var d;
var de;
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
  translate(width/2, height/2);
  randomAngle = random(1, 90);

   // reference cartesian plane
   strokeWeight(.5);
   stroke(0, 255, 0);
   line(-width, 0 , width, 0);
   line(0, -height , 0, height);

  stroke(255);
  strokeWeight(8);
  // createPoints(windowWidth, windowHeight, d);
  createPoints2(width, height);

  noFill();
  strokeWeight(.5);
  // createShape(windowWidth, windowHeight, d);
  // beginShape();
  // createShape2(width, height);
  // endShape();
}

function draw() {
  console.log(touch);
  frameRate(10);
  translate(width/2, height/2);
  rotate(random(0, touch*100))

  de = random(touchUp*100);
  noFill();
  strokeWeight(.1);
  stroke(255);
  beginShape();
    createShape2(width, height, de);
  endShape();

  beginShape();
    createShape2(-width, -height, de);
  endShape();
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

function createPoints2(width, height){
  point(0, -(height/2)*.85);
  point((width/2)*.75, -(height/2)*.55);
  point((width/2)*.65, -(height/2)*.25);
  point((width/2)*.40, -(height/2)*.05);
  point((width/2)*.15, (height/2)*.15);
  point((width/2)*.50, (height/2)*.35);
  point(0, (height/2)*.85);
  point(-(width/2)*.4, (height/2)*.5);
  point(-(width/2)*.65, (height/2)*.55);
  point(-(width/2)*.8, (height/2)*.05);
  point(-(width/2)*.95, -(height/2)*.15);
  point(-(width/2)*.85, -(height/2)*.45);
  point(-(width/2)*.55, -(height/2)*.75);
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

function createShape2(width, height, de){
  curveVertex(0, -(height/2)*.85 + de);
  curveVertex(0, -(height/2)*.85 + de);

  curveVertex((width/2)*.75 + de, -(height/2)*.55 + de);
  curveVertex((width/2)*.65 + de, -(height/2)*.25 + de);
  curveVertex((width/2)*.40 + de, -(height/2)*.05 + de);

  // curveVertex(mouseX*.5, mouseY*.5);

  curveVertex((width/2)*.15 + de, (height/2)*.15) + de;
  curveVertex((width/2)*.50 + de, (height/2)*.35) + de;
  curveVertex(0 + de, (height/2)*.85) + de;
  
  // curveVertex(touch*100, touchUp*100);

  curveVertex(-(width/2)*.4 + de, (height/2)*.5); + de
  curveVertex(-(width/2)*.65 + de, (height/2)*.55) + de;
  curveVertex(-(width/2)*.8 + de, (height/2)*.05) + de;
  
  // curveVertex(mouseX, -mouseY);

  curveVertex(-(width/2)*.95 + de, -(height/2)*.15 + de);
  curveVertex(-(width/2)*.85 + de, -(height/2)*.45 + de);
  curveVertex(-(width/2)*.55 + de, -(height/2)*.75 + de);

  curveVertex(0, -(height/2)*.85 + de);
  curveVertex(0, -(height/2)*.85 + de);
}
