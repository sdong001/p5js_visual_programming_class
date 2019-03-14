const WIDTH = 600;
const HEIGHT = 600;

const COLOR_SPACE = '#0C0C04';
const COLOR_MOON = '#BAB9B9';
const COLOR_STAR = '#FAFAFA';
const COLOR_HOUSE = '#A6BFC8';
const COLOR_FACE = '#EBF0F6';
const COLOR_CREATOR = '#7C7C7C';

const NUM_STARS = 20;
const NUM_ROOF = 20;

const SIZE_STAR = 4;
const SIZE_HOUSE = 200;
const SIZE_ROOF = 15;
const SIZE_EYE = 50;
const SIZE_MOUTH = 80;
const SIZE_CREATOR_X = 20;
const SIZE_CREATOR_Y = 10

const POS_HOUSE_X = WIDTH / 2 - WIDTH / 6;
const POS_HOUSE_Y = HEIGHT / 2 - HEIGHT / 8;

const MARGIN_ROOF = 10;

let starRandX = [];
let starRandY = [];


function setup() {
  createCanvas(WIDTH,HEIGHT);
  
  for(var i=0; i<NUM_STARS; i++) {
   starRandX[i] = random(WIDTH);
   starRandY[i] = random(HEIGHT);
  }
}

function draw() {
  background(COLOR_SPACE);
  
  for(var i=0; i<NUM_STARS; i++) drawStar(starRandX[i], starRandY[i]);
  drawMoon();
  drawMoonCreator();
  drawHouse();
  drawRoof();
  drawHouseFace();
}

function drawMoon() {
  stroke(0);
  fill(color(COLOR_MOON));
  arc(WIDTH / 2, HEIGHT + HEIGHT / 8, WIDTH, HEIGHT, PI, TWO_PI, CHORD);
}

function drawStar(x, y) {
  stroke(color(COLOR_STAR));
  line(x - SIZE_STAR, y, x + SIZE_STAR, y);
  line(x, y - SIZE_STAR, x, y + SIZE_STAR);
}

function drawHouse() {
  fill(color(COLOR_HOUSE));
  quad(
    POS_HOUSE_X - 30, POS_HOUSE_Y + SIZE_HOUSE, 
    POS_HOUSE_X, POS_HOUSE_Y - SIZE_HOUSE + SIZE_HOUSE,
    POS_HOUSE_X + SIZE_HOUSE, POS_HOUSE_Y - SIZE_HOUSE + SIZE_HOUSE,
    POS_HOUSE_X + SIZE_HOUSE + 30, POS_HOUSE_Y + SIZE_HOUSE
    )
}

function drawHouseFace() {
  stroke(0);
  fill(color(COLOR_FACE));
  ellipse(POS_HOUSE_X + 50, POS_HOUSE_Y + 60, SIZE_EYE, SIZE_EYE);
  ellipse(POS_HOUSE_X + SIZE_HOUSE - 50, POS_HOUSE_Y + 60, SIZE_EYE, SIZE_EYE);
  rect(POS_HOUSE_X + SIZE_HOUSE / 2 - SIZE_MOUTH / 2, POS_HOUSE_Y + SIZE_HOUSE - SIZE_MOUTH, SIZE_MOUTH, SIZE_MOUTH);
}

function drawRoof() {
  for(var i=1; i<NUM_ROOF; i++) {
    const x = i * MARGIN_ROOF + POS_HOUSE_X;
    const y = POS_HOUSE_Y;
    stroke(color(COLOR_STAR));
    line(x, y, x, y - SIZE_ROOF);
  }
}

function drawMoonCreator() {
  fill(color(COLOR_CREATOR));
  ellipse(500, 500, SIZE_CREATOR_X, SIZE_CREATOR_Y);
  ellipse(400, 480, SIZE_CREATOR_X + 10, SIZE_CREATOR_Y + 10);
  ellipse(80, 550, SIZE_CREATOR_X + 30, SIZE_CREATOR_Y + 20);
  ellipse(380, 550, SIZE_CREATOR_X + 20, SIZE_CREATOR_Y + 10);
  ellipse(260, 390, SIZE_CREATOR_X + 10, SIZE_CREATOR_Y + 20);
  ellipse(170, 500, SIZE_CREATOR_X + 30, SIZE_CREATOR_Y + 20);
  ellipse(300, 350, SIZE_CREATOR_X + 20, SIZE_CREATOR_Y + 10);
}