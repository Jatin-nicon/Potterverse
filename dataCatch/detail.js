let header = document.querySelector('header');
let searchType = document.querySelector('#search-type');
let searchButton = document.querySelector('#search-button');
let search = document.querySelector('#search');
let showType = document.querySelector('.main-content h3');
let showHeadName = document.querySelector('.character-info h3');
let para = document.querySelector('.character-info p');
let image = document.querySelector('.character-image img')


async function showDetail() {
    // Extract query parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id'); // The search query
    const type = urlParams.get('type');
    
    const url = `https://api.potterdb.com/v1/${type}/${id}`;
    let val = await fetch(url);
    let data = await val.json();
    
    if (type == 'characters') {
        showType.innerText = 'Character Details';
        dataObject = data.data.attributes;
        showHeadName.innerText = dataObject.name;
        
        if (dataObject.image == null) {
            image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
        } else {
            image.src = dataObject.image
        };

        para.innerHTML = `<strong>Species:</strong> ${dataObject.species} <br>
        <strong>Gender:</strong> ${dataObject.gender} <br>
        <strong>House:</strong> ${dataObject.house} <br>
        <strong>Blood Type:</strong> ${dataObject.blood_status} <br>
        <strong>Birth Details:</strong> ${dataObject.born} <br>
        <strong>Death Details:</strong> ${dataObject.died} <br>
        <strong>Eye Color:</strong> ${dataObject.eye_color} <br>
        <strong>Hair Color:</strong> ${dataObject.hair_color} <br>
        <strong>Skin Color:</strong> ${dataObject.skin_color} <br>
        <strong>Family Members:</strong> <br>${dataObject.family_members} <br>
        `;




    } else if (type == 'movies') {
        showType.innerText = 'Movie Detail'
        dataObject = data.data.attributes;
        showHeadName.innerText = dataObject.title;

        if (dataObject.poster == null) {
            image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
        } else {
            image.src = dataObject.poster
        };

        para.innerHTML = `<strong>Budget:</strong> ${dataObject.budget} <br>
        <strong>Box Office:</strong> ${dataObject.box_office} <br>
        <strong>Release Date:</strong> ${dataObject.release_date} <br>
        <strong>Run Time:</strong> ${dataObject.running_time} <br>
        <strong>Rating:</strong> ${dataObject.rating} <br>
        <strong>Directors:</strong> ${dataObject.directors} <br>
        <strong>Editors:</strong> ${dataObject.editors} <br>
        <strong>Music Composers:</strong> ${dataObject.music_composers} <br>
        <strong>Producer:</strong> ${dataObject.producers} <br>
        <strong>Screen Writers:</strong> ${dataObject.screenwriters} <br>
        <strong>Cinematographers:</strong> ${dataObject.cinematographers} <br>
        <strong>Distributors:</strong> ${dataObject.distributors} <br>
        <strong>Summary:</strong> <br>${dataObject.summary} <br>
        <strong>Trailer:</strong> <a href='${dataObject.trailer}'>Click To Watch</a> <br>
        `;
    } else if (type == 'books') {
        showType.innerText = 'Book Detail'
        dataObject = data.data.attributes;
        showHeadName.innerText = dataObject.title;

        if (dataObject.cover == null) {
            image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
        } else {
            image.src = dataObject.cover
        };

        para.innerHTML = `<strong>Author:</strong> ${dataObject.author} <br>
        <strong>Pages:</strong> ${dataObject.pages} <br>
        <strong>Release Date:</strong> ${dataObject.release_date} <br>
        <strong>Summary:</strong> <br>${dataObject.summary} <br>
        `;
        
    } else if (type == 'potions') {
        showType.innerText = 'Potion Detail'
        dataObject = data.data.attributes;
        showHeadName.innerText = dataObject.name;

        if (dataObject.image == null) {
            image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
        } else {
            image.src = dataObject.image
        };

        para.innerHTML = `<strong>Effect:</strong> ${dataObject.effect} <br>
        <strong>Ingridients:</strong> ${dataObject.ingredients} <br>
        <strong>Release Date:</strong> ${dataObject.release_date} <br>
        <strong>Inventor:</strong> ${dataObject.inventors == null ? 'Unknown' : dataObject.inventors} <br>
        <strong>Side Effects:</strong> ${dataObject.side_effects == null ? 'None/Unknown' : dataObject.inventors} <br>
        <strong>Characteristics:</strong> <br>${dataObject.characteristics} <br>
        `;
    } else if (type == 'spells') {
        showType.innerText = 'Spell Details'
        dataObject = data.data.attributes;
        showHeadName.innerText = dataObject.name;

        if (dataObject.image == null) {
            image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
        } else {
            image.src = dataObject.image
        };

        para.innerHTML = `<strong>Effect:</strong> ${dataObject.effect} <br>
        <strong>Category:</strong> ${dataObject.category} <br>
        <strong>Incantation:</strong> ${dataObject.incantation} <br>
        <strong>Hand Position:</strong> ${dataObject.hand} <br>
        <strong>Light:</strong> ${dataObject.light} <br>
        `;
    }

    
    

}


function changeHeaderHeight() {
    let height = header.offsetHeight
    let mainContent = document.querySelector('.main-content')
    mainContent.style.marginTop = `${height}px`
}


function handleSearch() {
    const query = search.value.trim();
    const type = searchType.value.trim();
    search.value = ''
    if (query) {
        // Redirect to the dynamic page with the query as a URL parameter
        window.location.href = `../searchQuery/search.html?query=${encodeURIComponent(query)}&type=${encodeURIComponent(type)}`;
    } else {
        alert("Please enter a search query!");
    }
}


searchButton.addEventListener('click', () => {
    handleSearch();
})

changeHeaderHeight()

window.onload = showDetail()