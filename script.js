// game controlling the flow of things

// gameboard module (only need 1 of them)
const gameBoard = (function gameBoard() {
    let boardValues = [0,0,0,0,0,0,0,0,0]
    let playerOneTurn = true // default
    let playerOneMark = 'X'
    let opponentMark = 'O'
    const _checkwinner = ()=>{console.log('winner check!')}
    const _marksquare = ()=>{console.log(this)} // can't seem to get this to bind properly?
    // initialize each square with a board-square using for loop
        // attach the event listener for a click
    const boardSquares = document.querySelectorAll(".board-square")
    // for (let i=0; i < boardSquares.length; i++) {
    //     boardSquares[i].addEventListener('click', () =>{
    //         _marksquare.bind(boardSquares[i])
    //     }, false)
    // }

    boardSquares.forEach((sq) => {
        console.log(typeof sq)
        console.log(sq)

        sq.addEventListener('click', function clickedSquare() {
            // determine the calling square
            const squareID = parseInt(this.id.replace('bs',''))
            // read state for turns
            
            if (boardValues[squareID] == 0) { //square unmarked

                this.innerHTML = playerOneTurn ? playerOneMark : opponentMark
                boardValues[squareID] = this.innerHTML
                playerOneTurn = !playerOneTurn
            } else { //illegal move
                alert('retry with a legal move!')
            }
            console.log(boardValues[squareID])
            //use id to determine which `boardValues` to mark, if legal
            // ensure it is an unmarked square, then assign boardsquare for the current player
            // change the turn to the other player

            
        }, false)
    })
    // console.log('ok')
        

    // function to reset the board & legal moves

    // function that marks a square based on whose turn it is

    // function that initates a game loop

    return {boardValues}
    }       
)();


// board-square Factory Function (will need 9x)

// player Factory Function (need only 1)

// winner display module (only need 1)


console.log(gameBoard.boardSquares)
