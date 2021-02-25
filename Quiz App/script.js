const quizInfo = [
    {
        question: "Who painted the Mona Lisa?",
        a: "Sandro Botticelli",
        b: "Michelangelo ",
        c: "Leondardo Da Vinci",
        d: "Lorenzo Ghiberti ",
        correct: "c",
    },

    {
        question: "What is the largest country?",
        a: "Russia",
        b: "Canada",
        c: "Usa",
        d: "China",
        correct: "a",
    },
    {
        question: "What does He stand for on the periodic table?",
        a: "Holmium",
        b: "Helium",
        c: "Hassium",
        d: "Hydrogen",
        correct: "b",
    },

    {
        question: "What is the capital of Chile?",
        a: "Buenos Aires",
        b: "Santiago",
        c: "Lima",
        d: "Georgetown",
        correct: "b",
    },

    {
        question: "Who discovered Penicillin?",
        a: "Ronald Ross",
        b: "Elizabeth Blackwell",
        c: "Edward Jenner",
        d: "Alexander Fleming",
        correct: "d",
    },

    {
        question: "Which bird can fly backwards?",
        a: "Diamond Firetail",
        b: "Verdin",
        c: "Hummingbird",
        d: "Buzzard",
        correct: "c",
    },

    {
        question: "What year was Google Images invented?",
        a: "2000",
        b: "2002",
        c: "2001",
        d: "2003",
        correct: "c",
    },

    {
        question: "What was the most streamed show on Netflix in 2020?",
        a: "The Umbrella Academy season 2",
        b: "The Crown season 4",
        c: "The Queen's Gambit",
        d: "The Haunting of Bly Manor",
        correct: "a",
    },

    {
        question: "What's the biggest animal in the world?",
        a: "Colossal Squid",
        b: "Blue Whale",
        c: "African Elephant",
        d: "Whale shark",
        correct: "b",
    },

    {
        question: "How many people have walked on the Moon?",
        a: "10",
        b: "3",
        c: "12",
        d: "9",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEls = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const previousBtn = document.getElementById('previous');
const startBtn = document.getElementById('start');

let currentQuizObj = 0; //in array, starts @ 0 index
let score = 0;
let answer;

let answerPositionArr = [];

/*FUNCTIONS*/
function runQuiz(){
    deselectAns();

    let currentQuizInfo = quizInfo[currentQuizObj];
    questionEls.innerHTML = currentQuizInfo.question;
    a_text.innerText = currentQuizInfo.a;
    b_text.innerText = currentQuizInfo.b;
    c_text.innerText = currentQuizInfo.c;
    d_text.innerText = currentQuizInfo.d;
}

function deselectAns(){
    answerEls.forEach(answerEl => answerEl.checked = false) //all radio options deselected
}

function selectedAns(){
    answerEls.forEach(answerEl=> {
        if(answerEl.checked){
            answer = answerEl.id;
            answerPositionArr.push(answer);//chosen answer pushed into array, can find previous chosen answer
        }
    })

    return answer;
}

function showPreviousAns(){
    score--;
    let prevAns = (answerPositionArr[answerPositionArr.length -1])
    answer = answerPositionArr.pop();//remove current answer to get previous answer
    prevAns = answer;
    /*console.log(answer);*/

    answerEls.forEach(answerEl => {
        if(answerEl.id == answer){
            answerEl.checked = true;//selects previous answer's radio btn
        }
    });
}

function updateCount(){
    const counter = document.getElementById('counter');
    
    let currentQuizCount = quizInfo[currentQuizObj];
    counter.innerHTML = `${quizInfo.indexOf(currentQuizCount) + 1} / 10`
    /*console.log(quizInfo.indexOf(currentQuizCount));*/
}

/*EVENT LISTENERS */
submitBtn.addEventListener('click', ()=> {
    selectedAns()

    if(answer){
        if(answer === quizInfo[currentQuizObj].correct){
            score++;
        }
        currentQuizObj++;
        updateCount();
    }

    if(currentQuizObj < quizInfo.length){
        runQuiz()
    } else {
        if(score == 10){
            quiz.innerHTML = `
            <h2 class="end-text">Excellent! You answered ${score} / ${quizInfo.length} questions correctly!</h2>
            <button class="endBtn" onclick="location.reload()">Reload</button>
            `
        } else {
            quiz.innerHTML = `
            <h2 class="end-text">You answered ${score} / ${quizInfo.length} questions correctly</h2>
            <button class="endBtn" onclick="location.reload()">Reload</button>
            `
        }
    }
});


previousBtn.addEventListener('click', ()=> {
    currentQuizObj --;
    runQuiz()
    showPreviousAns()
    updateCount()
});

startBtn.addEventListener('click', () => {
   const startText = document.querySelector('.start-text');
   startText.classList.add('hide');
})

runQuiz();