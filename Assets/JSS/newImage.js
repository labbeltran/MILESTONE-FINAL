// function newImage(url){
//     let image = document.createElement('img')
//     image.src = url
//     image.style.position = 'absolute'
//     document.body.append(image)
//     return image
// }

function createNinja(){
    let ninja = document.createElement('img');
    ninja.src = './Assets/img/ninjaIdle.png';
    ninja.style.position = 'fixed';
    ninja.style.left = '200px';
    ninja.style.bottom= '200px';
    document.body.append(ninja);
    return ninja;
}

function createExit(){
    let exit = document.createElement ('img');
    exit.src = './Assets/img/pearly-gates.jpg';
    exit.style.position = 'fixed';
    exit.style.left = '100px';
    exit.style.bottom = '100px';
    document.body.append (exit);
    return exit;
}

    // tank.addEventListener('click' )