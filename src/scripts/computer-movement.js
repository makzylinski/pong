const computer = document.querySelector('.game__left-player');
const computerResult = document.querySelector('.game__score-left');
const relativeComputerPos = {}
let computerPositionTop = 0;
let computerPositionBottom = relativeComputerPos.elementHeight;
let computerMovementInterval;

const initComputerMovement = () => {
    calculateControllersCoordinates();
    coputerMovement();
    setComputerControllerPosition();

    relativeComputerPos.top = computerPositionTop;
    computer.style.top = computerPositionTop + 'px';
}

const setComputerControllerPosition = () => {
    relativeComputerPos.top = computerPositionTop;
    computer.style.top = computerPositionTop + 'px';
}

const coputerMovement = () => {
    const computerMove = () => {
        if (ballPosition[1] >= gameWindowWidth / 2) {
            const nextStep = 15;
            computerPositionBottom = computerPositionTop + relativeComputerPos.elementHeight;
            if (!(ballPosition[0] >= computerPositionTop && ballPosition[0] <= computerPositionBottom)
                && ballPosition[0] < computerPositionTop) {
                computerPositionTop -= nextStep;
            } else if (ballPosition[0] > computerPositionBottom) {
                computerPositionTop += nextStep;
            }

            setComputerControllerPosition();
        }
    }

    computerMovementInterval = setInterval(computerMove, 1) // reducing this value may increase difficulty level
}