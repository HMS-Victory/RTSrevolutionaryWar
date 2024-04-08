class Infantry {
  constructor(ctx, color, positionx, positiony) {
    this.unitType = "Infantry";
    this.height = 15;
    this.width = 30;
    this.strength = 1;
    this.health = 1000;
    this.moral = 500;
    this.cover = 0;
    this.baseCover = 0;
    this.accuracy = 50;
    this.baseAccuracy = 50;
    this.range = 100;
    this.baseRange = 100;
    this.canMelee = true;
    this.speed = 1;
    this.baseSpeed = 1;
    this.selected = false;
    this.destination = {
      isMoving: false,
      isDropped: false,
      x: 0,
      y: 0,
      orientation: "",
    };
    this.orientation = "north";

    this.ctx = ctx;
    this.color = color;
    this.positionx = positionx;
    this.positiony = positiony;
  }
  draw() {
    this.ctx.fillStyle = this.color;
    ctx.fillRect(this.positionx, this.positiony, this.width, this.height);
    drawLineDiagonalRight(
      this.width,
      this.height,
      this.positionx,
      this.positiony,
      this.ctx
    );
    drawLineDiagonalLeft(
      this.width,
      this.height,
      this.positionx,
      this.positiony,
      this.ctx
    );
    if (this.orientation === "north") {
      drawHorizontalLine(this.width, this.positionx, this.positiony - 3, ctx);
    } else if (this.orientation === "south") {
      drawHorizontalLine(
        this.width,
        this.positionx,
        this.positiony + this.height + 3,
        ctx
      );
    } else if (this.orientation === "east") {
      drawVerticalLine(
        this.height,
        this.positionx + this.width + 3,
        this.positiony,
        ctx
      );
    } else {
      drawVerticalLine(this.height, this.positionx - 3, this.positiony, ctx);
    }

    if (this.selected === true) {
      outlineUnit(
        this.width,
        this.height,
        this.positionx,
        this.positiony,
        this.ctx
      );
    }
    drawDestination(this.destination, this.selected, this.ctx);
  }
  drawStats() {
    drawCircle(
      ctx,
      this.positionx + this.width / 2,
      this.positiony + this.height / 2,
      this.range
    );
  }

  animate() {
    if (this.destination.isMoving) {
      this.moveTo(this.destination.x, this.destination.y);
    } else if (this.destination.isDropped) {
      this.dropUnit(this.destination.x-(this.width/2), this.destination.y-(this.height/2));
    }
  }
  dropUnit(x, y){
   this.positionx=x;
   this.positiony=y;
   this.changeOrientation(this.destination.orientation);
   this.destination.isDropped=false
 }

  moveTo(x, y) {
    if (
      this.positionx + this.width / 2 === x &&
      this.positiony + this.height / 2 === y
    ) {
      this.changeOrientation(this.destination.orientation);
      this.destination.isMoving = false;
    }

    if (this.positionx + this.width / 2 < x) {
      this.positionx += this.speed;
      // this causes the game to glitch between 2 orientations
      // this.changeOrientation("east");
    } else if (this.positionx + this.width / 2 > x) {
      this.positionx -= this.speed;
      // this.changeOrientation("west");
    }
    if (this.positiony + this.height / 2 < y) {
      this.positiony += this.speed;
      // this.changeOrientation("south");
    } else if (this.positiony + this.height / 2 > y) {
      this.positiony -= this.speed;
      // this.changeOrientation("north");
    }

    this.destination.isMoving = true;
  }

  changeOrientation(direction) {
    switch (direction) {
      case "north":
        this.width = 30;
        this.height = 15;
        this.orientation = "north";
        break;
      case "east":
        this.width = 15;
        this.height = 30;
        this.orientation = "east";
        break;
      case "south":
        this.width = 30;
        this.height = 15;
        this.orientation = "south";
        break;
      case "west":
        this.width = 15;
        this.height = 30;
        this.orientation = "west";
        break;
    }
  }
}
