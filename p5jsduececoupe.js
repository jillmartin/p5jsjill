

function setup() {
  createCanvas(800, 400);
  background('#2B65EC');
}
function draw() {
//road
  fill('#34282C'); //road color
  rect(0, 300, 800, 100); //road

  fill('#FCDB32');
  ellipse(75, 100, 75, 75);

//trailer tires
  fill('#34282C'); //tire color
  ellipse(200, 280, 40, 40); //left tire
  ellipse(350, 280, 40, 40); //right tire
  fill('#FFFFFF')
  ellipse(200, 280, 15, 15); //left tire center
  ellipse(350, 280, 15, 15); //right tire center

//trailer
  fill('#E5E4E2'); //trailer color
  rect(150, 150, 250, 50, 50, 50, 0, 0); //trailer body top
  rect(150, 200, 250, 80); //trailer body bottom
  fill('#FFFFFF');
  rect(200, 160, 50, 50, 10);
  rect(300, 160, 50, 50, 10);
//truck
  fill('#F78825');
  rect(450, 200, 200, 80); //truck body
  rect(550, 155, 100, 60, 15, 25, 0, 0); //truck driver cab
  fill('#000000')
  line(400,270,450,260);
  ellipse(450, 260, 15, 15);

//truck window
  fill('#FFFFFF');
  arc(650, 175, 80, 80, HALF_PI, PI);

//truck tires
  fill('#34282C'); //tire color
  ellipse(500, 275, 50, 50); //left tire
  ellipse(600, 275, 50, 50); //right tire
  fill('#FFFFFF')
  ellipse(500, 275, 25, 25); //left tire center
  ellipse(600, 275, 25, 25); //right tire center

}
