let header = document.querySelector('header')
let searchType = document.querySelector('#search-type')
let search = document.querySelector('#search')
let showType = document.querySelector('.main-content h3')

window.onload = function () {
    // Extract query parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query'); // The search query
    const type = urlParams.get('type')
    
    if (type == 'characters') {
        showType.innerText = 'Character Details'
    } else if (type == 'movies') {
        showType.innerText = 'Movie Detail'
    } else if (type == 'books') {
        showType.innerText = 'Book Detail'
    } else if (type == 'potions') {
        showType.innerText = 'Potion Detail'
    } else if (type == 'spells') {
        showType.innerText = 'Spell Details'
    }
}




function changeHeaderHeight() {
    let height = header.offsetHeight
    let mainContent = document.querySelector('.main-content')
    mainContent.style.marginTop = `${height}px`
}

changeHeaderHeight()

