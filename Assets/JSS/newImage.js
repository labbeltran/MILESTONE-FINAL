// function newImage(url){
//     let image = document.createElement('img')
//     image.src = url
//     image.style.position = 'absolute'
//     document.body.append(image)
//     return image
// }

function createTank(){
    let tank = document.createElement('img')
    tank.src = './Assets/img/LabyrinthTank 2.jpg'
    tank.position = 'fixed'
    tank.left = '500px'
    tank.bottom= '400px'
    document.body.append(tank)
    return tank
}

function createExit{
    let exit = document.createElement ('img')
    exit.src = './Assets/img/pearly-gates.jpg'
    exit.position = 'fixed'
    exit.left = '700px'
    exit.bottom = '200px'
    document.body.append (exit)
    return exit
}

    // tank.addEventListener('click' )