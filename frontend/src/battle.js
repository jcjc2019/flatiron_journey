const gc = document.querySelector('.game-container')

//first battle div created.
const dunDiv = document.createElement('div')
const secondDungeonDiv = document.createElement('div') 




//render battles functions
function battle(player){

  if(gc.scrollLeft < 550 && gc.scrollLeft > 500 ) {
          
    firstBattle(player)
          }
   else if(gc.scrollLeft < 1727 && gc.scrollLeft > 1647) {
        
    secondBattle(player)
          }
   else if(gc.scrollLeft < 3000 && gc.scrollLeft > 2700){
          
    thirdBattle(player)
          }
   else if(gc.scrollLeft < 4425 && gc.scrollLeft > 4200) {
   
    fourthBattle(player)
          }
   else if(gc.scrollLeft < 5500 && gc.scrollLeft > 4900) {
    
    fifthBattle(player)
          }   
    }

  function firstBattle(player){
    //let dunDiv = document.createElement('div')
    dunDiv.id = "dungeon"
    dunDiv.style.position = "absolute"
    dunDiv.style.top = "0px"
    dunDiv.style.zIndex = 1
    let monsterOne = lightMonster
    dunDiv.style.backgroundImage = "url('https://i.ytimg.com/vi/kk9V3ZVNlyU/maxresdefault.jpg')"
    dunDiv.style.backgroundRepeat = "repeat-x"
    dunDiv.style.opacity = 0
    monsterOne.style.zIndex ="2"
    dunDiv.style.bottom = '170px'
    dunDiv.style.width = '1000%'
    gc.append(dunDiv)

    let opacityInterval = setInterval(show, 300)

    function show() {
        gc.style.overflowX = 'hidden'
        dunDiv.style.opacity = (parseFloat(dunDiv.style.opacity) + 0.3).toString()
        if(dunDiv.style.opacity >= 1) clearInterval(opacityInterval)
    }
    
    mod1Quiz()// call quiz function
}


  function secondBattle(player){
    secondDungeonDiv.style.position = "absolute"
    secondDungeonDiv.style.top = "0px"
    secondDungeonDiv.style.zIndex = 1
    let monsterTwo = purpleMonster
    monsterTwo.style.zIndex ="2"
    secondDungeonDiv.style.backgroundImage ="url('https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyOTAucG5n/original/p3QHJw.png')"
    secondDungeonDiv.style.backgroundRepeat = "repeat-x"
    secondDungeonDiv.style.opacity = 0
    secondDungeonDiv.style.bottom = '170px'
    secondDungeonDiv.style.width = '1000%'
    gc.append(secondDungeonDiv)
    function show() {
        gc.style.overflowX = 'hidden'
        secondDungeonDiv.style.opacity = (parseFloat(secondDungeonDiv.style.opacity) + 0.3).toString()
      if(secondDungeonDiv.style.opacity >= 1) clearInterval(opacityInterval)
    }

    let opacityInterval = setInterval(show, 300)
   
    mod2Quiz()// call quiz function
  }

 
  function thirdBattle(player){
    let thirdDungeonDiv = document.createElement('div')
    thirdDungeonDiv.id = "dungeon"
    thirdDungeonDiv.style.position = "absolute"
    thirdDungeonDiv.style.top = "0px"
    thirdDungeonDiv.style.zIndex = 1
    let monsterthree = dragon
    monsterthree.style.zIndex ="2"
    thirdDungeonDiv.style.backgroundImage = "url('https://backgroundcheckall.com/wp-content/uploads/2017/12/background-terror-1.jpg')"
    thirdDungeonDiv.style.backgroundRepeat = "repeat-x"
    //thirdDungeonDiv.style.backgroundSize = "2000px 380px"
    thirdDungeonDiv.style.opacity = 0
    /*______MONSTER______*/
    //monsterthree.style = 'box-sizing: content-box'
    //monsterthree.style.position = 'absolute'
    //monsterthree.style.top = '150px'
    //monsterthree.style.left = '60px'
    // dunDiv.style.left = '150px'
    /*______DUNGEON______*/
    thirdDungeonDiv.style.bottom = '170px'
    //thirdDungeonDiv.style.height = '355px'
    thirdDungeonDiv.style.width = '1000%'
    //thirdDungeonDiv
    //thirdDungeonDiv
    //thirdDungeonDiv.append(monsterthree)
    gc.append(thirdDungeonDiv)
    
    function show() {
        gc.style.overflowX = 'hidden'
        thirdDungeonDiv.style.opacity = (parseFloat(thirdDungeonDiv.style.opacity) + 0.3).toString()
      if(thirdDungeonDiv.style.opacity >= 1) clearInterval(opacityInterval)
    }

    let opacityInterval = setInterval(show, 300)
}

  function fourthBattle(player){
    let fourthDungeonDiv = document.createElement('div')
    fourthDungeonDiv.id = "dungeon"
    fourthDungeonDiv.style.position = "absolute"
    fourthDungeonDiv.style.top = "0px"
    fourthDungeonDiv.style.zIndex = 1
    let monsterFour = redDragon
    monsterFour.style.zIndex ="2"
    fourthDungeonDiv.style.backgroundImage = "url('https://vignette.wikia.nocookie.net/hub-ideas/images/5/5d/Cartoon_choices_are_scary_for_the_spooky_eyes.png/revision/latest?cb=20180804093948')"//"url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/H0MA-uKSipsekm5s/scary-haunted-mansion-with-luminous-windows-among-fantastic-creepy-trees-at-dark-misty-night-with-big-moon-decorative-halloween-3d-animation-rendered-in-4k_r7upys90_thumbnail-full08.png')"
    fourthDungeonDiv.style.backgroundRepeat = "repeat-x"
    //fourthDungeonDiv.style.backgroundSize = "2000px 380px"
    fourthDungeonDiv.style.opacity = 0
    /*______MONSTER______*/
    //monsterFour.style = 'box-sizing: content-box'
    //monsterFour.style.position = 'absolute'
    //monsterFour.style.top = '150px'
    //monsterFour.style.left = '60px'
    // dunDiv.style.left = '150px'
    /*______DUNGEON______*/
    fourthDungeonDiv.style.bottom = '170px'
    // fourthDungeonDiv.style.height = '100%'
    fourthDungeonDiv.style.width = '1000%'
    //fourthDungeonDiv
    //fourthDungeonDiv
    //ourthDungeonDiv.append(monsterFour)
    gc.append(fourthDungeonDiv)
    
    function show() {
        gc.style.overflowX = 'hidden'
        fourthDungeonDiv.style.opacity = (parseFloat(fourthDungeonDiv.style.opacity) + 0.3).toString()
      if(fourthDungeonDiv.style.opacity >= 1) clearInterval(opacityInterval)
    }

    let opacityInterval = setInterval(show, 300)
}

  function fifthBattle(player){
    let fifthDungeonDiv = document.createElement('div')
    fifthDungeonDiv.id = "dungeon"
    fifthDungeonDiv.style.position = "absolute"
    fifthDungeonDiv.style.top = "0px"
    fifthDungeonDiv.style.zIndex = 1
    let monsterFive = final
    monsterFive.style.zIndex ="2"
    fifthDungeonDiv.style.backgroundImage = "url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/iV3qrXT/halloween-soul-reaper-satan-comes-to-reap-the-souls-of-three-women-in-a-spooky-graveyard-at-halloween-they-rise-from-the-grave-and-realize-they-are-dead-and-doomed-a-4k-3d-cartoon-animation_e1wimkjxg__F0000.png')"//"url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/H0MA-uKSipsekm5s/scary-haunted-mansion-with-luminous-windows-among-fantastic-creepy-trees-at-dark-misty-night-with-big-moon-decorative-halloween-3d-animation-rendered-in-4k_r7upys90_thumbnail-full08.png')"
    fifthDungeonDiv.style.backgroundRepeat = "repeat-x"
    //fifthDungeonDiv.style.backgroundSize = "2000px 380px"
    fifthDungeonDiv.style.opacity = 0
    /*______MONSTER______*/
    //monsterFive.style = 'box-sizing: content-box'
    //monsterFive.style.position = 'absolute'
    //monsterFive.style.top = '150px'
    //monsterFive.style.left = '60px'
    // dunDiv.style.left = '150px'
    /*______DUNGEON______*/
    fifthDungeonDiv.style.bottom = '170px'
    // fifthDungeonDiv.style.height = '100%'
    fifthDungeonDiv.style.width = '1000%'
    //fifthDungeonDiv
    //fifthDungeonDiv
    //fifthDungeonDiv.append(monsterFive)
    gc.append(fifthDungeonDiv)
    
    function show() {
        gc.style.overflowX = 'hidden'
        fifthDungeonDiv.style.opacity = (parseFloat(fifthDungeonDiv.style.opacity) + 0.3).toString()
      if(fifthDungeonDiv.style.opacity >= 1) clearInterval(opacityInterval)
    }

    let opacityInterval = setInterval(show, 300)
}


//QUIZ PART

function mod1Quiz(){

  //display form
  let quizContainer = document.createElement('div')
  quizContainer.className = "quiz1"
  quizContainer.id = "quiz-container"
  let quiz = document.createElement('div')
  quiz.setAttribute("id", "quiz-content")
  let submitBtn = document.createElement('button')
  submitBtn.setAttribute("type", "submit")
  submitBtn.setAttribute("class", "btn btn-primary")
  submitBtn.setAttribute("name", "submit")
  submitBtn.innerText = "Submit"
  const results = document.createElement('div')
  results.id = "results"
  dunDiv.appendChild(quizContainer)
  quizContainer.append(quiz, submitBtn, results)

//fetch the question  
   let output = []
   mod1Question.forEach((currentQuestion, questionNumber)=>{
    let answers = [] 
    for(letter in currentQuestion.answers){
        //add radio button to each choice
        //this part to be fixed.
        answers.push( `<p><label>
                   <input type="radio" name="question${questionNumber}" value="${letter}"> 
                   ${letter} : 
                   ${currentQuestion.answers[letter]} 
                  </label>`)
                  //console.log(currentQuestion)
       }
   
    output.push(`<p><div class="question"> <li>${currentQuestion.question} </li></div>
                 <p><div class="answers">  ${answers.join("")} </div>`)                
                   
   })
   quiz.innerHTML = output.join("") 


   
}



function mod2Quiz(){

  //display form
  let quizContainer = document.createElement('div')
  quizContainer.className = "quiz2"
  //quizContainer.id = "quiz-container"
  let quiz = document.createElement('div')
  quiz.setAttribute("id", "quiz-content")
  let submitBtn = document.createElement('button')
  submitBtn.setAttribute("type", "submit")
  submitBtn.setAttribute("class", "btn btn-primary")
  submitBtn.setAttribute("name", "submit")
  submitBtn.innerText = "Submit"
  const results = document.createElement('div')
  results.id = "results"
  secondDungeonDiv.appendChild(quizContainer)
  quizContainer.append(quiz, submitBtn, results)
  

  // fetch mod2 question
  let output = []
  mod2Question.forEach((currentQuestion, questionNumber)=>{
   let answers = [] 
   for(letter in currentQuestion.answers){
       answers.push( `<li>
                      <input type="radio" name="question${questionNumber}" value="${letter}"> 
                     ${letter} : ${currentQuestion.answers[letter]} 
                     </li>`)
                 //console.log(currentQuestion)
      }
  
   output.push(`<p><div class="question"> <li>${currentQuestion.question} </li></div>
                <p><div class="answers">  ${answers.join("")} </div>`)                
                  
  })
  quiz.innerHTML = output.join("") 
  //console.log(quizContainer)
}








//below to be completed
const mod1Question = [
  {
  question: "Which of the following methods can be used in Ruby to get a random number?",
  answers: {
    a: "rand",
    b: "Math.GetRandomNumber",
    c: "rnd",
    d: "$random"
           },
  correctAnswer: "a"
          }
          ]


const mod2Question = [
  {
  question: "You need to convert the string salt to a number in order to see if it exceeds a cutoff value. Which of the following methods should be used to accomplish this?",
  answers: {
    a: "num",
    b: "to_i",
    c: "integer",
    d: "None of the above"
           },
  correctAnswer: "b"
          }
          ]



const mod3Question = [
  {
  question: "Which of the following is not a reserved word in JavaScript?",
  answers: {
    a: "interface",
    b: "throws",
    c: "program",
    d: "hello world"
           },
  correctAnswer: "c"
          }
         ]


 const mod4Question = [
    {
      question: "In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?",
      answers: {
      a: "Integer(value)",
      b: "ifInteger(value)",
      c: "isInteger(value)",
      d: "I don't know, just show me the number!"
               },
     correctAnswer: "c"
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