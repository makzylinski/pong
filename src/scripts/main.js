const game = document.querySelector('.game');
let gameWindowHeight;
let gameWindowWidth;
let startingPlayer;
let playerScore = 0;
let computerScore = 0;

window.onload = () => {
    chooseStartingPlayer();
    initGameDimensions();
    calculateControllersCoordinates();
    detectGameStart();
    initScores();
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

const chooseStartingPlayer = () => {
    startingPlayer = Math.floor(Math.random() * 2);
}

const initGameDimensions = () => {
    gameWindowHeight = game.clientHeight;
    gameWindowWidth = game.clientWidth;
}

const initScores = () => {
    computerResult.innerText = computerScore;
    playerResult.innerText = playerScore;
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




const startGame = () => {
    setInitialBallPosition();
    playerMoveHandler();
    initComputerMovement();
    const changeGameState = () => {     // this is basically ball movement
        if (ballPosition[0] >= 0 && ballPosition[0] <= gameWindowHeight
            && ballPosition[1] >= 0 && ballPosition[1] <= gameWindowWidth) {

            ballPosition[1] = ballPosition[1] + ballSpeedX; //width X
            ballPosition[0] = ballPosition[0] + ballSpeedY; //height Y

            // -5 stands for ball's width/height

            const bottomController = relativePlayerPos.top + 70;
            if ((ballPosition[1] < 0 || ballPosition[1] > gameWindowWidth - 20)) {
                if (ballPosition[1] === gameWindowWidth) {
                    playerScore += 1;
                    playerResult.innerText = playerScore;
                } else if (ballPosition[1] <= 1) {
                    computerScore += 1;
                    computerResult.innerText = computerScore;
                }
            }

            if ((ballPosition[1] <= 10 && ballPosition[0] >= relativePlayerPos.top && ballPosition[0] <= bottomController)
                || ((ballPosition[1] >= gameWindowWidth - 20 && ballPosition[0] >= relativeComputerPos.top && ballPosition[0] <= bottomController))) {
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
    ballInterval = setInterval(changeGameState, 5);
}