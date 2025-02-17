let savedSuggestions = JSON.parse(localStorage.getItem("savedsuggestions"));
if(savedSuggestions != null){

    const container = document.getElementById("suggestions");
    container.innerHTML = "<h3>Your previous not processed suggestions:</h3>";
    savedSuggestions.forEach(suggestion => {
        let card = document.createElement("h4");

        card.innerHTML = suggestion;

        container.appendChild(card);
    });
}