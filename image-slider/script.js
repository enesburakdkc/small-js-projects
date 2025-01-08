// Wait for be sure loaded the DOM content
document.addEventListener('DOMContentLoaded', () => {
    // Defining the varaibles
    const previousButton = document.getElementById('previous-button');
    const nextButton = document.getElementById('next-button');
    const images = document.querySelectorAll('.images img');
    let imageIndex = 0;
    let intervalId = null;
    
    function returnSlide() {
        if (imageIndex >= images.length) {
            imageIndex = 0;
        }
        else if (imageIndex < 0) {
            imageIndex = images.length - 1;
        }
    }
    
    function previousImage() {
        clearInterval(intervalId);
        imageIndex --;
        images[imageIndex + 1].classList.remove('displayImage');
        returnSlide();
        images[imageIndex].classList.add('displayImage');
        intervalId = setInterval(nextImage, 5000);
    }

    function nextImage() {
        clearInterval(intervalId);
        imageIndex ++;
        images[imageIndex - 1].classList.remove('displayImage');
        returnSlide();
        images[imageIndex].classList.add('displayImage');
        intervalId = setInterval(nextImage, 5000);
    }

    if (images.length > 0) {
        images[imageIndex].classList.add('displayImage');
        intervalId = setInterval(nextImage, 5000);
    }

    previousButton.addEventListener('click', previousImage);
    nextButton.addEventListener('click', nextImage);
});