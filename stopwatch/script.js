// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {

    // Defining varaibles
    let stopwatch = document.getElementById('stopwatch');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    let isStopwatchRunning = false;
    let intervalId = null;
    let elapsedTime = 0;

    // Start the stopwatch when the start button is clicked
    function start(){
        if(isStopwatchRunning === false){
            isStopwatchRunning = true;
            
            intervalId = setInterval(() => {
                elapsedTime += 10;

                let hours = Math.floor(elapsedTime / 3600000).toString().padStart(2, 0);
                let minutes = Math.floor((elapsedTime % 3600000) / 60000).toString().padStart(2, 0);
                let seconds = Math.floor((elapsedTime % 60000) / 1000).toString().padStart(2, 0);

                stopwatch.textContent = `${hours}:${minutes}:${seconds}`;
            }, 10);
        }
    }

    // Stop the stopwatch when the stop button is clicked
    function stop(){
        isStopwatchRunning = false;
        clearInterval(intervalId);
    }

    // Reset the stopwatch when reset button is clicked
    function reset(){
        isStopwatchRunning = false;
        clearInterval(intervalId);
        elapsedTime = 0;
        stopwatch.textContent = `00:00:00`;
    }

    // Run the functions when buttons are clicked
    startButton.addEventListener('click', start);
    stopButton.addEventListener('click', stop);
    resetButton.addEventListener('click', reset);
});