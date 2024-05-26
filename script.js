let searchBtn = document.querySelector('.search-btn-click')
let respSearch = document.querySelector('.resp-search')
let searchCloseBtn = document.querySelector('.search-close-btn')

searchBtn.addEventListener('click', () => {
    respSearch.style.display = 'block'
})
searchCloseBtn.onclick = () => {
    respSearch.style.display = 'none'
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