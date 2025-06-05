// Loading animation
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    
    // Simulate loading time
    setTimeout(function() {
        loader.classList.add('hidden');
        
        // Remove loader from DOM after animation completes
        setTimeout(function() {
            loader.style.display = 'none';
        }, 800);
    }, 2500);
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});
// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});


// Animation for skills when they come into view
const skillLevels = document.querySelectorAll('.skill-level');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            
            setTimeout(() => {
                entry.target.style.transition = 'width 1.5s ease-in-out';
                entry.target.style.width = width;
            }, 300);
            
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillLevels.forEach(level => {
    observer.observe(level);
});
