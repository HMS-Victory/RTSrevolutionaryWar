function handleMouseMove(event, dragData, player) {
  if (player === "player1") {
    // keep track of how many units are in a column
    let rank = 0;
    let file = 0;

    let numSelected = 0;
    side1.map((unit) => {
      if (unit.selected && dragData.active) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        dragData.endx = x;
        dragData.endy = y;

        if (
          Math.abs(dragData.startx - dragData.endx) >
          Math.abs(dragData.starty - dragData.endy)
        ) {
          // if you dragged to the left
          if (dragData.startx > dragData.endx) {
            //handles horizontal drag formatting

            if (dragData.startx - dragData.endx < numSelected * 70) {
              rank++;
              file--;
              unit.destination.x = dragData.startx;
              unit.destination.y = dragData.starty - rank * 40;
            } else {
              unit.destination.x = dragData.startx - file * 70;
              unit.destination.y = dragData.starty;
              file++;
            }
            unit.destination.orientation = "south";
          } else {
            if (dragData.endx - dragData.startx < numSelected * 70) {
              rank++;
              file--;
              unit.destination.x = dragData.startx;
              unit.destination.y = dragData.starty + rank * 40;
            } else {
              unit.destination.x = dragData.startx + file * 70;
              unit.destination.y = dragData.starty;
              file++;
            }
            unit.destination.orientation = "north";
          }
        } else {
          //handles vertical drag formatting

          if (dragData.starty > dragData.endy) {
            if (dragData.starty - dragData.endy < numSelected * 70) {
              rank++;
              file--;
              unit.destination.y = dragData.starty;
              unit.destination.x = dragData.startx + rank * 40;
            } else {
              unit.destination.x = dragData.startx;
              unit.destination.y = dragData.starty - file * 70;
              file++;
            }
            unit.destination.orientation = "west";
          } else {
            if (dragData.endy - dragData.starty < numSelected * 70) {
              rank++;
              file--;
              unit.destination.y = dragData.starty;
              unit.destination.x = dragData.startx - rank * 40;
            } else {
              unit.destination.x = dragData.startx;
              unit.destination.y = dragData.starty + file * 70;
              file++;
            }

            unit.destination.orientation = "east";
          }
        }
        numSelected++;
      }
    });
    numSelected = 0;
  } else {
    // keep track of how many units are in a column
    let rank = 0;
    let file = 0;

    let numSelected = 0;
    side2.map((unit) => {
      if (unit.selected && dragData.active) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        dragData.endx = x;
        dragData.endy = y;

        if (
          Math.abs(dragData.startx - dragData.endx) >
          Math.abs(dragData.starty - dragData.endy)
        ) {
          // if you dragged to the left
          if (dragData.startx > dragData.endx) {
            //handles horizontal drag formatting

            if (dragData.startx - dragData.endx < numSelected * 70) {
              rank++;
              file--;
              unit.destination.x = dragData.startx;
              unit.destination.y = dragData.starty - rank * 40;
            } else {
              unit.destination.x = dragData.startx - file * 70;
              unit.destination.y = dragData.starty;
              file++;
            }
            unit.destination.orientation = "south";
          } else {
            if (dragData.endx - dragData.startx < numSelected * 70) {
              rank++;
              file--;
              unit.destination.x = dragData.startx;
              unit.destination.y = dragData.starty + rank * 40;
            } else {
              unit.destination.x = dragData.startx + file * 70;
              unit.destination.y = dragData.starty;
              file++;
            }
            unit.destination.orientation = "north";
          }
        } else {
          //handles vertical drag formatting

          if (dragData.starty > dragData.endy) {
            if (dragData.starty - dragData.endy < numSelected * 70) {
              rank++;
              file--;
              unit.destination.y = dragData.starty;
              unit.destination.x = dragData.startx + rank * 40;
            } else {
              unit.destination.x = dragData.startx;
              unit.destination.y = dragData.starty - file * 70;
              file++;
            }
            unit.destination.orientation = "west";
          } else {
            if (dragData.endy - dragData.starty < numSelected * 70) {
              rank++;
              file--;
              unit.destination.y = dragData.starty;
              unit.destination.x = dragData.startx - rank * 40;
            } else {
              unit.destination.x = dragData.startx;
              unit.destination.y = dragData.starty + file * 70;
              file++;
            }

            unit.destination.orientation = "east";
          }
        }
        numSelected++;
      }
    });
    numSelected = 0;
  }
}


function handleMouseScrolling(event){
  const viewportHeight = document.documentElement.clientHeight;
  const viewportWidth=document.documentElement.clientWidth;
  if(event.clientY >= viewportHeight-60){
    window.scrollBy(0, 20)
  }else if(event.clientY <= 60){
    window.scrollBy(0, -20)
  }else if(event.clientX >= viewportWidth-60){
    window.scrollBy(20, 0)
  }else if(event.clientX <= 60){
    window.scrollBy(-20, 0)
  }
}