var song;
var song2;
var song3;
var song4;
var song5;

var y = 200;
var x = 1;
let image2;
let image1;
let image3;
let image4;
let image5;



function preload() {
  song = loadSound ("1.wav");
  song2 = loadSound ("2.wav");
  song3 = loadSound ("3.wav");
  song4 = loadSound ("4.wav");
  song5 = loadSound ("5.wav");

  
  image2 = loadImage('image2.png');
image1 = loadImage('image1.png');
  image3 = loadImage('image3.png');
image4 = loadImage('image4.png');
  image5 = loadImage('image5.png');


}

function setup() {
createCanvas(2560,880);

}

function draw() {
  
x = int(random(0, y));

    if (x == 100){ 
     image(image1,0,0,2560,1440);
      song.play();
                  
               }
  if (x == 50){ 
     image(image2,0,0,2560,1440);
      song2.play();
                  
               }
   if (x == 25){ 
     image(image3,0,0,2560,1440);
      song3.play();
                  
               }
   if (x == 75){ 
     image(image4,0,0,2560,1440);
      song4.play();
                  
               }
   if (x == 10){ 
     image(image5,0,0,2560,1440);
      song5.play();
                  
               }
  
  
  
if (x == 180){ y = int(random(100,500));}
  
 print(int(y));
  
}