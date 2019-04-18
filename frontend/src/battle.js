
function battle(player){
  // spaghetti code to render the dugeon
  if(window.scrollX < 900 && window.scrollX > 720) {
    let dunDiv = document.createElement('div')
    dunDiv.id = "dungeon"
    let monsterOne = lightMonster
    dunDiv.style.backgroundImage ="url('https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyOTAucG5n/original/p3QHJw.png')"
    dunDiv.style.backgroundRepeat = "no-repeat"
    dunDiv.style.backgroundSize = "2000px 352px"
    dunDiv.style.opacity = 0
    /*______MONSTER______*/
    monsterOne.style = 'box-sizing: content-box'
    monsterOne.style.position = 'absolute'
    monsterOne.style.top = '150px'
    monsterOne.style.left = '60px'
    // dunDiv.style.left = '150px'
    /*______DUNGEON______*/
    dunDiv.style.top = '443px'
    dunDiv.style.bottom = '200px'
    dunDiv.style.height = '352px'
    dunDiv.style.width = '100%'
    dunDiv.style.position = 'fixed'
    dunDiv.append(player)
    dunDiv.append(monsterOne)
    document.body.append(dunDiv)
    
    function show() {
      dunDiv.style.opacity = (parseFloat(dunDiv.style.opacity) + 0.3).toString()
      //console.log(dunDiv.style.opacity)
    }
    setInterval(show, 300)
    

   } // end of first stage
}







//QUIZ PART

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
  mod1Question.forEach((currentQuestion, questionnumber) => {
    const answers = [];
  })
}

function showResults() { }

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

