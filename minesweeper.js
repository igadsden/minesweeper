const generatePlayerBoard = (numberOfRows,numberOfColumns) => {
  let board = []


for (let generatePlayerBoardIndex = 0; generatePlayerBoardIndex < numberOfRows; generatePlayerBoardIndex++) {
  let row = []
    for (let generatePlayerBoardIndex = 0; generatePlayerBoardIndex < numberOfColumns; generatePlayerBoardIndex++) {
      row.push('  ')

    }
    board.push(row)
  }
 return board
};

console.log(generatePlayerBoard(5,5));

const generateBombBoard = (numberOfRows,numberOfColumns,numberOfBombs) => {
  let board = []


for (let generatePlayerBoardIndex = 0; generatePlayerBoardIndex < numberOfRows; generatePlayerBoardIndex++) {
  let row = []
    for (let generatePlayerBoardIndex = 0; generatePlayerBoardIndex < numberOfColumns; generatePlayerBoardIndex++) {
      row.push(null)

    }
    board.push(row)
  }
 let numberOfBombsPlaced = 0;
 while (numberOfBombsPlaced < numberOfBombs) {
   let randomRowIndex = Math.floor(Math.random() * numberOfRows)
   let randomColumnIndex =  Math.floor(Math.random() * numberOfColumns)
   board[randomRowIndex][randomColumnIndex] = 'B'
   numberOfBombsPlaced++ // code in this while loop will place bombs on existing bombs, this will be fixed
   //with conrtol flow
 }


 return board

};

const printBoard = board => {
  console.log (board.map(row => row.join('  |  ')).join('\n'))};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);
console.log('Player Board:  ');
printBoard(playerBoard);
console.log('Bomb Board:  ');
printBoard(bombBoard);
