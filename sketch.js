// trace, debug, info, warn, error
// const SWITCH_LOGGING_LEVEL = "warn";
const SWITCH_LOGGING_LEVEL = "info";
// const SWITCH_LOGGING_LEVEL = "debug";

// create impediments and only show impediment layer and no other layers
// const SWITCH_CREATE_IMPEDIMENTS = true;
const SWITCH_CREATE_IMPEDIMENTS = false;

// mind aspect ratio of image - default resolution
const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = 1080;

const VERTICAL_GRAVITY = -0.25;

let custom_font;
let custom_font_bold;

let fps = 0;
let default_debugging_text_size = 25;
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

// https://coolors.co/2b193d-2c365e-484d6d-4b8f8c-c5979d
PALETTE = ["#2b193d", "#2c365e", "#484d6d", "#4b8f8c", "#c5979d"]


function preload() {
  // direct API
  //data = loadJSON("https://global-warming.org/api/co2-api");
  // for static
  // co2_data = loadJSON("co2_data_static_export.json");

  background_01 = loadImage('background_01.png');
  background_02 = loadImage('background_02.png');
  background_03 = loadImage('background_03.png');
  background_04 = loadImage('background_04.png');

  one = loadImage('one.png');
  strokes = loadImage('strokes.png');

  stroke_data = loadJSON("stroke_data.json");

}

function setup() {
  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent('canvasHolder');
  // let canvas = createCanvas(windowWidth, windowHeight).parent('canvasHolder');

  logging.setLevel(SWITCH_LOGGING_LEVEL);

  // matter.js stuff
  // engine = Engine.create();
  // world = engine.world;

  // editor = new Editor();

  // particles_physical = new Particles(particle_data);
  // impediments = new Particles(impediments_data);
  // impediments.create_all();
  // origins = new Origins(origins_data, co2_data);
  // origins.create_all();

  // let canvas_mouse = Mouse.create(canvas.elt);
  // canvas_mouse.pixelRatio = pixelDensity();
  // mConstraint = MouseConstraint.create(engine, { mouse: canvas_mouse })
  // World.add(world, mConstraint);

  // matter.js stuff
  // Matter.Runner.run(engine)
  // engine.world.gravity.y = VERTICAL_GRAVITY;

  // resize_canvas();

  // for (let i = 0; i < frames.length; i++) {
  //   let pos = frames[i].position;
  //   let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
  //   animation.push(img);
  // }

  noLoop();
}

function draw() {
  background(120);

  // secret background random chooser
  image(background_01, 0, 0)

  push();
  tint(color(PALETTE[3]))
  image(one, 0, 0)
  pop();


  for (let stroke in stroke_data.strokes) {
    currentStroke = stroke_data.strokes[stroke];
    push();
    tint(color(random(PALETTE)))
    stroke_img = strokes.get(currentStroke.x, currentStroke.y, currentStroke.w, currentStroke.h);
    let x = random(0, width);
    let y = random(0, height);
    image(stroke_img, x, y);
    pop();
  }


  // origins.looping_through_days();
  // origins.drop_all();

  // particles_physical.show();

  // impediments.show();

  // Engine.update(engine);
}


