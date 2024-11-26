// Defining varaibles
const inputRange = document.getElementById('input-range');
const rangeMessage = document.getElementById('range-message');
const roll = document.getElementById('roll');
const outputSection = document.getElementById('output-section');

let countOfDices = 1;

// Updating text of count of dices
inputRange.addEventListener('input', function() {
    countOfDices = inputRange.value;
    rangeMessage.textContent = countOfDices;
});

// Roll dices when press button
roll.addEventListener('click', function(event) {
    // Prevent form submission
    event.preventDefault();

    // The outputSection is initially hidden, but here we are enabling its visibility
    outputSection.style.display = 'flex';

    // Clear the output section and resultOfDices array every time the button is pressed
    outputSection.innerHTML = ``;

    // Generate random numbers between 1 and 6 for the count of dice
    for(i = 1; i <= countOfDices; i++){
        let diceResult = Math.floor(Math.random() * 6) + 1;
        outputSection.innerHTML += `<img class="dice" id="dice" src="images/dice-${diceResult}.png" alt="Dice ${diceResult}"></img>`;
    }

})