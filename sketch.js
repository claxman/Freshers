let ballCount = 250;
let balls = [];
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  slider = createSlider(0, ballCount, 100);
  slider.position(15, 80);

  for(let i = 0; i < slider.value(); i++){
    balls.push(new Ball());
  }
}

function draw() {
  background(0, 10);
  
  // Will control frameRate
  frameRate(10 + 50 - balls.length / ballCount * 50);

  if(slider.value() > balls.length){
    for(let i = 0; i < slider.value() - balls.length; i++){
      balls.push(new Ball());
    }
  }else{
    while(balls.length > slider.value()){
      balls.pop();
    }
  }
  
  for(let i = 0; i < balls.length; i++){
    balls[i].update();
    balls[i].display();
  }

  document.getElementById('num').innerHTML = slider.value();
  document.getElementById('frames').innerHTML = floor(frameRate());
} 

class Ball{
  constructor(){
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = random(-5, 5);
    this.ySpeed = random(-5, 5);
    this.size = random(15, 50);
    this.hue = random(360);
  }

  update(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if(this.x < 0 || this.x > width){
      this.xSpeed *= -1;
    }

    if(this.y < 0 || this.y > height){
      this.ySpeed *= -1;
    }
  }

  display(){
    fill(this.hue, 100, 100, 30);
    circle(this.x, this.y, this.size);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}






