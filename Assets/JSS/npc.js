function newNonPlayableCharacter(x, y) {
    let mazeGuardian = newImage('./Assets/img/santaIdle.png')
    mazeGuardian.style.zIndex = 2;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        mazeGuardian.style.left = x + 'px'
        mazeGuardian.style.bottom = y + 'px'
    }
    console.log(newNonPlayableCharacter() )

    setInterval(moveCharacter, 1)

    async function walkEast(time) {
        direction = 'east';
        mazeGuardian.src = './Assets/img/santaEast.png';
            await sleep(time)
            stop()
    }
    

    async function walkNorth(time) {
        direction = 'north'
        mazeGuardian.src = `./Assets/img/santaNS.png`
            await sleep(time)
            stop()
    }

    async function walkWest(time) {
        direction = 'west'
        mazeGuardian.src = `./Assets/img/santaWest.png`
            await sleep(time)
            stop()
    }

    async function walkSouth(time) {
        direction = 'south'
        mazeGuardian.src = `./Assets/img/santaNS.png`
            await sleep(time)
            stop()
    }

    function stop() {
        direction = null
        element.src = `./Assets/img/santaIdle.png`
    }

    return {
        mazeGuardian: mazeGuardian,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }

    function sleep(time){
        return new Promise(resolve => {
            setTimeout(resolve, time)
        })  
    }
}