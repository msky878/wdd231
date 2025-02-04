const businessSpotlight = document.querySelector('#business-spotlight');

let data;

async function getData(url) {
    const response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        const filteredMembers = data.members.filter(member => member.membership > 1);
        console.log(filteredMembers);
        displaySpotlight(filteredMembers);
    }
}

getData("data/members.json");

displaySpotlight = (members) => {
    const shuffledMembers = members.sort(() => 0.5 - Math.random());
    const selectedMembers = shuffledMembers.slice(0, 2);

    selectedMembers.forEach((member) => {
        let card = document.createElement("section");
        card.classList.add("spotlight-card");

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

        let info = document.createElement("div");
        info.classList.add("spotlight-info");
        let infoText = document.createElement("div");
        infoText.classList.add("spotlight-info-text");

        infoText.appendChild(address);
        infoText.appendChild(phonenumber);
        infoText.appendChild(website);

        info.appendChild(logo);
        info.appendChild(infoText);

        card.appendChild(name);
        card.appendChild(info);

        businessSpotlight.appendChild(card);
    });
}