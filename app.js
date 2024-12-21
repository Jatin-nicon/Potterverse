let search = document.querySelector('#search')
let searchType = document.querySelector('#search-type')
let header = document.querySelector('header')
let searchButton = document.querySelector('#search-button')


function changeHeaderHeight() {
    let height = header.offsetHeight
    let mainContent = document.querySelector('.main-content')
    mainContent.style.paddingTop = `${height}px`
}

changeHeaderHeight()


function handleSearch() {
    const query = search.value.trim();
    const type = searchType.value.trim();
    search.value = ''
    if (query) {
        // Redirect to the dynamic page with the query as a URL parameter
        window.location.href = `/Potterverse/searchQuery/search.html?query=${encodeURIComponent(query)}&type=${encodeURIComponent(type)}`;
    } else {
        alert("Please enter a search query!");
    }
}


searchButton.addEventListener('click', () => {
    handleSearch();
})