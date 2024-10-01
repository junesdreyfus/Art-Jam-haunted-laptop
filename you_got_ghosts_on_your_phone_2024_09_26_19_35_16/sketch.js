
function setup() {
  createCanvas(600, 400);
  //removing cursor/
  noCursor();
  
  
  let state = "title";
}


//defining how spooky is that screen/
 let screen={
   x:40,
   y:20,
   w:500,
   h:300,
   r:49,
   g:44,
   b:44,
 }
 
 let creepyroom={
   r:49,
   g:44,
   b:44,
}
 
 
 
 let webcam={
   x:285,
   y:16,
   d:9,
   fill:30,
 }
 
 let ghost={
   x:screen.w/2,
   y:screen.h/2,
   w:40,
   h:100,
   r:49,
   g:44,
   b:44,
   
 }
 
 //spooky things happening when mouse is pressed/
function mousePressed() {
  //screen widens/
  screen.w +=5;
  screen.x -=2.5;
  screen.h +=5;
  screen.y-=1.5;
  //screen gets bluer/
  screen.b+=0.3
  creepyroom.g+=0.3
  creepyroom.b+=0.1
  
  if (creepyroom.b=45.5)
    {
  ghost.x+=2.3
  ghost.y+=1.8
  ghost.w+=1
  ghost.h+=1.5
  ghost.r-=0.4
  ghost.g-=0.4
  ghost.b-=0.4
    }
}

//when mouse moved, webcam blinks on/
//someone is watching//



function mouseMoved() {
  webcam.fill += 5;
  if (webcam.fill>200) {
    webcam.fill-=70;
  }
}
  //When mouse doesn't move/
  //the webcam led turns off/
  //or at least it's supposed to/
  
  //first version (not working//
  //if (mouseMoved === false){
  
  //webcam.fill-= 10;
  //} 
//second version (not working)
//function checkMouse(){
  //if(mouseMoved){
//     webcam.fill +=5;
//   }
//   else{
//     webcam.fill -5
//   }
// }

//might add third version with arrays//

// }

 

function draw() {
  
  //drawing the background/
  background('#2C3330');
  //removing strokes because I hate them/
  noStroke();
  

  
//third time's the charm/
  //defining the mouse/
  //in such way that it doesn't pierce through the screen/
  let x1= constrain (mouseX, screen.x, screen.x+screen.w-25);
  let y1= constrain (mouseY, screen.y, screen.y+screen.h-30);
  
  let x2= constrain (mouseX, screen.x, screen.x+screen.w-25);
  let y2= constrain (mouseY+30, screen.y+30, screen.y+screen.h );
  
  let x3= constrain (mouseX+25, screen.x+25, screen.w+40);
  let y3= constrain (mouseY+20, screen.y+20, screen.y+screen.h-10 );
  
  
  //a table/
  push();
  fill('#22251E'),
    rect(0, 310, 600, 90)
  pop();
  
  //the computer body/
  push();
  fill('black'),
  rect(30, 10, 520),
  quad(30,325,0,400, 600, 400, 550, 325)
  pop();
  
   

  //the computer screen/
  push();
  fill(screen.r,screen.g, screen.b);
  rect(screen.x, screen.y, screen.w, screen.h)
  pop();
 
  
  
  //mapping mouseX to a small variable/
  //as mouse moves right the room shimmers slightly//
  //wheeere am i going with this
let g= map(mouseX, screen.x, screen.x+screen.w, 1, 5);
  
  
  //drawing creepy room/
  push();
  fill (49,44,44);
  rect(screen.x,screen.y,screen.w, screen.h/1.5)
  pop();
  
  
  
  push();
  fill(creepyroom.r+g, creepyroom.g+g, creepyroom.b);
  //cursed cursed cursed equations/
  quad (screen.x, screen.y, screen.w/3, screen.h/3, screen.w/3, screen.h/1.5, screen.x, screen.y+screen.h)
  quad (screen.x+screen.w, screen.y, 2*screen.w/3, screen.h/3, 2*screen.w/3, screen.h/1.5, screen.x+screen.w, screen.y+screen.h)
  pop();
  
   //the webcam/
  push();
  fill(webcam.fill);
  circle(webcam.x, webcam.y, webcam.d)
  pop();
  
  
  //formats the ghastly message/
  textAlign(CENTER, CENTER);
  textSize(15);
  fill(255)
  textFont('Courier New');
  
  // Display a ghastly message./
  // keeping it in the corner of the screen when enlarged/
  text('Do you want to meet a ghost?_', screen.w+screen.x-140, screen.h+screen.y-10);
  
  //ghost/
  push();
  fill(ghost.r, ghost.g, ghost.b),
  ellipse(ghost.x, ghost.y, ghost.w, ghost.h),
  
  //the mouse/
  push();
  fill('creepyroom.r ,creepyroom.g,creepyroom.b)');
  triangle(x1,y1, x2,y2,x3,y3);
  pop(); 
  
  
}
