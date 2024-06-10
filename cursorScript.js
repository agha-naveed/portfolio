let cursor = document.getElementById('cursor')
let cursorBorder = document.querySelector('.cursor-border')

window.onmousemove = (e) => {
    
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

    if(!cursorBorder.classList.contains('cursor-large')) {
        cursorBorder.style.left = -7.3 + e.clientX + 'px';
        cursorBorder.style.top = -7.5 + e.clientY + 'px';
    }
    else {
        cursorBorder.style.left = -25 + e.clientX + 'px';
        cursorBorder.style.top = -28 + e.clientY + 'px';
    }
}

document.addEventListener('mousemove', function(e) {
    let eventChecker = e.target
    if (eventChecker.closest('.navbar ul') || eventChecker.closest('.btn-shine a') || eventChecker.closest('#search-input') || eventChecker.closest('.contact-me-btn a') || eventChecker.closest('.skills-box')) {
        cursorBorder.classList.add('cursor-large')
    } else {
        cursorBorder.classList.remove('cursor-large')
    }
  });

