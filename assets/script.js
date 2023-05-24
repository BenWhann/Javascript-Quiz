var btnEl = document.getElementById("startBtn");
var timeRemaining = 80;
var currentQuestion = 0;

var questionCenter = [
    {
        text: "How are you?",
        choices: ["good", "bad", "great", "mid"],
        answer: "mid"
    },
    {
        text: "Where are you?",
        choices: ["here", "there", "nowhere", "yes"],
        answer: "here"
    },
] 

function startQuiz() {
    document.getElementById("header").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
    // document.getElementById("header").setAttribute("class", "hide");
    startTimer();
    showQuestion();
}

function startTimer() {
    var quizInterval = setInterval(function(){
        var timerEl = document.getElementById("timer")
        timeRemaining--;

        timerEl.textContent = timeRemaining

        if(timeRemaining <= 0) {
            clearInterval(quizInterval)
        }
    }, 1000)
}

function showQuestion() {
    document.getElementById("questionText").textContent = questionCenter[currentQuestion].text

    for(i=0; i< questionCenter[currentQuestion].choices.length; i++) {
        var currentBtn = document.getElementById("choice-"+i)
        currentBtn.textContent = questionCenter[currentQuestion].choices[i];

        currentBtn.addEventListener("click", checkAnswer)
    }
    // document.getElementById("choice-0").textContent = questionChoices[0];
    // document.getElementById("choice-1").textContent = questionChoices[1];
    // document.getElementById("choice-2").textContent = questionChoices[2];
    // document.getElementById("choice-3").textContent = questionChoices[3];
}

function checkAnswer() {
    currentQuestion++;
    

    showQuestion()
}

btnEl.addEventListener("click", startQuiz);