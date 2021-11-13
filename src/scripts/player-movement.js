const player = document.querySelector('.game__right-player');
const playerResult = document.querySelector('.game__score-right');
const relativePlayerPos = {};
let playerPosition = 16;

const PLAYER_UP = 'PLAYER_UP';
const PLAYER_DOWN = 'PLAYER_DOWN';

const playerMoveHandler = () => {
    document.addEventListener('keypress', (event) => {
        if (event.key !== undefined && !gameStopped) {
            event.preventDefault();
            if (event.key == 'w' || event.key == 'W' || event.key == 'ArrowUp') {
                movePlayer(PLAYER_UP);
            } else if (event.key == 's' || event.key == 'S' || event.key == 'ArrowDown') {
                movePlayer(PLAYER_DOWN);
            }
        }
    })
}

const movePlayer = direction => {
    const nextStep = 15;
    // -10 stands for game border TODO
    if (direction === PLAYER_DOWN && playerPosition + nextStep <= game.offsetHeight - relativePlayerPos.elementHeight - 10) {
        playerPosition += nextStep;
    } else if (direction === PLAYER_UP && playerPosition - nextStep >= 0) {
        playerPosition -= nextStep;
    }
    player.style.top = playerPosition + 'px';
    calculateControllersCoordinates();
}