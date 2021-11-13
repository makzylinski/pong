const ball = document.querySelector('.game__ball');
let gameStopped = true;
let ballPosition;
let ballSpeedX = 1;
let ballSpeedY = 1;
let ballInterval;

const setInitialBallPosition = () => {
    startingPlayer ? ballPosition = [0, 0] : ballPosition = [0, gameWindowWidth - 55];
    ball.style.display = "block";
    ball.style.top = ballPosition[0];
    ball.style.right = ballPosition[1];
}