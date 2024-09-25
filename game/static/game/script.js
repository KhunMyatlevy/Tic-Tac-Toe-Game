let playerTurn = 'X';

function makeMove(cell) {
    const selectedCell = document.getElementById(`cell${cell}`);
    if (selectedCell.innerText === '') {
        selectedCell.innerText = playerTurn;
        playerTurn = playerTurn === 'X' ? 'O' : 'X';

        // Send the move to the backend (using Fetch API or AJAX)
        fetch('/move/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: `board=${getBoardState()}&player=${playerTurn}`
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Handle response: check if game is over, etc.
        });
    }
}

function getBoardState() {
    let boardState = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.getElementById(`cell${i}`).innerText;
        boardState += cell === '' ? '-' : cell;
    }
    return boardState;
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
