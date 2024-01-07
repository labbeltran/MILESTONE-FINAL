// ----------Maze Arrays with solution path------------------------------

let levelOne = [
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '2', '0', '1', '1', '1', '1', '1', '0'],
    ['0', '1', '1', '0', '1', '0', '0', '1', '0'],
    ['0', '1', '0', '1', '1', '0', '1', '1', '0'],
    ['0', '1', '0', '1', '1', '0', '1', '0', '0'],
    ['0', '1', '1', '0', '1', '0', '1', '1', '0'],
    ['0', '0', '1', '0', '1', '0', '0', '1', '0'],
    ['0', '1', '1', '1', '1', '1', '0', '3', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
];

let levelTwo = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1,0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let levelThree = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
// Global Variables----------

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth; // CSS element
canvas.height = innerHeight; // CSS element

const boundaries = [];

let maze = levelOne

const mazeTwo = levelTwo.map(row => row.map(cell => cell.toString()));

const mazeThree = levelThree.map(row => row.map(cell => cell.toString()));

let startPoint = findStartPoint(maze);
let endPoint = findEndPoint(maze);
let selectedLevel = 1;


// --------function to generate images__________
function createImage(src) {
    const image = new Image();
    image.src = src;
    return image;
}

// ------------create class for maze boundary____________
class Boundary {
    static width = 60;
    static height = 60;

    constructor({ position, image, cellSize }) {
        this.position = position;
        this.width = cellSize;
        this.height = cellSize;
        this.image = image;
        this.image = createImage(this.image);
    }

    draw() {
        const image = this.image;
        if (image.complete) {
            c.drawImage(image, this.position.x, this.position.y, this.width, this.height);
        } else {
            image.onload = () => {
                c.drawImage(image, this.position.x, this.position.y, this.width, this.height);
            };
        }
    }
}

// --------------create class to load different maze level arrays----------------------------
class MazeManager {
    constructor() {
        this.currentMaze = null;
        this.selectElement = document.getElementById('levelselect');
        this.selectElement.addEventListener('change', () => {
            this.setMazeLevel();
        });
        this.setMazeLevel();
    }

    setMazeLevel() {
        const selectedLevel = parseInt(this.selectElement.value);

        switch (selectedLevel) {
            case 1:
                maze = levelOne;
                console.log("Level 1 selected");
                break;

            case 2:
                maze = levelTwo.map(row => row.map(cell => cell.toString()));
                console.log("Level 2 selected");
                break;

            case 3:
                maze = levelThree.map(row => row.map(cell => cell.toString()));
                console.log("Level 3 selected");
                break;

            default:
                console.log('Select Maze Level');
                return;
        }
        createMaze();
    }
}

const mazeManager = new MazeManager();

const beginButton = document.getElementById('beginButton');
beginButton.addEventListener('click', function() {
    mazeManager.setMazeLevel();
    createMaze(); // Call createMaze when the button is clicked
    
});

        function createMaze(){
            const cellSize = selectedLevel === 3 ? 10: 60;
            boundaries.length=0;

            maze.forEach((row, i) => {
                row.forEach((symbol, j) => {
                    switch (symbol) {
                        case '0':
                            boundaries.push(
                                new Boundary({
                                    position: {
                                        x: cellSize * j,
                                        y: cellSize * i,
                                    },

                                    image: 'Assets/img/sakuraTree.png',
                                    cellSize,
                                })
                            );
                            break;
                    }
                });
            });
        }

        // -------functions to identify start point and endpoint-------------------

        function findStartPoint(maze) {
            for (let i = 0; i < maze.length; i++) {
                for (let j = 0; j < maze[i].length; j++) {
                    if (maze[i][j] === '2') {
                        return { row: i, column: j };
                    }
                }
            }
            return null;
        }
        
        function findEndPoint(maze) {
            for (let i = 0; i < maze.length; i++) {
                for (let j = 0; j < maze[i].length; j++) {
                    if (maze[i][j] === '3') {
                        return { row: i, column: j };
                    }
                }
            }
            return null;
        }
         
        
        
        




// ----------------Player Class-----------------

const keys = {
    w: { pressed: false },
    a: { pressed: false },
    s: { pressed: false },
    d: { pressed: false },
};

let lastKey = '';
class Player {
    constructor(startPoint) {
        this.position = { x: startPoint.column *60, y: startPoint.row *60 };
        this.velocity = { x: 0, y: 0 };
        this.width = Boundary.width/2 + Boundary.width/4;
        this.height = Boundary.height/2 + Boundary.height/4;
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


const player = new Player(startPoint); // Initialize the player

function rectangleWithRectangleCollision({rectangle1, rectangle2}){
    return(rectangle1.position.y - rectangle1.height + rectangle1.velocity.y  <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.x + rectangle1.width + rectangle1.velocity.x  >= rectangle2.position.x &&
        rectangle1.position.y + rectangle1.height + rectangle1.velocity.y >= rectangle2.position.y &&
        rectangle1.position.x - rectangle1.width + rectangle1.velocity.x <= rectangle2.position.x + rectangle2.width

    )
}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    boundaries.forEach((boundary) => {
        boundary.draw();

        if (
            rectangleWithRectangleCollision({
                rectangle1: player,
                rectangle2: boundary
            })
        ) {
            console.log('collision detected');
            player.velocity.x = 0;
            player.velocity.y = 0;
        }
    });

    player.update();
    player.velocity.x = 0;
    player.velocity.y = 0;

    if (keys.w.pressed && lastKey === 'w') {
        for (let i=0; i< boundaries.length; i++){
            const boundary = boundaries[i]
            if(
                rectangleWithRectangleCollision({
                    rectangle1: {...player, velocity: {
                        x:0,
                        y:-4
                    }
                },
                rectangle: boundary
                })
            ){
                player.velocity.y =0
                break
            } else{
                player.velocity.y = -4
            }
        }
    } else if (keys.a.pressed && lastKey === 'a') {
        for (let i=0; i< boundaries.length; i++){
            const boundary = boundaries[i]
            if(
                rectangleWithRectangleCollision({
                    rectangle1: {...player, velocity: {
                        x:-4,
                        y:0
                    }
                },
                rectangle: boundary
                })
            ){
                player.velocity.x = 0
                break
            } else{
                player.velocity.x = -4
            }
        }
    } else if (keys.s.pressed && lastKey === 's') {
        for (let i=0; i< boundaries.length; i++){
            const boundary = boundaries[i]
            if(
                rectangleWithRectangleCollision({
                    rectangle1: {...player, velocity: {
                        x:0,
                        y:4
                    }
                },
                rectangle: boundary
                })
            ){
                player.velocity.y =0
                break
            } else{
                player.velocity.y = 4
            }
        }
    } else if (keys.d.pressed && lastKey === 'd') {
        for (let i=0; i< boundaries.length; i++){
            const boundary = boundaries[i]
            if(
                rectangleWithRectangleCollision({
                    rectangle1: {...player, velocity: {
                        x: 4,
                        y: 0
                    }
                },
                rectangle: boundary
                })
            ){
                player.velocity.x = 4
                break
            } else{
                player.velocity.x = 0
            }
        }
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

//s


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