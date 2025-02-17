let data;

async function getData(url) {
    const response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        displayGrid(data.places, 4);
    }
}

getData("data/places.json");

const btnAll = document.getElementById("dir-all");
const btnCul = document.getElementById("dir-cul");
const btnNat = document.getElementById("dir-nat");
const btnTec = document.getElementById("dir-tec");
const btnHis = document.getElementById("dir-his");

btnAll.addEventListener("click", () => {
    displayGrid(data.places, 4);
});

/*
types:
0 - cultural
1 - natural
2 - technical
3 - historical
(4 - all)
*/

btnCul.addEventListener("click", () => {
    displayGrid(data.places.filter(place => place.type === 0), 0);
});

btnNat.addEventListener("click", () => {
    displayGrid(data.places.filter(place => place.type === 1), 1);
});

btnTec.addEventListener("click", () => {
    displayGrid(data.places.filter(place => place.type === 2), 2);
});

btnHis.addEventListener("click", () => {
    displayGrid(data.places.filter(place => place.type === 3), 3);
});

const displayText = document.getElementById("dir-text");
const displayContainer = document.getElementById("dir-grid");

function displayGrid(places, type){
    displayText.innerHTML = "";
    switch(type){
        case 0:
            displayText.innerHTML = "Discover our culture!";
            btnAll.classList.remove("filter-btn-a");
            btnCul.classList.add("filter-btn-a");
            btnNat.classList.remove("filter-btn-a");
            btnTec.classList.remove("filter-btn-a");
            btnHis.classList.remove("filter-btn-a");
            break;
        case 1:
            displayText.innerHTML = "Discover our nature!";
            btnAll.classList.remove("filter-btn-a");
            btnCul.classList.remove("filter-btn-a");
            btnNat.classList.add("filter-btn-a");
            btnTec.classList.remove("filter-btn-a");
            btnHis.classList.remove("filter-btn-a");
            break;
        case 2:
            displayText.innerHTML = "Discover our technical heritage!";
            btnAll.classList.remove("filter-btn-a");
            btnCul.classList.remove("filter-btn-a");
            btnNat.classList.remove("filter-btn-a");
            btnTec.classList.add("filter-btn-a");
            btnHis.classList.remove("filter-btn-a");
            break;
        case 3:
            displayText.innerHTML = "Discover our history!";
            btnAll.classList.remove("filter-btn-a");
            btnCul.classList.remove("filter-btn-a");
            btnNat.classList.remove("filter-btn-a");
            btnTec.classList.remove("filter-btn-a");
            btnHis.classList.add("filter-btn-a");
            break;
        case 4:
            displayText.innerHTML = "Discover our cultural, natural, technical and historical places!";
            btnAll.classList.add("filter-btn-a");
            btnCul.classList.remove("filter-btn-a");
            btnNat.classList.remove("filter-btn-a");
            btnTec.classList.remove("filter-btn-a");
            btnHis.classList.remove("filter-btn-a");
            break;
        default:
            displayText.innerHTML = "Discover our cultural, natural, technical and historical places!";
            btnAll.classList.add("filter-btn-a");
            btnCul.classList.remove("filter-btn-a");
            btnNat.classList.remove("filter-btn-a");
            btnTec.classList.remove("filter-btn-a");
            btnHis.classList.remove("filter-btn-a");
            break;    
    }

    displayContainer.innerHTML = "";
    
    let i = 0;
    places.forEach(place => {
        let card = document.createElement("div");
        card.classList.add("dir-card");
        if(i%2 === 0) card.classList.add("dir-card-g")

        card.innerHTML = `
            <img src="${place.image_url}" alt="${place.title}" loading="lazy">
            <h3>${place.title}</h3>
            <p>${place.description}</p>
            <a href="${place.website}">${place.website}</a>
        `;

        displayContainer.appendChild(card);
        i++;
    });
}