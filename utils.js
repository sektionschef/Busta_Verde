
// Draw FPS (rounded to 2 decimal places) at the bottom left of the screen
function show_framerate() {
    if (frameCount % 10 == 1) {
        fps = frameRate();
    }
    push();
    fill(0);
    textFont(fontRegular);
    text("FPS: " + fps.toFixed(2), 10, height - 170);
    pop();
}

// show the current number of physical bodies in the world
function show_number_physical_bodies() {

    if (frameCount % 10 == 1) {
        debugging_physical_body_count = world.bodies.length - impediments.bodies.length
    }
    let string = "Particle Count: " + debugging_physical_body_count;
    push();
    fill(0);
    textFont(fontRegular);
    text(string, 10, height - 150);
    pop();
}


function getRandomFromInterval(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomFromList(items) {
    return items[Math.floor(Math.random() * items.length)];
}