function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'flex';

    // Close popup if clicking outside content area
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            closePopup();
        }
    });
}

function closePopup() {
    document.querySelectorAll('.tips-popup').forEach(popup => {
        popup.style.display = 'none';
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('.navbar').offsetHeight,
                    behavior: 'smooth'
                });
            }

            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});




