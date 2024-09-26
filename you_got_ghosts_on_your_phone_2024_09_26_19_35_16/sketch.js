function setup() {
  createCanvas(600, 400);
}
//defining how spooky is that screen/
 let screen={
   x:40,
   y:20,
   w:500,
   h:300,
   fill: 'rgb(49,44,44)'
 }
 
function draw() {
  //drawing the background/
  background('#2C3330');
  //removing strokes because I hate them/
  noStroke();
  //a table I guess/
  push();
  fill('#22251E'),
    rect(0, 310, 600, 90)
  pop();
  //the computer body/
  push();
  fill('black'),
  rect(30, 10, 520),
  triangle(30,325,0,400, 30, 400)
  triangle(550,325,600,400, 550, 400)
  pop();
  //the computer screen/
  push();
  fill(screen.fill);
  rect(screen.x, screen.y, screen.w, screen.h)
  pop();
}