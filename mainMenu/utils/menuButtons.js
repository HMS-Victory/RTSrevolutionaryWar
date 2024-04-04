newGameBtn.addEventListener("click", () => {
  if (!menuData.menuDisabled) {
    customGameModal.hidden = false;
    menuData.menuDisabled = true;
  }
});
gameListBtn.addEventListener("click", () => {
  if (!menuData.menuDisabled) {
    gameListModal.hidden = false;
    menuData.menuDisabled = true;
    if (menuData.connected) {
      ws.send(JSON.stringify({ message: "GameList" }));
    }
  }
});
