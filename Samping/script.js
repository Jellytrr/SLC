document.getElementById("menu-toggle").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show"); // <-- INILAH bagian yang nutup saat diklik ulang
  });
  // Biar sidebar nutup pas salah satu menu diklik (khusus di mobile)
document.querySelectorAll('#sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("show");
  });
});


// Slideshow functionality
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let slider = document.querySelector('.slider');
    slider.style.transition = 'transform 1s ease-in-out';  // Adding smooth animation

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increase slideIndex, loop back to 1 if we go beyond the number of slides
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    
    // Apply the transform to create the sliding effect
    slider.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`; // Sliding to the left

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();
