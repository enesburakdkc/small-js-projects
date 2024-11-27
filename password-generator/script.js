// Defining varaibles
const passwordLenght = document.getElementById('password-length');
const lenghtMessage = document.getElementById('length-message');
const checkBoxes = document.querySelectorAll('.input-checkbox');
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generateButton = document.getElementById('generate-button');
const passwordMessage = document.getElementById('password-message');

let length = 1;
let password = '';
const lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbersChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbolsChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '"', "'", '<', '>', ',', '.', '/', '?', '\\', '|', '`', '~'];
let allowedChars = [];

// Update the text showing the number of password characters
passwordLenght.addEventListener('input', function() {
    length = passwordLenght.value;
    lenghtMessage.textContent = length;
});

// Generate a password when the generate button is clicked
generateButton.addEventListener('click', function(event) {
    // Prevent form submission
    event.preventDefault();
    // Generate password
    generatePassword();
});

// Function for generate password
function generatePassword() {
    // Clear the previously generated password
    password = '';
    allowedChars = [];

    // Define a variable for counting the number of checked boxes
    let checkedBoxCount = 0;


    // Read the checkboxes and append the checked selections to allowedChars array. Sametime count to the checked checkboxes.
    checkBoxes.forEach(checkBox => {
        if(checkBox.checked) { 
            allowedChars = allowedChars.concat(eval(checkBox.id + 'Chars'));
            checkedBoxCount++;
        }
    });
    
    // Generate random characters from the allowedChars array as many times as the password length
    for (let i = 0; i < length; i++) {
        password += allowedChars[Math.floor(Math.random() * allowedChars.length)];
    }

    // Change the display of the password message area
    passwordMessage.style.display = 'block';

    // Display the password if at least 1 checkbox is checked
    if(checkedBoxCount > 0) {
        passwordMessage.textContent = `Your password is: `; 
        const boldElement = document.createElement('b');
        boldElement.textContent = password;
        passwordMessage.appendChild(boldElement);
    }else { 
        passwordMessage.innerText = `Please check some checkboxes.`;
    }
}