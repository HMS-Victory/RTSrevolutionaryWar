goldInput.addEventListener("change", () => (gold = goldInput.value));

mapList.addEventListener("click", (event) => {
  if (event.target.toString() === "[object HTMLParagraphElement]") {
    Array.from(mapListItems, (item) => {
      if (item.classList) {
        item.classList.remove("selected");
      }
      selectedMap = "";
    });
    event.target.classList.add("selected");
    menuData.selectedMap = event.target.textContent;
  }
});


//exit button
exitCustomButton.addEventListener("click", () => {
  if (menuData.menuDisabled) {
    customGameModal.hidden = true;
    menuData.menuDisabled = false;
  }
});


//start custom and random games
startCustomBtn.addEventListener("click", () => {
  if (menuData.connected) {
    let unitsArr=[]
    const unitTypes=Object.keys(menuData.units)
    const goldTotal = parseInt(menuData.gold) + parseInt(menuData.goldSpent);
    unitTypes.forEach((unitType, index)=>{
      for(let i=0; i<menuData.units[unitType]; i++){
        unitsArr.push({
          type: index===0 ? "Infantry" :index===1? "Cavalry" : index===2 ? "Cannon": ""
        })
      }
    })
    console.log(unitsArr)
    ws.send(
      JSON.stringify({
        message: "newGame",
        units: unitsArr,
        selectedMap: menuData.selectedMap,
        gold: goldTotal,
      })
    );
    waitingForOtherPlayers.hidden = false;
    customGameModal.hidden = true;
    menuData.waitingForOtherPlayers=true;
    menuData.player="player1"
    awaitJoinGame();
  }
});
startRandomBtn.addEventListener("click", () => {
  if (menuData.connected) {
    ws.send(
      JSON.stringify({
        message: "newRandomGame",
      })
    );
    menuData.waitingForOtherPlayers=true;
    awaitJoinGame();
    waitingForOtherPlayers.hidden = false;
    customGameModal.hidden = true;
    menuData.player="player1";
  }
});

//host leave game
hostLeaveGameButton.addEventListener("click", () => {
  if (menuData.connected) {
    ws.send(
      JSON.stringify({
        message: "destroyGame",
        gameId: menuData.selectedId,
      })
    );
  }
  menuData.waitingForOtherPlayers= false,
  waitingForOtherPlayers.hidden = true;
  customGameModal.hidden = false;
});