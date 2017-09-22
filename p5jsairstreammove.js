
var x = 0;  // x move full trailer

function setup() {
  canvas = createCanvas(800, 400);
  background('#2B65EC');
  x = -600;

}

function draw() {
 background('#2B65EC');

 fill('#34282C'); //road color
 rect(0, 300, 800, 100); //road

 fill('#FCDB32');
 ellipse(75, 100, 75, 75);
 //trailer tires
 fill('#34282C'); //tire color
 ellipse(x + 200, 280, 40, 40); //left tire
 ellipse(x + 350, 280, 40, 40); //right tire
 fill('#FFFFFF')
 ellipse(x + 200, 280, 15, 15); //left tire center
 ellipse(x + 350, 280, 15, 15); //right tire center
 //trailer
 fill('#E5E4E2'); //trailer color
 rect(x + 150, 150, 250, 50, 50, 50, 0, 0); //trailer body top
 rect(x + 150, 200, 250, 80); //trailer body bottom
 fill('#FFFFFF');
 rect(x + 200, 160, 50, 50, 10);
 rect(x + 300, 160, 50, 50, 10);
 //truck
 fill('#F78825');
 rect(x + 450, 200, 200, 80); //truck body
 rect(x + 550, 155, 100, 60, 15, 25, 0, 0); //truck driver cab
 fill('#000000')
 line(x + 400,270,x + 450,260);
 ellipse(x + 450, 260, 15, 15);
 //truck window
 fill('#FFFFFF');
 arc(x + 650, 175, 80, 80, HALF_PI, PI);
 //truck tires
 fill('#34282C'); //tire color
 ellipse(x + 500, 275, 50, 50); //left tire
 ellipse(x + 600, 275, 50, 50); //right tire
 fill('#FFFFFF')
 ellipse(x + 500, 275, 25, 25); //left tire center
 ellipse(x + 600, 275, 25, 25); //right tire center

 x = x + 3;
 if (x > 800){
   x = -600;
 }
}











  /*x = x + 1;
  y = y;
  if (y < 0) {
    y = height;
  } */


// Jitter class
/*function Jitter() {
 this.x = random(width);
 this.y = random(height);
 this.diameter = random(10, 30);
 this.speed = 10;

 this.move = function() {
   this.x += random(-this.speed, this.speed);
   this.y += random(-this.speed, this.speed);
 };

 this.display = function() {
   ellipse(this.x, this.y, this.diameter, this.diameter);
 }
};
*/

/*function setup() {
  createCanvas(800, 400);
  background('#2B65EC');
}

function draw() {

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

*/

//play with clicking on sun to have cloud move across screen
//new p5.Element(doubleClicked);
//cnv.doubleClicked(changeGray);
