document.getElementById("mship-1").addEventListener('click', () => {
    displayModal(1);
});

document.getElementById("mship-2").addEventListener('click', () => {
    displayModal(2);
});

document.getElementById("mship-3").addEventListener('click', () => {
    displayModal(3);
});

document.getElementById("mship-0").addEventListener('click', () => {
    displayModal(0);
});


const memberships = [
    {
        id: 0,
        name: 'Non Profit Membership',
        price: 'free',
        desc: 'This membership is for non-profit organizations that are looking to join the chamber.',
        benefits: [
            'Free access to chamber events',
            'Discounted access to chamber resources',
            'Free access to chamber networking opportunities',
            'Social media promotion',
            'Discounted rates for training & workshops',
            'Opportunity to participate in community service initiatives'
        ]
    },
    {
        id: 1,
        name: 'Bronze Membership',
        price: '$100 / month',
        desc: 'This affordable membership is for small businesses that are looking to join the chamber.',
        benefits: [
            'Access to chamber events',
            'Discounted access to chamber resources',
            'Access to chamber networking opportunities',
            'Social media promotion upon joining',
            'Business listing in the Chamber directory'
        ]
    },
    {
        id: 2,
        name: 'Silver Membership',
        price: '$500 / month',
        desc: 'This membership is for medium-sized businesses that are looking to join the chamber.',
        benefits: [
            'Access to chamber events',
            'Discounted access to chamber resources',
            'Access to chamber networking opportunities',
            'Discount on advertising opportunities (website, newsletter, events)',
            'One complimentary training or workshop per year',
            'Invitation to exclusive Chamber roundtable discussions'
        ]
    },
    {
        id: 3,
        name: 'Gold Membership',
        price: '$1500 / month',
        desc: 'This premium membership is for large businesses that are looking to join the chamber.',
        benefits: [
            'Priority placement in Chamber directory & website',
            'Complimentary sponsorship opportunity for one Chamber event',
            'VIP Access to chamber networking opportunities',
            'Monthly business spotlight on social media & website',
            'Two complimentary training or workshops per year',
            'Invitation to exclusive Chamber roundtable discussions',
            'One free annual consultation with a business expert'
        ]
    }
]

function displayModal(index) {
    const mshipDetails = document.querySelector('#mship-details');
    mshipDetails.innerHTML = '';
    mshipDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${memberships[index].name}</h2>
        <h3>Price: ${memberships[index].price}</h3>
        <p>${memberships[index].desc}</p>
        <h3>Benefits:</h3>
        <ul>
            ${memberships[index].benefits.map(benefit => `<li>${benefit}</li>`).join('')}
        </ul>
    `;
    mshipDetails.showModal();
    
    const closeModal = document.querySelector("#closeModal");
    closeModal.addEventListener("click", () => {
        mshipDetails.close();
    });
}