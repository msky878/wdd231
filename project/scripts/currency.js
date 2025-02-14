const url = 'https://v6.exchangerate-api.com/v6/8b1fdc6b7f61e09abc6c99bd/latest/CZK';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayCurrency(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function displayCurrency(data) {
    const currency = document.createElement('section');
    currency.innerHTML = `
        <p>CZK ${100*data.conversion_rates.CZK.toFixed(2)} = $${(100*data.conversion_rates.USD).toFixed(2)}</p>
        <p>CZK ${100*data.conversion_rates.CZK.toFixed(2)} = €${(100*data.conversion_rates.EUR).toFixed(2)}</p>
        <p>CZK ${100*data.conversion_rates.CZK.toFixed(2)} = £${(100*data.conversion_rates.GBP).toFixed(2)}</p>
        <p>CZK ${100*data.conversion_rates.CZK.toFixed(2)} = CHF ${(100*data.conversion_rates.CHF).toFixed(2)}</p>
        <p>CZK ${100*data.conversion_rates.CZK.toFixed(2)} = PLN ${(100*data.conversion_rates.PLN).toFixed(2)}</p>
    `;
    document.getElementById('currency').appendChild(currency);
}