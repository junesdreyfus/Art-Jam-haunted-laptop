function setup() {
  createCanvas(600, 400);
  //removing cursor/
  noCursor();
 
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
  
//third time's the charm/
  //defining the mouse/
  //in such way that it doesn't pierce through the screen/
  let x1= constrain (mouseX, screen.x, 515);
  let y1= constrain (mouseY, screen.y, 290);
  
  let x2= constrain (mouseX, screen.x, 515);
  let y2= constrain (mouseY+30, screen.y+30, 320 );
  
  let x3= constrain (mouseX+25, screen.x+25, screen.w+40);
  let y3= constrain (mouseY+20, screen.y+20, 310 );
  
  
  //a table/
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
  
  //the mouse/
  push();
  fill('rgb(231,231,249)');
  triangle(x1,y1, x2,y2,x3,y3);
  pop(); 
}