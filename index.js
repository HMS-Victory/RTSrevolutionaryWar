const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 1080);
const CANVAS_HEIGHT = (canvas.height = 720);
const TILE_SIZE = 30;

let side1 = [];
let side2 = [];
let side1Unit = null;
let side2Unit = null;

let dragData = {
  active: false,
  startx: 0,
  starty: 0,
  endx: 0,
  endy: 0,
};

side1.push(
  new Infantry(ctx, (color = "red"), (positionx = 300), (positiony = 300))
);
side1.push(
  new Infantry(ctx, (color = "red"), (positionx = 100), (positiony = 100))
);
side1.push(
    new Infantry(ctx, (color = "red"), (positionx = 150), (positiony = 150))
  );
side1.push(
new Infantry(ctx, (color = "red"), (positionx = 200), (positiony = 200))
);

function animate() {
  ctx.fillStyle = "black";
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //draw terrain
  renderMap();

  //render all units for both sides
  side1.map((unit) => {
    unit.draw();
    unit.animate();
  });
  side2.map((unit) => {
    unit.draw();
    unit.animate();
  });

  requestAnimationFrame(animate);
}
animate();

canvas.addEventListener("mousedown", (event) =>
  handleMousedown(event, dragData)
);

document.addEventListener("keypress", (event) => {
  handleKeypress(event);
});

//drag event listeners
document.addEventListener("mousemove", (event) => {
  handleMouseMove(event, dragData)
});
//on a regular click this will be done imediatly
document.addEventListener("mouseup", () => {
  //reset values after finishing dragging an item
  handleMouseUp(dragData, side1)
});
