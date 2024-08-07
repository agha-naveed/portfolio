document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the lazy loading
    function lazyLoad(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Set the src attribute from data-src
                img.onload = () => img.classList.add('loaded'); // Optional: add a class once the image is loaded
                observer.unobserve(img); // Stop observing the image after loading
            }
        });
    }

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(lazyLoad, {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.1 // Trigger when at least 10% of the image is visible
    });

    // Get all images with the class "lazy"
    const lazyImages = document.querySelectorAll('img.lazy');

    // Observe each lazy image
    lazyImages.forEach(image => {
        observer.observe(image);
    });
});