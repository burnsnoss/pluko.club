
let sizeX = 500;
let sizeY = 1000;

let deg = 0;
let rotateSpeed = 1;


function mouseClicked() {
	console.log(mouseX + ' ' + mouseY);
	rotateSpeed = map(mouseX, 0, width, -10, 10);
}

function setup() {
	createCanvas(sizeX, sizeY, WEBGL);
	fill(255);
	stroke(255);
	strokeWeight(4);
	angleMode(DEGREES);
	background(0);
	//translate(width/2, height/2);
	noFill();
}

function draw() {
	background(0);
	rotateY(deg);
	// outer triangle
	beginShape(TRIANGLES);
	vertex(-185, -166);
	vertex(185, -166);
	vertex(0, 110);
	vertex(-185, -166);
	endShape();
	// line from top left to bottom right
	beginShape();
	vertex(-184, -165);
	vertex(70, 0);
	endShape();
	// smallest line
	beginShape();
	vertex(-15, -56);
	vertex(55, -165);
	endShape();
	deg += rotateSpeed;
	stroke(generateRandomColor());
}