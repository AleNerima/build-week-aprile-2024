/********ARRAY DOMANDE****************************/
const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];
/*************************costanti e variabili***********************************/
/*************************Costanti e variabili***********************************/
const risposteButtons = document.querySelectorAll('.btn');
const prossimaButton = document.getElementById('next-btn');
const domandaElement = document.getElementById('Domanda');
const giuste=[];
const sbagliate=[]


let indiceCorrente = 0;
let punteggio = 0;
let punteggioSbaglaite=0
/*********************************Funzioni******************************************/
function mostraDomanda() {
  if (indiceCorrente >= questions.length) {
    alert("Hai completato tutte le domande!");
    prossimaButton.style.display = 'none';
    return;
  }

  const domandaCorrente = questions[indiceCorrente];
  domandaElement.innerHTML = `${indiceCorrente + 1}. ${domandaCorrente.question}`;
  caricaRisposte();

 
  const numeroDomandaContainer = document.getElementById('numero-domanda-container');
  if (numeroDomandaContainer) {
    numeroDomandaContainer.remove();
  }

  // Creazione dell'elemento per mostrare il numero della domanda
  const numeroDomandaContainerNew = document.createElement('div');
  numeroDomandaContainerNew.id = 'numero-domanda-container'; // ID del container per il numero della domanda

  const numeroDomanda = document.createElement('span');
  numeroDomanda.textContent = `${indiceCorrente + 1}/${questions.length}`;
  numeroDomanda.style.display = 'block'; // Per centrare
  numeroDomanda.style.margin = '10px auto'; // Spazio dal basso e centrato
  numeroDomanda.style.textAlign = 'center'; // Per centrare
  numeroDomandaContainerNew.appendChild(numeroDomanda);

  // Inserimento del container con il numero della domanda alla fine della pagina
  const parentElement = document.getElementById('risposte').parentNode; // Elemento padre delle risposte
  parentElement.appendChild(numeroDomandaContainerNew);
  
}

function caricaRisposte() {
  const domanda = questions[indiceCorrente];
  const risposte = [...domanda.incorrect_answers];
  risposte.splice(Math.floor(Math.random() * (risposte.length + 1)), 0, domanda.correct_answer);

  if (risposte.length === 2) {
    risposteButtons[2].classList.add('hide');
    risposteButtons[3].classList.add('hide');
  } else {
    risposteButtons[2].classList.remove('hide');
    risposteButtons[3].classList.remove('hide');
  }

  risposteButtons.forEach((button, index) => {
    button.textContent = risposte[index];

    // Rimuovi prima il listener esistente prima di aggiungerne uno nuovo
    button.removeEventListener("click", gestisciClickRisposta);
    button.addEventListener("click", gestisciClickRisposta);
  });
}

function gestisciClickRisposta() {
  const bottoneSelezionato = this;
  risposteButtons.forEach(button => {
    button.classList.remove("rispostaSelezionata");
  });
  bottoneSelezionato.classList.add("rispostaSelezionata");

  const domanda = questions[indiceCorrente];
  if (bottoneSelezionato.textContent === domanda.correct_answer) {
    if (!giuste.includes(bottoneSelezionato.textContent)) { // Controlla se non è già conteggiato
      giuste.push(bottoneSelezionato.textContent);
      punteggio++;
    }
  } else if (!sbagliate.includes(bottoneSelezionato.textContent)) {
    sbagliate.push(bottoneSelezionato.textContent);
    punteggioSbaglaite++;
  }
  console.log("sbagliate", punteggioSbaglaite);
  console.log("giuste", punteggio);
  prossimaButton.style.display = 'inline';
}


prossimaButton.addEventListener('click', function () {
  prossimaDomanda();
});

function prossimaDomanda() {
  indiceCorrente++;
  mostraDomanda();
  resettaTimer();
}

function resettaTimer() {
  clearInterval(timerInterval);
  timePassed = 0;
  timeLeft = TIME_LIMIT;
  startTimer();
  document
    .getElementById("base-timer-path-remaining")
    .classList.remove(COLOR_CODES.alert.color); // Rimuovi il colore rosso
  document
    .getElementById("base-timer-path-remaining")
    .classList.add(COLOR_CODES.info.color); // Aggiungi il colore iniziale
}

document.addEventListener('DOMContentLoaded', () => {
  mostraDomanda();
  startTimer();
});

console.log('risposte giuste',giuste);
console.log('risposte sbagliate',sbagliate);
