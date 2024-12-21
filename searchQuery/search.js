let search = document.querySelector('#search')
let searchType = document.querySelector('#search-type')
let header = document.querySelector('header')
let searchButton = document.querySelector('#search-button')

async function catchData() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query'); // The search query
    const type = urlParams.get('type');
    var url = `https://api.potterdb.com/v1/${type}?filter[name_cont]=${query}`
    
    // if (type == 'characters') {
    //     showType.innerText = 'Character Details'
    // } else if (type == 'movies') {
    //     showType.innerText = 'Movie Detail'
    // } else if (type == 'books') {
    //     showType.innerText = 'Book Detail'
    // } else if (type == 'potions') {
    //     showType.innerText = 'Potion Detail'
    // } else if (type == 'spells') {
    //     showType.innerText = 'Spell Details'
    // }

    try {
        let res = await fetch(url)
        let data = await res.json()
        let num = await data.data.length
        let h2 = document.querySelector('h2')
        h2.innerHTML = `Search Result for <i>'${query}'</i>`
        
        for (let i=0; i<num; i++) {
            let showSearch = document.createElement('div')
            let showDetail = document.createElement('div')

            showDetail.style.textAlign = 'left'
            showDetail.style.paddingLeft = '2rem'

            let details = document.createElement('p')
            let mainContent = document.querySelector('.main-content')
            showSearch.classList.add('card')
            
            if (type == 'characters') {
                items = await data.data[i]
                let name = items.attributes.name
                let species = await items.attributes.species
                let image = await items.attributes.image
                let img = document.createElement('img')
                details.innerHTML = `<br><b>Name:</b> ${name} <br><b>Species:</b> ${species}`
                
                if (image == null) {
                    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
                } else {
                    img.src = image
                }
                showDetail.insertAdjacentElement('beforeend', details)
                showSearch.insertAdjacentElement('beforeend', img)
                showSearch.insertAdjacentElement('beforeend', showDetail)
                
                mainContent.insertAdjacentElement('beforeend', showSearch)
                console.log(data.data[0].attributes)
            }
            
        }
    } catch {
        console.log('Some error Occured')
    }
}

function changeHeaderHeight() {
    let height = header.offsetHeight
    let mainContent = document.querySelector('.main-content')
    mainContent.style.paddingTop = `${height}px`
}

function handleSearch() {
    const query = search.value.trim();
    const type = searchType.value.trim();
    search.value = ''
    if (query) {
        // Redirect to the dynamic page with the query as a URL parameter
        window.location.href = `search.html?query=${encodeURIComponent(query)}&type=${encodeURIComponent(type)}`;
    } else {
        alert("Please enter a search query!");
    }
}


searchButton.addEventListener('click', () => {
    handleSearch();
})



changeHeaderHeight()



window.onload = catchData