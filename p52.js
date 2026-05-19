let symmetry = 10;
let angle = 720 / symmetry;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(255);
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let lineStartX = mouseX - width / 3;
    let lineStartY = mouseY - height / 3;
    let lineEndX = pmouseX - width / 2;
    let lineEndY = pmouseY - height / 2;

      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        stroke(lineStartX, 175, 100, 220);
        strokeWeight(3);
        line(lineStartY, lineEndY, lineEndX, lineStartX);

        push();
        scale(0, 1);
        line(lineStartY, lineEndX, lineEndY, lineStartX);
        pop();
      }
    }
  }