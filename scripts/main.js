document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    menuToggle?.addEventListener('click', function() {
        navbar.classList.toggle('open');
    });
    
    // close menu when a link is clicked
    navbar.querySelectorAll('ul a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('open');
        });
    });

    // Add scroll-to-top for logo clicks
    const logo = document.querySelector('.logo');
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', function() {
        document.body.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // Gallery functionality
    const gallery = document.querySelector('.gallery-grid');
    const body = document.body;

    // Create modal elements
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    const modalImg = document.createElement('img');
    const closeBtn = document.createElement('button');
    closeBtn.className = 'gallery-modal-close';
    closeBtn.innerHTML = '×';
    modal.appendChild(modalImg);
    modal.appendChild(closeBtn);
    body.appendChild(modal);

    // Update the gallery click handler
    gallery.addEventListener('click', function(e) {
        // Don't open modal on mobile
        if (window.innerWidth <= 800) return;
        
        const item = e.target.closest('.gallery-item');
        if (!item) return;

        const img = item.querySelector('img');
        modalImg.src = img.src;
        modal.classList.add('active');
        body.style.overflow = 'hidden';
    });

    // Close modal on button click or outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target === closeBtn) {
            modal.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            body.style.overflow = '';
        }
    });
});