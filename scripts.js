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
    if (playerPosition > 0 && playerPosition <= 315) {
        direction === PLAYER_DOWN ? playerPosition += 15 : playerPosition -= 15;
    }
    player.style.top = playerPosition + 'px';
}

const stopBallMovement = () => {
    clearInterval(ballInterval);
}

// const calculateBallDirectionChange = (index, verticalDirection, horizontalDirection) => {
//     if ()
//     return ballPosition[index] = ballPosition[index] + verticalDirection === 'Y' ? ballSpeedY : ballSpeedX;
// }

const setInitialBallMovement = () => {
    if (startingPlayer) {

    }
}

const ballMovement = () => {
    const chagneBallDirection = () => {
        // console.log(calculateBallDirectionChange(0, 'Y'))
        // console.log(ballPosition)

        while (ballPosition[0] >= 0 && ballPosition[0] <= 320
            && ballPosition[1] >= 0 && ballPosition[1] <= 476) {

            // x = ballPosition[0];
            // y = ballPosition[1];
            //
            //x=x+vx
            // y=y+vy
            // if x<0 or x>WIDTH:
            //     vx=-vx
            //     x=x+vx
            // if y<0 or y>HEIGHT:
            //     vy=-vy
            //     y=y+vy

            let x = ballPosition[0] = ballPosition[0] + ballSpeedX;
            let y = ballPosition[1] = ballPosition[1] + ballSpeedY;

            if (x < 0 || x > 476) {
                ballSpeedX = ballSpeedX * -1;
                x = x + ballSpeedX;
            }

            if (y < 0 || y < 320) {
                ballSpeedY = ballSpeedY * -1;
                y = y + ballSpeedY;
            }

            console.log(x,y)

            ballPosition[0] = x;
            ballPosition[1] = y;



            // if (ballPosition[0] < 0 || ballPosition[0] > 320) {
            //     ballPosition[0] = ballPosition[0] - ballSpeedY;
            // }
            // setInitialBallMovement();
            // if (ballPosition[0] === 0) {
            //     console.log('odbij z gory na dol')
            //     ballPosition[0] = ballPosition[0] + ballSpeedY;
            //     // ballPosition[1] = ballPosition[1] - ballSpeedX;
            //     ball.style.top = ballPosition[0] + 'px';
            //     // ball.style.right = ballPosition[1] + 'px';
            //     // calculateBallDirectionChange(0, 'Y');
            // } else if (ballPosition[0] === 320) {
            //     console.log('odbij z dolu na gore')
            //     ballPosition[0] = ballPosition[0] + ballSpeedY;
            //     // ballPosition[1] = ballPosition[1] - ballSpeedX;
            //     ball.style.top = ballPosition[0] + 'px';
            //     // ball.style.right = ballPosition[1] + 'px';
            //     // calculateBallDirectionChange(0, 'Y');
            // } else if (ballPosition[1] === 0) {
            //     // ballPosition[0] = ballPosition[0] + ballSpeedY;
            //     ballPosition[1] = ballPosition[1] + ballSpeedX;
            //     // ball.style.top = ballPosition[0] + 'px';
            //     ball.style.right = ballPosition[1] + 'px';
            //     console.log('odbij z prawej na lewo')
            // } else if (ballPosition[1] === 476) {
            //     // ballPosition[0] = ballPosition[0] + ballSpeedY;
            //     ballPosition[1] = ballPosition[1] - ballSpeedX;
            //     // ball.style.top = ballPosition[0] + 'px';
            //     ball.style.right = ballPosition[1] + 'px';
            //     console.log('odbij z lewej na prawo')
            // }
        }


        // if (ballPosition[0] < 0) {
        //     console.log('WYSZŁA Z GORY')
        // } else if (ballPosition[0] > 320) {
        //     console.log(' Z DOLU')
        // } else if (ballPosition[1] < 0) {
        //     console.log('')
        // } else if (ballPosition[1] > 476) {
        //     console.log('')
        // }
    }
    ballInterval = setInterval(chagneBallDirection, 170);
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