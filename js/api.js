const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;


    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data.slice(0,20)));
}

// search result display

const displaySearchResult = phones => {

    if (phones.length == 0) {
        alert("No Phone Found");
    }
    else {
        const searchResult = document.getElementById('search-result');
        phones.forEach(phone => {
            // console.log(phone);

            // dynamic display card creating
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="w-50 h-75 my-5 mx-auto card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="text-center card-title">${phone.phone_name}</h5>
                    <p class="card-text text-center">${phone.brand}</p>
                    <button type="button" onclick="phoneDetail('${phone.slug}')" class="btn btn-primary">Primary</button>
                </div>
        </div>
        `;

            searchResult.appendChild(div);
        });
    }
}

// phone details
const phoneDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data));
}

// display details
const displayPhoneDetail = phone => {
    const phoneDetails = document.getElementById('phone-detail');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="card-body">
    <img src="${phone.image}" class="w-25 h-50 my-5 mx-auto card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.name}</h5>
      <p class="card-text">Storage: ${phone.mainFeatures.storage}</p>
      <p class="card-text">Display Size: ${phone.mainFeatures.displaySize}</p>
      <p class="card-text">Chipset: ${phone.mainFeatures.chipSet}</p>
      <p class="card-text">Memory: ${phone.mainFeatures.memory}</p>
      <p class="card-text">Sensors: ${phone.mainFeatures.sensors.join(' ,')}</p>
      <p class="card-text">Release Date: ${phone?.releaseDate ? phone.releaseDate : "Release date has not declared"}</p>
    </div>
    `;
    phoneDetails.appendChild(div);


}