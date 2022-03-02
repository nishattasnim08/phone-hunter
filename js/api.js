const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;


    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));
}

// search result display

const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    phones.forEach(phone => {
        console.log(phone);

        // dynamic display card creating
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="w-50 h-75 my-5 mx-auto card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="text-center card-title">${phone.phone_name}</h5>
                    <p class="card-text text-center">${phone.brand}</p>
                </div>
        </div>
        `;

        searchResult.appendChild(div);
    });
}
