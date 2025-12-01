document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbar = document.getElementById('navbar');

    if (!navbarToggle || !navbar) {
        console.warn('Navbar elements not found');
        return;
    }

    navbarToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navbarToggle.classList.toggle('active');
        navbar.classList.toggle('active');
        
        // Toggle between hamburger and X icon
        const icon = navbarToggle.querySelector('i');
        if (navbarToggle.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close navbar when a link is clicked
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarToggle.classList.remove('active');
            navbar.classList.remove('active');
            
            // Reset icon
            const icon = navbarToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = event.target.closest('header');
        if (!isClickInside && navbar.classList.contains('active')) {
            navbarToggle.classList.remove('active');
            navbar.classList.remove('active');
            
            // Reset icon
            const icon = navbarToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});
