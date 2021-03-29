let xspeed;
let yspeed;
let yaxa;
let r,g,b;
let x,y;
var song;

function preload(){
  yaxa = loadImage('https://i.imgur.com/WEp6Zde.png');
  song = loadSound('konga.mp3');
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.play();
  yaxa1 = new Yaxa;
  yaxa2 = new Yaxa;
  yaxa3 = new Yaxa;
  yaxa4 = new Yaxa;
  yaxa5 = new Yaxa;
  yaxa6 = new Yaxa;
  yaxa7 = new Yaxa;
  yaxa8 = new Yaxa;
  yaxa9 = new Yaxa;
  yaxa10 = new Yaxa;
  yaxa11 = new Yaxa;
  yaxa12 = new Yaxa;
  yaxa13 = new Yaxa;
  yaxa14 = new Yaxa;
  yaxa15 = new Yaxa;
}

class Yaxa {
	constructor(id) {
    this.x = random(width);
    this.y = random(height);
	this.xspeed = random(5,15);
	this.yspeed = random(5,15);
	this.dirn = random([-1,1])
  }
  pickColor() {
  this.r = random(256);
  this.g = random(256);
  this.b = random(256);
  }
  
  
  move(){
	  this.x += this.xspeed*this.dirn;
	  this.y += this.yspeed*this.dirn;
	  
	  if (this.x + yaxa.width >= width) {
		this.xspeed = -this.xspeed;
		this.x = width - yaxa.width;
		this.pickColor();
	  } else if (this.x <= 0) {
		this.xspeed = -this.xspeed;
		this.x = 0;
		this.pickColor();
	  }

	  if (this.y + yaxa.height >= height) {
		this.yspeed = -this.yspeed;
		this.y = height - yaxa.height;
		this.pickColor();
	  } else if (this.y <= 0) {
		this.yspeed = -this.yspeed;
		this.y = 0;
		this.pickColor();
	  }
  }
  show() {
	  tint(this.r,this.g,this.b);
	  image(yaxa,this.x,this.y);
  }
}

function draw() {
  //background(0);
  tint(r,g,b);
  yaxa1.move()
  yaxa1.show()
  yaxa2.move()
  yaxa2.show()
  yaxa3.move()
  yaxa3.show()
  yaxa4.move()
  yaxa4.show()
  yaxa5.move()
  yaxa5.show()
  yaxa6.move()
  yaxa6.show()
  yaxa7.move()
  yaxa7.show()
  yaxa8.move()
  yaxa8.show()
  yaxa9.move()
  yaxa9.show()
  yaxa10.move()
  yaxa10.show()
  yaxa11.move()
  yaxa11.show()
  yaxa12.move()
  yaxa12.show()
  yaxa13.move()
  yaxa13.show()
  yaxa14.move()
  yaxa14.show()
  yaxa15.move()
  yaxa15.show()
}
