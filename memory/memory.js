document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.querySelector('.memory-game');
    const resetButton = document.getElementById('resetButton');
    const icons = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
    let cards = [...icons, ...icons]; // Duplica gli icon per avere le coppie

    function initializeGame() {
        gameContainer.innerHTML = ''; // Pulisci il contenitore di gioco
        cards = cards.sort(() => Math.random() - 0.5); // Mescola le carte
        createCards();
    }

    function createCards() {
        cards.forEach(icon => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.icon = icon;
            card.innerHTML = `
                <div class="card__face card__face--front"></div>
                <div class="card__face card__face--back">${icon}</div>
            `;
            gameContainer.appendChild(card);
            card.addEventListener('click', handleCardClick);
        });
    }

    initializeGame(); // Inizializza il gioco al caricamento della pagina

    resetButton.addEventListener('click', initializeGame); // Aggiungi gestione del click per resettare il gioco

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function handleCardClick() {
        if (lockBoard) return;
        if (this === firstCard) return;
        this.classList.add('is-flipped');
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
        } else {
            secondCard = this;
            checkForMatch();
        }
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.icon === secondCard.dataset.icon;
        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', handleCardClick);
        secondCard.removeEventListener('click', handleCardClick);
        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('is-flipped');
            secondCard.classList.remove('is-flipped');
            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard, firstCard, secondCard] = [false, false, null, null];
    }
});
