// game controlling the flow of things

// gameboard module (only need 1 of them)
const gameBoard = (function gameBoard() {
    let boardValues = [0,0,0,0,0,0,0,0,0]
    let playerOneTurn = true // default
    let playerOneMark = 'X'
    let opponentMark = 'O'
    const _checkwinner = ()=>{
        let winnerFound = false
        // define a winning board
        // compare the winning board to the current boardvalues
        const winningIndices = [
            [0,1,2],
            [3,4,5],
            [4,5,6],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]       
        ]
        winningIndices.forEach(ind=>{
            if(boardValues[ind[0]] == 'X' || boardValues[ind[0]] == 'O') {
                if (boardValues[ind[0]] === boardValues [ind[1]] && boardValues[ind[0]] == boardValues[ind[2]]) {
                    winnerFound = true
                }
            }
        })
        console.log(`Winner Check: ${winnerFound?'winner found':'no winner!'}`)
    }
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
                _checkwinner()

            } else { //illegal move
                alert('retry with a legal move!')
            }
   
        }, false)
    })        



    return {boardValues, _checkwinner}
    }       
)();



// player Factory Function (need only 1)

// winner display module (only need 1)
const displayController = (() => {
    // define display functions (edit the css of elements to make them appear/disappear when buttons pushed)

    
    // function to reset the board & legal moves

    // function that initates a game loop

    // add event listeners to buttons (options section, side selection)
})(); 

console.log(gameBoard.boardSquares)
