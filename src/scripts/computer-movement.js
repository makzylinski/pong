const computer = document.querySelector('.game__left-player');
const computerResult = document.querySelector('.game__score-left');
const relativeComputerPos = {}
let computerPosition = 16;

const initComputerMovement = () => {
    console.log(ballPosition)
    calculateControllersCoordinates();
    coputerMovement();
    console.log(relativeComputerPos)
}

const coputerMovement = () => {
    const computerMove = () => {
        computerPosition = ballPosition[0] - relativeComputerPos.elementHeight - relativeComputerPos.elementHeight / 2;
        console.log(computerPosition)
        if (computerPosition <= gameWindowHeight - relativeComputerPos.elementHeight - 4 ) {
            computer.style.top = computerPosition + 'px';
        }
    }

    setInterval(computerMove, 5)
}