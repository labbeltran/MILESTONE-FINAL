let levelOneStart = [160,200 ]
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

let main = document.getElementById('main');
let maze = document.getElementById('maze-container');
let ninja = document.getElementById('');
let exit = document.getElementById('pearly-gates');


let mazeArray = levelOne;

const mazeContainer = document.getElementById('maze-container')

// ----Create maze------

function createMaze() {

    switchLevel(document.getElementById("levelselect").value);
    setRowAndColumn(mazeArray.length,mazeArray[0].length);

    for (let i = 0; i < mazeArray.length; i++) {
        for (let j = 0; j < mazeArray[i].length; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            if (mazeArray[i][j] === 0) {
                cell.classList.add('wall');
            }

            mazeContainer.appendChild(cell);
        }
    }


    createNinja((levelOneStart[0]),(levelOneStart[1]));

    makeMove()
    //createExit(i*80,j*80);
}

function setRowAndColumn(row, col){
    let mazeContainer = document.getElementById("maze-container");
    mazeContainer.style.gridTemplateRows = `repeat(${row}, 80px)`;
    mazeContainer.style.gridTemplateColumns = `repeat(${col}, 80px)`;
}


// -----switch level of difficulty-------

function switchLevel(level) {
    console.log(level)
    switch (level) {
        case "1":
            mazeArray = levelOne;
            console.log("Level 1 selected")
            break;

        case "2":
            mazeArray = levelTwo;
            console.log("Level 2 selected")
            break;

        case "3":
            mazeArray = levelThree;
            console.log("Level 3 selected")
            break;

        default:
            mazeArray = levelOne;
            break;
    }
}


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