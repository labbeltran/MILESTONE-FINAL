function newNonPlayableCharacter(x, y) {
    let element = newImage('./Assets/img/Gate-Guardianl.jpg')
    element.style.zIndex = 1;
    
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
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    async function walkEast(time) {
        direction = 'east';
        element.src = './Assets/img/Gate-Guardianl.jpg';
            await sleep(time)
            stop()
    }
    

    async function walkNorth(time) {
        direction = 'north'
        element.src = `./Assets/img/Gate-Guardianl.jpg`
            await sleep(time)
            stop()
    }

    async function walkWest(time) {
        direction = 'west'
        element.src = `./Assets/img/Gate-Guardianl.jpg`
            await sleep(time)
            stop()
    }

    async function walkSouth(time) {
        direction = 'south'
        element.src = `./Assets/img/Gate-Guardianl.jpg`
            await sleep(time)
            stop()
    }

    function stop() {
        direction = null
        element.src = `./Assets/img/Gate-Guardianl.jpg`
    }

    return {
        element: element,
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