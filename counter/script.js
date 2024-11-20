//Describing varibles
const number = document.getElementById('number');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

let count = number.innerText;

//Adding event listeners to the buttons
decrease.onclick = function () {
    count--;
    number.textContent = count;
}

reset.onclick = function () {
    count = 0;
    number.textContent = count;
}

increase.onclick = function () {
    count++;
    number.textContent = count;
}