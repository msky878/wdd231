let data;

async function getData(url) {
    const response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        let i = Math.floor(Math.random() * data.places.length);
        displayFeatured(data.places[i]);
    }
}

getData("data/places.json");

function displayFeatured(place){
    const fimg = document.getElementById("featured-img");
    const ftext = document.getElementById("featured-text");

    fimg.src = place.image_url;
    fimg.alt = place.title;

    ftext.innerHTML = place.title;
}