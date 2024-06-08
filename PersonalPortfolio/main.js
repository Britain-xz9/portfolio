// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Typing Effect for About Me Section
document.addEventListener('DOMContentLoaded', function() {
    const text = "Hello! I am Great Britan Rendon, I am currently a 2nd year student currently taking a program Bachelor of Science in Computer Science. Below is my school history and what I think where I will be 5 years from now...";
    let index = 0;
    const speed = 100;

    function typeEffect() {
        if (index < text.length) {
            document.querySelector('.about-description p').innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect();
});




// Image Carousel
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.cool-rectangle .rectangle-hover img');
    let currentImageIndex = 0;

    function showNextImage() {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = 'block';
    }

    setInterval(showNextImage, 2000); // Change image every 2 seconds
});
