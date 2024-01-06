let levelOneStart = [-220,-200 ]
let levelOneExit = [6,6];

let levelOne = [
    [1, 0, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 0],
    [1, 1, 0, 1, 0, 1],
    [0, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 1],
];

let levelTwo = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
];

let levelThree = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
// Global Variables----------

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth; // CSS element
canvas.height = innerHeight; // CSS element

class Boundary {
    static width = 60;
    static height = 60;

    constructor({ position, image }) {
        this.position = position;
        this.width = 60;
        this.height = 60;
        this.image = image;
        this.image = createImage(this.image);
    }

    draw() {
        if (this.image.complete) {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        } else {
            c.fillStyle = 'Purple';
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }
}

function createImage(src) {
    const image = new Image();
    image.src = src;
    return image;
}

const keys = {
    w: { pressed: false },
    a: { pressed: false },
    s: { pressed: false },
    d: { pressed: false },
};

let lastKey = '';

const maze = [
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '1', '0', '1', '1', '1', '1', '1', '0'],
    ['0', '1', '1', '0', '1', '0', '0', '1', '0'],
    ['0', '1', '0', '1', '1', '0', '1', '1', '0'],
    ['0', '1', '0', '1', '1', '0', '1', '0', '0'],
    ['0', '1', '1', '0', '1', '0', '1', '1', '0'],
    ['0', '0', '1', '0', '1', '0', '0', '1', '0'],
    ['0', '1', '1', '1', '1', '1', '0', '1', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
];

const boundaries = [];

maze.forEach((row, i) => {
    row.forEach((symbol, j) => {
        switch (symbol) {
            case '0':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: 60 * j,
                            y: 60 * i,
                        },
                        image: 'Assets/img/sakuraTree.png',
                    })
                );
                break;
        }
    });
});

// Player Class
class Player {
    constructor() {
        this.position = { x: canvas.width / 2, y: canvas.height / 2 };
        this.velocity = { x: 0, y: 0 };
        this.width = 60;
        this.height = 60;
        this.imageSource = 'Assets/img/ninjaIdle.png'
        this.image = createImage(this.imageSource);
    }

    draw() {
        if (this.image.complete) {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        } else {
            c.fillStyle = 'yellow';
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

const player = new Player(); // Initialize the player

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    boundaries.forEach((boundary) => {
        boundary.draw();
    });

    player.update();
    player.velocity.x = 0;
    player.velocity.y = 0;

    if (keys.w.pressed && lastKey === 'w') {
        player.velocity.y = -5;
    } else if (keys.a.pressed && lastKey === 'a') {
        player.velocity.x = -5;
    } else if (keys.s.pressed && lastKey === 's') {
        player.velocity.y = 5;
    } else if (keys.d.pressed && lastKey === 'd') {
        player.velocity.x = 5;
    }
}

window.addEventListener('keydown', ({ key }) => {
    switch (key) {
        case 'w':
            keys.w.pressed = true;
            lastKey = 'w';
            break;
        case 'a':
            keys.a.pressed = true;
            lastKey = 'a';
            break;
        case 's':
            keys.s.pressed = true;
            lastKey = 's';
            break;
        case 'd':
            keys.d.pressed = true;
            lastKey = 'd';
            break;
    }
});

window.addEventListener('keyup', ({ key }) => {
    switch (key) {
        case 'w':
            keys.w.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
        case 's':
            keys.s.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
    }
});

animate(); // Start the animation loop

// let main = document.getElementById('main');
// let maze = document.getElementById('maze-container');
// let ninja = document.getElementById('');
// let exit = document.getElementById('pearly-gates');


// let mazeArray = levelOne;

// const mazeContainer = document.getElementById('maze-container')

// // ----Create maze------

// function createMaze() {

//     switchLevel(document.getElementById("levelselect").value);
//     setRowAndColumn(mazeArray.length,mazeArray[0].length);

//     for (let i = 0; i < mazeArray.length; i++) {
//         for (let j = 0; j < mazeArray[i].length; j++) {
//             const cell = document.createElement('div');
//             cell.classList.add('cell');

//             if (mazeArray[i][j] === 0) {
//                 cell.classList.add('wall');
//             }

//             mazeContainer.appendChild(cell);
//         }
//     }


//     createNinja((levelOneStart[0]),(levelOneStart[1]));

//     makeMove()
//     //createExit(i*80,j*80);
// }

// function setRowAndColumn(row, col){
//     let mazeContainer = document.getElementById("maze-container");
//     mazeContainer.style.gridTemplateRows = `repeat(${row}, 80px)`;
//     mazeContainer.style.gridTemplateColumns = `repeat(${col}, 80px)`;
// }


// // -----switch level of difficulty-------

// function switchLevel(level) {
//     console.log(level)
//     switch (level) {
//         case "1":
//             mazeArray = levelOne;
//             console.log("Level 1 selected")
//             break;

//         case "2":
//             mazeArray = levelTwo;
//             console.log("Level 2 selected")
//             break;

//         case "3":
//             mazeArray = levelThree;
//             let mazeContainer = document.getElementById("maze-container");
//             mazeContainer.style.gridTemplateRows = (24, '50px');
//             mazeContainer.style.gridTemplateColumns = (27, '50px');
//             console.log("Level 3 selected")
//             break;

//         default:
//             mazeArray = levelOne;
//             break;
//     }
//     maze.innerHTML = '';
// }


// Set the initial time in seconds
// async function startTimer
let timeInSeconds = 20;
// document.getElementById('timer').innerText = `Timer: ${timeInSeconds} seconds`;
// const timerInterval = setInterval(function () {
//     timeInSeconds--;
//     document.getElementById('timer').innerText = `Timer: ${timeInSeconds} seconds`;
//
//     // Check if the timer has reached 0
//     if (timeInSeconds === 0) {
//         clearInterval(timerInterval); // Stop the timer when it reaches 0
//         alert("Times; up! You Lose!");
//     }
// }, 1000);

//   // ----Function that compares time and returns score based on time left----------

//   // -----Function that displays key movements as steps and displays total steps until maze completion
// function stepCounter(){}
let moves = 0;

function makeMove() {
    moves++;
    document.getElementById('move-counter').innerText = `Moves: ${moves}`;

    move(document.getElementById("ninja"))
}

//   // -----Function that spins maze on lv2 and lv3--------

//   function spinMaze(){}


// document.addEventListener("DOMContentLoaded", function () {
//   // Get the element you want to rotate
//   const rotateMaze = document.getElementById("game-container");

//   // Function to rotate the element
//   function rotate() {
//       // Increment the rotation angle (in degrees)
//       let currentRotation = 0;

//       function rotateStep() {
//           currentRotation += 1;
//           rotateElement.style.transform = `rotate(${currentRotation}deg)`;
//           requestAnimationFrame(rotateStep);
//       }

//       rotateStep();
//   }

//   // Call the rotate function
//   rotate();
// });



// -----------------------------------------------------------------------------


// 2d Collision Detection

// -need to create a variable for the player the player position   

// -need a function to check the mazeArray variable and chekc if they can move to it. Player position then needs to be updated. 

// -each time the player moves check if they have reached the exit. 