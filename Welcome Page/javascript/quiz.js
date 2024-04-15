/****************************Pagina iniziale**************************************/
const checkbox = document.getElementById('check');
checkbox.addEventListener('change', function (){
    let button= document.getElementById('procedi');

    if(checkbox.checked){
        button.disabled=false;
        button.classList.remove('disabilitato_bottone');
        button.classList.add('buttons');
    }else{
        button.disabled=true;
        button.classList.remove('buttons');
        button.classList.add('disabilitato_bottone');
    }
})

document.getElementById('procedi').addEventListener('click', function (){
    if (document.querySelector('#check').checked) {
        window.location.href = "Quiz-Page.html";
    }
});
/***************************************PAGINA QUIZ***********************************/
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
/*********************************le nostre funzioni******************************************/
function cercaStampaDomanda(){
    const indice= questions[i]
    let titolo= domanda
    for(let i=0; i<indice.lenght; i++){
        titolo.innerText()= indice.question
        
    };
}
function convalidaRisposta(){};
function bottoneProssima(){};

/********************************************richiamo funzioni*******************************/