const playWithBtn = () => {
    document.getElementById('mid_choose').style.display="none";
    document.getElementById('pick_side').style.display="flex";
}
const start = () => {
    document.getElementById('pick_side').style.display="none";
    document.getElementById('game_cont').style.display="flex";
}

// Game Start
let cells = document.getElementsByClassName('cell');
console.log(Array.from(cells));x