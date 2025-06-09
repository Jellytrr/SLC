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


    const scroller = document.getElementById('scroller');

    // Clone item buat efek infinite loop
    const items = Array.from(scroller.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        clone.classList.add('clone');
        scroller.appendChild(clone);
    });

    // Drag-scroll
    let isDown = false;
    let startX;
    let scrollLeft;

    scroller.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - scroller.offsetLeft;
        scrollLeft = scroller.scrollLeft;
        scroller.style.cursor = 'grabbing';
    });

    scroller.addEventListener('mouseleave', () => {
        isDown = false;
        scroller.style.cursor = 'grab';
    });

    scroller.addEventListener('mouseup', () => {
        isDown = false;
        scroller.style.cursor = 'grab';
    });

    scroller.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scroller.offsetLeft;
        const walk = (x - startX) * 1.5;
        scroller.scrollLeft = scrollLeft - walk;
    });

    // Infinite scroll wrap logic
    scroller.addEventListener('scroll', () => {
        const scrollWidth = scroller.scrollWidth / 2;
        if (scroller.scrollLeft >= scrollWidth) {
            scroller.scrollLeft -= scrollWidth;
        } else if (scroller.scrollLeft <= 0) {
            scroller.scrollLeft += scrollWidth;
        }
    });

    // Auto scroll smooth
    function autoScroll() {
        scroller.scrollLeft += 0.5; // kecepatan scroll
        requestAnimationFrame(autoScroll);
    }

    window.addEventListener('load', () => {
        scroller.scrollLeft = scroller.scrollWidth / 4;
        requestAnimationFrame(autoScroll);
    });


