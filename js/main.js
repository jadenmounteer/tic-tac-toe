/* 
This function checks if the user is using a touch screen.
Returns 0 if they are and 1 if they are not.
*/
function isTouchScreenDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;      
};

/* 
Called when the reset button is clicked
TODO: Maybe I should include this as  an event and initialize the button when I iniialize the game?
*/
function resetBoard() {
    console.log("reseting board!");
}


// This code is called when the user opens the site.

// Create a new game object.
// Change round property to 1.
let gameOfTicTacToe = new Game(1, isTouchScreenDevice());

// Initialize the game
gameOfTicTacToe.initialize(gameOfTicTacToe);



