const player = document.querySelector('.game__right-player');
const computer = document.querySelector('.game__left-player');
const playerResult = document.querySelector('.game__score-left');
const computerResult = document.querySelector('.game__score-right');
const ball = document.querySelector('.game__ball');
const game = document.querySelector('.game');
let gameWindowHeight;
let gameWindowWidth;
let gameStopped = true;
let playerPosition = 16;
let ballPosition;
let ballSpeedX = 1;
let ballSpeedY = 1;
let startingPlayer;
let ballInterval;
const relativePlayerPos = {};
const relativeComputerPos = {}

const PLAYER_UP = 'PLAYER_UP';
const PLAYER_DOWN = 'PLAYER_DOWN';

window.onload = () => {
    chooseStartingPlayer();
    initGameDimensions();
    calculateControllersCoordinates();
    detectGameStart();
}

const detectGameStart = () => {
    document.addEventListener('keydown', (e) => {
        if (gameStopped && e.key === 'Enter') {
            gameStopped = false;
            startGame();
        };
        if (e.key == 'Escape') {
            stopBallMovement();
        };
    });
}

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

const chooseStartingPlayer = () => {
    startingPlayer = Math.floor(Math.random() * 2);
}

const initGameDimensions = () => {
    gameWindowHeight = game.clientHeight;
    gameWindowWidth = game.clientWidth;
}

const calculateControllersCoordinates = () => {
    const parentPos = game.getBoundingClientRect(),
        playerPos = player.getBoundingClientRect(),
        computerPos = computer.getBoundingClientRect();

    relativePlayerPos.top = Math.abs(playerPos.top - parentPos.top),
        relativePlayerPos.right = playerPos.right - parentPos.right,
        relativePlayerPos.bottom = parentPos.bottom - playerPos.bottom,
        relativePlayerPos.left = playerPos.left - parentPos.left,
        relativePlayerPos.elementHeight = player.offsetHeight;

    relativeComputerPos.top = Math.abs(computerPos.top - parentPos.top),
        relativeComputerPos.right = computerPos.right - parentPos.right,
        relativeComputerPos.bottom = parentPos.bottom - computerPos.bottom,
        relativeComputerPos.left = computerPos.left - parentPos.left,
        relativeComputerPos.elementHeight = computer.offsetHeight;
}

const movePlayer = direction => {
    const nextStep = 15;
    // -4 stands for game border TODO
    if (direction === PLAYER_DOWN && playerPosition + nextStep <= game.offsetHeight - relativePlayerPos.elementHeight - 4) {
        playerPosition += nextStep;
    } else if (direction === PLAYER_UP && playerPosition - nextStep >= 0) {
        playerPosition -= nextStep;
    }
    player.style.top = playerPosition + 'px';
    calculateControllersCoordinates();
}

const stopBallMovement = () => {
    clearInterval(ballInterval);
}

const setInitialBallPosition = () => {
    startingPlayer ? ballPosition = [0, 0] : ballPosition = [0, gameWindowWidth - 5];
    ball.style.display = "block";
    ball.style.top = ballPosition[0];
    ball.style.right = ballPosition[1];

}

const startGame = () => {
    setInitialBallPosition();
    playerMoveHandler();
    const chagneGameState = () => {     // this is basically ball movement
        if (ballPosition[0] >= 0 && ballPosition[0] <= gameWindowHeight
            && ballPosition[1] >= 0 && ballPosition[1] <= gameWindowWidth) {

            ballPosition[1] = ballPosition[1] + ballSpeedX; //width X
            ballPosition[0] = ballPosition[0] + ballSpeedY; //height Y

            // -5 stands for ball's width/height

            const bottomController = relativePlayerPos.top + 70;

            if ((ballPosition[1] < 0 || ballPosition[1] > gameWindowWidth - 5)) {
                console.log('lost a point');
            }

            if ((ballPosition[1] <= 10 && ballPosition[0] >= relativePlayerPos.top && ballPosition[0] <= bottomController)
            || ((ballPosition[1] >= 464 && ballPosition[0] >= relativeComputerPos.top && ballPosition[0] <= bottomController))) {
                ballSpeedX = ballSpeedX * (-1);
                ballPosition[1] = ballPosition[1] + ballSpeedX;
                console.log('UDDERZENIE')
            }

            if (ballPosition[0] < 0 || ballPosition[0] > gameWindowHeight - 5) {
                ballSpeedY = ballSpeedY * (-1);
                ballPosition[0] = ballPosition[0] + ballSpeedY;
            }

            ball.style.top = ballPosition[0] + 'px';
            ball.style.right = ballPosition[1] + 'px';
        }
    }
    ballInterval = setInterval(chagneGameState, 5);
}