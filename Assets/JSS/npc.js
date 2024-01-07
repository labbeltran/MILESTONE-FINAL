// // ------Non-Playable Santa Loop-------
// class NonPlayerCharacter {
//     constructor() {
//         this.position = { x: 0, y: 0 };
//         this.velocity = { x: 1, y: 0 }; // Initial velocity (move right by default)
//         this.width = 45;
//         this.height = 45;
//         this.direction = 'east'; // Initial direction
//         this.imageSources = {
//             'east': 'Assets/img/santaEast.png',
//             'north': 'Assets/img/santaNS.png',
//             'west': 'Assets/img/santaWest.png',
//             'south': 'Assets/img/santaNS.png',
//             'idle': 'Assets/img/santaIdle.png'
//         };
//         this.image = createImage(this.imageSources[this.direction]);
//     }

//     draw() {
//         if (this.image.complete) {
//             c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
//         } else {
//             c.fillStyle = 'red';
//             c.fillRect(this.position.x, this.position.y, this.width, this.height);
//         }
//     }

//     update() {
//         this.draw();
//         this.position.x += this.velocity.x;
//         this.position.y += this.velocity.y;

//         // Check for boundary and change direction if needed (looping pathway)
//         if (this.position.x < 0) {
//             this.position.x = canvas.width;
//         } else if (this.position.x > canvas.width) {
//             this.position.x = 0;
//         }
//     }

//     changeDirection(newDirection) {
//         this.direction = newDirection;
//         this.image.src = this.imageSources[this.direction];
//     }
// }

// const npc = new NonPlayerCharacter();

// function animateNPC() {
//     requestAnimationFrame(animateNPC);
//     c.clearRect(0, 0, canvas.width, canvas.height);

//     npc.update();
// }

// animateNPC(); // Start the animation loop for the NPC

// // Example usage to change direction (you can call this based on your game logic)
// npc.changeDirection('north');








// //     setInterval(moveCharacter, 1)

// //     async function walkEast(time) {
// //         direction = 'east';
// //         mazeGuardian.src = './Assets/img/santaEast.png';
// //             await sleep(time)
// //             stop()
// //     }
    

// //     async function walkNorth(time) {
// //         direction = 'north'
// //         mazeGuardian.src = `./Assets/img/santaNS.png`
// //             await sleep(time)
// //             stop()
// //     }

// //     async function walkWest(time) {
// //         direction = 'west'
// //         mazeGuardian.src = `./Assets/img/santaWest.png`
// //             await sleep(time)
// //             stop()
// //     }

// //     async function walkSouth(time) {
// //         direction = 'south'
// //         mazeGuardian.src = `./Assets/img/santaNS.png`
// //             await sleep(time)
// //             stop()
// //     }

// //     function stop() {
// //         direction = null
// //         element.src = `./Assets/img/santaIdle.png`
// //     }

// //     return {
// //         mazeGuardian: mazeGuardian,
// //         walkWest: walkWest,
// //         walkNorth: walkNorth,
// //         walkEast: walkEast,
// //         walkSouth: walkSouth,
// //         stop: stop
// //     }

// //     function sleep(time){
// //         return new Promise(resolve => {
// //             setTimeout(resolve, time)
// //         })  
// //     }
// // }