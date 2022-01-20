class Editor {
  constructor() {
    this.vertices_text = "";
    this.markers = [];  // define vertices
  }

  show() {
    for (let marker of this.markers) {
      push();
      stroke('purple');
      strokeWeight(3);
      point(marker.x, marker.y);
      pop();
    }
  }
}
