class Origin {
    constructor(position_x, position_y, label) {
        this.position_x = Math.abs(position_x);
        this.position_y = Math.abs(position_y);
        this.label = label;

        this.position_x = this.position_x * SCALING_FACTOR;
        this.position_y = this.position_y * SCALING_FACTOR;

        this.position = { x: this.position_x, y: this.position_y }
    }

    drop(frequency) {
        if (frameCount % frequency == 1) {
            particles_physical.add_single_sprite(this.position);
        }
    }

    draw_origin_positions_debug() {
        // print(this.position.x);
        push();
        strokeWeight(10);
        stroke(0, 0, 255);  // blue
        point(
            this.position.x,
            this.position.y
        )
        pop();

        push();
        fill(0, 0, 255);
        // textFont("Helvetica");
        textSize(default_debugging_text_size * SCALING_FACTOR);
        // textAlign(CENTER, CENTER);
        text(this.label, (this.position.x + 10), (this.position.y - 10));
        pop();
    }
}

// controlling the origins and the frequency of particles.
class Origins {
    constructor(buildingPlans = {}, co2_data) {
        this.min_particles = 50;
        this.max_particles = 500;
        this.frameRythm = 5;  // 20 - day change speed
        this.frequency_max_start = 5;  // frequency of particle drop - random between 1 and this value
        this.frequency_min_start = 1;

        this.current_co2 = 400;
        this.current_day_index = 0;
        this.current_particles_limit = 0;
        this.current_date_string = "";
        this.frequency = 1;

        this.bodies = [];
        this.buildingPlans = buildingPlans;
        this.co2_data = co2_data;

        // calculate min & max of co2 data
        this.data_trend = [];
        for (let co2_per_day of this.co2_data["co2"]) {
            this.data_trend.push(float(co2_per_day.trend));
        }
        this.co2_min = Math.min(...this.data_trend);
        this.co2_max = Math.max(...this.data_trend);

    }

    create_all() {
        for (let buildingPlan of this.buildingPlans) {
            this.bodies.push(new Origin(
                buildingPlan["x"],
                buildingPlan["y"],
                buildingPlan["label"]
            ));
        }
    }

    drop_all() {
        for (let origin of this.bodies) {
            let frequency = Math.floor((Math.random() * 100) + this.frequency_max);
            origin.drop(frequency);
        }
    }

    debugging_show_origins() {
        for (let origin of this.bodies) {
            origin.draw_origin_positions_debug();

        }
    }

    kill_all() {
        this.bodies = [];
    }

    // rythm of counting days up
    looping_through_days() {
        if (frameCount % this.frameRythm == 1) {
            // console.log(this.co2_data["co2"].length);
            // console.log(this.current_day_index);

            // reset to beginning
            if (this.current_day_index == (this.co2_data["co2"].length - 1))
                this.current_day_index = 0;

            this.current_day_index += 1;
            this.current_date_string = this.co2_data.co2[this.current_day_index].year + "-" + this.co2_data.co2[this.current_day_index].month + "-" + this.co2_data.co2[this.current_day_index].day;
            this.current_co2 = this.co2_data.co2[this.current_day_index].trend

            this.current_particles_limit = map(this.current_co2, this.co2_min, this.co2_max, this.min_particles, this.max_particles, true);
            this.frequency_max = map(this.current_co2, this.co2_max, this.co2_min, this.frequency_max_start, this.frequency_min_start, true);
        }
        particles_physical.kill_not_needed(this.current_particles_limit);
    }

    show_co2_label() {
        let text_size = 25;
        this.co2_string = this.current_co2 + ' ppm CO² in atmosphere'

        push();
        fill(50);
        // stroke(200);
        textSize(text_size * SCALING_FACTOR);
        // textStyle(BOLD);
        textFont(custom_font_bold);
        text(this.current_date_string, 3430 * SCALING_FACTOR, 2100 * SCALING_FACTOR);
        textFont(custom_font);
        // textStyle(NORMAL);
        text(this.co2_string, 3320 * SCALING_FACTOR, 2130 * SCALING_FACTOR);
        pop();
    }

    // show the current limit/goal of physical bodies in the world
    show_number_physical_bodies() {

        let string = "Particle Goal: " + this.current_particles_limit.toFixed(0);
        push();
        fill(255);
        stroke(0);
        text(string, 10, height - 50);
        pop();
        // console.log(this.frequency_max);
    }

}
