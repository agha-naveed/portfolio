document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the lazy loading
    function lazyLoad(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img); 
            }
        });
    }

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(lazyLoad, {
        root: null,
        rootMargin: '100px',
        threshold: 0.1
    });

    const lazyImages = document.querySelectorAll('img.lazy');

    lazyImages.forEach(image => {
        observer.observe(image);
    }); 
});