function setup() {
  createCanvas(1000,1000 );
}

function draw() {

  if (mouseIsPressed) {
    var red = random(255);
    var green = random(255);
    var blue = random(255);
    // fill(red,green,blue);
    fill(red,green,blue);
    stroke(255, 255, 255, 25);
  } else {

  }
  rect(mouseX, mouseY, 80, 80);
}
