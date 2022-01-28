class Areas {
    constructor(data) {
        this.data = data;

        for (let currentArea of this.data) {
            currentArea.color = color(getRandomFromList(PALETTE));
            currentArea.color = distortColor(currentArea.color);
            currentArea.image = area_04.get(currentArea.x, currentArea.y, currentArea.w, currentArea.h);
            currentArea.x = getRandomFromInterval(0, width);
            currentArea.y = getRandomFromInterval(0, height);
            currentArea.angle = getRandomFromInterval(-Math.PI / 3, Math.PI / 3);
        }
    }
    show() {
        for (let currentArea of this.data) {
            push();
            tint(currentArea.color);
            image(
                currentArea.image,
                currentArea.x,
                currentArea.y,
                currentArea.image.width * SCALING_FACTOR,
                currentArea.image.height * SCALING_FACTOR
            )
            pop();
        }
    }
}