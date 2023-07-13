const gameCells = document.querySelectorAll('.cell');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const restartBtn = document.querySelector('.restartBtn');


// Making variables
let currentPlayer = 'X';
let nextPlayer = 'O';
let playerTurn = currentPlayer;

// Function to start the game


const startGame = () =>{
    gameCells.forEach(cell => {
        cell.addEventListener('click', (e) =>{
            if(e.target.textContent == ''){
            e.target.textContent = playerTurn;
            if(checkWin()){
                console.log(`${playerTurn} is a Winner.`);
            }
            else if(checkTie()){
                console.log(`It's a tie`);
            }
            else{
                changePlayerTurn();
            }    
            
          
            }
        })
    })
}


// Function to change player
const changePlayerTurn = ()=>{
   if(playerTurn === currentPlayer){
    playerTurn = nextPlayer;
   }
   else {
    playerTurn = currentPlayer;
   }
    //   playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer;
}

// Function to check win
const checkWin = () =>{
     const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
     ];

     for (let i = 0; i < winningConditions.length; i++) {
             const [pos1, pos2, pos3] = winningConditions[i];
             if( gameCells[pos1].textContent !== '' &&
              gameCells[pos1].textContent === gameCells[pos2].textContent &&
              gameCells[pos2].textContent === gameCells[pos3].textContent){
                return true;
              }            
     }

     return false;
}

// Function to check for a tie
const checkTie = ()=>{
    let emptycellsCount = 0;
    gameCells.forEach(cell => {
      if(cell.textContent === ''){
        emptycellsCount++;
      }
    });

    return emptycellsCount === 0 && !checkWin();
}


// Calling start game function
startGame();