// game controlling the flow of things

// gameboard module (only need 1 of them)
const gameBoard = (function gameBoard() {
    let boardValues = [0,0,0,0,0,0,0,0,0]
    let playerOneTurn = true // default
    let playerOneMark = 'X'
    let opponentMark = 'O'
    let winnerFound = false
    const winnerDisplay = document.querySelector('#winner-display h1')
    

    const _checkwinner = ()=>{
        
        // define a winning board
        // compare the winning board to the current boardvalues
        const winningIndices = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
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
                    console.log(boardValues)
                    console.log(ind)
                }
            }
        })
        if (winnerFound) {
            console.log(`Winner Check: ${winnerFound ? 'winner found' : 'no winner!'}`)
            let winnerMSG = `${playerOneTurn 
                ? displayController.playerTwoTitle.textContent 
                : displayController.playerOneTitle.textContent}`
            winnerDisplay.textContent = `King of the Ring: ${winnerMSG}`
        }
    }

    // test function for selecting the right scope
    const _marksquare = ()=>{console.log(this)} // can't seem to get this to bind properly?
    
    // squares and game logic
    const boardSquares = document.querySelectorAll(".board-square")

    boardSquares.forEach((sq) => {

        sq.addEventListener('click', function clickedSquare() {
            // determine the calling square
            const squareID = parseInt(this.id.replace('bs',''))
           
            // read state for turns
            if (boardValues[squareID] == 0 && !winnerFound) { //square unmarked
                this.innerHTML = playerOneTurn ? playerOneMark : opponentMark
                boardValues[squareID] = this.innerHTML
                playerOneTurn = !playerOneTurn //turn passes to other player
                _checkwinner()

            } else if(winnerFound){
                alert('clear the current game to run it back!')
            } else { //illegal move
                alert('retry with a legal move!')
            }
   
        }, false)
    })        

    const clearBoard = () => {
        boardValues = [0,0,0,0,0,0,0,0,0]
        playerOneTurn = true; //reset the game state as well
        boardSquares.forEach((sq) =>{
            sq.innerHTML = ''
            
        })
        winnerFound = false
    }

    return {boardValues, winnerFound, clearBoard}
    }       
)();



// player Factory Function (need only 1)

// winner display module (only need 1)
const displayController = (() => {
    // define display functions (edit the css of elements to make them appear/disappear when buttons pushed)
    const container = document.querySelector('#container')
    const introContainer = document.querySelector('#intro-container')
    const nameInputOne = document.querySelector("#player1-name")
    const nameInputTwo = document.querySelector("#player2-name")
    const playerOneTitle = document.querySelector("#player1-title")
    const playerTwoTitle = document.querySelector("#player2-title")

    const pvpBegin = document.querySelector("#pvp-begin")
    let playerOneName = 'Player 1'
    let playerTwoName = 'Player 2'

    const _renderGameboard = () => {
        container.style.display = 'flex'
        introContainer.style.display = 'none'
        playerOneTitle.textContent = nameInputOne.value ? nameInputOne.value : playerOneName
        playerTwoTitle.textContent = nameInputTwo.value ? nameInputTwo.value : playerTwoName
    }
    
    // function that initates a game loop
    pvpBegin.addEventListener('click', _renderGameboard)
    
    // function to reset the board & legal moves
    const clearBoardButton = document.querySelector("#clear-board")
    clearBoardButton.addEventListener('click', gameBoard.clearBoard)

    // return to the inital menu
    const _returnToOptions = () => {
        gameBoard.clearBoard()
        container.style.display = 'none'
        introContainer.style.display = 'flex'
    }
    const returnToOptions = document.querySelector("#return-options")
    returnToOptions.addEventListener('click', _returnToOptions)



    return {playerOneTitle, playerTwoTitle}
})(); 

// displayController.renderGameboard()
console.log(gameBoard.boardSquares)


