const ws = new WebSocket("ws://localhost:8082");
let menuData = {
  connected: false,
  waitingForOtherPlayers: false,
  selectedMap: "random",
  menuDisabled: false,
  selectedId: null,
  gold: goldInput.value,
  player: "",
  goldSpent: 0,
  units: {
    infantry: 0,
    cavalry: 0,
    artillery: 0,
  },
};
