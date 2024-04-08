const canvas = document.getElementById("canvas1");
const sidebar = document.getElementById("sidebar");
const sidebarItems = document.getElementById("sidebar").childNodes;
const startButton = document.getElementById("startButton");
const popup = document.getElementById("popup");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 1080);
const CANVAS_HEIGHT = (canvas.height = 720);
const TILE_SIZE = 20.5;
let player = sessionStorage.getItem("player");
let connected = false;
let gameReady = false;
let side1 = [];
let side2 = [];

const ws = new WebSocket("ws://localhost:8082");
const gameId = sessionStorage.getItem("gameId");

// const gameId = 0;
ws.onopen = () => {
  connected = true;
  ws.send(
    JSON.stringify({
      message: "onStartup",
      gameId: gameId,
    })
  );
};
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.message === "Start") {
    gameReady = true;
  } else if (data.message === "ping") {
    if (data.units) {
      if (data.side === "player1" && data.gameId === gameId) {
        //handle unit movement
        side2.map((unit, index) => {
          unit.positionx = data.units[index].x;
          unit.positiony = data.units[index].y;
          unit.changeOrientation(data.units[index].orientation);
        });
      } else if (data.side === "player2" && gameId === data.gameId) {
        side1.map((unit, index) => {
          unit.positionx = data.units[index].x;
          unit.positiony = data.units[index].y;
          unit.changeOrientation(data.units[index].orientation);
        });
      }
    }
  } else if (data.message === "startupData") {
    if (data.gameId === gameId) {
      assignArmies(data);
    }
  } else if (data.message === "tryStartupAgain") {
    ws.send(
      JSON.stringify({
        message: "onStartup",
        gameId: gameId,
      })
    );
  } else if (data.message === "deploymentOver") {
    gameReady = true;
    popup.hidden = true;
    popup.innerHTML = "";
  } else if (data.message === "awaitingDeployment") {
    if(data.gameId===gameId){
      console.log("running")
      ws.send(
        JSON.stringify({
          message: "awaitingDeployment",
          gameId: gameId,
        })
      );
    }
    
  }
};

//map vars
let side1Unit = null;
let side2Unit = null;
let mapLoaded = false;
//map/seed //0.5256069194573787
let map = 0;
let mapsize = 5086;
let renderHitBoxes = false;
let renderStats = false;
let renderVisibleStats = false;

let dragData = {
  active: false,
  startx: 0,
  starty: 0,
  endx: 0,
  endy: 0,
};

buildMap();

//the next process needs to be setting up the deployment phase

if (!gameReady) {
  document.getElementById("popup").hidden = false;
  DeploymentPopup();
}

function animate() {
  ctx.fillStyle = "black";
  if (renderHitBoxes) renderBoxes(); //render hitboxes
  else if (!renderHitBoxes) renderMap();
  if (!gameReady && mapLoaded) {
    drawStagingAreas(ctx, CANVAS_WIDTH);
  }

  side1.map((unit) => {
    unit.draw();
    unit.animate();
    if (renderVisibleStats) unit.drawStats();
  });
  side2.map((unit) => {
    unit.draw();
    unit.animate();
    if (renderVisibleStats) unit.drawStats();
  });
  handleHitBoxes();

  //ping the server
  if (connected) {
    if (player === "player1") {
      const units = [];
      side1.map((unit) =>
        units.push({
          x: unit.positionx,
          y: unit.positiony,
          orientation: unit.orientation,
          type: unit.unitType,
        })
      );
      ws.send(
        JSON.stringify({
          message: "ping",
          side: "side1",
          units: units,
          gameId,
        })
      );
    } else if (player === "player2") {
      const units = [];
      side2.map((unit) =>
        units.push({
          x: unit.positionx,
          y: unit.positiony,
          orientation: unit.orientation,
          type: unit.unitType,
        })
      );
      ws.send(
        JSON.stringify({
          message: "ping",
          side: "side2",
          units: units,
          gameId,
        })
      );
    }
  }
  requestAnimationFrame(animate);
}
animate();

function buildMap() {
  if (map == 0) {
    resetValues();
    generateRandomMap();
    placeCollisions();
    firstRenderOfMap();
    setTimeout(optimizeCanvas, 250);
  } else if (map == 1) {
    resetValues();
    savedMaps();
    placeCollisions();
    firstRenderOfMap();
    setTimeout(optimizeCanvas, 250);
  } else if (map == 2) {
    resetValues();
    savedMaps();
    placeCollisions();
    firstRenderOfMap();
    setTimeout(optimizeCanvas, 250);
  } else if (map == 3) {
    resetValues();
    savedMaps();
    placeCollisions();
    firstRenderOfMap();
    setTimeout(optimizeCanvas, 250);
  } else {
    resetValues();
    generateMapOfCustomSeed(map);
    placeCollisions();
    firstRenderOfMap();
    setTimeout(optimizeCanvas, 250);
  }
}

//for testing purposes
document.addEventListener("keypress", (event) => {
  if (event.key == "1") {
    let coordsX = getRandomInt(100, 1000);
    let coordsY = getRandomInt(100, 1000);
    side1.push(
      new Infantry(
        ctx,
        (color = "red"),
        (positionx = coordsX),
        (positiony = coordsY)
      )
    );
  } else if (event.key == "2") {
    let coordsX = getRandomInt(100, 1000);
    let coordsY = getRandomInt(100, 1000);
    side1.push(
      new Calvary(
        ctx,
        (color = "red"),
        (positionx = coordsX),
        (positiony = coordsY)
      )
    );
  } else if (event.key == "3") {
    let coordsX = getRandomInt(100, 1000);
    let coordsY = getRandomInt(100, 1000);
    side1.push(
      new Cannon(
        ctx,
        (color = "red"),
        (positionx = coordsX),
        (positiony = coordsY)
      )
    );
  } else if (event.key == "4") {
    let coordsX = getRandomInt(100, 1000);
    let coordsY = getRandomInt(100, 1000);
    side1.push(
      new General(
        ctx,
        (color = "red"),
        (positionx = coordsX),
        (positiony = coordsY)
      )
    );
  } else if (event.key == "h" && renderHitBoxes == true) renderHitBoxes = false;
  else if (event.key == "h" && renderHitBoxes == false) renderHitBoxes = true;
  else if (event.key == "r" && renderVisibleStats == true)
    renderVisibleStats = false;
  else if (event.key == "r" && renderVisibleStats == false)
    renderVisibleStats = true;
  else if (event.key == "c" && renderStats == true) renderStats = false;
  else if (event.key == "c" && renderStats == false) renderStats = true;
  else if (event.key == "=") findGoodSeeds(0, 175, 1000, 5000, 100, 750, 100);
  else if (event.key == "-") displayFoundSeeds();
  else if (event.key == " ") buildMap();
});
//findGoodSeeds(0, 175, 1250, 5000, 300, 750, 100);
//468 is the max moutains you can have
//2188 is the max forests you can have and 0 is the min
//337 is the max waters you can have and 8 is the min

//event listeners
canvas.addEventListener("mousedown", (event) =>
  handleMousedown(event, dragData, player)
);

document.addEventListener("keypress", (event) => {
  handleKeypress(event);
});

//drag event listeners
document.addEventListener("mousemove", (event) => {
  handleMouseMove(event, dragData, player);
  handleMouseScrolling(event);
});
document.addEventListener("mouseup", () => {
  handleMouseUp(dragData, player);
});

sidebar.addEventListener("click", (event) =>
  sideBarMouseDown(event, sidebarItems)
);

document.getElementById("startButton").addEventListener("click", () => {
  ws.send(
    JSON.stringify({
      message: "endDeployment",
      gameId: gameId,
      side: player === "player1" ? "side1" : (player === "player2" ? "side2" : ""),
    })
  );
});
