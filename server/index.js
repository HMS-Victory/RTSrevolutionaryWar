const express = require("express");
const webSocket = require("ws");
const http = require("http");

const Game = require("./Game");
const ping = require("./utils/Ping");

const app = express();
const server = http.createServer(app);
const wss = new webSocket.Server({ server });

let games = [];
let unstartedGames = [];

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    const input = JSON.parse(data);
    if (input.message === "ping") {
      const game = games[input.gameId];
      if (input.side === "side1") {
        if (game) {
          game.side1Units=input.units
          ping(ws, "player1", game.side2Units, input.gameId);
        } else {
          ping(ws, "player1", [], input.gameId);
        }
      } else if (input.side === "side2") {
        if (game) {
          game.side2Units=input.units
          ping(ws, "player2", game.side1Units, input.gameId);
        } else {
          ping(ws, "player2", [], input.gameId);
        }
      }
    } else if (input.message === "GameList") {
      let arr = [];
      unstartedGames.forEach((game) => {
        if (game.playersJoined <= 1) {
          arr.push(game);
        }
      });
      try {
        ws.send(
          JSON.stringify({
            message: "gameList",
            unstartedGames: arr,
          })
        );
      } catch (error) {
        console.log(error);
      }
    } else if (input.message === "newGame") {
      unstartedGames.push(
        new Game({
          gold: input.gold,
          side1Units: input.units,
          map: input.selectedMap,
        })
      );
      const gameId = unstartedGames.length - 1;
      try {
        ws.send(
          JSON.stringify({
            message: "GameId",
            gameId: gameId,
          })
        );
      } catch (error) {
        console.log(error);
      }
    } else if (input.message === "newRandomGame") {
      //random game calculations here
      unstartedGames.push(
        new Game({
          gold: 1000,
          side1Units: {
            infantry: Math.round(Math.random() * 10),
            cavalry: Math.round(Math.random() * 10),
            artillery: Math.round(Math.random() * 10),
          },
          map: "random",
          side2Units: {
            infantry: Math.round(Math.random() * 10),
            cavalry: Math.round(Math.random() * 10),
            artillery: Math.round(Math.random() * 10),
          },
        })
      );
      try {
        ws.send(
          JSON.stringify({
            message: "GameId",
            gameId: unstartedGames.length - 1,
          })
        );
      } catch (error) {
        console.log(error);
      }
    } else if (input.message === "joinGame") {
      // get data from game being joined
      unstartedGames[input.gameId].playersJoined++;
      try {
        ws.send(
          JSON.stringify({
            message: "joinGameData",
            gold: unstartedGames[input.gameId].gold,
            playersJoined: unstartedGames[input.gameId].playersJoined,
          })
        );
      } catch (error) {
        console.log(error);
      }
    } else if (input.message === "leaveGame") {
      // if the second player to join leaves the game
      for (let i = 0; i <= unstartedGames.length; i++) {
        if (i == input.gameId) {
          console.log("leave game");
          unstartedGames[i].playersJoined--;
          unstartedGames.side2Units = null;
        }
      }
    } else if (input.message === "destroyGame") {
      delete unstartedGames[input.gameId];
    } else if (input.message === "Play") {
      for (let i = 0; i < unstartedGames.length; i++) {
        if (i == input.gameId) {
          unstartedGames[i].started = true;
          unstartedGames[i].side2Units = input.units;
        }
      }
      try {
        ws.send(
          JSON.stringify({
            message: "Start",
            gameId: games.length,
          })
        );
      } catch (error) {
        console.log(error);
      }
    } else if (input.message === "awaitPlayers") {
      if (
        unstartedGames[input.gameId] &&
        unstartedGames[input.gameId].started
      ) {
        games.push(unstartedGames[input.gameId]);
        delete unstartedGames[input.gameId];

        ws.send(
          JSON.stringify({
            message: "Start",
            gameId: games.length - 1,
          })
        );
      }
    } else if (input.message === "onStartup") {
      try {
        if (games[input.gameId]) {
          ws.send(
            JSON.stringify({
              message: "startupData",
              gameId: input.gameId,
              game: games[input.gameId],
            })
          );
        } else {
          ws.send(
            JSON.stringify({
              message: "tryStartupAgain",
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  ws.on("close", () => console.log("server close"));
});

app.use(express.static("public"));

server.listen(8082, () => {
  console.log("Server is listening on port 8082");
});
