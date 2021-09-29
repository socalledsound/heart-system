let circleX;
let y;
let circleR;
let r, g ,b;

function setup() {
    createCanvas(400, 600);
    r = random(0, 255);
    g = random(0, 255);
    b = random(100, 255);
    circleX = random(0, 400);
    y = random(0, 600);
    background(0);
}


circleR = 40;




function mousePressed() {
    circleR = random(2, 40);
    g = random(150, 255);
    r = random (0, 255);
}

function draw() {

// circle
    circleX = random(0, 400)
    y = random(0,600)
    r = random(50, 51);
    g = random(0, 255);
    b = random(100, 255);
    noStroke();
    fill(r, g, b, 10);
    ellipse(circleX, y, circleR);
    circleR = circleR;
// eye space
    //fill(255, 200, 88, 100);
    //noStroke(50);
    //rect(50, 100, 225, 100, 100, 100);
// lines
    //stroke(0);
    //strokeWeight(5);
    //noFill();
    //arc(80, 50, 550, 850, 0, HALF_PI);
    //line(0, 50, 400, 50);
}

//function mousePressed() {
    background(100,250,220);