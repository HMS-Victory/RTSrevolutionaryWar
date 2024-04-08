function handleMouseUp(dragData, player) {
  if (player === "player1") {
    if (dragData.active) {
      side1.map((unit) => {
        //trigger the predefined movement
        if (unit.selected) {
          if (dragData.endx === 0 && dragData.endy === 0) {
            unit.destination.x = dragData.startx;
            unit.destination.y = dragData.starty;
            unit.destination.orientation = unit.orientation;
          }
          if(gameReady){
            unit.destination.isMoving = true;
          }else{
            //lowest y-value for player1 staging area
            if(unit.destination.y >= 630){
              unit.destination.isDropped=true;
            }
          }
          unit.selected = false;
        }
      });
    }
  } else if(player==="player2") {
    if (dragData.active) {
      side2.map((unit) => {
        //trigger the predefined movement
        if (unit.selected) {
          //in case of a normal click
          //since we only set dragData.endx, or endy are only set in the move function when move is active
          //and move is activated at a click
          if (dragData.endx === 0 && dragData.endy === 0) {
            unit.destination.x = dragData.startx;
            unit.destination.y = dragData.starty;
            unit.destination.orientation = unit.orientation;
          }
          if(gameReady){
            unit.destination.isMoving = true;
          }else{
            if(unit.destination.y <= 90){
              unit.destination.isDropped=true;
            }
          }
          unit.selected = false;
        }
      });
    }
  }
//reset drag data
dragData.active = false;
dragData.startx = 0;
dragData.starty = 0;
dragData.endx = 0;
dragData.endy = 0;
}
