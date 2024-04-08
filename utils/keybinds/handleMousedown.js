function handleMousedown(event, dragData, player) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  if (player === "player1") {
    side1.map((unit) => {
      if (
        x >= unit.positionx &&
        x <= unit.positionx + unit.width &&
        y >= unit.positiony &&
        y <= unit.positiony + unit.height
      ) {
        unit.selected = true;
      } else {
        if (unit.selected && !event.ctrlKey) {
          dragData.startx = x;
          dragData.starty = y;
          dragData.active = true;
        } else if (!event.ctrlKey) {
          //unselect a unit if it is not selecting another unit
          unit.selected = false;
        }
      }
    });
  } else {
    side2.map((unit) => {
      if (
        x >= unit.positionx &&
        x <= unit.positionx + unit.width &&
        y >= unit.positiony &&
        y <= unit.positiony + unit.height
      ) {
        unit.selected = true;
      } else {
        if (unit.selected && !event.ctrlKey) {
          dragData.startx = x;
          dragData.starty = y;
          dragData.active = true;
        } else if (!event.ctrlKey) {
          unit.selected = false;
        }
      }
    });
  }
}

function sideBarMouseDown(event, sidebarItems) {
  let i = 0;
  Array.from(sidebarItems, (item) => {
    if (
      !event.ctrlKey &&
      (item.toString() === "[object HTMLImageElement]" ||
        item.toString() === "[object HTMLDivElement]")
    ) {
      const unit = document.getElementById(`${i}`);

      unit.classList.remove("selectedUnit");
      i++;
    }
  });
  event.target.classList.add("selectedUnit");
  if (player === "player1" && event.target.id) {
    side1[event.target.id].selected=true;
  } else if (player === "player2" && event.target.id) {
    side2[event.target.id].selected=true
  }
}
