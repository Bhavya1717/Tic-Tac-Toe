let currentPlayer = 1;
let player1Name;
let player2Name;
const boardState = new Array(9).fill("");

function PlaceOccupieOn(cellId) {
    if (player1Name && player2Name) {
        const cell = document.getElementById(cellId);
        const cellIndex = parseInt(cell.getAttribute('data-index'));

        if (cell.innerHTML === "&nbsp;") { // Check if cell is empty
            if (currentPlayer === 1) {
                cell.innerHTML = "X";
                cell.style.backgroundColor = "#e74c3c";
                boardState[cellIndex] = "X";
                currentPlayer = 2;
            } else {
                cell.innerHTML = "O";
                cell.style.backgroundColor = "#2ecc71";
                boardState[cellIndex] = "O";
                currentPlayer = 1;
            }

            checkWinner();
        }
    }
}

function checkWinner() {
    var winner;

    for (let i = 1; i <= 3; i++) {
        if (document.getElementById('a' + i + '1').innerHTML ===
            document.getElementById('a' + i + '2').innerHTML &&
            document.getElementById('a' + i + '2').innerHTML ===
            document.getElementById('a' + i + '3').innerHTML &&
            document.getElementById('a' + i + '1').innerHTML !== "&nbsp;") { // Check rows
            winner = document.getElementById('a' + i + '1');
            displayWinner(winner);
            return;
        }
    }

    for (let i = 1; i <= 3; i++) {
        if (document.getElementById('a' + '1' + i).innerHTML ===
            document.getElementById('a' + '2' + i).innerHTML &&
            document.getElementById('a' + '2' + i).innerHTML ===
            document.getElementById('a' + '3' + i).innerHTML &&
            document.getElementById('a' + '1' + i).innerHTML !== "&nbsp;") { // Check columns
            winner = document.getElementById('a' + '1' + i);
            displayWinner(winner);
            return;
        }
    }

    if (document.getElementById('a11').innerHTML ===
        document.getElementById('a22').innerHTML &&
        document.getElementById('a22').innerHTML ===
        document.getElementById('a33').innerHTML &&
        document.getElementById('a11').innerHTML !== "&nbsp;") { // Check diagonal
        winner = document.getElementById('a11');
        displayWinner(winner);
        return;
    } else if (document.getElementById('a31').innerHTML ===
        document.getElementById('a22').innerHTML &&
        document.getElementById('a22').innerHTML ===
        document.getElementById('a13').innerHTML &&
        document.getElementById('a31').innerHTML !== "&nbsp;") { // Check diagonal
        winner = document.getElementById('a31');
        displayWinner(winner);
        return;
    }
}

function redirectToPlayground(btnid) {
    player1Name = document.getElementById('player1').value;
    player2Name = document.getElementById('player2').value;

    // Update button appearance only after name is stored
    if (player1Name && player2Name) {
        const submitButton = document.getElementById(btnid);
        submitButton.textContent = "Players Set";
        submitButton.style.backgroundColor = "green";
        submitButton.style.cursor = "not-allowed";
    }

    if (player1Name && player2Name) {
        document.getElementById('player1Name').textContent = player1Name;
        document.getElementById('player2Name').textContent = player2Name;
        document.querySelector('.get_data').style.display = 'none';
        document.getElementById('board').style.display = 'grid';
    }
}

function displayWinner(winner) {
    let winnerName = winner.innerHTML === "X" ? player1Name : player2Name;

    document.querySelector('.board').style.display = 'none';
    document.querySelector('.winner').style.display = 'block';
    document.getElementById('winnerName').textContent = winnerName;
}
