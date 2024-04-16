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
const risposte= document.querySelectorAll('.btn');
const prossima= document.getElementById('next-btn');
const domanda= document.getElementById('Domanda');

let indiceCorrente=0
let punteggio=0

/*********************************le nostre funzioni******************************************/
function iniziaIlQUiz(){
  indiceCorrente=0;
  punteggio=0;
  mostraLaDomanda();
}
function mostraLaDomanda(){
  let domandaCorrente = questions[indiceCorrente];
  let numeroDomana=  indiceCorrente+1;
  domanda.innerHTML = numeroDomana+'.'+domandaCorrente.question;  
};

function caricaRisposte(index) {
  const risposteContainer = document.getElementById('risposte');
  const bottoni = risposteContainer.getElementsByClassName('btn');
  // Selezionare la domanda e le sue risposte
  const domanda = questions[index];
  const risposte = [...domanda.incorrect_answers];
  risposte.splice(Math.floor(Math.random() * (risposte.length + 1)), 0, domanda.correct_answer); // Inserisce la risposta corretta in posizione casuale
  // Assegnare le risposte ai bottoni
  for (let i = 0; i < bottoni.length; i++) {
      bottoni[i].textContent = risposte[i]; // Cambia il testo di ogni bottone con una risposta
  }
}
// Caricare le risposte per una domanda specifica quando la pagina è pronta
document.addEventListener('DOMContentLoaded', function() {
  caricaRisposte(0); // Sostituisci '0' con l'indice della domanda che vuoi mostrare
});



function convalidaRisposta(){};
function bottoneProssima(){};

/********************************************richiamo funzioni*******************************/
iniziaIlQUiz()
