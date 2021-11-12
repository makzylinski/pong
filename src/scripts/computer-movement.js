const computer = document.querySelector('.game__left-player');
const computerResult = document.querySelector('.game__score-left');
const relativeComputerPos = {}
let computerPosition = 16;

const initComputerMovement = () => {
    calculateControllersCoordinates();
    coputerMovement();
}

const coputerMovement = () => {
    const computerMove = () => {
        if (ballPosition[1] >= gameWindowWidth / 2) {
            computerPosition = ballPosition[0] - relativeComputerPos.elementHeight / 2;
            relativeComputerPos.top = computerPosition;
            computer.style.top = computerPosition + 'px';
        }
    }

    setInterval(computerMove, 5)
}