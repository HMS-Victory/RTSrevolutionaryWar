
refreshGameList.addEventListener("click", () => {
  if (menuData.connected) {
    ws.send(JSON.stringify({ message: "GameList" }));
  }
});
exitGameList.addEventListener("click", () => {
  if (menuData.menuDisabled) {
    gameListModal.hidden = true;
    menuData.menuDisabled = false;
  }
});
joinGameBtn.addEventListener("click", () => {
  if (menuData.connected) {
    ws.send(
      JSON.stringify({
        message: "joinGame",
        gameId: menuData.selectedId,
      })
    );
    menuData.player="player2";
    // find out if it is a random game, if it is show a modal briefly and then start
    gameListModal.hidden = true;
    document.querySelector(".joiningGame").hidden = false;
  }
});

gameList.addEventListener("click", (event) => {
  //check to see if you have clicked a div element
  if (event.target.toString() === "[object HTMLDivElement]") {
    Array.from(gameListItems, (item) => {
      item.classList.remove("joinGameSelected");
      menuData.selectedId = null;
    });
    event.target.classList.add("joinGameSelected");
    menuData.selectedId = event.target.id;
  }
});


//already chosen a game
startGameButton.addEventListener("click", () => {
  let unitsArr=[]
  const unitTypes=Object.keys(menuData.units)
  unitTypes.forEach((unitType, index)=>{
    for(let i=0; i<menuData.units[unitType]; i++){
      unitsArr.push({
        type: index===0 ? "Infantry" :index===1? "Cavalry" : index===2 ? "Cannon": ""
      })
    }
  })
  if(menuData.connected){
      ws.send(JSON.stringify({
          message: "Play",
          units: unitsArr,
          gameId: menuData.selectedId
      }))
  }
});
leaveGameButton.addEventListener("click", () => {
  if (menuData.connected) {
    ws.send(
      JSON.stringify({
        message: "leaveGame",
        gameId: menuData.selectedId,
      })
    );
    menuData = {
      connected: true,
      selectedMap: "random",
      menuDisabled: false,
      selectedId: null,
      gold: goldInput.value,
      goldSpent: 0,
      units: {
        infantry: 0,
        cavalry: 0,
        artillery: 0,
      },
    };
    document.querySelector(".joiningGame").hidden = true;
  }
});