function newPlayableCharacter(x, y) {
    const element = newImage('./Assets/img/LabyrinthTank 2.jpg')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `./Assets/img/LabyrinthTank 2.jpg`
        }
        if (direction === 'west') {
            element.src = `./Assets/img/LabyrinthTank 2.jpg`
        }
        if (direction === 'north') {
            element.src = `./Assets/img/LabyrinthTank 2.jpg`
        }
        if (direction === 'east') {
            element.src = `./Assets/img/LabyrinthTank 2.jpg`
        }
        if (direction === 'south') {
            element.src = `./Assets/img/LabyrinthTank 2.jpg`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}