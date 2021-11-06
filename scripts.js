const player = document.querySelector('.game__right-player');
const computer = document.querySelector('.game__left-player');
const playerResult = document.querySelector('.game__score-left');
const computerResult = document.querySelector('.game__score-right');
const ball = document.querySelector('.game__ball');
let gameStopped = true;
let playerPosition = 16;
let ballPosition = [0, 0];
let ballSpeedX = 15;
let ballSpeedY = 15;
let startingPlayer;

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
        if(event.keyCode == 87) {
            movePlayer(PLAYER_UP);
        } else if (event.keyCode == 83) {
            movePlayer(PLAYER_DOWN);
        }
    }
})

const chooseStartingPlayer = () => {
    startingPlayer = Math.floor(Math.random()*2);
    startingPlayer ? ball.style.right = 0 : ball.style.left = '-100%';
}

const movePlayer = direction => {
    if (playerPosition > 0 && playerPosition <= 315) {
        if (direction === PLAYER_DOWN) {
            // dodawac do topa
            playerPosition += 15;
    
        } else if (direction === PLAYER_UP) {
            // odejmować od topa
            playerPosition -= 15;
        }
    }
    // ballMovement()
    

    player.style.top = playerPosition + 'px';

    // console.log(playerPosition)

    // console.log(player.style)
    // let movementCoordinates = player.style.top || 0;
    // movementCoordinates -= 10;
    // player.style.top = movementCoordinates + 'px';
    // console.log(player.style.top)
}

// const ballMovement = () => {
//     const moveBall = () => {
//         if(ballPosition[0] < 0) {
//             console.log('WYSZŁA Z GORY')
//         } else if ( ballPosition[0] > 320) {
//             console.log(' Z DOLU')
//             ballPosition[0] = ballPosition[0] - ballSpeedY;
//             ballPosition[1] = ballPosition[1] - ballSpeedX;
//             // console.log(ballPosition[0]);
//             ball.style.top = ballPosition[0] + 'px';
//             ball.style.right = ballPosition[1] + 'px';
//             console.log('a')
//         } else {
//             ballPosition[0] = ballPosition[0] + ballSpeedY;
//             ballPosition[1] = ballPosition[1] + ballSpeedX;
//             // console.log(ballPosition);
//             console.log('b')
//             ball.style.top = ballPosition[0] + 'px';
//             ball.style.right = ballPosition[1] + 'px';
    
//             // console.log(ball.style.top)
//             // console.log(ball.style.right)
//         }
//         // console.log(ballPosition[0])
//         // console.log(ballPosition)
//     }
//     const ballInterval = setInterval(moveBall, 170);  
// }