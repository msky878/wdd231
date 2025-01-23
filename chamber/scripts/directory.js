const showGrid = document.getElementById('display-grid');
const showList = document.getElementById('display-list');

const directory = document.getElementById('directory');

let data;

async function getData(url) {
    const response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        //console.table(data.members);
        displayGrid(data.members);
    }
}

getData("data/members.json");

const displayGrid = (members) => {
    directory.classList.add("grid");
	directory.classList.remove("list");
    directory.innerHTML = "";
    members.forEach((member) => {
        let card = document.createElement("section");
        card.classList.add("directory-card-grid");

        let logo = document.createElement("img");
        let name = document.createElement("h3");
        let address = document.createElement("p");
        let phonenumber = document.createElement("p");
        let website = document.createElement("a");

        logo.setAttribute("src", member.imgurl);
        logo.setAttribute("alt", `Logo of ${member.name}`);
        logo.setAttribute("loading", "lazy");

        name.textContent = member.name;
        address.textContent = member.address;
        phonenumber.textContent = member.phonenumber;
        website.textContent = member.url;
        website.setAttribute("href", member.url);

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(website);

        directory.appendChild(card);
    });
}

showGrid.addEventListener('click', () => displayGrid(data.members));

const displayList = (members) => {
    directory.classList.add("list");
	directory.classList.remove("grid");
    directory.innerHTML = "";
    let i = 0;
    members.forEach((member) => {
        let card = document.createElement("section");
        card.classList.add("directory-card-list");
        if(i % 2 == 0) {
            card.classList.add("directory-card-list2");
        }

        let name = document.createElement("h3");
        let address = document.createElement("p");
        let phonenumber = document.createElement("p");
        let website = document.createElement("a");

        name.textContent = member.name;
        address.textContent = member.address;
        phonenumber.textContent = member.phonenumber;
        website.textContent = member.url;
        website.setAttribute("href", member.url);

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(website);

        directory.appendChild(card);
        i++;
    });
}

showList.addEventListener('click', () => displayList(data.members));