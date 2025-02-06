// Display: first name, last name, email, mobile number, business name, and current date timestamp from the hidden field

const formData = window.location.href.split('?')[1].split('&');
//console.log(formData);

function returnFieldValue(fieldname){
    formData.forEach((element) => {
        if(element.startsWith(fieldname)){
            //console.log(element);
            result = element.split('=')[1];
            result = result.replace("%40", "@");
        }
    })
    //console.log(result);
    return result;
}

document.getElementById('join-form-results').innerHTML = `
<p>Business/organization's name: <b>${returnFieldValue("bname")}</b></p>
<br>
<p>Your contact information:</p>
<p><b>${returnFieldValue("fname")} ${returnFieldValue("lname")}</b></p>
<p>${returnFieldValue("email")}</p>
<p>${returnFieldValue("phone")}</p>
<br>
<p><i>Registered on: ${new Date(+returnFieldValue("timestamp"))}</i></p>
`;
