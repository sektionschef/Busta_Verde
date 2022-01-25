// strokes as impediments
class Strokes extends Particles {
    constructor(data) {

        const options = {
            isStatic: true,
            friction: 1,
            restitution: 0.5,
            density: 1,
            inertia: Infinity,  // prevents rotation
        }

        for (let currentStroke of data) {
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
            currentStroke.options = options;

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

        super(data);
    }
}