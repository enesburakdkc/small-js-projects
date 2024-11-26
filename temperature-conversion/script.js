// Converting temperatures based on the selected conversion type
function temperatureConversion() {
    if (celsiusToFahrenheit.checked) {
        outputNumber.value = Math.round(((inputNumber.value * 9/5) + 32) * 100) / 100;
    } else if (fahrenheitToCelsius.checked) {
        outputNumber.value = Math.round(((inputNumber.value - 32) * 5/9) * 100) / 100;;
    }
}

// Defining variables
const firstTemperature = document.getElementById("first-temperature");
const secondTemperature = document.getElementById("second-temperature");
const inputNumber = document.getElementById("input-number");
const outputNumber = document.getElementById("output-number");
const celsiusToFahrenheit = document.getElementById("input-radio-celsius-to-fahrenheit");
const fahrenheitToCelsius = document.getElementById("input-radio-fahrenheit-to-celsius");

// Change temperatures messages on selection changed
celsiusToFahrenheit.addEventListener('change', function () {
    if (this.checked) {
        firstTemperature.textContent = `C°`;
        secondTemperature.textContent = `F°`;
        temperatureConversion();
    }
});
fahrenheitToCelsius.addEventListener('change', function () {
    if (this.checked) {
        firstTemperature.textContent = `F°`;
        secondTemperature.textContent = `C°`;
        temperatureConversion();
    }
});

// Perform conversion on change value
inputNumber.addEventListener('change', temperatureConversion);
inputNumber.addEventListener('keyup', temperatureConversion);