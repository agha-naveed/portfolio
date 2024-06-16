var mainBody = document.querySelector('.main-body')

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


let fbLogo = document.querySelectorAll('.fb-logo')
let twitterLogo = document.querySelectorAll('.twitter-logo')
let instaLogo = document.querySelectorAll('.insta-logo')
let githubLogo = document.querySelectorAll('.github-logo')

fbLogo.forEach(elem => {
    elem.addEventListener('click', () => {
        window.open('https://facebook.com/naveedbalti31', 'Facebook Page', 'width=900, height=900').moveBy(200, 200)
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


let skillsRow1 = document.querySelectorAll('.skills-row')[0];
let skillsRow2 = document.querySelectorAll('.skills-row')[1];

let ticking = false;

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    const boxTop = skillsRow1.getBoundingClientRect().top;
    if (boxTop < triggerBottom && boxTop > -200) {
        skillsRow1.classList.add('r-show');
        skillsRow2.classList.add('r-show');
    }
    else {
        skillsRow1.classList.remove('r-show');
        skillsRow2.classList.remove('r-show');
   }
    ticking = false;
}

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(checkBoxes);
        ticking = true;
    }
}
  
window.addEventListener('scroll', onScroll);


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

let projectDetails = document.querySelector('.project-details')
let flipBox = document.querySelectorAll('.pr-flip-box')
let libManag = document.querySelector('.lib_management')
let twitterClone = document.querySelector('.twitter_clone')
let passwordStrength = document.querySelector('.pass_strength')
let weatherApp = document.querySelector('.weather-app')
let closeProjectDiv = document.querySelectorAll('.close-project-div')

// ---------- Library Management Project Items ----------
let lib_p_des = document.querySelector('.lib_management > .p-description')
let lib_p_des_p = document.querySelector('.lib_management > .p-description > p')
let lib_p_des_h = document.querySelector('.lib_management > .p-description > h1')
let lib_p_img = document.querySelector('.lib_management > .p-images')

// ---------- Twitter Clone Project Items ----------
let twitter_p_des = document.querySelector('.twitter_clone > .p-description')
let twitter_p_des_p = document.querySelector('.twitter_clone > .p-description > p')
let twitter_p_des_h = document.querySelector('.twitter_clone > .p-description > h1')
let twitter_p_img = document.querySelector('.twitter_clone > .p-images')

// ---------- Password Strength Project Items ----------
let passStrength_p_des = document.querySelector('.pass_strength > .p-description')
let passStrength_p_des_p = document.querySelector('.pass_strength > .p-description > p')
let passStrength_p_des_h = document.querySelector('.pass_strength > .p-description > h1')
let passStrength_p_img = document.querySelector('.pass_strength > .p-images')

// ---------- Live Weather App Project Items ----------
let weatherApp_p_des = document.querySelector('.weather_app > .p-description')
let weatherApp_p_des_p = document.querySelector('.weather_app > .p-description > p')
let weatherApp_p_des_h = document.querySelector('.weather_app > .p-description > h1')
let weatherApp_p_img = document.querySelector('.weather_app > .p-images')

flipBox[0].addEventListener('click', () => {
    projectDetails.style.width = '100%'
    mainBody.style.display = 'none'
    libManag.style.display = 'flex'
    
    setTimeout(() => {
        lib_p_img.classList.add('show-f-right')
    }, 200)
    setTimeout(() => {
        lib_p_des.classList.add('show-f-right')
    }, 400)

    setTimeout(() => {
        lib_p_des_p.classList.add('show-f-top')
        lib_p_des_h.classList.add('show-f-top')
    }, 700)
}
 ) 

flipBox[1].addEventListener('click', () => {
    console.log('Hello')
    projectDetails.style.width = '100%'
    mainBody.style.display = 'none'
    twitterClone.style.display = 'flex'
    
    setTimeout(() => {
        twitter_p_img.classList.add('show-f-right')
    }, 200)
    setTimeout(() => {
        twitter_p_des.classList.add('show-f-right')
    }, 400)

    setTimeout(() => {
        twitter_p_des_p.classList.add('show-f-top')
        twitter_p_des_h.classList.add('show-f-top')
    }, 700)
})

flipBox[2].addEventListener('click', () => {
    console.log('Hello')
    projectDetails.style.width = '100%'
    mainBody.style.display = 'none'
    passwordStrength.style.display = 'flex'
    
    setTimeout(() => {
        passStrength_p_img.classList.add('show-f-right')
    }, 200)
    setTimeout(() => {
        passStrength_p_des.classList.add('show-f-right')
    }, 400)

    setTimeout(() => {
        passStrength_p_des_p.classList.add('show-f-top')
        passStrength_p_des_h.classList.add('show-f-top')
    }, 700)
})

flipBox[3].addEventListener('click', () => {
    console.log('Hello')
    projectDetails.style.width = '100%'
    mainBody.style.display = 'none'
    weatherApp.style.display = 'flex'
    
    setTimeout(() => {
        weatherApp_p_img.classList.add('show-f-right')
    }, 200)
    setTimeout(() => {
        weatherApp_p_des.classList.add('show-f-right')
    }, 400)

    setTimeout(() => {
        weatherApp_p_des_p.classList.add('show-f-top')
        weatherApp_p_des_h.classList.add('show-f-top')
    }, 700)
})



closeProjectDiv.forEach(elem => {
    elem.onclick = () => {
        setTimeout(() => {
            lib_p_des_p.classList.remove('show-f-top')
            lib_p_des_h.classList.remove('show-f-top')

            twitter_p_des_p.classList.remove('show-f-top')
            twitter_p_des_h.classList.remove('show-f-top')
            
            passStrength_p_des_p.classList.remove('show-f-top')
            passStrength_p_des_h.classList.remove('show-f-top')
            
            weatherApp_p_des_p.classList.remove('show-f-top')
            weatherApp_p_des_h.classList.remove('show-f-top')
        }, 300)

        setTimeout(() => {
            lib_p_des.classList.remove('show-f-right')
            twitter_p_des.classList.remove('show-f-right')
            passStrength_p_des.classList.remove('show-f-right')
            weatherApp_p_des.classList.remove('show-f-right')
        }, 500)
        setTimeout(() => {
            lib_p_img.classList.remove('show-f-right')
            twitter_p_img.classList.remove('show-f-right')
            passStrength_p_img.classList.remove('show-f-right')
            weatherApp_p_img.classList.remove('show-f-right')
        }, 700)
        
        setTimeout(() => {
            mainBody.style.display = 'block'
            projectDetails.style.width = 0
            libManag.style.display = 'none'
            twitterClone.style.display = 'none'
            passwordStrength.style.display = 'none'
            weatherApp.style.display = 'none'
        }, 1600)
    }

})