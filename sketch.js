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
let PALETTE;
let background_image;

const options_impediments = {
  isStatic: true,
  friction: 1,
  restitution: 0.5,
  density: 1,
  inertia: Infinity,  // prevents rotation
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

  one = loadImage('one.png');
  strokes = loadImage('strokes.png');

  stroke_data = loadJSON("stroke_data.json");
  palettes = loadJSON("palettes.json");

}

function setup() {

  let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent('canvasHolder');
  // let canvas = createCanvas(windowWidth, windowHeight).parent('canvasHolder');

  logging.setLevel(SWITCH_LOGGING_LEVEL);

  // matter.js stuff
  engine = Engine.create();
  world = engine.world;

  // editor = new Editor();

  // const VERTICAL_GRAVITY = -0.25;
  // const VERTICAL_GRAVITY = Math.random();
  const VERTICAL_GRAVITY = 1;

  PALETTE = palettes.palettes[0].values;
  console.log(palettes.palettes[0].name);

  background_image = random([background_01, background_02, background_03, background_04]);

  for (let currentStroke of stroke_data.data) {
    currentStroke.color = color(random(PALETTE));
    currentStroke.image = strokes.get(currentStroke.x, currentStroke.y, currentStroke.w, currentStroke.h);
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

    // create vertices from image
    var offsetVerticesW = currentStroke.w / 4
    var offsetVerticesH = currentStroke.h / 4
    currentStroke.vertices = [
      { x: currentStroke.x + offsetVerticesW, y: currentStroke.y + offsetVerticesH },
      { x: currentStroke.x + currentStroke.w - offsetVerticesW, y: currentStroke.y + offsetVerticesH },
      { x: currentStroke.x + currentStroke.w - offsetVerticesW, y: currentStroke.y + currentStroke.h - offsetVerticesH },
      { x: currentStroke.x + offsetVerticesW, y: currentStroke.y + currentStroke.h - offsetVerticesH },
    ]
  }

  particles_physical = new Particles(particle_data);
  // impediments = new Particles(impediments_data);
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

  // noLoop();
}

function draw() {

  // secret background random chooser
  image(background_image, 0, 0)




  origins.debugging_show_origins();

  // origins.looping_through_days();
  origins.drop_all();

  particles_physical.show();

  impediments.show();

  // wahrscheinlich unnötig weil in particles schon gedrawed
  for (let currentStroke of stroke_data.data) {
    push();
    tint(currentStroke.color)
    image(currentStroke.image, currentStroke.x, currentStroke.y);
    pop();
  }

  Engine.update(engine);
}


