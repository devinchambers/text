function setup() {
  // create canvas
  createCanvas(710, 400);

input = createInput();
  input.position(30, 65);

  button = createButton('submit to me');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h20', '');
  greeting.position(50, 150);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  
  const name = input.value();
  greeting.html('you are ' + name + ' ,will you clog?');
  input.value('');

 
  
}
