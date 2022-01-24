
// Draw FPS (rounded to 2 decimal places) at the bottom left of the screen
function show_framerate() {
    if (frameCount % 10 == 1) {
        fps = frameRate();
    }
    push();
    fill(255);
    stroke(0);
    text("FPS: " + fps.toFixed(2), 10, height - 10);
    pop();
}

// show the current number of physical bodies in the world
function show_number_physical_bodies() {

    if (frameCount % 10 == 1) {
        debugging_physical_body_count = world.bodies.length - impediments.bodies.length
    }
    let string = "Particle Count: " + debugging_physical_body_count;
    push();
    fill(255);
    stroke(0);
    text(string, 10, height - 30);
    pop();
}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}