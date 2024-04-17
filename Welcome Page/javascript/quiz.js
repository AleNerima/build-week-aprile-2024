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
const divNumeroDomande = document.getElementById("myDiv");
const giuste=[];
const sbagliate=[]


let indiceCorrente = 0;
let punteggio = 0;
let punteggioSbagliate=0
/*********************************Funzioni******************************************/
function mostraDomanda() {
  if (indiceCorrente >= questions.length) {
    document.getElementById('bottone_risultati').style.display = 'block'
    prossimaButton.style.display = 'none';
    return;
  }

  const domandaCorrente = questions[indiceCorrente];
  divNumeroDomande.innerHTML = `<p id="numDom">Question ${indiceCorrente + 1} <span class="question_span">/ ${questions.length}</span></p>`
  domandaElement.innerHTML = `${domandaCorrente.question}`;
  caricaRisposte();
}

function caricaRisposte() {
  const domanda = questions[indiceCorrente];
  const risposte = [...domanda.incorrect_answers];
  risposte.splice(Math.floor(Math.random() * (risposte.length + 1)), 0, domanda.correct_answer);

  risposteButtons.forEach((button, index) => {
    if (index < risposte.length) {
      button.textContent = risposte[index];
      button.disabled = false;
      button.classList.remove('hide');
      button.classList.remove("rispostaSelezionata");
      button.addEventListener("click", gestisciClickRisposta);
    } else {
      button.classList.add('hide');
    }
  });
}

function gestisciClickRisposta() {
  risposteButtons.forEach(button => {
    button.disabled = true;
  });

  this.classList.add("rispostaSelezionata");

  const domanda = questions[indiceCorrente];
  if (this.textContent === domanda.correct_answer) {
    giuste.push(this.textContent);
    punteggio++;
  } else {
    sbagliate.push(this.textContent);
    punteggioSbagliate++;
  }
  console.log("sbagliate", punteggioSbagliate);
  console.log("giuste", punteggio);
  prossimaButton.style.display = 'inline';
}

function prossimaDomanda() {
  indiceCorrente++;
  mostraDomanda();
  resettaTimer();
  risposteButtons.forEach(button => {
    button.disabled = false;
  });
}
/*************funzione timer************************/
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

document.addEventListener('DOMContentLoaded', () => {
  mostraDomanda();
  prossimaButton.addEventListener('click', prossimaDomanda);
});


/***********************************funzioni risultati****************************/
const centerTextPlugin = {
  id: 'centerText',
  afterDraw: function(chart) {
    const ctx = chart.ctx;
    ctx.save();
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
    const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
    const risposteCorrette = giuste.length;
    const totaleDomande = questions.length;
    const text = `${risposteCorrette} di ${totaleDomande}`;
    ctx.fillText(text, centerX, centerY);
    ctx.restore();
  }
};


function mostraRisultati() {

   // Nascondi il timer
   document.getElementById("timer").style.display = 'none';
   // Nascondi il numero delle domande
   document.getElementById("myDiv").style.display = 'none';
 
   // Disabilita il timer
   clearInterval(timerInterval);
 
   // Disabilita i pulsanti di risposta
   risposteButtons.forEach(button => {
     button.disabled = true;
   });
 
   // Disabilita il pulsante "Prossima domanda"
   prossimaButton.disabled = true;

  const totaleDomande = questions.length;
  const risposteCorrette = giuste.length;
  const risposteSbagliate = sbagliate.length;
  const percentualeCorrette = (risposteCorrette / totaleDomande) * 100;
  const percentualeSbagliate = (risposteSbagliate / totaleDomande) * 100;

  const risultatiHTML = `
    <h2 id="titolo_risultati">Risultati del Quiz</h2>
   <div class="flex_container">
   <div id="corrette"><p>Risposte corrette: ${risposteCorrette} (${percentualeCorrette.toFixed(2)}%)</p></div>
    
   <div id="incorrette"><p>Risposte sbagliate: ${risposteSbagliate} (${percentualeSbagliate.toFixed(2)}%)</p>
   </div>
   `;
    document.getElementById("feedback-btn").style.display = 'block';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById("timer").style.display = 'none';
    window.onload=document.getElementById('bottone_risultati').style.display = 'none';
    document.getElementById("testoSinistra").textContent = `Risposte corrette: ${risposteCorrette}/${totaleDomande} (${percentualeCorrette.toFixed(2)}%)`;
    document.getElementById("testoDestra").textContent = `Risposte sbagliate: ${risposteSbagliate}/${totaleDomande} (${percentualeSbagliate.toFixed(2)}%)`; // Creazione del dataset per il grafico a torta
    const data = {
      labels: ["Risposte Corrette", "Risposte Sbagliate"],
      datasets: [{
        label: 'Risultati del Quiz',
        data: [risposteCorrette, risposteSbagliate],
        backgroundColor: [
          'rgb(75, 192, 192)',
          'rgb(255, 99, 132)'
        ],
        hoverOffset: 4
      }]
    };
  
    
    const config = {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        cutout: '70%', // Modifica questa percentuale per rendere la ciambella più o meno sottile
        animation: {
          onComplete: function() {
            const chart = this;
            const { ctx, chartArea: { top, bottom, left, right, width, height } } = chart;
    
            ctx.save();
            ctx.font = '16px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'black';
    
            // Frammenti di testo per l'esempio
            const lines = [
              { text: 'Congratulations!', color: 'white' },
              { text: 'You passed the exam.', color: 'blue' },
              { text: 'We\'ll send you the certificates', color: 'white' },
              { text: 'in a few minutes.', color: 'white' },
              { text: 'Check your email (including', color: 'white' },
              { text: 'promotions/spam folder)', color: 'white' }
            ];
    
            // Calcola l'altezza totale del testo
            const lineHeight = 24; // altezza per linea, include spazio tra linee
            const totalHeight = lines.length * lineHeight;
    
            // Posizione iniziale Y per centrare il testo
            const startY = top + (height - totalHeight) / 2;
    
            // Disegna ogni linea con il suo colore specifico
            lines.forEach((line, i) => {
              const lineY = startY + i * lineHeight;
              ctx.fillStyle = line.color;  // Imposta il colore del testo per la linea corrente
              ctx.fillText(line.text, left + width / 2, lineY);
            });
    
            ctx.restore();
          }
        },
        plugins: {
          legend: {
            position: ''
          }
        }
      }
    };
    
    
        
    
    const canvasGrafico = document.getElementById('graficoRisultati').getContext('2d');
  
    
    new Chart(canvasGrafico, config)

    document.getElementById('quiz').style.display = 'none';
  
    
    document.getElementById('graficoRisultati').style.display = 'block';
    mostraRisultati()
    
  

  // Mostra i risultati
  document.getElementById('risultati').innerHTML = risultatiHTML;
}