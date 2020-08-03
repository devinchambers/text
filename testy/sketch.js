var song;
var song2;
var song3;
function preload() {
  song = loadSound ("1.wav");
 song2 = loadSound ("2.wav");
 song3 = loadSound ("3.wav");
}

function setup() {
  createCanvas(720, 1000);
  background(255);



  
}
let y = 30

let x = 1; 
function draw() {

}
function keyPressed() {
  if (key === 'q') { if (x == 1) { 
  textSize(30);
text('word', 300, y);
song.play();

  }
                               if (x == 2) { 
  textSize(30);
text('slippybippy', 300, y);
song2.play();

  }
                     if (x == 3) { 
  textSize(30);
text('crumplepump', 300, y);
                       song3.play();
x = 0;

  }
                    
                    
                    
  x = x + 1;
   y = y + 50;
                    if (y == 1030) {y = 30;
                                    background(255);
                                   }
} print (y);
 
}