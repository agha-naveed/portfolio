let searchBtn = document.querySelector('.search-btn-click')
let respSearch = document.querySelector('.resp-search')
let searchCrossBtn = document.querySelector('.fa-xmark')

searchBtn.addEventListener('click', () => {
    respSearch.style.display = 'block'
})
searchCrossBtn.onclick = () => {
    respSearch.style.display = 'none'
}
