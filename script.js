// game controlling the flow of things

// gameboard module (only need 1 of them)
const gameBoard = (function gameBoard() {
    let boardValues = [0,0,0,0,0,0,0,0,0]
    let playerOneTurn = true // default
    let playerOneMark = 'X'
    let opponentMark = 'O'
    const _checkwinner = ()=>{console.log('winner check!')}
    const _marksquare = ()=>{console.log(this)} // can't seem to get this to bind properly?

    // refactor opportunity: split into two modules, with the below as gameboard
    // the containing as game-controller?
    const boardSquares = document.querySelectorAll(".board-square")

    boardSquares.forEach((sq) => {

        sq.addEventListener('click', function clickedSquare() {
            // determine the calling square
            const squareID = parseInt(this.id.replace('bs',''))
           
            // read state for turns
            if (boardValues[squareID] == 0) { //square unmarked
                this.innerHTML = playerOneTurn ? playerOneMark : opponentMark
                boardValues[squareID] = this.innerHTML
                playerOneTurn = !playerOneTurn //turn passes to other player

            } else { //illegal move
                alert('retry with a legal move!')
            }
   
        }, false)
    })
    // console.log('ok')
        

    // function to reset the board & legal moves

    // function that marks a square based on whose turn it is

    // function that initates a game loop

    return {boardValues}
    }       
)();



// player Factory Function (need only 1)

// winner display module (only need 1)


console.log(gameBoard.boardSquares)
