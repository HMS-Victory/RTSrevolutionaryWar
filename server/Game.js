

class Game{
    // side1UnitsPositions=[];
    // side2UnitsPositions=[];
    constructor({gold, side1Units, map, side2Units=null}){
        this.playersJoined=1;
        this.gold=gold;
        this.side1Units=side1Units;
        this.side2Units=side2Units;
        this.side1ArmyComposition={};
        this.side2ArmyComposition={};
        this.map=map
        this.started=false
        this.deploymentOver={
            side1: false,
            side2: false
        }
    }

    startGame(){
        
    }
}

module.exports=Game;