// Function to add a digit or operator to the display
function addToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}
// Function to delete the last character from display
function deleteLast() {
    var currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
     
}

// Function to calculate the expression and show the result
function calculate() {
    try {
        // Evaluate the expression and show result
        document.getElementById('display').value = 
            eval(document.getElementById('display').value);
    } catch (error) {
        // If there's an error, clear the display
        clearDisplay();
        alert('Invalid expression');
        
    }
}
