const playWithBtn = () => {
    document.getElementById('mid_choose').style.display="none";
    document.getElementById('pick_side').style.display="flex";
}

// Game Start
let cells = Array.from(document.getElementsByClassName('cell'))
const O_TEXT = 'O';
const X_TEXT = 'X';
let currentPlayer =  X_TEXT;
let spaces = Array(9).fill(null)

const start = () => {
    document.getElementById('pick_side').style.display="none";
    document.getElementById('game_cont').style.display="flex";
    cells.forEach(cell => cell.addEventListener('click', clickCell, {once:true}));
}

const clickCell = (e) => {
    const id=e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        if (playerWon() !==false) {
            playerText = `${currentPlayer} has won!`
            let winnig_blocks  = playerWon();
            winnig_blocks = playerWon();
        }
        currentPlayer = currentPlayer === X_TEXT? O_TEXT : X_TEXT
    }
}

const winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
]

const playerWon = () => {
    for (const condition of winningCombos) {
        let [a,b,c] = condition
        if(spaces[a] && (spaces[a] === spaces[b] && spaces[a] === spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

// restartBtn.addEventListener('click', restart);

const restart = () => {
    spaces.fill(null)
    cells.forEach(cell=> {
        cell.innerText = ''
    })
    currentPlayer = X_TEXT
}