function keyPressed() {
  if (key === 'P') {
    console.log("Result:")
    console.log(editor.vertices_text);
    editor.vertices_text = "";
    editor.markers = [];
  }
}

function mousePressed() {
  impediments.clicked(mouseX, mouseY);

  if (keyIsPressed) {
    if (keyCode == SHIFT) {
      console.log(" New vertex with " + mouseX + " : " + mouseY);
      editor.vertices_text += ("{x: " + mouseX + ", y: " + mouseY + "},\n");
      editor.markers.push({ x: mouseX, y: mouseY });
    }
  }
}

function mouseReleased() {
  impediments.undrag();
}

// each time window.innerWidth changes
function windowResized() {
  logging.debug("Window is resized -> resizing canvas.");
  resize_canvas();
  // logging.debug("rescaling width: " + rescaling_width + " new width: " + CANVAS_WIDTH * SCALING_FACTOR);
  // logging.debug("rescaling height: " + rescaling_height + " new height: " + CANVAS_HEIGHT * SCALING_FACTOR);
}

// calculate the scaling params - choose the limiting factor either height or width
function resize_canvas() {
  rescaling_width = windowWidth / CANVAS_WIDTH
  rescaling_height = windowHeight / CANVAS_HEIGHT

  if (rescaling_width < rescaling_height) {
    SCALING_FACTOR = rescaling_width
  } else {
    SCALING_FACTOR = rescaling_height
  }

  // Override for full scale
  // SCALING_FACTOR = 1;

  particles_physical.kill_all();

  // reboot - since scaling in physical world is only possible relative to the preceding body.
  impediments.kill_all();
  impediments.create_all();
  impediments.rescale();

  origins.kill_all();
  origins.create_all();

  resizeCanvas(CANVAS_WIDTH * SCALING_FACTOR, CANVAS_HEIGHT * SCALING_FACTOR);
}
