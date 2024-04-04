

function ping(ws, side, units, gameId){
    try{
        ws.send(JSON.stringify({
          message: "ping",
          side: side,
          units,
          gameId
        }))
      }catch(error){
        console.log(error);
      }
}

module.exports=ping;