document.getElementById("learn-lang").addEventListener('click', () => {
    displayModal();
});

function displayModal() {
    const learnLanguage = document.querySelector('#learnLanguage');
    learnLanguage.innerHTML = '';
    learnLanguage.innerHTML = `
        <h3>Here are some good to know phrases in Czech:</h3>
        <button id="closeModal">❌</button>
        <ul>
        <li>Hello - Ahoj (informal) / Dobrý den (formal)</li>
        <li>Goodbye - Na shledanou (formal) / Čau (informal)</li>
        <li>Please - Prosím</li>
        <li>Thank you - Děkuji / Díky (informal)</li>
        <li>You're welcome - Není zač</li>
        <li>Excuse me / Sorry - Promiňte</li>
        <li>Yes - Ano (often shortened to "No" in casual speech)</li>
        <li>No - Ne</li>
        <li>Do you speak English? - Mluvíte anglicky?</li>
        <li>I don’t understand. - Nerozumím.</li>
        <li>Help! - Pomoc!</li>
        <li>I would like… - Chtěl bych… (if you're a man) / Chtěla bych… (if you're a woman)</li>
        <li>Ticket - Jízdenka</li>
        </ul>
    `;
    learnLanguage.showModal();
    
    const closeModal = document.querySelector("#closeModal");
    closeModal.addEventListener("click", () => {
        learnLanguage.close();
    });
}