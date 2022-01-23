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

const options_impediments = {
  isStatic: true,
  friction: 1,
  restitution: 0.5,
  density: 1,
  inertia: Infinity,  // prevents rotation
}

const origins_data = [
  { label: "1", x: 100, y: 30, },
  { label: "2", x: 500, y: 60, },
]


const options_bubbles = {
  isStatic: false,
  friction: 1,
  restitution: 0.5,  // A Number that defines the restitution (elasticity) of the body.
  density: 1,
  // inertia: Infinity,  // prevents rotation
}


function preload() {
  // direct API
  //data = loadJSON("https://global-warming.org/api/co2-api");
  // for static
  // co2_data = loadJSON("co2_data_static_export.json");

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

  spatter_01 = loadImage('spatter_01.png');
  spatter_02 = loadImage('spatter_02.png');
  spatter_03 = loadImage('spatter_03.png');

  canvas_image = loadImage('canvas.png');

}

function setup() {

  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL).parent('canvasHolder');
  // let canvas = createCanvas(windowWidth, windowHeight).parent('canvasHolder');

  logging.setLevel(SWITCH_LOGGING_LEVEL);

  engine = Engine.create();
  world = engine.world;

  // editor = new Editor();

  // const VERTICAL_GRAVITY = -0.25;
  // const VERTICAL_GRAVITY = Math.random();
  const VERTICAL_GRAVITY = 1;

  chosen_palette = random(palettes.palettes);
  PALETTE = chosen_palette.values;
  PALETTE_NAME = chosen_palette.name;

  background_image = random([background_01, background_02, background_03, background_04]);

  for (let currentStroke of stroke_data.data) {
    currentStroke.color = color(random(PALETTE));
    currentStroke.image = strokes_full.get(currentStroke.x, currentStroke.y, currentStroke.w, currentStroke.h);
    currentStroke.x = random(0, width);
    currentStroke.y = random(0, height);

    // plan for impediments, basis of CO2 thing
    currentStroke.position = {
      x: currentStroke.x,
      y: currentStroke.y
    }
    currentStroke.offsetPhysical = {
      x: -currentStroke.w / 2,
      y: -currentStroke.h / 2,
    };
    currentStroke.options = options_impediments;

    // create vertices from image - four coordinates with a few inches inwards
    var offsetVerticesW = currentStroke.w / 4
    var offsetVerticesH = currentStroke.h / 4
    currentStroke.vertices = [
      { x: currentStroke.x + offsetVerticesW, y: currentStroke.y + offsetVerticesH },
      { x: currentStroke.x + currentStroke.w - offsetVerticesW, y: currentStroke.y + offsetVerticesH },
      { x: currentStroke.x + currentStroke.w - offsetVerticesW, y: currentStroke.y + currentStroke.h - offsetVerticesH },
      { x: currentStroke.x + offsetVerticesW, y: currentStroke.y + currentStroke.h - offsetVerticesH },
    ]
  }

  // bubble = bubbles_full.get(86, 51, 38, 37)
  for (let currentBubble of bubble_data.data) {
    currentBubble.color = color(random(PALETTE));
    currentBubble.image = bubbles_full.get(currentBubble.x, currentBubble.y, currentBubble.w, currentBubble.h);
    currentBubble.options = options_bubbles;
  }

  // particle_data[0].image = bubble;
  // console.log(bubble_data.data);
  particles_physical = new Particles(bubble_data.data);

  impediments = new Particles(stroke_data.data);
  impediments.create_all();

  origins = new Origins(origins_data);
  origins.create_all();

  // let canvas_mouse = Mouse.create(canvas.elt);
  // canvas_mouse.pixelRatio = pixelDensity();
  // mConstraint = MouseConstraint.create(engine, { mouse: canvas_mouse })
  // World.add(world, mConstraint);

  // matter.js stuff
  Matter.Runner.run(engine)
  engine.world.gravity.y = VERTICAL_GRAVITY;

  // resize_canvas();


  background(120);

  // BACKGROUND COLOR 
  // background_color = color(random(PALETTE));
  // background_color.setAlpha(255);
  // console.log(background_color);

  area_01_color = color(random(PALETTE));
  area_02_color = color(random(PALETTE));
  area_03_color = color(random(PALETTE));

  // noLoop();
}

function draw() {

  translate(-width / 2, -height / 2, 0);

  push();
  // tint(background_color);
  image(background_image, 0, 0)
  pop();

  push();
  tint(area_01_color);
  image(area_01, 0, 0)
  pop();

  push();
  tint(area_02_color);
  image(area_02, 0, 0)
  pop();

  push();
  tint(area_03_color);
  image(area_03, 0, 0)
  pop();


  origins.drop_all();

  // origins.looping_through_days();
  if (logging.getLevel() <= 1) {
    origins.debugging_show_origins();
  }

  particles_physical.show();

  impediments.show();

  // wahrscheinlich unnötig weil in particles schon gedrawed
  // for (let currentStroke of stroke_data.data) {
  //   push();
  //   tint(currentStroke.color)
  //   image(currentStroke.image, currentStroke.x, currentStroke.y);
  //   pop();
  // }

  // image(bubble, 30, 30, 20, 20);

  particles_physical.kill_not_needed(30);

  Engine.update(engine);

  push();
  // blendMode(MULTIPLY);
  tint(color(122));
  image(spatter_01, 0, 0);
  pop();

  image(canvas_image, 0, 0);

}


