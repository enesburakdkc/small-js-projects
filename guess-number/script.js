// Reading range values
function updateRangeValues() {
    // Get range input values
    let value1 = Number(rangeInput1.value);
    let value2 = Number(rangeInput2.value);

    // Declare variables outside the if statements
    let smallerValue, biggerValue;

    // Describing bigger and smaller values
    if (value2 > value1) {
        smallerValue = value1;
        biggerValue = value2;
        // Cleaning message
        document.getElementById('message').innerText = '';
    } else if (value1 > value2) {
        smallerValue = value2;
        biggerValue = value1;
        // Cleaning message
        document.getElementById('message').innerText = '';
    } else {
        // Set default values when equal
        smallerValue = value1;
        biggerValue = value1;
        document.getElementById('message').innerText = 'Please select different values!';
    }

    return {smallerValue, biggerValue};
}
// Set random number
function setRandomNumber(smallerValue, biggerValue) {
    let randomNumber = Math.floor(Math.random() * (biggerValue - smallerValue + 1) + smallerValue);
    randomNumberElement.textContent = randomNumber;
    return randomNumber;
}
// Check guess number
function checkGuess(event) {
    // Prevent form submission
    event.preventDefault();
    // Declare guess number and convert to number
    const guessNumber = parseInt(document.getElementById('guess-number').value);
    // Check guess number and return message
    if (guessNumber > randomNumber + 7) {
        message.textContent = `Too high!`;
    } else if (guessNumber > randomNumber + 3) {
        message.textContent = `High but close :)`;
    } else if (guessNumber > randomNumber) {
        message.textContent = `High but so close :)`;
    } else if (guessNumber < randomNumber - 7) {
        message.textContent = `Too low!`;
    } else if (guessNumber < randomNumber - 3) {
        message.textContent = `Low but close :)`;
    } else if (guessNumber < randomNumber) {
        message.textContent = `Low but so close :)`;
    } else if (guessNumber === randomNumber) {
        message.textContent = `Correct!`;
        // Make green body's background for 1 second
        document.body.style.transition = 'background-color 1s ease';
        document.body.style.backgroundColor = '#0ff00f';
        setTimeout(() => {
            document.body.style.backgroundColor = '';
        }, 1000);
    } else {
        message.textContent = `Please enter a valid number!`;
    }
}

// Get elements, values and declare random number
const rangeInput1 = document.getElementById('input-range-1');
const rangeInput2 = document.getElementById('input-range-2');
const selectedRange = document.getElementById('selected-range');
const shuffleButton = document.getElementById('shuffle-button');
const guessButton = document.getElementById('guess-button');
const message = document.getElementById('message');
const checkbox = document.getElementById('input-checkbox');
const container = document.getElementById('container');
const randomNumberElement = document.getElementById('random-number');

// Get range values and call function
const {smallerValue, biggerValue} = updateRangeValues();

// Update the display text first time for window onload
selectedRange.textContent = `${smallerValue} - ${biggerValue}`;

// Set random number between range values
let randomNumber = setRandomNumber(smallerValue, biggerValue);

// Add event listeners to both range inputs
rangeInput1.addEventListener('input', function () {
    // Get range values and call function
    const {smallerValue, biggerValue} = updateRangeValues();
    // Update the display text
    selectedRange.textContent = `${smallerValue} - ${biggerValue}`;
    // Set random number between range values
    randomNumber = setRandomNumber(smallerValue, biggerValue);
});
rangeInput2.addEventListener('input', function () {
    // Get range values and call function
    const {smallerValue, biggerValue} = updateRangeValues();
    // Update the display text
    selectedRange.textContent = `${smallerValue} - ${biggerValue}`;
    // Set random number between range values
    randomNumber = setRandomNumber(smallerValue, biggerValue);
});

// Check guess number on click guess button
guessButton.addEventListener('click', checkGuess);

// Shuffle random number on click shuffle button
shuffleButton.addEventListener('click', function(event) {
    // Prevent form submission
    event.preventDefault();
    // Get range values and call function
    const {smallerValue, biggerValue} = updateRangeValues();
    // Set random number between range values
    randomNumber = setRandomNumber(smallerValue, biggerValue);
});

// Show random number on checkbox change
checkbox.addEventListener('change', function() {
    if (this.checked) {
        container.style.transform = 'translateY(50px)';
        randomNumberElement.style.transform = 'translateY(-175px)';
    } else {
        container.style.transform = 'translateY(0)';
        randomNumberElement.style.transform = 'translateY(0)';
    }
});