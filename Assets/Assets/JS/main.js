// Basic Ludo Game with Pure JavaScript and DOM Manipulation

// Create board and dice elements dynamically
const board = document.createElement('div');
board.style.display = 'grid';
board.style.gridTemplateColumns = 'repeat(5, 60px)';
board.style.gridGap = '5px';
board.style.margin = '20px';

const diceButton = document.createElement('button');
diceButton.textContent = 'Roll Dice';
diceButton.style.marginTop = '20px';
const diceResult = document.createElement('p');
diceResult.textContent = 'Roll result: -';

// Create Ludo board cells
const cells = [];
for (let i = 0; i < 25; i++) {
  const cell = document.createElement('div');
  cell.textContent = i + 1;
  cell.style.width = '60px';
  cell.style.height = '60px';
  cell.style.display = 'flex';
  cell.style.alignItems = 'center';
  cell.style.justifyContent = 'center';
  cell.style.border = '1px solid black';
  cell.style.backgroundColor = 'lightyellow';
  board.appendChild(cell);
  cells.push(cell);
}

// Player piece
const playerPiece = document.createElement('div');
playerPiece.textContent = 'P';
playerPiece.style.width = '40px';
playerPiece.style.height = '40px';
playerPiece.style.backgroundColor = 'red';
playerPiece.style.color = 'white';
playerPiece.style.borderRadius = '50%';
playerPiece.style.display = 'flex';
playerPiece.style.alignItems = 'center';
playerPiece.style.justifyContent = 'center';

// Initial player position
let playerPosition = 0;
cells[playerPosition].appendChild(playerPiece);

// Handle dice roll and movement
diceButton.addEventListener('click', () => {
  const roll = Math.floor(Math.random() * 6) + 1; // Roll dice (1-6)
  diceResult.textContent = `Roll result: ${roll}`;

  // Move player piece
  const nextPosition = playerPosition + roll;
  if (nextPosition < cells.length) {
    cells[playerPosition].removeChild(playerPiece); // Remove piece from current cell
    playerPosition = nextPosition; // Update position
    cells[playerPosition].appendChild(playerPiece); // Add piece to new cell
  } else {
    alert('You need an exact roll to finish!');
  }

  // Check for win
  if (playerPosition === cells.length - 1) {
    alert('Congratulations! You win!');
    diceButton.disabled = true;
  }
});

// Append elements to the document body
document.body.appendChild(board);
document.body.appendChild(diceButton);
document.body.appendChild(diceResult);

