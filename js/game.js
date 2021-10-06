/* 
The game class.
Represents a round of tic tac toe
*/
class Game {

    /* The class's constructor. Used to create a new game object .*/
    constructor(round, isTouchScreenDevice){
        this.round = round; // Keeps track of what round we are on
        this.turn = "x"; // This property tracks who's turn it is.
        this.cells = document.getElementsByClassName("game-cell"); // This property is a list of all the 9 game cells
        this.isTouchScreenDevice = isTouchScreenDevice; // A boolean that tracks if the user is on touch screen
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

        }
        
    }

    


}