var time = 0;
var timeIndicator = document.getElementById('timerCounter')
function tickTime(){
// increments time value by 1, updates html element
time += 1;
timeIndicator.innerHTML = time
}
//creates an empty variable to store the ID of the interval to use in the future
var timeInterval

function startTimer(){
    if (isPlaying || gameFinished) {
        return;
    }
timeInterval = setInterval(tickTime, 1000)
isPlaying = true;
}

var isPlaying = false;
var moves = 0;

var blocks;
const finalState =
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 0],
    ]

const initialState =
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 0, 15],
    ]

blocks = initialState.slice();
emptyCoord = findEmpty();

function checkComplete(){
    for (let y = 0; y < initialState.length; y++) {
        for (let x = 0; x < initialState[y].length; x++) {
            if (blocks[y][x] != finalState[y][x]) {
                return false;
            }
        }
    }
    return true;
}

function gameFinish() {
    clearInterval(timeInterval);
    isPlaying = false;
    document.getElementById("result-time").innerHTML = time;
    gameFinished = true;
}

var gameFinished = false;

function findEmpty() {
    var x, y;
    for (y = 0; y < initialState.length; y++) {
        const element = initialState[y];
        x = element.findIndex((element) => element == 0);
        if (x != -1) {
            break;
        }
    }
    return { x, y }
}

function movePossible(newCoord={x:0,y:0}){
    if (newCoord.y >= initialState.length || newCoord.y < 0) return false;
    if (newCoord.x >= initialState[newCoord.y].length || newCoord.x < 0) return false;
    // prevent large movements
    if (Math.abs(emptyCoord.x - newCoord.x) > 1 || Math.abs(emptyCoord.y - newCoord.y) > 1) return false;
    // prevent diagonal movements
    if (Math.abs(emptyCoord.x - newCoord.x) + Math.abs(emptyCoord.y - newCoord.y) > 1) return false;
    return true;
}

function move(x = 0, y = 0) {
    let newCoord = { x: x, y: y }
    if (!movePossible(newCoord)) return false;
    var carriedValue = blocks[newCoord.y][newCoord.x];
    blocks[emptyCoord.y][emptyCoord.x] = carriedValue;
    blocks[newCoord.y][newCoord.x] = 0;
    emptyCoord = newCoord;
    console.table(blocks);
    return true;
}

var documentButtons = [[],[],[],[]]

function populateButtons(){
    let puzzle = document.getElementById('puzzle');
    var x = 0,y = 0;
    let puzzleButtons = Array.from(puzzle.children);
    puzzleButtons.forEach((element) => {
        let button = element.children[0];
        documentButtons[y][x] = element.children[0];
        button.setAttribute('onclick', `performMove(${x},${y})`);
        x++;
        if (x >= 4){ x = 0; y++}
        console.log(element.children[0], x, y);
    });
    updatePuzzle();
}

function moveCount() {
    moves++;
    document.getElementById("moveCounter").innerHTML = moves;
}

function performMove(x = 0, y = 0){
    if (!isPlaying) {
        return;
    }
    let couldMove = move(x,y);
    if (!couldMove) {
        return;
    }
    moveCount();
    updatePuzzle();
    if (checkComplete()) {
        gameFinish()
    }
}

function updatePuzzle(){
    for (let y = 0; y < documentButtons.length; y++) {
        const row = documentButtons[y];
        for (let x = 0; x < documentButtons.length; x++) {
            const button = documentButtons[y][x];
            button.innerHTML = blocks[y][x];
            if (blocks[y][x] == 0) button.innerHTML = "";
        }
    }
}

populateButtons();