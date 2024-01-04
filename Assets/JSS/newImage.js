// function newImage(url){
//     let image = document.createElement('img')
//     image.src = url
//     image.style.position = 'absolute'
//     document.body.append(image)
//     return image
// }

function createNinja(x, y){
    console.log(`Create Ninja x:${x} : y:${y}`)
    let ninja = document.createElement('img');
    ninja.id = "ninja"
    ninja.src = '../Assets/img/ninjaIdle.png';
    ninja.style.width = "80px"
    ninja.style.height = "80px"
    ninja.style.position="relative"
    ninja.style.top=`${x}px`
    ninja.style.left=`${y}px`

    document.getElementById('character-container').append(ninja);
    return ninja;
}

function createExit(){
    let exit = document.createElement ('img');
    exit.src = './Assets/img/pearly-gates.jpg';
    exit.style.width = "80px"
    exit.style.height = "80px"
    document.getElementById('character-container').append(exit);
    return exit;
}

    // ninja.addEventListener('click' )