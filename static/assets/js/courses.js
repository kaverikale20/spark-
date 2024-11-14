let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to display the correct slides
function showSlide(index) {
    const slidesToShow = window.innerWidth < 768 ? 3 : 5; // Shows 2 on small screens, 3 on larger screens
    currentIndex = (index + totalSlides) % totalSlides;

    // Calculate the translation offset for the current slide position
    const offset = -currentIndex * (100 / slidesToShow);
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Move slides based on direction
function moveSlide(direction) {
    const slidesToShow = window.innerWidth < 768 ? 3 : 5;

    // If at the end of the slides, reset to beginning; if at the start, move to the end
    if (direction === 1 && currentIndex >= totalSlides - slidesToShow) {
        currentIndex = -1;
    } else if (direction === -1 && currentIndex <= 0) {
        currentIndex = totalSlides;
    }
    showSlide(currentIndex + direction);
}

// Optional: Autoplay slider every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);
