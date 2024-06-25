const cardsData1 = [
    { id: 1, top: 0, left: 0, img: 'https://via.placeholder.com/150', text: 'Card 1 Text' },
    { id: 2, top: 50, left: 100, img: 'https://via.placeholder.com/150', text: 'Card 2 Text' },
    { id: 3, top: 100, left: 200, img: 'https://via.placeholder.com/150', text: 'Card 3 Text' },
    { id: 4, top: 150, left: 300, img: 'https://via.placeholder.com/150', text: 'Card 4 Text' },
    { id: 5, top: 200, left: 400, img: 'https://via.placeholder.com/150', text: 'Card 5 Text' },
    { id: 6, top: 250, left: 500, img: 'https://via.placeholder.com/150', text: 'Card 6 Text' }
];

const cardsData2 = [
    { id: 1, top: 0, left: 0, img: 'https://via.placeholder.com/150', text: 'Card A Text' },
    { id: 2, top: 50, left: 100, img: 'https://via.placeholder.com/150', text: 'Card B Text' },
    { id: 3, top: 100, left: 200, img: 'https://via.placeholder.com/150', text: 'Card C Text' },
    { id: 4, top: 150, left: 300, img: 'https://via.placeholder.com/150', text: 'Card D Text' },
    { id: 5, top: 200, left: 400, img: 'https://via.placeholder.com/150', text: 'Card E Text' }
];

function createCards(containerId, cardsData) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing cards

    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.style.top = `${card.top}px`;
        cardElement.style.left = `${card.left}px`;

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');

        const imgElement = document.createElement('img');
        imgElement.src = card.img;
        cardFront.appendChild(imgElement);

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.textContent = card.text;

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardElement.appendChild(cardInner);
        container.appendChild(cardElement);
    });
}

function showCards(containerId) {
    // Hide all containers
    const containers = document.querySelectorAll('.cards-container');
    containers.forEach(container => {
        container.style.display = 'none';
    });

    // Display the selected container and create cards
    const selectedContainer = document.getElementById(containerId);
    selectedContainer.style.display = 'block';

    if (containerId === 'container1') {
        createCards(containerId, cardsData1);
    } else if (containerId === 'container2') {
        createCards(containerId, cardsData2);
    }
}

// Show the first set of cards by default
showCards('container1');
