let searchBtn = document.querySelector('.search-btn-click')
let respSearch = document.querySelector('.resp-search')
let searchCloseBtn = document.querySelector('.search-close-btn')

searchBtn.addEventListener('click', () => {
    respSearch.classList.add('search-cover-show')
})
searchCloseBtn.onclick = () => {
    respSearch.classList.remove('search-cover-show')
}

let menuBtn = document.querySelector('.menu-bar')
let menuCloseBtn = document.querySelector('.menu-bar > .menu-close-btn')
let menu = document.querySelector('.navbar > nav > ul')

menuBtn.addEventListener('click', () => {
    menu.style.right = 0
    menu.classList.remove('r-hide')
    menuCloseBtn.classList.remove('r-hide')
})

menuCloseBtn.addEventListener('click', () => {
    menu.classList.add('r-hide')
    menuCloseBtn.classList.add('r-hide')
})


let fbLogo = document.querySelector('.fb-logo')
let twitterLogo = document.querySelector('.twitter-logo')
let instaLogo = document.querySelector('.insta-logo')
let githubLogo = document.querySelector('.github-logo')

fbLogo.onclick = () => {
    window.open('https://facebook.com/naveedbalti31', 'Facebook Page', 'width=900, height=900').moveBy(200, 200)
}
twitterLogo.onclick = () => {
    window.open('https://twitter.com/naveed_kazmi31', 'Twitter Page', 'width=900, height=900').moveBy(200, 200)
}
instaLogo.onclick = () => {
    window.open('https://instagram.com/aghanaveed_', 'Instagram Page', 'width=900, height=900').moveBy(200, 200)
}
githubLogo.onclick = () => {
    window.open('https://github.com/agha-naveed', 'Github Page', 'width=900, height=900').moveBy(200, 200)
}


let skillsRow1 = document.querySelectorAll('.skills-row')[0]
let skillsRow2 = document.querySelectorAll('.skills-row')[1]

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    const boxTop = skillsRow1.getBoundingClientRect().top;
    if(boxTop < triggerBottom) {
        skillsRow1.classList.add('l-show')
        skillsRow2.classList.add('r-show')
    }
    else {
        skillsRow1.classList.remove('l-show')
        skillsRow2.classList.remove('r-show')
    }
}

checkBoxes()
window.addEventListener('scroll', checkBoxes)