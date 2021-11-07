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
    if (gameStopped && event.keyCode === 13) {
        gameStopped = false;
        ballMovement();
    }
    if (event.keyCode !== undefined && !gameStopped) {
        if (event.keyCode == 87) {
            movePlayer(PLAYER_UP);
        } else if (event.keyCode == 83) {
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
    console.log('test')
    if (playerPosition > 0 && playerPosition <= 315) {
        direction === PLAYER_DOWN ? playerPosition += 15 : playerPosition -= 15;
    }
    player.style.top = playerPosition + 'px';
}

const stopBallMovement = () => {
    clearInterval(ballInterval);
}

const setInitialBallMovement = () => {
    if (startingPlayer) {

    }
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

            console.log(ballPosition)
        }
    }
    ballInterval = setInterval(chagneBallDirection, 5);
}