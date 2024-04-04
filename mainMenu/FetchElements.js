const newGameBtn = document.getElementById("newGame");
const gameListBtn=document.getElementById("gameListBtn")
const joinGameBtn = document.getElementById("joinGameBtn");

//newGame modal
const customGameModal = document.querySelector(".customGame");
const goldInput = document.querySelector(".gold");
const infantryCount = document.getElementById("infantryCount");
const cavalryCount = document.getElementById("cavalryCount");
const artilleryCount = document.getElementById("artilleryCount");
const startCustomBtn = document.getElementById("startCustomGameBtn");
const startRandomBtn = document.getElementById("startRandomGameBtn");
const exitCustomButton = document.getElementById("exitCustomGameBtn");
const mapList = document.getElementById("mapList");
const mapListItems = document.getElementById("mapList").childNodes;
const mapSelected = document.querySelector(".selected");

//game list modal
const gameListItems = document.getElementById("availableGameList").childNodes;
const gameList=document.getElementById("availableGameList");
const gameListModal = document.querySelector(".gameListModal");
const refreshGameList = document.getElementById("refreshGameList");
const joinGame = document.getElementById("joinGame");
const exitGameList = document.getElementById("exitGameList");

//joiningGameModal
//access different displays
const infantryCount1 = document.getElementById("infantryCount1");
const cavalryCount1 = document.getElementById("cavalryCount1");
const artilleryCount1 = document.getElementById("artilleryCount1");
const goldDisplay=document.querySelector(".gold2")
const infantryCount2=document.getElementById("infantryCount2")
const cavalryCount2=document.getElementById("cavalryCount2");
const artilleryCount2=document.getElementById("artilleryCount2")
//set value equal to gold returned by server
// goldDisplay.textContent = gold;
const startGameButton = document.getElementById("StartJoinedGame")
const leaveGameButton = document.getElementById("leaveGame");

//waiting for other players modal
const waitingForOtherPlayers = document.getElementById(
  "waitingForOtherPlayers"
);
const hostLeaveGameButton = document.getElementById("hostLeaveGame");

//unit management buttons
const infantryIncrementButton = document.querySelector(".infantryAdd");
const infantryDecrementButton = document.querySelector(".infantrySubtract");
const cavalryIncrementButton = document.querySelector(".cavalryAdd");
const cavalryDecrementButton = document.querySelector(".cavalrySubtract");
const artilleryIncrementButton = document.querySelector(".artilleryAdd");
const artilleryDecrementButton = document.querySelector(".artillerySubtract");
//button variant
const infantryIncrementButton1 = document.querySelector(".infantryAdd1")
const infantryDecrementButton1 = document.querySelector(".infantrySubtract1");
const cavalryIncrementButton1 = document.querySelector(".cavalryAdd1");
const cavalryDecrementButton1 = document.querySelector(".cavalrySubtract1");
const artilleryIncrementButton1 = document.querySelector(".artilleryAdd1");
const artilleryDecrementButton1 = document.querySelector(".artillerySubtract1");

