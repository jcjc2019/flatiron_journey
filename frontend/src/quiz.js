
const dunDiv = document.querySelector("#dungeon")
const quizContainer = document.createElement('div')
quizContainer.setAttribute("id", "quiz")

const submitButton = document.createElement('button')
submitButton.setAttribute('id', 'submit')

const resultsContainer = document.createElement('div')
resultsContainer.setAttribute('id', 'results')
dunDiv.append(quizContainer, submitButton, resultsContainer)

const myQuestions = [
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: ""
    }
]

const mod2Question = [
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: ""
    }
]

const mod3Question = [
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: ""
    }
]

const mod4Question = [
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: ""
    }
]

const mod5Question = [
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: ""
    }
]

function buildQuiz() { 
    const output = [];
    mod1Question.forEach((currentQuestion, questionnumber) =>{
        const answers = [];
    })
}

function showResults() { }

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);