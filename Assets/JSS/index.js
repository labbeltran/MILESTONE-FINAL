let levelOne =[
  [1,0,1,0,1],
  [1,0,1,1,1],
  [1,1,0,1,1],
  [0,1,1,1,0],
  [1,1,1,0,1],
]

let levelTwo =[
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
]

let levelThree =[
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
]

let mazeArray = level1;
  let maze = document.getElementById('maze-container')
  let tank = document.getElementbyId('labyrinth-tank')
  let exit = document.getElementbyId('pearly-gates')
  
  // ----Create maze------
  function createMaze(){
    for (let i = 0; i< mazeArray.length; i++){
      let row = document.getElementById('div');
      row.classList.add('row');
      for(let j = 0; j< mazeArray[i].length; j++){
        let cell= document.createElement('div');
        cell.classList.add('cell');
      
        if(mazeArray[i][j] === 0){
          cell.classList.add('wall');
        }
        row.appendChild(cell);
      }
      maze.appendChild(row)
    }
    
//     ----Function to create maze on button click----
    // async function(){
    //   await 
    // }
    
  // ----Function that lets player move through maze
  
  // ------Function that checks if player entered exit cell___
  
  
  // ----Function that generates timer-------
  
  // ----Function that compares time and returns score based on time left----------

  // -----Function that displays key movements as steps and displays total steps until maze completion
  
  // -----Function that spins maze on lv2 and lv3--------