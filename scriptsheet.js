// JavaScript code begins
        
// Initialize Particles.js
particlesJS("particles-js", {
    // Configuration for particles animation
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        // Number of particles and density
        color: { value: "#00ffcc" },
        // Particle color
        shape: { type: "circle" },
        // Particle shape
        opacity: { value: 0.5, random: true },
        // Opacity settings
        size: { value: 3, random: true },
        // Particle size
        line_linked: {
            // Connection lines between particles
            enable: true,
            distance: 150,
            color: "#4cc9f0",
            opacity: 0.2,
            width: 1
        },
        move: {
            // Particle movement settings
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        // User interaction settings
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            // Particles repel on hover
            onclick: { enable: true, mode: "push" }
            // Particles push away on click
        }
    }
});

// Create 3D Data Sphere
const sphere = document.getElementById('sphere');
// Get sphere container element
const points = 50;
// Number of data points to create

// Create data points
for (let i = 0; i < points; i++) {
    // Loop to create points
    const point = document.createElement('div');
    // Create div element for point
    point.className = 'data-point';
    // Add CSS class
    
    // Random spherical coordinates
    const phi = Math.acos(2 * Math.random() - 1);
    // Random angle phi
    const theta = Math.random() * 2 * Math.PI;
    // Random angle theta
    
    // Convert to Cartesian coordinates
    const x = 200 * Math.sin(phi) * Math.cos(theta);
    // X coordinate
    const y = 200 * Math.sin(phi) * Math.sin(theta);
    // Y coordinate
    const z = 200 * Math.cos(phi);
    // Z coordinate
    
    point.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    // Apply 3D transformation
    sphere.appendChild(point);
    // Add point to sphere
}

// Create connections
for (let i = 0; i < 30; i++) {
    // Loop to create connection lines
    const connection = document.createElement('div');
    // Create div element for connection
    connection.className = 'connection';
    // Add CSS class
    
    const length = Math.random() * 100 + 50;
    // Random length between 50-150px
    const angle = Math.random() * Math.PI * 2;
    // Random angle
    
    connection.style.width = `${length}px`;
    // Set width
    connection.style.transform = `rotate(${angle}rad)`;
    // Set rotation
    connection.style.top = `${Math.random() * 400}px`;
    // Random vertical position
    connection.style.left = `${Math.random() * 400}px`;
    // Random horizontal position
    
    sphere.appendChild(connection);
    // Add connection to sphere
}

// Modal Functionality
const videoResumeBtn = document.getElementById('videoResumeBtn');
// Get video resume button
const resumeBtn = document.getElementById('resumeBtn');
// Get resume button
const videoResumeModal = document.getElementById('videoResumeModal');
// Get video modal
const resumeModal = document.getElementById('resumeModal');
// Get resume modal
const closeVideoModal = document.getElementById('closeVideoModal');
// Get video modal close button
const closeResumeModal = document.getElementById('closeResumeModal');
// Get resume modal close button
const videoPlayer = document.getElementById('videoPlayer');
// Get video player iframe
const resumeViewer = document.getElementById('resumeViewer');
// Get resume viewer iframe

// Open Video Resume Modal
videoResumeBtn.addEventListener('click', () => {
    // Add click event listener
    videoResumeModal.style.display = 'block';
    // Show modal
    document.body.style.overflow = 'hidden';
    // Disable body scrolling
});

// Open Resume Modal
resumeBtn.addEventListener('click', () => {
    // Add click event listener
    resumeModal.style.display = 'block';
    // Show modal
    document.body.style.overflow = 'hidden';
    // Disable body scrolling
});

// Close Video Modal
closeVideoModal.addEventListener('click', () => {
    // Add click event listener
    videoResumeModal.style.display = 'none';
    // Hide modal
    document.body.style.overflow = 'auto';
    // Enable body scrolling
    // Reset video to stop playback
    videoPlayer.src = videoPlayer.src;
    // Reload iframe to stop video
});

// Close Resume Modal
closeResumeModal.addEventListener('click', () => {
    // Add click event listener
    resumeModal.style.display = 'none';
    // Hide modal
    document.body.style.overflow = 'auto';
    // Enable body scrolling
});

// Close modals when clicking outside
window.addEventListener('click', (event) => {
    // Add click event listener to window
    if (event.target === videoResumeModal) {
        // If click is on video modal overlay
        videoResumeModal.style.display = 'none';
        // Hide modal
        document.body.style.overflow = 'auto';
        // Enable scrolling
        videoPlayer.src = videoPlayer.src;
        // Stop video
    }
    
    if (event.target === resumeModal) {
        // If click is on resume modal overlay
        resumeModal.style.display = 'none';
        // Hide modal
        document.body.style.overflow = 'auto';
        // Enable scrolling
    }
});

// Close modals with Escape key
document.addEventListener('keydown', (event) => {
    // Add keydown event listener
    if (event.key === 'Escape') {
        // If Escape key is pressed
        videoResumeModal.style.display = 'none';
        // Hide video modal
        resumeModal.style.display = 'none';
        // Hide resume modal
        document.body.style.overflow = 'auto';
        // Enable scrolling
        videoPlayer.src = videoPlayer.src;
        // Stop video
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Select all anchor links with hash href
    anchor.addEventListener('click', function(e) {
        // Add click event listener
        e.preventDefault();
        // Prevent default anchor behavior
        const target = document.querySelector(this.getAttribute('href'));
        // Get target element
        if (target) {
            // If target exists
            target.scrollIntoView({
                // Scroll to target
                behavior: 'smooth',
                // Smooth scrolling
                block: 'start'
                // Align to top
            });
        }
    });
});

// Animate skill tags on hover
document.querySelectorAll('.skill-tag').forEach(tag => {
    // Select all skill tags
    tag.addEventListener('mouseenter', function() {
        // Add mouseenter event
        this.style.transform = 'scale(1.1)';
        // Scale up
    });
    
    tag.addEventListener('mouseleave', function() {
        // Add mouseleave event
        this.style.transform = 'scale(1)';
        // Reset scale
    });
});

// Contact link hover effects
document.querySelectorAll('.contact-link').forEach(link => {
    // Select all contact links
    link.addEventListener('mouseenter', function() {
        // Add mouseenter event
        this.style.background = 'var(--neon-teal)';
        // Change background
        this.style.color = 'var(--deep-space)';
        // Change text color
    });
    
    link.addEventListener('mouseleave', function() {
        // Add mouseleave event
        this.style.background = 'transparent';
        // Reset background
        this.style.color = 'var(--neon-teal)';
        // Reset text color
    });
});

// Preview button hover effects
document.querySelectorAll('.preview-btn').forEach(btn => {
    // Select all preview buttons
    btn.addEventListener('mouseenter', function() {
        // Add mouseenter event
        if (this.classList.contains('preview-btn-secondary')) {
            // If secondary button
            this.style.background = 'rgba(0, 255, 204, 0.1)';
            // Change background
        }
    });
    
    btn.addEventListener('mouseleave', function() {
        // Add mouseleave event
        if (this.classList.contains('preview-btn-secondary')) {
            // If secondary button
            this.style.background = 'transparent';
            // Reset background
        }
    });
});

// About Section Interactive Effects
// Add hover effect to highlight items
document.querySelectorAll('.highlight-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s';
    });
    
    item.addEventListener('mouseleave', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1)';
    });
});

// Animate fact cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe fact cards for animation
document.querySelectorAll('.fact').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});

// Add animation to highlight items
document.querySelectorAll('.highlight-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(item);
});

// Add hover effect to detail items
document.querySelectorAll('.detail-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1.2) rotate(5deg)';
        icon.style.transition = 'transform 0.3s';
    });
    
    item.addEventListener('mouseleave', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});