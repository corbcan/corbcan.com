document.addEventListener('DOMContentLoaded', () => {
    function updateCountdown() {
        const deathDate = new Date('March 6, 2094 00:00:00').getTime();
        const now = new Date().getTime();
        const timeLeft = deathDate - now;
        
        const years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
        const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        const milliseconds = timeLeft % 1000;
        
        document.getElementById('countdown-timer').innerHTML = 
            `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`;
        
        setTimeout(updateCountdown, 1); // Update every millisecond
    }
    
    updateCountdown(); // Initial call
});
document.addEventListener('DOMContentLoaded', function() {
    const marquee = document.querySelector('.marquee span');
    marquee.addEventListener('animationiteration', function() {
      setTimeout(function() {
        marquee.style.animation = 'none';
        marquee.offsetHeight; /* trigger reflow */
        marquee.style.animation = null;
      }, 0);
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Get the current page filename
    var currentPage = window.location.pathname.split("/").pop();

    // If it's the home page, set currentPage to "index.html"
    if (currentPage === "" || currentPage === "/") {
        currentPage = "index.html";
    }

    // Get all navigation links
    var navLinks = document.querySelectorAll('.nav-link');

    // Loop through the links
    navLinks.forEach(function(link) {
        // If the link's href matches the current page, add the 'active' class
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});