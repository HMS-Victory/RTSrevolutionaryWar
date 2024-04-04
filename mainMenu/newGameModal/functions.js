function awaitJoinGame() {
  if (Number.isInteger(menuData.selectedId)) {
    ws.send(
      JSON.stringify({
        message: "awaitPlayers",
        gameId: menuData.selectedId,
      })
    );
  }
  if (menuData.waitingForPlayers === false) {
    return;
  }
  requestAnimationFrame(awaitJoinGame);
}
