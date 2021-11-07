const player = document.querySelector('.game__right-player');
const computer = document.querySelector('.game__left-player');
const playerResult = document.querySelector('.game__score-left');
const computerResult = document.querySelector('.game__score-right');
const ball = document.querySelector('.game__ball');
let gameStopped = true;
let playerPosition = 16;
let ballPosition = [0, 0];
let ballSpeedX = 1;
let ballSpeedY = 1;
let startingPlayer;
let ballInterval;

const PLAYER_UP = 'PLAYER_UP';
const PLAYER_DOWN = 'PLAYER_DOWN';

window.onload = () => {
    chooseStartingPlayer();
}

document.addEventListener('keydown', (event) => {
    if (gameStopped && event.key === 'Enter') {
        gameStopped = false;
        ballMovement();
    }
    if (event.key !== undefined && !gameStopped) {
        if (event.key == 'w' || event.key == 'W' || event.key == 'ArrowUp') {
            movePlayer(PLAYER_UP);
        } else if (event.key == 's' || event.key == 'S' || event.key == 'ArrowDown') {
            movePlayer(PLAYER_DOWN);
        }
    }
    if (event.key == 'Escape') {
        stopBallMovement();
    }
})

const chooseStartingPlayer = () => {
    startingPlayer = Math.floor(Math.random() * 2);
    startingPlayer ? ball.style.right = 0 : ball.style.left = '-100%';
}

const movePlayer = direction => {
    const nextStep = 15;

    if (direction === PLAYER_DOWN && playerPosition + nextStep <= 305) {
        playerPosition += nextStep;
    } else if (direction === PLAYER_UP && playerPosition - nextStep >= 0) {
        playerPosition -= nextStep;
    }
    player.style.top = playerPosition + 'px';
}

const stopBallMovement = () => {
    clearInterval(ballInterval);
}

const ballMovement = () => {
    const chagneBallDirection = () => {
        if (ballPosition[0] >= 0 && ballPosition[0] <= 340
            && ballPosition[1] >= 0 && ballPosition[1] <= 476) {

            ballPosition[1] = ballPosition[1] + ballSpeedX; //width X
            ballPosition[0] = ballPosition[0] + ballSpeedY; //height Y

            if (ballPosition[1] < 0 || ballPosition[1] > 476) {
                ballSpeedX = ballSpeedX * (-1);
                ballPosition[1] = ballPosition[1] + ballSpeedX;
            }

            if (ballPosition[0] < 0 || ballPosition[0] > 340) {
                ballSpeedY = ballSpeedY * (-1);
                ballPosition[0] = ballPosition[0] + ballSpeedY;
            }

            ball.style.top = ballPosition[0] + 'px';
            ball.style.right = ballPosition[1] + 'px';
        }
    }
    ballInterval = setInterval(chagneBallDirection, 5);
}