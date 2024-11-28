let url = 'https://api.potterdb.com/v1/'

let searchType = document.querySelector('#search-type')
let header = document.querySelector('header')

function changeHeaderHeight() {
    let height = header.offsetHeight
    let mainContent = document.querySelector('.main-content')
    mainContent.style.paddingTop = `${height}px`
}

changeHeaderHeight()