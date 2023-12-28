function newPlayableCharacter(x, y) {
    const shinobiRun = newImage('./Assets/img/ninjaIdle')
    shinobiRun.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            shinobiRun.src = `./Assets/img/ninjaIdle`;
        }
        if (direction === 'west') {
            shinobiRun.src = `./Assets/img/ninjaWest.png`;
        }
        if (direction === 'north') {
            shinobiRun.src = `./Assets/img/ninjaNS.png`;
        }
        if (direction === 'east') {
            shinobiRun.src = `./Assets/img/ninjaEast.png`;
        }
        if (direction === 'south') {
            shinobiRun.src = `./Assets/img/ninjaNS.png`;
        }
    }

    move(shinobiRun).withArrowKeys(x, y, handleDirectionChange);

    return {
        shinobiRun: shinobiRun
    }
};