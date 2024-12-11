// Wait until the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {

    // Define element variables
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    const clearButton = document.getElementById('clear');
    const toggleSignButton = document.getElementById('toggle-sign');
    const percentageButton = document.getElementById('percentage');
    const divideButton = document.getElementById('divide');
    const sevenButton = document.getElementById('seven');
    const eightButton = document.getElementById('eight');
    const nineButton = document.getElementById('nine');
    const multiplyButton = document.getElementById('multiply');
    const fourButton = document.getElementById('four');
    const fiveButton = document.getElementById('five');
    const sixButton = document.getElementById('six');
    const subtractButton = document.getElementById('subtract');
    const oneButton = document.getElementById('one');
    const twoButton = document.getElementById('two');
    const threeButton = document.getElementById('three');
    const addButton = document.getElementById('add');
    const backspaceButton = document.getElementById('backspace');
    const zeroButton = document.getElementById('zero');
    const decimalButton = document.getElementById('decimal');
    const equalsButton = document.getElementById('equals');

    // Define variables for operators and numbers
    let result = '0';
    let charAtLast = '0';
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operators = ['%', '/', 'x', '-', '+'];
    let lastOperator;
    let lastOperatorIndex;
    let remainingPart = '';
    
    // Trigger actions when any button is pressed
    buttons.forEach(button => {
        button.addEventListener('click', () => {

            // Get the last operator, its index, and the remaining part after the last operator
            function checkOperators() {
                lastOperatorIndex = -1;
                lastOperator = null;
                // Find the last operator and its index
                for (let operator of operators) {
                    let index = result.lastIndexOf(operator);
                    if (index > lastOperatorIndex) {
                        lastOperatorIndex = index;
                        lastOperator = operator;
                    }
                }
                // Determine the remaining part
                if (lastOperatorIndex !== -1) { 
                    remainingPart = result.slice(lastOperatorIndex + 1);
                } else {
                    // If there is no operator, set the remaining part equal to the result
                    remainingPart = result;
                }
            }

            // Remove the last operator when another operator button is pressed
            function removeLastOperator() {
                if (operators.includes(charAtLast) && operators.includes(button.value)) {
                    result = result.slice(0, -2);
                    result += button.value;
                }
            }

            // Clear the display when a number is pressed after pressing equals
            function cleanAfterPressEquals(){
                if (charAtLast == 'equals' && numbers.includes(button.value)) {
                    result = button.value;
                    charAtLast = button.value;
                }
            }

            // Display the result
            function displayResult() {

                // Call functions to check all conditions
                checkOperators();
                removeLastOperator();
                cleanAfterPressEquals();

                // Show all information in the console
                console.log('Last operator -> ' + lastOperator);
                console.log('Last operator index -> ' + lastOperatorIndex);
                console.log('Last index value -> ' + result.charAt(result.length - 1));
                console.log('Char at last -> ' + charAtLast);
                console.log('Remaining part -> ' + remainingPart);
                console.log('Button value -> ' + button.value);
                console.log('Result ->' + result);
                console.log('----------------------');

                // Remove the leading zero when numbers are pressed
                if (result.charAt(0) == 0 && numbers.includes(result.charAt(1))) {
                    result = result.substr(1);
                }

                // Remove the leading zero when numbers are pressed
                if (remainingPart.charAt(0) == '0' && numbers.includes(remainingPart.charAt(1))) {
                    result = result.slice(0, lastOperatorIndex + 1) + remainingPart.substr(1);
                }
                
                // Display the value on the screen and set the last pressed character
                display.value = result;
                charAtLast = button.value;
            }

            // Check conditions for each button
            if (numbers.includes(button.value) || operators.includes(button.value)) {       // When numbers and operators are pressed
                // Append the last pressed value to the result
                result += button.value;
                // Check conditions and display the result
                displayResult();
            } else if (button.id == 'clear') {              // When 'AC' is pressed
                // Clear the result and charAtLast
                result = '0';
                charAtLast = '0';
                // Check conditions and display the result
                displayResult();
            } else if (button.id == 'toggle-sign') {        // When '+/-' is pressed
                // Handle different conditions
                if (result == 0) {  // If the result is '0', make it '-'
                    result = '-';
                } else if (result == '-') { // If the result is '-', make it '0'
                    result = '0';
                } else if (lastOperator != '-' && lastOperator != '+') {    // If the last operator is not '-' or '+', append '-'
                    result = result.slice(0, lastOperatorIndex + 1) + '-' + result.slice(lastOperatorIndex + 1);
                } else if (lastOperator == '-') {   // If the last operator is '-'
                    // Check the previous operator before pressing the toggle sign button. If it is '%', '/', 'x', or '.', do not add '+'
                    if ((operators.includes(result[lastOperatorIndex - 1]) && result[lastOperatorIndex - 1] != '-') || lastOperatorIndex == 0) {
                        result = result.slice(0, lastOperatorIndex ) + result.slice(lastOperatorIndex + 1);
                    } else {    // Add '+'
                        result = result.slice(0, lastOperatorIndex ) + '+' + result.slice(lastOperatorIndex + 1);
                    }
                } else if (lastOperator == '+') {   // If the last operator is '+'
                    result = result.slice(0, lastOperatorIndex) + '-' + result.slice(lastOperatorIndex + 1);
                }
                // Check conditions and display the result
                displayResult();
            } else if (button.id == 'backspace') {           // When '<--' is pressed
                // If the result is not '0', remove one character
                if(result != '0' ){ result = result.slice(0, -1); }
                // If the result is empty, reset it to '0'
                if(result == ''){ result = '0'; }
                // Check conditions and display the result
                displayResult();
            } else if (button.id == 'decimal') {             // When '.' is pressed
                // Prevent adding multiple '.' in the remaining part
                if (remainingPart.includes('.')) {
                    return;
                }
                // Add '0.' if there is nothing in the remaining part
                if (!remainingPart) {
                    result += '0.';
                } else {
                    result += button.value; // Add '.'
                }
                // Check conditions and display the result
                displayResult();
            } else if (button.id == 'equals') {              // When '=' is pressed
                // Replace 'x' with '*' for calculation
                result = result.toString().replace(/x/g, '*');
                // Calculate the result and convert it to a string
                result = eval(result).toString();
                // Check conditions and display the result
                displayResult();
            }
        });
    })
});