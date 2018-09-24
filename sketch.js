function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	//strokeWeight(2);
	//stroke(170);
	//noStroke();
}

function draw() {
	background(255, 243, 192);

  //shadow
	fill(80, 80, 80, 40);
	ellipse(250, 460, 210, 30);
	fill(80, 80, 80, 40);
	ellipse(250, 460, 180, 15);

	//Body
	fill(255, 192, 43);
	rect(180, 280, 140, 140, 10);

	//stuff
	fill(160);
	rect(210, 305, 80, 50, 3);

	fill(0);
	rect(215, 310, 30, 40, 3);

	strokeWeight(1.5);
	stroke(235, 255, 43);
	ellipse(222, 316, 5);
	stroke(107, 255, 43);
	line(220, 325, 230, 325);
	stroke(192, 255, 43);
	line(220, 330, 239, 330);
	stroke(255, 213, 43);
	line(220, 335, 239, 335);
	stroke(255, 149, 43);
	line(220, 340, 239, 340);
	stroke(255, 78, 43);
	line(220, 345, 239, 345);
	noStroke();

  fill(256, 80, 0);
  ellipse(270, 320, 10);
	fill(256);
	ellipse(272, 318, 3);
	fill(256, 80, 0, 80);
  ellipse(270, 320, 20);


	//Neck
	fill(185, 122, 0);
	rect(225, 260, 50, 30, 5);

	fill(255, 192, 43);
	rect(235, 220, 30, 50, 5);


  //eyes stroke
	noFill();
	strokeWeight(12);
	stroke(80);

  triangle(235, 200, 235, 217, 215, 200);
  triangle(265, 200, 265, 217, 285, 200);
	ellipse(200, 230, 70, 60);
	ellipse(300, 230, 70, 60);


	//eyes
	noStroke();

  fill(256, 256, 256);
  triangle(235, 200, 235, 230, 200, 200);
	fill(256, 256, 256);
  triangle(265, 200, 265, 230, 300, 200);

	fill(256, 256, 256);
	ellipse(200, 230, 70, 60);
	fill(256, 256, 256);
	ellipse(300, 230, 70, 60);


  //moving eyes
	var x;
	var y;

	x = - mouseX / 1000;
	y = - mouseY / 1000;
	fill(30, 30, 30);
	ellipse(215, 226, x * 30 + 30, y * 30 + 30);

	fill(30, 30, 30);
	ellipse(285, 226, x * 30 + 30, y * 30 + 30);

	fill(256, 256, 256);
	ellipse(213, 222, x * 8 + 8, y * 8 + 8);

	fill(256, 256, 256);
	ellipse(287, 222, x * 8 + 8, y * 8 + 8);

  //wire
  strokeWeight(5);
	stroke(30);
	line(185, 310, mouseX, mouseY);
	noStroke();

  //hands
	fill(200);
  rect(170, 290, 30, 20, 5);
	rect(300, 290, 30, 20, 5);
	fill(100);
  rect(170, 310, 30, 20, 5);
  rect(300, 310, 30, 20, 5);

	//Wheels
	fill(100, 100, 100);
	rect(155, 370, 60, 90, 5);
	rect(285, 370, 60, 90, 5);

	strokeWeight(10);
  stroke(50);

  line(170, 385, 200, 385);
	line(165, 405, 205, 405);
	line(165, 425, 205, 425);
	line(170, 445, 200, 445);

	line(300, 385, 330, 385);
	line(295, 405, 335, 405);
	line(295, 425, 335, 425);
	line(300, 445, 330, 445);

	noStroke();

  //Eve
	fill(256);
	ellipse(mouseX, mouseY+10, 60, 80);
	fill(255, 243, 192);
  ellipse(mouseX, mouseY-35, 60, 55);
	fill(256);
	ellipse(mouseX, mouseY-40, 60, 55);
	fill(0);
	ellipse(mouseX, mouseY-37, 45, 35);
	fill(31, 184, 240);
	ellipse(mouseX - 8.5, mouseY-37, 15, 8);
	ellipse(mouseX + 8.5, mouseY-37, 15, 8);
}
