// trace, debug, info, warn, error
// const SWITCH_LOGGING_LEVEL = "warn";
const SWITCH_LOGGING_LEVEL = "info";
// const SWITCH_LOGGING_LEVEL = "debug";

// create impediments and only show impediment layer and no other layers
// const SWITCH_CREATE_IMPEDIMENTS = true;
const SWITCH_CREATE_IMPEDIMENTS = false;

// mind aspect ratio of image - default resolution
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;


let randomCirclePositions = [];
let randomCirclePositions_2 = [];
let randomCirclePositions_3 = [];
let randomCirclePositions_4 = [];


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


let LOOP_SIZE = 10000;

function preload() {
    // direct API
    //data = loadJSON("https://global-warming.org/api/co2-api");
    // for static
    // co2_data = loadJSON("co2_data_static_export.json");

}

function setup() {
    let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent('canvasHolder');
    // let canvas = createCanvas(windowWidth, windowHeight).parent('canvasHolder');

    logging.setLevel(SWITCH_LOGGING_LEVEL);

    // matter.js stuff
    // engine = Engine.create();
    // world = engine.world;

    // editor = new Editor();


    for (let i = 0; i < 50000; i++) {
        randomCirclePositions.push(
            {
                randomX: random(width),
                randomY: random(height),
                // color: random(170, 255),
                color: color(random(["#310A31", "#440e44", "#220722", "#847996", "#968DA5", "#827693", "#88B7B5", "#99C2C0", "#80B3B0"])),
                opacity: random(0, 100),
                size: random(4, 7),
            }
        )
    }

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

    noLoop();
}

function draw() {
    background(120);

    for (let i = 0; i < randomCirclePositions.length / 4 * 1; i++) {
        push();
        noStroke();
        fill(randomCirclePositions[i].color, randomCirclePositions[i].opacity);
        random(
            [
                circle(randomCirclePositions[i].randomX, randomCirclePositions[i].randomY, randomCirclePositions[i].size),
                rect(randomCirclePositions[i].randomX, randomCirclePositions[i].randomY, randomCirclePositions[i].size, randomCirclePositions[i].size),
            ]
        );
        pop();

        if (i % (LOOP_SIZE / 50) == 0) {
            push();
            noStroke();
            // fill(119, 136, 147);
            fill("red");
            rect(randomCirclePositions[i].randomX, randomCirclePositions[i].randomY, CANVAS_WIDTH / 4, CANVAS_HEIGHT / 4);
            pop();
        }
    }





    for (let i = randomCirclePositions.length / 4 * 1; i < randomCirclePositions.length / 4 * 2; i++) {
        //   push();
        //   noStroke();
        //   fill(randomCirclePositions[i].color, randomCirclePositions[i].opacity);
        //   random(
        //     [
        //       circle(randomCirclePositions[i].randomX, randomCirclePositions[i].randomY, randomCirclePositions[i].size),
        //       rect(randomCirclePositions[i].randomX, randomCirclePositions[i].randomY, randomCirclePositions[i].size, randomCirclePositions[i].size),
        //     ]
        //   );
        //   pop();
        if (i % (LOOP_SIZE / 50) == 0) {
            push();
            noStroke();
            fill(180);
            rect(randomCirclePositions[i].randomX, randomCirclePositions[i].randomY, CANVAS_WIDTH / 6, CANVAS_HEIGHT / 6);
            pop();
        }
    }

    for (let i = randomCirclePositions.length / 4 * 2; i < randomCirclePositions.length / 4 * 3; i++) {
        push();
        noStroke();
        fill(randomCirclePositions[i].color, randomCirclePositions[i].opacity);
        random(
            [
                circle(randomCirclePositions[i].randomX, randomCirclePositions[i].randomY, randomCirclePositions[i].size),
                rect(randomCirclePositions[i].randomX, randomCirclePositions[i].randomY, randomCirclePositions[i].size, randomCirclePositions[i].size),
            ]
        );
        pop();

        if (i % (LOOP_SIZE / 50) == 0) {
            push();
            noStroke();
            fill(200);
            rect(randomCirclePositions[i].randomX, randomCirclePositions[i].randomY, CANVAS_WIDTH / 8, CANVAS_HEIGHT / 8);
            pop();
        }
    }

    // push();
    // noStroke();
    // fill(210);
    // rect(CANVAS_WIDTH / 15, CANVAS_HEIGHT / 15, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    // pop();


    // push();
    // noStroke();
    // // strokeWeight(2);
    // // stroke(200);
    // // noFill();
    // fill(150);
    // circle(mouseX, mouseY, 20);
    // beginShape();
    // vertex(30, 20);
    // vertex(85, 20);
    // vertex(85, 75);
    // vertex(30, 75);
    // endShape(CLOSE);
    // pop();

    for (let i = randomCirclePositions.length / 4 * 3; i < randomCirclePositions.length; i++) {
        push();
        noStroke();
        fill(randomCirclePositions[i].color, randomCirclePositions[i].opacity);
        random(
            [
                circle(randomCirclePositions[i].randomX, randomCirclePositions[i].randomY, randomCirclePositions[i].size),
                rect(randomCirclePositions[i].randomX, randomCirclePositions[i].randomY, randomCirclePositions[i].size, randomCirclePositions[i].size),
            ]
        );
        pop();

        if (i % (LOOP_SIZE / 50) == 0) {
            push();
            noStroke();
            fill(230);
            rect(randomCirclePositions[i].randomX, randomCirclePositions[i].randomY, CANVAS_WIDTH / 10, CANVAS_HEIGHT / 10);
            pop();
        }
    }

    // origins.looping_through_days();
    // origins.drop_all();

    // particles_physical.show();

    // impediments.show();

    // Engine.update(engine);
}

