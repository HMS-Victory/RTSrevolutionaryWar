ws.onopen = () => {
  document.querySelector(".disconnected").hidden=true;
  menuData.connected = true
};
ws.onclose=()=>{
  document.querySelector(".disconnected").hidden=false
}
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.message === "gameList") {
    //delete any previous items from before the refresh was pressed
    const previousItems =
      document.getElementById("availableGameList").childNodes;
    Array.from(previousItems, (item) => {
      item.remove();
    });
    for (let i = 0; i < data.unstartedGames.length; i++) {
      generateListItem(
        data.unstartedGames[i].playersJoined,
        data.unstartedGames[i].gold,
        data.unstartedGames[i].map,
        i
      );
    }
  } else if (data.message === "joinGameData") {
    menuData.gold = data.gold;
    goldDisplay.textContent = menuData.gold;
  } else if (data.message === "GameId") {
    menuData.selectedId = data.gameId;
  } else if (data.message === "Start") {
    sessionStorage.setItem("gameId", data.gameId);
    sessionStorage.setItem("player", menuData.player)
    window.location.href = "../index.html";
  }
};
