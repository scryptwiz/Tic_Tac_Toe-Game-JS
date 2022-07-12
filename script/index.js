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
            let winning_blocks  = playerWon();
            winning_blocks.map(cell=>cells[cell].style.backgroundColor='#666')
            document.getElementById('winning_alert').style.display="flex";
            document.getElementById('alert-content').innerText=`${currentPlayer} has won!`;
            document.getElementById('alert-btn-success').innerText=`Restart`;
            document.getElementById('alert-btn-danger').innerText=`Quit`;
            return
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

const restart = () => {
    spaces.fill(null)
    cells.forEach(cell=> {
        cell.innerText = ''
        cell.style.backgroundColor=''
    })
    currentPlayer = X_TEXT;
    document.getElementById('winning_alert').style.display="none";
}
const quit = () => {
    spaces.fill(null)
    cells.forEach(cell=> {
        cell.innerText = ''
        cell.style.backgroundColor=''
    })
    currentPlayer = X_TEXT;
    document.getElementById('winning_alert').style.display="none";
    document.getElementById('game_cont').style.display="none";
    document.getElementById('mid_choose').style.display="flex";
}