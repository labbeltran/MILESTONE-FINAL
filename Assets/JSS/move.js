function move(shinobiMove) {
    shinobiMove.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        shinobiMove.style.left = left + 'px'
        shinobiMove.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;

        shinobiMove.style.left = x + 'px'
        shinobiMove.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y-=1
            }
            shinobiMove.style.left = x + 'px'
            shinobiMove.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'A'){
                direction = 'west'
            }
            if(e.key === 'W'){
                direction = 'north'
            }
            if(e.key === 'D'){
                direction = 'east'
            }
            if(e.key === 'S'){
                direction = 'south'
            }
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}