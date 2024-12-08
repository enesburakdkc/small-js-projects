// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {    
    // Defining variables
    let digitalClock = document.getElementById('digital-clock');
    
    // Function to get and display the current time
    function currentTime(){
        const now = new Date();
        let hours = now.getHours();
        // Get hours and determine AM or PM
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        if (hours >= 12) { hours = hours - 12; }
        hours = hours.toString().padStart(2, 0);
        // Get minutes, seconds and milliseconds
        const minutes = now.getMinutes().toString().padStart(2, 0);
        const seconds = now.getSeconds().toString().padStart(2, 0);
        const milliseconds = now.getMilliseconds().toString().padStart(3, 0);
        // Display the current time
        digitalClock.textContent = `${hours}:${minutes}:${seconds}:${milliseconds} ${meridiem}`;
    }
    
    // Run the function on page load and update every millisecond
    currentTime();
    setInterval(currentTime, 1);
});