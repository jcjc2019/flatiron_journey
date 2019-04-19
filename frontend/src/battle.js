const gc = document.querySelector('.game-container')

//first battle div created.
let dunDiv = document.createElement('div')
//first quiz div created and appended to first battle div.
let quiz = document.createElement('div')
quiz.className = "quiz"
quiz.id = "quiz-id"
quiz.innerText = "hello"
const submitBtn = document.createElement('button')
const results = document.createElement('div')
results.id = "results"
dunDiv.appendChild(quiz)
dunDiv.appendChild(submitBtn)
dunDiv.appendChild(results)


//second battle div
let secondDungeonDiv = document.createElement('div') 


//quiz questions
const mod1Question = [
                       {
                           question:"Which of the following is not a reserved word in JavaScript?",
                           answers:{ A: "interface", B: "throws", C: "program", D: "short"},
                           correctAnswer:"C"
                       }
                     ]


//render battles functions
function battle(player){
    
  // spaghetti code to render the dugeon
  //1st position to be fixed.
  if(gc.scrollLeft < 810 && gc.scrollLeft > 500) {
          
    firstBattle(player)
    mod1Quiz() //call quiz function.
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
    // dunDiv.style.backgroundSize = "2000px 352px"
    dunDiv.style.opacity = 0
    /*______MONSTER______*/
    // monsterOne.style = 'box-sizing: content-box'
    // monsterOne.style.position = 'absolute'
    // monsterOne.style.top = '150px'
    // monsterOne.style.left = '60px'
    monsterOne.style.zIndex ="2"
    // dunDiv.style.left = '150px'
    /*______DUNGEON______*/
    dunDiv.style.bottom = '170px'
    // dunDiv.style.height = '100%'
    dunDiv.style.width = '1000%'
    // dunDiv.style.left = '880px';
    //dunDiv.append(monsterOne)
    gc.append(dunDiv)

    let opacityInterval = setInterval(show, 300)

    function show() {
        gc.style.overflowX = 'hidden'
        dunDiv.style.opacity = (parseFloat(dunDiv.style.opacity) + 0.3).toString()
        //console.log(dunDiv.style.opacity)
        if(dunDiv.style.opacity >= 1) clearInterval(opacityInterval)
    }
    
    // mod1Quiz()// call quiz function
}


  function secondBattle(player){
    //const secondDungeonDiv = document.createElement('div') made it gloabal on top for quiz form

    secondDungeonDiv.style.position = "absolute"
    secondDungeonDiv.style.top = "0px"
    secondDungeonDiv.style.zIndex = 1
    let monsterTwo = purpleMonster
    monsterTwo.style.zIndex ="2"
    secondDungeonDiv.style.backgroundImage ="url('https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyOTAucG5n/original/p3QHJw.png')"
    secondDungeonDiv.style.backgroundRepeat = "repeat-x"
    // secondDungeonDiv.style.backgroundSize = "2000px 372px"
    secondDungeonDiv.style.opacity = 0
    /*______MONSTER______*/
    // purpleMonster.style = 'box-sizing: content-box'
    // purpleMonster.style.position = 'absolute'
    // purpleMonster.style.top = '150px'
    // purpleMonster.style.left = '60px'
    // dunDiv.style.left = '150px'
    /*______DUNGEON______*/
    secondDungeonDiv.style.bottom = '170px'
    // secondDungeonDiv.style.height = '100%'
    secondDungeonDiv.style.width = '1000%'
    // secondDungeonDiv.style.left = "2075px"
    //secondDungeonDiv
    //secondDungeonDiv
    //secondDungeonDiv.append(purpleMonster)
    gc.append(secondDungeonDiv)
    function show() {
        gc.style.overflowX = 'hidden'
        secondDungeonDiv.style.opacity = (parseFloat(secondDungeonDiv.style.opacity) + 0.3).toString()
      if(secondDungeonDiv.style.opacity >= 1) clearInterval(opacityInterval)
    }

    let opacityInterval = setInterval(show, 300)
   //call quiz
   //buildQuiz()
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
  //moved the following lines to the beginning, so everything happens only once.
    // let quiz = document.createElement('div')
    // quiz.className = "quiz"
    // quiz.id = "quiz-id"
    // quiz.innerText = "hello"
    // const submitBtn = document.createElement('button')
    // const results = document.createElement('div')
    // results.id = "results"
    // dunDiv.appendChild(quiz)
    // dunDiv.appendChild(submitBtn)
    // dunDiv.appendChild(results)
  
   let output = []
   mod1Question.forEach((currentQuestion, questionNumber)=>{
    let answers = [] 
    for(letter in currentQuestion){
        //add radio button to each choice
        answers.push( `<label>
                   <input type="radio" name="question${questionNumber}" value="${letter}">
                   ${letter} :
                   ${currentQuestion.answers[letter]}
                  </label>`)
                  //console.log(currentQuestion)
       }
   
    output.push(`<div class="question"> ${currentQuestion.question} </div>
                 <div class="answers"> ${answers.join("")} </div>`)                
                   
   })
   quiz.innerHTML = output.join("") 

}


//below to be completed 

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