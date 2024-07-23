document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        var loader = document.querySelector(".loader");
        var content = document.querySelector(".root");

        loader.style.display = 'none'
        content.style.display = "block";
    });
})


let searchBtn = document.querySelector('.resp-search-box')
let respSearch = document.querySelector('.resp-search')
let searchCloseBtn = document.querySelector('.search-close-btn')

searchBtn.addEventListener('click', () => {
    respSearch.classList.add('search-cover-show')
})
searchCloseBtn.onclick = () => {
    respSearch.classList.remove('search-cover-show')
}

let menuBtn = document.querySelector('.menu-bar > .menu-open-bar')
let menuCloseBtn = document.querySelector('.menu-bar > .menu-close-btn')
let menu = document.querySelector('.menu-search > ul')
let menuOptions = document.querySelectorAll('.menu-search > ul > li')

menuBtn.addEventListener('click', () => {
    menu.classList.add('r-show')
    menuCloseBtn.classList.add('r-show')
    menuCloseBtn.style.right = '40px'
})

menuCloseBtn.addEventListener('click', () => {
    menu.classList.remove('r-show')
    menuCloseBtn.classList.remove('r-show')
    menuCloseBtn.style.right = 0
})

menuOptions.forEach(elem => {
    elem.onclick = () => {
        if(elem.className != "menu-inner-search") {
            menu.classList.remove('r-show')
            menuCloseBtn.classList.remove('r-show')
            menuCloseBtn.style.right = 0
        }
    }
})


let fbLogo = document.querySelectorAll('.fb-logo')
let linkedinLogo = document.querySelectorAll('.linkedin-logo')
let twitterLogo = document.querySelectorAll('.twitter-logo')
let instaLogo = document.querySelectorAll('.insta-logo')
let githubLogo = document.querySelectorAll('.github-logo')

fbLogo.forEach(elem => {
    elem.addEventListener('click', () => {
        window.open('https://facebook.com/naveedbalti31', 'Facebook Page', 'width=900, height=900').moveBy(200, 200)
    })
});
linkedinLogo.forEach(elem => {
    elem.addEventListener('click', () => {
        window.open('https://linkedin.com/in/agha-naveed', 'Linkedin Page', 'width=900, height=900').moveBy(200, 200)
    })
});
twitterLogo.forEach(elem => {
    elem.addEventListener('click', () => {
        window.open('https://x.com/naveed_kazmi31', 'Twitter Page', 'width=900, height=900').moveBy(200, 200)
    })
});
instaLogo.forEach(elem => {
    elem.addEventListener('click', () => {
        window.open('https://instagram.com/aghanaveed_', 'Instagram Page', 'width=900, height=900').moveBy(200, 200)
    })
});
githubLogo.forEach(elem => {
    elem.addEventListener('click', () => {
        window.open('https://github.com/agha-naveed', 'Github Page', 'width=900, height=900').moveBy(200, 200)
    })
});


let skillsRow = document.querySelector('.skills-row')

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
        else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateY(60px)';
        }
    });
}, {
    threshold: 0.1
});

observer.observe(skillsRow);


const myPic = document.querySelector('.my-pic > img')
const myDetails = document.querySelector('.front-details')

window.addEventListener('mousemove', (e) => {
    myPic.style.right = (e.clientX / 100) + 'px'
    myDetails.style.left = (e.clientX / 100) + 'px'
})


const upArrowBtn = document.querySelector('.up-arrow-btn')

window.addEventListener('scroll', (e) => {
    // Arrow Hide
    if(window.scrollY < 400) {
        upArrowBtn.classList.add('up-arrow-hide')
        upArrowBtn.classList.remove('up-arrow-show')
    }

    // Arrow Show
    else if(window.scrollY >= 400) {
        upArrowBtn.classList.remove('up-arrow-hide')
        upArrowBtn.classList.add('up-arrow-show')
    }
})

upArrowBtn.onclick = () => {
    window.location.href = '#start'
}


// ---------------- Text Project Hover -------------------

const projectHover = document.querySelectorAll('.pr-on-hover')

projectHover.forEach(elem => {
    let img = elem.querySelector('.on-hover-img');

    elem.querySelector('a').addEventListener('mousemove', e => {
        img.style.width = 'auto'
        img.style.left = e.clientX + 'px'
        img.style.top = e.clientY + 'px'
        elem.querySelector('a').classList.add('pr-hover-text')
    })
    elem.querySelector('a').addEventListener('mouseleave', e => {
        img.style.width = 0
        elem.querySelector('a').classList.remove('pr-hover-text')
    })

})



// ---------------- Text Project Hover Ended -------------------


let projectDetails = document.querySelector('.project-details')
let flipBox = document.querySelectorAll('.pr-flip-box')
let libManag = document.querySelector('.lib_management')
let twitterClone = document.querySelector('.twitter_clone')
let passwordStrength = document.querySelector('.otp_gen')
let weatherApp = document.querySelector('.weather_app')
let closeProjectDiv = document.querySelectorAll('.close-project-div')
let pr_yellow_bg = document.querySelectorAll('.overlay-bg');
let pr_remove_bg = document.querySelectorAll('.overlay-remove-bg');

const root = document.documentElement;

// Function to handle flipBox click
function handleFlipBoxClick(index) {
    return function(e) {
        projectDetails.style.width = '100%';
        document.body.style.overflow = 'hidden'
        
        let project = [libManag, twitterClone, passwordStrength, weatherApp][index];
        project.style.display = 'flex';
        
        setTimeout(() => {
            projectDetails.classList.remove('pr-details-hide') 
            pr_yellow_bg[index].style.width = "100%"
            pr_remove_bg[index].style.width = "100%"
        }, 200);
        setTimeout(() => root.style.setProperty('--padding', 0), 700)
        setTimeout(() => {
            project.querySelector('.p-images').classList.add('show-f-right');
        }, 800);
        setTimeout(() => {
            project.querySelector('.p-description').classList.add('show-f-right');
            project.querySelector('.p-animation').style.left = '5%'
            project.querySelector('.p-animation').style.width = '90%'

        }, 1150);
        setTimeout(() => {
            project.querySelector('.p-animation').style.left = '100%'
            project.querySelector('.p-animation').style.width = 0
        }, 1900);
        setTimeout(() => {
            project.querySelector('.p-description > .p_para').classList.add('show-f-top');
            project.querySelector('.p-description > .p-animation-div > h1').classList.add('show-f-top');
        }, 2000);

        mouseY = e.clientY;
        currentScroll = window.scrollY;
        scrollPosition = currentScroll + mouseY;
    }
}

// Add click event listeners for flipBox elements
flipBox.forEach((box, index) => {
    box.addEventListener('click', handleFlipBoxClick(index));
});

function handleCloseProjectDivClick() {
    setTimeout(() => {
        pr_yellow_bg.forEach(elem => elem.style.width = 0)
        pr_remove_bg.forEach(elem => elem.style.width = 0)
        
        document.querySelectorAll('.p-description > .p_para').forEach(elem => elem.classList.remove('show-f-top'));
        document.querySelectorAll('.p-description > .p-animation-div > h1').forEach(elem => elem.classList.remove('show-f-top'));
    }, 300);

    setTimeout(() => {
        document.querySelectorAll('.p-description').forEach(elem => elem.classList.remove('show-f-right'));
        document.querySelectorAll('.p-images').forEach(elem => elem.classList.remove('show-f-right'));
        root.style.setProperty('--padding', '120px');
    }, 500);
    setTimeout(() => {
        [libManag, twitterClone, passwordStrength, weatherApp].forEach(project => project.style.display = 'none');
    }, 1120);

    setTimeout(() => {
        projectDetails.classList.add('pr-details-hide')
        document.body.style.overflow = 'auto'
    }, 1180);
    setTimeout(() => {
        projectDetails.style.width = 0;
    }, 1400);
}

// Add click event listeners for close project div elements
closeProjectDiv.forEach(elem => {
    elem.addEventListener('click', handleCloseProjectDivClick);
});

flipBox.forEach(flip_1 => {
    flip_1.addEventListener('mousemove', (e) => {
        flip_1.style.scale = 1.1
        flip_1.style.setProperty('--op', 0.1)
        const rect = flip_1.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        // Box-Shadow
        flip_1.style.boxShadow = `0 20px 25px rgba(0, 0, 0, 0.425)`
    
        // Calculate the rotation values based on mouse position
        const rotateX = ((y / rect.height) - 0.5) * 40; // Adjust the multiplier for desired effect
        const rotateY = ((x / rect.width) - 0.5) * -40; // Adjust the multiplier for desired effect

        // Apply the transform
        flip_1.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${ rotateY}deg)`;
        const shineX = ((x / rect.width) * 100).toFixed(2);
        const shineY = ((y / rect.height) * 100).toFixed(2);

        // Update the position of the pseudo-element to simulate sunlight
        flip_1.style.setProperty('--shine-x', `${shineX}%`);
        flip_1.style.setProperty('--shine-y', `${shineY}%`);
    });

    flip_1.addEventListener('mouseleave', () => {
        flip_1.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        flip_1.style.scale = 1
        flip_1.style.setProperty('--shine-x', `0`);
        flip_1.style.setProperty('--shine-y', `0`);
        flip_1.style.setProperty('--op', 0)
        flip_1.style.boxShadow = ``
    });
})


// smoothScroll({yPos: 'end'});