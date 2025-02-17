const formData = window.location.href.split('?')[1].split('&');

function returnFieldValue(fieldname){
    formData.forEach((element) => {
        if(element.startsWith(fieldname)){
            result = element.split('=')[1];
            result = result.replace("%40", "@");
        }
    })
    return result;
}

document.getElementById('form-results').innerHTML = `
    <h3>Name of Attraction:</h3>
    <p>${returnFieldValue("name")}</p><br>
    <h3>Address:</h3>
    <p>${returnFieldValue("address")}</p><br>
    <h3>Description:</h3>
    <p>${returnFieldValue("description")}</p><br>
    <h3>Price range:</h3>
    <p>${returnFieldValue("price")}</p><br>
    <h3>Category:</h3>
    <p>${returnFieldValue("category")}</p><br>

    <h3>Your Email:</h3>
    <p>${returnFieldValue("email")}</p><br>
    <h3>Your Phone Number:</h3>
    <p>${returnFieldValue("phone")}</p>
`;

let savedSuggestions = JSON.parse(localStorage.getItem("savedsuggestions"));
if(savedSuggestions === null) savedSuggestions = [];

if(!savedSuggestions.includes(returnFieldValue("name"))) savedSuggestions.unshift(returnFieldValue("name"));

localStorage.setItem("savedsuggestions", JSON.stringify(savedSuggestions));