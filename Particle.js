/**
 * for the positioning:
 * a) if static - attractivePosition is used
 * b) if not static - effectivePosition is used for positioning
 - if no sprite and static - attractive shape is in layer of image, only a physical object is created
 *  physical object is - this.physical_body
 * 
 * 
 * 
 */
class Particle {
  constructor(
    position,
    options,
    vertices,
    sprite,
    offsetPhysical,
    label,
  ) {

    // active or not
    this.aliveFlag = true;

    // offset between mouse pointer and position of particle
    this.offsetMouse = {
      x: 0,
      y: 0
    };
    this.dragged = false;

    // add opacity
    this.hue = color(random(["#bca796", "#20201e", "#a3a5a4", "#c1cad6", "#855839"]));
    this.radius = random(15, 20);
    this.label = label;

    // position of attractive shape (left top) - dynamic
    this.effectiveTopLeftPostion = {
      x: 0,
      y: 0
    }

    // if body with sprite or a static body without sprite (if impediment is painted on canvas)
    if ((typeof sprite !== "undefined") || (typeof options !== "undefined" && options.isStatic == true)) {
      this.sprite = sprite;

      // position of attractive_shape (left top) - static
      this.attractivePosition = position;

      // convert physical and attractive positions
      this.offsetPhysical = offsetPhysical;

      // create physical body at
      const basics = {
        position: this.attractivePosition,
        vertices: vertices,
      };
      // combine both with spread operator
      this.physical_body = Body.create({ ...basics, ...options });

      // position to centre of mass instead of top left
      Body.translate(
        this.physical_body, {
        x: (- this.offsetPhysical.x),
        y: (- this.offsetPhysical.y)
      });

    } else {
      // print(this.radius);
      // https://brm.io/matter-js/docs/classes/Bodies.html
      this.physical_body = random([
        Bodies.circle(position.x, position.y, this.radius, options),
        Bodies.rectangle(position.x, position.y, this.radius, this.radius, options),
        Bodies.polygon(position.x, position.y, 5, this.radius, options)
      ]);
    }

    this.physical_body.label = this.label;
    // calculate the centre of mass for the physical body
    this.physical_centre = Matter.Vertices.centre(this.physical_body.vertices);
    this.inertia = this.physical_body.inertia;

    World.add(world, this.physical_body)
  }

  show() {
    // body with sprite
    if (typeof this.sprite !== 'undefined') {
      this.show_sprite();
    } else {
      this.show_nosprite();
    }
  }

  show_sprite() {
    this.physical_centre = Matter.Vertices.centre(this.physical_body.vertices);  // recalculate

    // if dragged the lead comes from attractive shape, if not from physical body
    if (this.dragged) {
      Body.translate(
        this.physical_body, {
        // not absolute position but change
        x: (this.effectiveTopLeftPostion.x - this.physical_centre.x - this.offsetPhysical.x * SCALING_FACTOR),
        y: (this.effectiveTopLeftPostion.y - this.physical_centre.y - this.offsetPhysical.y * SCALING_FACTOR)
      }
      );
    } else {
      this.effectiveTopLeftPostion = {
        x: (this.physical_centre.x + this.offsetPhysical.x * SCALING_FACTOR),
        y: (this.physical_centre.y + this.offsetPhysical.y * SCALING_FACTOR)
      }
    }

    push();
    if (this.physical_body.isStatic) {
      image(
        this.sprite,
        this.attractivePosition.x,
        this.attractivePosition.y,
        this.sprite.width * SCALING_FACTOR,
        this.sprite.height * SCALING_FACTOR,
      );
    } else {
      // rotate around the physical centre but show the sprite on top left thus using the offset
      translate(this.physical_centre.x, this.physical_centre.y)
      rotate(this.physical_body.angle);

      image(
        this.sprite,
        this.offsetPhysical.x * SCALING_FACTOR,
        this.offsetPhysical.y * SCALING_FACTOR,
        this.sprite.width * SCALING_FACTOR,
        this.sprite.height * SCALING_FACTOR,
      );
    }
    pop();

    if (logging.getLevel() <= 1) {

      this.draw_attractive_shape_debugging();

      this.draw_physical_body_debugging();
    }
  }

  show_nosprite() {
    if (this.physical_body.isStatic) {
      if (logging.getLevel() <= 1) {
        this.draw_physical_body_debugging();
      }
    } else {
      push();
      fill(this.hue, 255, 255);
      noStroke()
      beginShape();
      for (var i = 0; i < this.physical_body.vertices.length; i++) {
        vertex(this.physical_body.vertices[i].x, this.physical_body.vertices[i].y);
      }
      endShape(CLOSE);
      pop();


    }
  }

  // SCALING FACTORs als global oder parameter??
  rescale_physical_body() {

    let centre_x_before = this.physical_centre.x;
    let centre_y_before = this.physical_centre.y;

    // scale recalculates physics of body automatically (e.g. centre, mass and so on)
    Body.scale(this.physical_body, SCALING_FACTOR, SCALING_FACTOR);

    // since also the canvas resized, there should also be a new position - for dynamic bodies, just erase them and recreate
    if (this.physical_body.isStatic) {

      // calculate the new position after applying the resize
      let new_position_x = centre_x_before * SCALING_FACTOR;
      let new_position_y = centre_y_before * SCALING_FACTOR;

      // calculate the difference for the translate function
      let correction_x = new_position_x - centre_x_before;
      let correction_y = new_position_y - centre_y_before;

      // console.log(correction_x);
      Body.translate(this.physical_body, { x: correction_x, y: correction_y });
    }
    this.physical_centre = Matter.Vertices.centre(this.physical_body.vertices);
  }

  remove_physical_body() {
    World.remove(world, this.physical_body);
    this.aliveFlag = false;  // set for array (p5.js)
  }

  // if attractive shape is selected by mouse
  clicked(pointerX, pointerY) {
    if (typeof this.sprite !== "undefined") {
      if (
        pointerX >= this.effectiveTopLeftPostion.x && pointerX <= (this.effectiveTopLeftPostion.x + this.sprite.width) &&
        pointerY >= this.effectiveTopLeftPostion.y && pointerY <= (this.effectiveTopLeftPostion.y + this.sprite.height)
      ) {
        // logging.debug("##########################");
        // logging.debug("pointerX: " + pointerX);
        // logging.debug("this.effectiveTopLeftPostion.x: " + this.effectiveTopLeftPostion.x);
        // logging.debug("this.sprite.width: " + this.sprite.width);
        // logging.debug("pointerY: " + pointerY);
        // logging.debug("this.effectiveTopLeftPostion.y: " + this.effectiveTopLeftPostion.y);
        // logging.debug("this.sprite.height: " + this.sprite.height);
        // logging.debug("##########################");
        // set initial offset on the first click - position where object is grabbed
        this.offsetMouse.x = this.effectiveTopLeftPostion.x - pointerX;
        this.offsetMouse.y = this.effectiveTopLeftPostion.y - pointerY;
        this.dragged = true;
        Matter.Body.setInertia(this.physical_body, Infinity);  // prevent rotation while dragging
      }
    }
  }
  drag(pointerX, pointerY) {
    if (this.dragged) {
      this.effectiveTopLeftPostion.x = pointerX + this.offsetMouse.x;
      this.effectiveTopLeftPostion.y = pointerY + this.offsetMouse.y;
    }
  }
  undrag() {
    // if (this.dragged) {
    //   logging.debug("Offset between effective attractive shape (top left) and physical body (centre of mass).")
    //   let xi = this.effectiveTopLeftPostion.x - this.physical_centre.x;
    //   let yi = this.effectiveTopLeftPostion.y - this.physical_centre.y;
    //   logging.debug("Offset - x:" + xi + " y: " + yi);
    //   logging.debug("Position effective attractive shape x: " + this.effectiveTopLeftPostion.x + " y: " + this.effectiveTopLeftPostion.y);
    // }
    this.dragged = false;
    Matter.Body.setInertia(this.physical_body, this.inertia);  // restore inertia
  }

  draw_attractive_shape_debugging() {
    // attractive shape - topf left
    push();
    strokeWeight(5);
    stroke(0, 150, 0);  // green
    point(
      this.effectiveTopLeftPostion.x,  // used to be this.attractivePosition.x
      this.effectiveTopLeftPostion.y
    )
    pop();

    // frame for sprite
    push();
    fill(0, 0);
    stroke(0, 150, 0);  // green
    rect(
      this.effectiveTopLeftPostion.x,
      this.effectiveTopLeftPostion.y,
      this.sprite.width * SCALING_FACTOR,  // smaller
      this.sprite.height * SCALING_FACTOR // smaller
    );
    pop();
  }

  // draw physical body and geometric centre for debugging
  draw_physical_body_debugging() {
    push();
    strokeWeight(1);
    fill(255, 0, 0, 50);
    beginShape();
    for (var i = 0; i < this.physical_body.vertices.length; i++) {
      vertex(this.physical_body.vertices[i].x, this.physical_body.vertices[i].y);
    }
    endShape(CLOSE);
    pop();

    // draw geometric centre
    push();
    strokeWeight(5);
    stroke(255, 0, 0, 150); // red
    point(this.physical_centre.x, this.physical_centre.y);
    // stroke(0, 150);  // grey
    // point(this.geometric_centre.x, this.geometric_centre.y);
    pop();

    push();
    fill(255, 0, 0);
    textSize(default_debugging_text_size * SCALING_FACTOR);
    // textAlign(CENTER, CENTER);
    text(this.physical_body.label, (this.physical_centre.x + 10), (this.physical_centre.y - 10));
    pop();
  }
}

//  hold all the particles and manage the new and dead ones
class Particles {
  constructor(buildingPlans = {}) {
    // element to hold the particles
    this.bodies = [];
    this.buildingPlans = buildingPlans;
  }
  // create all instances at once
  create_all() {
    for (let buildingPlan of this.buildingPlans) {
      this.bodies.push(new Particle(
        buildingPlan.position,
        buildingPlan.options,
        buildingPlan.vertices,
        buildingPlan.image,
        buildingPlan.offsetPhysical,
        buildingPlan.label,
      ));
    }
  }
  // old one 
  add_single_sprite(position) {  // all same particles

    let random_particle_index = Math.floor(random(0, this.buildingPlans.length));
    let chosen_building_plan = this.buildingPlans[random_particle_index];

    // correct for difference between top left and centre
    let position_corrected = {
      x: position.x + chosen_building_plan.offsetPhysical.x * SCALING_FACTOR,
      y: position.y + chosen_building_plan.offsetPhysical.y * SCALING_FACTOR,
    }

    this.bodies.push(new Particle(
      // position,
      position_corrected,
      chosen_building_plan.options,
      chosen_building_plan.vertices,
      chosen_building_plan.image,
      chosen_building_plan.offsetPhysical,
      chosen_building_plan.label,
    ));

    // rescale the newly created body
    this.bodies[(this.bodies.length - 1)].rescale_physical_body();
  }

  // add_single(position, options, label) {  // all same particles
  //   this.bodies.push(new Particle(
  //     position = position,
  //     options = options,
  //     label = label,
  //   ));
  // }

  kill_not_needed(max_number) {
    this.kill_all_outside_canvas();
    this.kill_too_many(max_number);
  }

  kill_all_outside_canvas() {
    for (let i = this.bodies.length - 1; i >= 0; i--) {
      if (
        (this.bodies[i].physical_body.position.x < 0) ||
        (this.bodies[i].physical_body.position.x > width) ||
        (this.bodies[i].physical_body.position.y < 0) ||
        (this.bodies[i].physical_body.position.y > height)
      ) {
        // console.log("outside!")
        this.bodies[i].remove_physical_body();
      }
    }

  }
  kill_too_many(max_number) {
    // loop backwards to preserve the index after removal
    if (this.bodies.length > max_number) {
      var first_bodies_indexes = this.bodies.length - max_number
      for (let i = 0; i <= first_bodies_indexes - 1; i++) {
        this.bodies[i].remove_physical_body();
      }
      // NECESSARY FOR ATTRACITVE SHAPES???
      // this.bodies.splice(0, first_bodies_indexes);  // remove instantly
    }
  }
  clicked(pointerX, pointerY) {
    for (let particle of this.bodies) {
      particle.clicked(pointerX, pointerY);
    }
  }
  drag(pointerX, pointerY) {
    for (let particle of this.bodies) {
      particle.drag(pointerX, pointerY);
    }
  }
  undrag() {
    for (let particle of this.bodies) {
      particle.undrag();
    }
  }
  show() {
    // remove the dead
    this.bodies = this.bodies.filter(function (value, index, arr) {
      return value.aliveFlag == true;
    });

    // logging.debug("Number of bodies: " + this.bodies.length);

    for (let particle of this.bodies) {
      particle.show();
      // console.log(particle);
    }
  }
  rescale() {
    for (let particle of this.bodies) {
      particle.rescale_physical_body();
    }
  }
  kill_all() {
    for (let particle of this.bodies) {
      particle.remove_physical_body();
    }
    this.bodies = [];
  }
}