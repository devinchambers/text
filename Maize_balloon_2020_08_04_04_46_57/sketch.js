var song;
var song2;
var song3;
var song4;
var song5;
var song6;
var son7;
var song8;
var song9;
var song10;
var song11;
var song12;
function preload() {
  song = loadSound ("1.wav");
 song2 = loadSound ("2.wav");
 song3 = loadSound ("3.wav");
  song4 = loadSound ("4.wav");
 song5 = loadSound ("5.wav");
 song6 = loadSound ("6.wav");
  song7 = loadSound ("7.wav");
 song8 = loadSound ("8.wav");
 song9 = loadSound ("9.wav");
  song10 = loadSound ("10.wav");
 song11 = loadSound ("11.wav");
 song12 = loadSound ("12.wav");
}

function setup() {
  createCanvas(2560, 1440);
  background(255);
 textSize(20);
text('Click me', 600, 760);
  textSize(20);
text('Press space to clear', 800, 760);



  
}
let y = 30
let p = 10
let c = 10
let x = 1; 
function draw() {
  //p = int(random(100,1200));
  //c = int(random(100,650));
p = mouseX;
  c = mouseY;

}
function mousePressed() {
   if (mouseButton === LEFT) {
  if (x == 1) { 
  textSize(30);
text('The sea is free.', p, c);
song.play();

  }
                    
                     if (x == 2) { 
  textSize(30);
text('Who did that?', p, c);
song2.play();

  } 
                    
                      if (x == 3) { 
  textSize(30);
text('You did that.', p, c);
song3.play();

  } 
      if (x == 4) { 
  textSize(30);
text('Did you know that?', p, c);
song3.play();

  } 
                    if (x == 5) { 
  textSize(30);
text('I didn’t know that.', p, c);
song4.play();

  } 
                    if (x == 6) { 
  textSize(30);
text('Why didn’t you tell me?', p, c);
song5.play();

  } 
                    if (x == 7) { 
  textSize(30);
text('tell me everything.', p, c);
song6.play();

  } 
                    if (x == 8) { 
  textSize(30);
text('what is  the weather like?', p, c);
song7.play();

  } 
                    if (x == 9) { 
  textSize(30);
text('the weather is oh so fine! ', p, c);
song8.play();

  } 
                    if (x == 10) { 
  textSize(30);
text('tell me what’s your biggest fear?', p, c);
song9.play();

  } 
                    if (x == 11) { 
  textSize(30);
text('I’m afraid of the snakes.', p, c);
song10.play();

  } 
                    if (x == 12) { 
  textSize(30);
text('Have you seen the snakes?', p, c);
song11.play();

  } 
      if (x == 13) { 
  textSize(30);
        
text('I love King snakes and corn snakes', p, c);
song12.play();

  } 
       if (x == 14) { 
  textSize(30);
text('What other snakes are great?', p, c);
song.play();

  }
                    
                     if (x == 15) { 
  textSize(30);
text('Who did that?', p, c);
song2.play();

  } 
                    
                      if (x == 16) { 
  textSize(30);
text('cobras of course!', p, c);
song3.play();

  } 
      if (x == 17) { 
  textSize(30);
text('whats for dinner?', p, c);
song3.play();

  } 
                    if (x == 18) { 
  textSize(30);
text('something from a grocery delivery box.', p, c);
song4.play();

  } 
                    if (x == 19) { 
  textSize(30);
text('Where do the birds fly?', p, c);
song5.play();

  } 
                    if (x == 20) { 
  textSize(30);
text('Birds fly free through the sky.', p, c);
song6.play();

  } 
                    if (x == 21) { 
  textSize(30);
                     
text('why cant I?', p, c);
song7.play();

  } 
                    if (x == 22) { 
  textSize(30);
text('Lack of national health coverage.', p, c);
song8.play();

  } 
                    if (x == 23) { 
  textSize(30);
text('Have you heard of the lesser panda?', p, c);
song9.play();

  } 
                    if (x == 24) { 
  textSize(30);
text('The pandas fly with the grocery bird.', p, c);
song10.play();

  } 
                    if (x == 25) { 
  textSize(30);
text('How do you fly without leaving the ground?', p, c);
song11.play();

  } 
      if (x == 26) { 
  textSize(30);
text('Just use your imagination!', p, c);
song12.play();

  } 
                   if (x == 27) { 
  textSize(30);
text('When was the last time you felt like a child?', p, c);
song.play();

  }
                    
                     if (x == 28) { 
  textSize(30);
text('Yesterday', p, c);
song2.play();

  } 
                    
                      if (x == 29) { 
  textSize(30);
text('When was the last time you felt like an adult?', p, c);
song3.play();

  } 
      if (x == 30) { 
  textSize(30);
text('when I felt the space between us split open— we are standing still but in different places.', p, c);
song3.play();

  } 
                    if (x == 31) { 
  textSize(30);
text('when was the last time you felt safe?', p, c);
song4.play();

  } 
                    if (x == 32) { 
  textSize(30);
text('When I was in the swamp sitting with the frogs.', p, c);
song5.play();

  } 
                    if (x == 33) { 
  textSize(30);
text('When have you touched the muck?', p, c);
song6.play();

  } 
                    if (x == 34) { 
  textSize(30);
text('When going barfeet into the lake, this weekend.', p, c);
song7.play();

  } 
                    if (x == 35) { 
  textSize(30);
text('When are you going to swim in the lake? ', p, c);
song8.play();

  } 
                    if (x == 36) { 
  textSize(30);
text('Clouds riding the tides of butterfly wings, of bird calls.', p, c);
song9.play();

  } 
                    if (x == 37) { 
  textSize(30);
text('Have you seen a flower blossom?', p, c);
song10.play();

  } 
                    if (x == 38) { 
  textSize(30);
text('The sunflower blooming in my window brings me joy.', p, c);
song11.play();

  } 
      if (x == 39) { 
  textSize(30);
text('What was the last thing that brought you joy?', p, c);
song12.play();

  } 
                   if (x == 40) { 
  textSize(30);
text('Joy is always only one gesture away. How close are you to joy?', p, c);
song.play();

  }
                    
                     if (x == 41) { 
  textSize(30);
text('too far', p, c);
song2.play();

  } 
                    
                      if (x == 42) { 
                      
  textSize(30);
text('why is there coffee?', p, c);
song3.play();

  } 
      if (x == 43) { 
  textSize(30);
text('To keep us alive and functional.', p, c);
song3.play();

  } 
                    if (x == 44) { 
  textSize(30);
text('What gives you energy?', p, c);
song4.play();

  } 
                    if (x == 45) { 
  textSize(30);
text('A hot bath during typhoon weather.', p, c);
song5.play();

  } 
                    if (x == 46) { 
  textSize(30);
text('What is touching you right now?', p, c);
song6.play();

  } 
                    if (x == 47) { 
  textSize(30);
text('the chirping of nightingales.', p, c);
song7.play();

  } 
                    if (x == 48) { 
  textSize(30);
text('who are they belong to?', p, c);
song8.play();

  } 
                    if (x == 49) { 
  textSize(30);
text('The old king east of the sun and west of the moon.', p, c);
song9.play();

  } 
                    if (x == 50) { 
  textSize(30);
text('How far is the moon?', p, c);
song10.play();

  } 
                    if (x == 51) { 
  textSize(30);
text('The moon is right here with you and me.', p, c);
song11.play();

  } 
      if (x == 52) { 
  textSize(30);
text(' What are you up to?', p, c);
song12.play();

  } 
  if (x == 53) { 
  textSize(30);
text('Im up to my ears in new information.', p, c);
song.play();

  }
                    
                     if (x == 54) { 
  textSize(30);
text('How often do you clean your ears?', p, c);
song2.play();

  } 
                    
                      if (x == 55) { 
  textSize(30);
text('Floss them daily if you want to keep them.', p, c);
song3.play();

  } 
      if (x == 56) { 
  textSize(30);
text('What parade do you most miss? ', p, c);
song3.play();

  } 
                    if (x == 57) { 
  textSize(30);
text('I miss the mermaids on parade', p, c);
song4.play();

  } 
                    if (x == 58) { 
  textSize(30);
text('What does the ocean smell like? ', p, c);
song5.play();

  } 
                    if (x == 59) { 
  textSize(30);
text('like coming home.', p, c);
song6.play();

  } 
                    if (x == 60) { 
  textSize(30);
text('where is home for you', p, c);
song7.play();

  } 
                    if (x == 61) { 
  textSize(30);
text('home for me is with my dearest fam of course! ', p, c);
song8.play();

  } 
                    if (x == 62) { 
  textSize(30);
text('what has covid-19 changed you?', p, c);
song9.play();

  } 
                    if (x == 63) { 
  textSize(30);
text('Covid-19 has made me pay closer attention to my values and priorities.', p, c);
song10.play();

  } 
                    if (x == 64) { 
  textSize(30);
text('What do you value most in this world?', p, c);
song11.play();

  } 
      if (x == 65) { 
  textSize(30);
        
text('my health and family....', p, c);
song12.play();

  } 
       if (x == 66) { 
  textSize(30);
text('...are things that I dont pay enough attention to.', p, c);
song.play();

  }
                    
                     if (x == 67) { 
  textSize(30);
text('who do you become when you put a mask on?', p, c);
song2.play();

  } 
                    
                      if (x == 68) { 
  textSize(30);
text('I become freer, since I am more true to my expressions.', p, c);
song3.play();

  } 
      if (x == 69) { 
  textSize(30);
text('What are the necessities in your dream life?', p, c);
song3.play();

  } 
                    if (x == 70) { 
  textSize(30);
text('something from a grocery delivery box.', p, c);
song4.play();

  } 
                    if (x == 71) { 
  textSize(30);
text('What are the necessities in your dream life?', p, c);
song5.play();

  } 
                    if (x == 72) { 
  textSize(30);
text('Sunlight, color and breeze.', p, c);
song6.play();

  } 
                    if (x == 73) { 
  textSize(30);
                     
text(' What makes you realize you’ve grown up?', p, c);
song7.play();

  } 
                    if (x == 74) { 
  textSize(30);
text('I haven’t.', p, c);
song8.play();

  } 
                    if (x == 75) { 
  textSize(30);
text('Who makes the rules?', p, c);
song9.play();

  } 
                    if (x == 76) { 
  textSize(30);
text('The game maker makes the game.', p, c);
song10.play();

  } 
                    if (x == 77) { 
  textSize(30);
text('What games are your favourite?', p, c);
song11.play();

  } 
      if (x == 78) { 
  textSize(30);
text('The repetition and variety of mancala.', p, c);
song12.play();

  } 
                   if (x == 78) { 
  textSize(30);
text('once when my twenties died i woke at dawn,   ', p, c);
song.play();

  }
                    
                     if (x == 79) { 
  textSize(30);
text('unparked a car in san francisco,', p, c);
song2.play();

  } 
                    
                      if (x == 80) { 
  textSize(30);
text('and drove to the airport through the long morning sun.', p, c);
song3.play();

  } 
      if (x == 81) { 
  textSize(30);
text(' Whats an end of days you are happy is done?', p, c);
song3.play();

  } 
                    if (x == 82) { 
  textSize(30);
text('When the night watchman turns off the salsa and the neighbor stops singing a cappella vallenatos of course.', p, c);
song4.play();

  } 
                    if (x == 83) { 
  textSize(30);
text('Tell me, is the rose naked or is that her only dress?', p, c);
song5.play();

  } 
                    if (x == 84) { 
  textSize(30);
text('Do not they see me or am I my only friend? ', p, c);
song6.play();

  } 
                    if (x == 85) { 
  textSize(30);
text('what would you rather give up? Your senses or thoughts?', p, c);
song7.play();

  } 
                    if (x == 86) { 
  textSize(30);
text('I would rather perish than live without either.  ', p, c);
song8.play();

  } 
                    if (x == 87) { 
  textSize(30);
text('what would you rather fight? a horse sized duck or 10 duck sized horses?', p, c);
song9.play();

  } 
                    if (x == 88) { 
  textSize(30);
text('10 duck sized horses, I can imagine they will be super cute.', p, c);
song10.play();

  } 
                    if (x == 89) { 
  textSize(30);
text('What will you have for dinner tonight?', p, c);
song11.play();

  } 
      if (x == 90) { 
  textSize(30);
text('Semi-healthy fast food always made me happy. Haha. So Taco Bell.', p, c);
song12.play();

  } 
                   if (x == 90) { 
  textSize(30);
text('What’s you favorite fictional character?', p, c);
song.play();

  }
                    
                     if (x == 91) { 
  textSize(30);
text('NDN tacos are the best kind. I am a fan of garfield.', p, c);
song2.play();

  } 
                    
                      if (x == 92) { 
                        
  textSize(30);
text('What fictional cat is your favorite? ', p, c);
song3.play();

  } 
      if (x == 93) { 
  textSize(30);
text('Doraemon is a beautiful cat wizard who can stop time.', p, c);
song3.play();

  } 
                    if (x == 94) { 
  textSize(30);
text('What stops time for you?', p, c);
song4.play();

  } 
                    if (x == 95) { 
  textSize(30);
text('The third beat of the rhumba clave pattern hanging in time like the hold before a plosive release.', p, c);
song5.play();

  } 
                    if (x == 96) { 
  textSize(30);
text('What occlusive stop beings your declaration for love of all things in this world?', p, c);
song6.play();

  } 
                  
  if (x == 97) {
  
  x = 1;
  }                                                            
                             
                                                                  
                             
                              
                    
                             
                              
                    
                    
                    
  x = x + 1;
   y = y + 50;
                    //if (y == 1030) {y = 30;
                                    //background(255);
                                   //}
 print (x);} 


}

function keyPressed() {
 
    background(255);
   textSize(20);
text('Click me', 600, 760);
  textSize(20);
text('Press space to clear', 800, 760);

    }
 
