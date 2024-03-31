let currentPlayer = 'X';
let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function makeMove(cell) {
    const row = cell.parentElement.rowIndex;
    const col = cell.cellIndex;

    if (!gameBoard[row][col]) {
        cell.innerText = currentPlayer;
        gameBoard[row][col] = currentPlayer;

        if (checkWin()) {
            document.getElementById('result').innerText = `Player ${currentPlayer} wins!`;
            disableBoard();
        } else if (checkDraw()) {
            document.getElementById('result').innerText = "It's a draw!";
        } else {
            switchPlayer();
        }
    }
}

function checkWin() {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] !== '' && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
            return true;
        }
        if (gameBoard[0][i] !== '' && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
            return true;
        }
    }

    // Check diagonals
    if (gameBoard[0][0] !== '' && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
        return true;
    }
    if (gameBoard[0][2] !== '' && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
        return true;
    }

    return false;
}

function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameBoard[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

function switchPlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

function disableBoard() {
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => cell.onclick = null);
}