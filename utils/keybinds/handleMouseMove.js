function handleMouseMove(event, dragData) {
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
            unit.destination.x = dragData.startx;
            unit.destination.y = dragData.starty - numSelected * 40;
          } else {
            unit.destination.x = dragData.startx - numSelected * 70;
            unit.destination.y = dragData.starty;
          }
          unit.destination.orientation='south';
        } else {
          if (dragData.endx-dragData.startx < numSelected * 70) {
            unit.destination.x = dragData.startx;
            unit.destination.y = dragData.starty + numSelected * 40;
          } else {
            unit.destination.x = dragData.startx + numSelected * 70;
            unit.destination.y = dragData.starty;
          }
          unit.destination.orientation='north';

        }
      } else {
        //handles vertical drag formatting

        if (dragData.starty > dragData.endy) {
          if(dragData.starty - dragData.endy <numSelected * 70){
            unit.destination.y = dragData.starty;
            unit.destination.x = dragData.startx + numSelected * 40;
          }else{
            unit.destination.x = dragData.startx;
            unit.destination.y = dragData.starty - numSelected * 70;
          }
          unit.destination.orientation='west';
        } else {
          if(dragData.endy-dragData.starty < numSelected * 70){
            unit.destination.y = dragData.starty;
            unit.destination.x = dragData.startx - numSelected * 40;
          }else{
            unit.destination.x = dragData.startx;
            unit.destination.y = dragData.starty + numSelected * 70;
          }
          
          unit.destination.orientation='east'

        }
      }
      numSelected++;
    }
  });
  numSelected = 0;
}
