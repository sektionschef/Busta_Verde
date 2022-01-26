// trace, debug, info, warn, error
// const SWITCH_LOGGING_LEVEL = "warn";
// const SWITCH_LOGGING_LEVEL = "info";
const SWITCH_LOGGING_LEVEL = "debug";

// create impediments and only show impediment layer and no other layers
// const SWITCH_CREATE_IMPEDIMENTS = true;
const SWITCH_CREATE_IMPEDIMENTS = false;

// mind aspect ratio of image - default resolution
const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = 1080;

let custom_font;
let custom_font_bold;

let fps = 0;
let default_debugging_text_size = 15;
let debugging_physical_body_count = 0;


// matter.js stuff
var Engine = Matter.Engine;
var World = Matter.World;
var Body = Matter.Body;
var Bodies = Matter.Bodies;
var Composite = Matter.Composite;
// var Render = Matter.Render,
var Constraint = Matter.Constraint;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;

var engine;
var world;

let underneath_image;
let impediments_image;
let on_top_image;

let SCALING_FACTOR = 1;
let rescaling_width;
let rescaling_height;

let stroke_image;
let PALETTE;
let background_image;
let background_color;

let bubble;

const origins_data = [
  { label: "1", x: 100, y: 30, },
  { label: "2", x: 500, y: 60, },
]


function preload() {
  fontRegular = loadFont('SourceSansPro-Regular.otf');

  background_01 = loadImage('background_01.png');
  background_02 = loadImage('background_02.png');
  background_03 = loadImage('background_03.png');
  background_04 = loadImage('background_04.png');

  strokes_full = loadImage('strokes_full.png');
  bubbles_full = loadImage('bubble_full.png');

  stroke_data = loadJSON("stroke_data.json");
  bubble_data = loadJSON("bubble_data.json");
  palettes = loadJSON("palettes.json");

  area_01 = loadImage('area_01.png');
  area_02 = loadImage('area_02.png');
  area_03 = loadImage('area_03.png');
}

function setup() {

  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL).parent('canvasHolder');
  // let canvas = createCanvas(windowWidth, windowHeight).parent('canvasHolder');

  logging.setLevel(SWITCH_LOGGING_LEVEL);

  engine = Engine.create();
  world = engine.world;

  // const VERTICAL_GRAVITY = -0.25;
  // const VERTICAL_GRAVITY = Math.random();
  const VERTICAL_GRAVITY = getRandomArbitrary(0.5, 1);

  chosen_palette = random(palettes.palettes);
  PALETTE = chosen_palette.values;
  PALETTE_NAME = chosen_palette.name;

  background_image = random([background_01, background_02, background_03, background_04]);

  impediment_strokes = new Strokes(stroke_data.data)
  impediment_strokes.create_all();

  bubbles_physical = new Bubbles(bubble_data.data);

  origins = new Origins(origins_data);
  origins.create_all();

  Matter.Runner.run(engine)
  engine.world.gravity.y = VERTICAL_GRAVITY;

  background(120);

  area_01_color = color(random(PALETTE));
  area_02_color = color(random(PALETTE));
  area_03_color = color(random(PALETTE));

  resize_canvas();
}

function draw() {

  translate(-width / 2, -height / 2, 0);

  push();
  image(background_image, 0, 0, background_image.width * SCALING_FACTOR, background_image.height * SCALING_FACTOR)
  pop();

  push();
  tint(area_01_color);
  image(area_01, 0, 0, area_01.width * SCALING_FACTOR, area_01.height * SCALING_FACTOR)
  pop();

  push();
  tint(area_02_color);
  image(area_02, 0, 0, area_02.width * SCALING_FACTOR, area_02.height * SCALING_FACTOR)
  pop();

  push();
  tint(area_03_color);
  image(area_03, 0, 0, area_03.width * SCALING_FACTOR, area_03.height * SCALING_FACTOR)
  pop();


  origins.drop_all();

  if (logging.getLevel() <= 1) {
    origins.debugging_show_origins();
  }

  bubbles_physical.show();
  impediment_strokes.show();

  bubbles_physical.kill_not_needed(30);

  Engine.update(engine);

  // show_framerate();
  // show_number_physical_bodies();
}


