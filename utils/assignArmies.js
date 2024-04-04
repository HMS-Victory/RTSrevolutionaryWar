function assignArmies(data) {
  side1=[]
  side2=[]
  data.game.side1Units.forEach((unit) => {
    if (unit.type === "Infantry") {
      side1.push(new Infantry(ctx, "red", -500, -500));
    } else if (unit.type === "Cavalry") {
    } else if (unit.type === "Cannon") {
    }
  });
  data.game.side2Units.forEach((unit) => {
    if (unit.type === "Infantry") {
      side2.push(new Infantry(ctx, "blue", -500, -500));
    } else if (unit.type === "Cavalry") {
    } else if (unit.type === "Cannon") {
    }
  });

  if (player === "player1") {
    side1.forEach((unit, index) => {
      addElementToSidebar(index, "side1", unit.unitType);
    });
  } else if (player === "player2") {
    side2.forEach((unit, index) => {
      addElementToSidebar(index, "side2", unit.unitType);
    });
  }
}
