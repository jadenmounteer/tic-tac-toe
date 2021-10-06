/* 
This function checks if the user is using a touch screen.
Returns 0 if they are and 1 if they are not.
*/
function isTouchScreenDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;      
};

export default isTouchScreenDevice;