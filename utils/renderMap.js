function renderMap(){
    let x=0
    let y=0
    for(let i=0; i+1 <= gameMap.values.length; i++){
        // set terrain images
        switch(gameMap.values[i]){
            case 'gG':
                //green grass
                ctx.fillStyle='green';
                break;
            case 'hG':
                // hills green
                ctx.fillStyle='#2a611d';
                break;
            case 'wS':
                //water shallow
                ctx.fillStyle='blue';
        }
        
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE)

        if(x<=(CANVAS_WIDTH+TILE_SIZE)){
            x=x+TILE_SIZE
        }else{
            x=0
            y=y+TILE_SIZE
        }
        
    }
}