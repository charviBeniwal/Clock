function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  hr = hour();
  mn = minute();
  sc = second();

  translate(200, 200);
  rotate(-90);

  strokeWeight(7);
  stroke(255, 100, 100);
  noFill();

  scAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, scAngle);
  push();
  strokeWeight(3)
  rotate(scAngle);
  line(0, 0, 100, 0);
  pop();

  stroke(143, 80, 134);
  mnAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mnAngle);
  push();
  strokeWeight(6)
  rotate(mnAngle);
  line(0, 0, 85, 0);
  pop();

  
  stroke(181, 227, 152);
  hrAngle = map(hr, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hrAngle);
  push();
  strokeWeight(5)
  rotate(hrAngle);
  line(0, 0, 60, 0);
  pop();
  
  stroke(214, 214, 75);
  point(0,0);
  console.log(hr + ':' + mn + ':' + sc);



}