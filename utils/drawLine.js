function drawLineDiagonalLeft(width, height, positionx, positiony, ctx) {
  ctx.beginPath();
  ctx.moveTo(positionx + width, positiony);
  ctx.lineTo(positionx, positiony + height);
  ctx.stroke();
}
function drawLineDiagonalRight(width, height, positionx, positiony, ctx) {
  ctx.beginPath();
  ctx.moveTo(positionx, positiony);
  ctx.lineTo(positionx + width, positiony + height);
  ctx.stroke();
}

function drawHorizontalLine(width, positionx, positiony, ctx){
  ctx.beginPath();
  ctx.moveTo(positionx, positiony);
  ctx.lineTo(positionx + width, positiony);
  ctx.stroke();
}
function drawVerticalLine(height, positionx, positiony, ctx){
  ctx.beginPath();
  ctx.moveTo(positionx, positiony);
  ctx.lineTo(positionx, positiony+height);
  ctx.stroke();
}


function outlineUnit(width, height, positionx, positiony, ctx){
  ctx.strokeStyle = '#ffffff';
  //left vertical line
  ctx.beginPath();
  ctx.moveTo(positionx, positiony);
  ctx.lineTo(positionx, positiony+height);
  ctx.stroke();
  // top horizontal line
  ctx.beginPath();
  ctx.moveTo(positionx, positiony);
  ctx.lineTo(positionx+width, positiony);
  ctx.stroke();
  //right vertical line
  ctx.beginPath();
  ctx.moveTo(positionx+width, positiony);
  ctx.lineTo(positionx+width, positiony+height);
  ctx.stroke();
  //bottom horizontal line
  ctx.beginPath();
  ctx.moveTo(positionx+width, positiony+height);
  ctx.lineTo(positionx, positiony+height);
  ctx.stroke();
  ctx.strokeStyle='#000000'
}
function drawSquare(width, height, positionx, positiony, ctx){
  ctx.strokeStyle = 'black';
  //left vertical line
  ctx.beginPath();
  ctx.moveTo(positionx, positiony);
  ctx.lineTo(positionx, positiony+height);
  ctx.stroke();
  // top horizontal line
  ctx.beginPath();
  ctx.moveTo(positionx, positiony);
  ctx.lineTo(positionx+width, positiony);
  ctx.stroke();
  //right vertical line
  ctx.beginPath();
  ctx.moveTo(positionx+width, positiony);
  ctx.lineTo(positionx+width, positiony+height);
  ctx.stroke();
  //bottom horizontal line
  ctx.beginPath();
  ctx.moveTo(positionx+width, positiony+height);
  ctx.lineTo(positionx, positiony+height);
  ctx.stroke();
  ctx.strokeStyle='#000000'
}

function drawStagingAreas(ctx, CANVAS_WIDTH){
  //player1
  ctx.strokeStyle = 'red';
  drawHorizontalLine(CANVAS_WIDTH, 0, 630, ctx)
  //player2
  ctx.strokeStyle="blue";
  drawHorizontalLine(CANVAS_WIDTH, 0, 90, ctx)
  ctx.strokeStyle="black"
}