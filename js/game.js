// Imports
import isTouchScreenDevice from './isTouchScreenDevice.js';

/* 
The game class.
Represents a round of tic tac toe
*/
export default class Game {

    /* The class's constructor. Used to create a new game object .*/
    constructor(round){
        this.round = round; // Keeps track of what round we are on
        this.turn = "x"; // This property tracks who's turn it is.
        this.cells = document.getElementsByClassName("game-cell"); // This property is a list of all the 9 game cells
        this.isTouchScreenDevice = isTouchScreenDevice(); // A boolean that tracks if the user is on touch screen
    }

    /** METHODS **/


    /* 
    Checks who's turn it is.
    Adds an x, or an o, depending on the turn
    when the user clicks a cell.
    */
    addXOrO(cell) {
        
        // Check who's turn it is
        if (this.turn == "x") {
            // Check if there is already an x or an o in the cell
            if (cell.innerHTML == "") {
                // Add an x
                let text = document.createTextNode("X");
                cell.appendChild(text);
                // Change turn to o
                this.turn = "o";
            }
            
        }
        // If i is o's turn...
        else if(this.turn == "o") {
            // Check if there is already an x or an o in the cell
            if (cell.innerHTML == "") { 
                // Add an O
                let text = document.createTextNode("O");
                cell.appendChild(text);
                // Change turn to x
                this.turn = "x";
            }
            
        }

        // Call the updateGame() method to chek if we should end the game
        this.updateGame();

    }


    /* 
    Resets the gambe board
    */
    resetBoard() {
        // Loop through the cells 
        for (let i=0; i<this.cells.length; i++) {
            // Change inner html to ""
            this.cells[i].innerHTML = ""
        }

        // Change turn to x
        this.turn = "x";

        // Remove the winner message
        document.getElementById('whose-the-winner').innerHTML = "";

         // Call the updateGame() method
         this.updateGame();
    }

    /* 
    Checks if the game is ended.
    Calls the appropriate functions.
    */
    updateGame() {
        // Check if anybody has won
        let didXWin = this.checkIfWon("X");
        let didOWin = this.checkIfWon("O");

        // If there is a winner...
        if (didXWin || didOWin) {
            // It's game over, do nothing
        }
        else {
             // Check if game is a tie
            let gameIsATie = this.checkIfTie();
            if (!gameIsATie) {
                // If nobody has won the game yet, or tied, display who's turn it is
                document.getElementById('whose-the-winner').innerHTML = "It is " + this.turn + "'s turn!";
            }
            else {
                document.getElementById('whose-the-winner').innerHTML = "It's a draw!";
            }
        }

       

        
        
    }

    /* 
    Checks all of the possible ways to win
    */
    checkIfWon(xOro) {
        const whoseTheWinner = document.getElementById('whose-the-winner');
        let foundAWinner = false;

        // Check if 3 in a row diagnaly from left to right
        if (this.cells[0].innerHTML == xOro && this.cells[4].innerHTML == xOro && this.cells[8].innerHTML == xOro) {
            whoseTheWinner.innerHTML = xOro + " wins!";
            foundAWinner = true;
        }

        // Check if 3 in a row diagnaly from right  to left
        if (this.cells[2].innerHTML == xOro && this.cells[4].innerHTML == xOro && this.cells[6].innerHTML == xOro) {
            whoseTheWinner.innerHTML = xOro + " wins!";
            foundAWinner = true;
        }

        // Check if 3 in a row on the top
        if (this.cells[0].innerHTML == xOro && this.cells[1].innerHTML == xOro && this.cells[2].innerHTML == xOro) {
            whoseTheWinner.innerHTML = xOro + " wins!";
            foundAWinner = true;
        }

        // Check if 3 in a row in the middle
        if (this.cells[3].innerHTML == xOro && this.cells[4].innerHTML == xOro && this.cells[5].innerHTML == xOro) {
            whoseTheWinner.innerHTML = xOro + " wins!";
            foundAWinner = true;
        }

        // Check if 3 in a row on the bottom
        if (this.cells[6].innerHTML == xOro && this.cells[7].innerHTML == xOro && this.cells[8].innerHTML == xOro) {
            whoseTheWinner.innerHTML = xOro + " wins!";
            foundAWinner = true;
        }
        

        // Check if 3 in a row on the far left column vertically
        if (this.cells[0].innerHTML == xOro && this.cells[3].innerHTML == xOro && this.cells[6].innerHTML == xOro) {
            whoseTheWinner.innerHTML = xOro + " wins!";
            foundAWinner = true;
        }

        // Check if 3 in a row in the middle column vertically
        if (this.cells[1].innerHTML == xOro && this.cells[4].innerHTML == xOro && this.cells[7].innerHTML == xOro) {
            whoseTheWinner.innerHTML = xOro + " wins!";
            foundAWinner = true;
        }

        // Check if 3 in a row in the far right column vertically
        if (this.cells[2].innerHTML == xOro && this.cells[5].innerHTML == xOro && this.cells[8].innerHTML == xOro) {
            whoseTheWinner.innerHTML = xOro + " wins!";
            foundAWinner = true;
        }

        if (foundAWinner) {
            return true;
        }
        else {
            return false;
        }

    }

    /* 
    Checks if the game is a tie
    by seeing if all of the cells are filled out
    */
    checkIfTie() {
        let foundABlank = false;
        // Loop through all of the cells
        for (let i=0; i<this.cells.length; i++) {
            // Check if the cell is blank
            if (this.cells[i].innerHTML =="") {
                // if it is, set foundABlank to true
                foundABlank = true;
            }
        }

        // If we found a blank 
        if (foundABlank) {
            // return false, it is not a tie
            return false;
        }
        else {
            // If we did not find a blank, it is a tie. Return true
            return true;
        }
    }

    /* 
    Initializes the game by adding event listeners and touch end events if this is the first round
    */
    initialize(objectName) {
        // If this is the first round...
        if (this.round == 1) {
            // Loop through all of the cells
            for (let i=0; i<this.cells.length; i++) {
                // If the user is not on touch screen 
                if (this.isTouchScreenDevice == 0) {
                    // Add event listeners to all the cells
                    this.cells[i].addEventListener("click", function() {objectName.addXOrO(objectName.cells[i]);}, false);
                }
                else {
                    // Add touch end event for touch screens
                    this.cells[i].addEventListener("touchend", function() {objectName.addXOrO(objectName.cells[i]);}, false);

                }
                
            }

            // Set the onclick method for the reset button
            document.getElementById("reset-button").addEventListener("click", function(){objectName.resetBoard();});
             // Call the updateGame() method
            this.updateGame();

        }
        
    }

    


}