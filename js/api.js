const searchPhone = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    console.log(url);
}