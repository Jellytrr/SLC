// Sidebar toggle logic
document.getElementById("menu-toggle").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
});

// Close sidebar when a link is clicked (mobile only)
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.remove("show");
    });
});

// Slideshow functionality (pure slide)
let slideIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.getElementsByClassName('slide');
const totalSlides = slides.length;

function showSlides() {
    slideIndex = (slideIndex + 1) % totalSlides;
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    setTimeout(showSlides, 3000);
}

showSlides();
