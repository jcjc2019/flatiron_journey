
function battle(player){
  // spaghetti code to render the dugeon
  if(window.scrollX < 900 && window.scrollX > 660) {
              firstBattle(player)
         }
   else if(window.scrollX < 1900 && window.scrollX > 1680) {
              secondBattle(player)
          }
   else if(window.scrollX < 3100 && window.scrollX > 2980){
              thirdBattle(player)
          }
   else if(window.scrollX < 4425 && window.scrollX > 4200) {
             fourthBattle(player)
          }
   else if(window.scrollX < 6200 && window.scrollX > 5500) {
            fifthBattle(player)
          }   
    }

  function firstBattle(player){
    let dunDiv = document.createElement('div')
    dunDiv.id = "dungeon"
    dunDiv.style.position = "absolute"
    dunDiv.style.top = "0px"
    dunDiv.style.zIndex = 1
    let monsterOne = lightMonster
    dunDiv.style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/007/686/695/large/gary-strode-pokemon-edge.jpg?1507841476')"
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
    dunDiv.style.bottom = '180px'
    dunDiv.style.height = '355px'
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
}





  function secondBattle(player){
    let secondDundeonDiv = document.createElement('div')
    //secondDundeonDiv.id = "second_dungeon"
    secondDundeonDiv.style.position = "absolute"
    secondDundeonDiv.style.top = "0px"
    secondDundeonDiv.style.zIndex = 1
    let monsterTwo = purpleMonster
    secondDundeonDiv.style.backgroundImage ="url('https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyOTAucG5n/original/p3QHJw.png')"
    secondDundeonDiv.style.backgroundRepeat = "no-repeat"
    secondDundeonDiv.style.backgroundSize = "2000px 372px"
    secondDundeonDiv.style.opacity = 0
    /*______MONSTER______*/
    purpleMonster.style = 'box-sizing: content-box'
    purpleMonster.style.position = 'absolute'
    purpleMonster.style.top = '150px'
    purpleMonster.style.left = '60px'
    // dunDiv.style.left = '150px'
    /*______DUNGEON______*/
    secondDundeonDiv.style.bottom = '180px'
    secondDundeonDiv.style.height = '100%'
    secondDundeonDiv.style.width = '100%'
    secondDundeonDiv.style.position = 'fixed'
    secondDundeonDiv.append(player)
    secondDundeonDiv.append(purpleMonster)
    document.body.append(secondDundeonDiv)
    
    function show() {
        secondDundeonDiv.style.opacity = (parseFloat(secondDundeonDiv.style.opacity) + 0.3).toString()
      //console.log(dunDiv.style.opacity)
    }

    setInterval(show, 300)
  }


 
function thirdBattle(player){
    let thirdDungeonDiv = document.createElement('div')
    thirdDungeonDiv.id = "dungeon"
    thirdDungeonDiv.style.position = "absolute"
    thirdDungeonDiv.style.top = "0px"
    thirdDungeonDiv.style.zIndex = 1
    let monsterthree = dragon
    thirdDungeonDiv.style.backgroundImage = "url('https://poketouch.files.wordpress.com/2017/08/pokemon_sun_and_moon_screenshot_of_shiny_mimikyu.jpg?w=400')"//"url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/H0MA-uKSipsekm5s/scary-haunted-mansion-with-luminous-windows-among-fantastic-creepy-trees-at-dark-misty-night-with-big-moon-decorative-halloween-3d-animation-rendered-in-4k_r7upys90_thumbnail-full08.png')"
    thirdDungeonDiv.style.backgroundRepeat = "no-repeat"
    thirdDungeonDiv.style.backgroundSize = "2000px 380px"
    thirdDungeonDiv.style.opacity = 0
    /*______MONSTER______*/
    monsterthree.style = 'box-sizing: content-box'
    monsterthree.style.position = 'absolute'
    monsterthree.style.top = '150px'
    monsterthree.style.left = '60px'
    // dunDiv.style.left = '150px'
    /*______DUNGEON______*/
    thirdDungeonDiv.style.bottom = '180px'
    thirdDungeonDiv.style.height = '355px'
    thirdDungeonDiv.style.width = '100%'
    thirdDungeonDiv.style.position = 'fixed'
    thirdDungeonDiv.append(player)
    thirdDungeonDiv.append(monsterthree)
    document.body.append(thirdDungeonDiv)
    
    function show() {
        thirdDungeonDiv.style.opacity = (parseFloat(thirdDungeonDiv.style.opacity) + 0.3).toString()
      //console.log(dunDiv.style.opacity)
    }

    setInterval(show, 300)
}


    const quizContainer = document.createElement('div')
    quizContainer.setAttribute("id", "quiz")

function fourthBattle(player){
    let fourthDungeonDiv = document.createElement('div')
    fourthDungeonDiv.id = "dungeon"
    fourthDungeonDiv.style.position = "absolute"
    fourthDungeonDiv.style.top = "0px"
    fourthDungeonDiv.style.zIndex = 1
    let monsterFour = redDragon
    fourthDungeonDiv.style.backgroundImage = "url('https://vignette.wikia.nocookie.net/hub-ideas/images/5/5d/Cartoon_choices_are_scary_for_the_spooky_eyes.png/revision/latest?cb=20180804093948')"//"url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/H0MA-uKSipsekm5s/scary-haunted-mansion-with-luminous-windows-among-fantastic-creepy-trees-at-dark-misty-night-with-big-moon-decorative-halloween-3d-animation-rendered-in-4k_r7upys90_thumbnail-full08.png')"
    fourthDungeonDiv.style.backgroundRepeat = "no-repeat"
    fourthDungeonDiv.style.backgroundSize = "2000px 380px"
    fourthDungeonDiv.style.opacity = 0
    /*______MONSTER______*/
    monsterFour.style = 'box-sizing: content-box'
    monsterFour.style.position = 'absolute'
    monsterFour.style.top = '150px'
    monsterFour.style.left = '60px'
    // dunDiv.style.left = '150px'
    /*______DUNGEON______*/
    fourthDungeonDiv.style.bottom = '180px'
    fourthDungeonDiv.style.height = '355px'
    fourthDungeonDiv.style.width = '100%'
    fourthDungeonDiv.style.position = 'fixed'
    fourthDungeonDiv.append(player)
    fourthDungeonDiv.append(monsterFour)
    document.body.append(fourthDungeonDiv)
    
    function show() {
        fourthDungeonDiv.style.opacity = (parseFloat(fourthDungeonDiv.style.opacity) + 0.3).toString()
      //console.log(dunDiv.style.opacity)
    }

    setInterval(show, 300)
}



    const resultsContainer = document.createElement('div')
    resultsContainer.setAttribute('id', 'results')
    dunDiv.append(quizContainer, submitButton, resultsContainer)

function fifthBattle(player){
    let fifthDungeonDiv = document.createElement('div')
    fifthDungeonDiv.id = "dungeon"
    fifthDungeonDiv.style.position = "absolute"
    fifthDungeonDiv.style.top = "0px"
    fifthDungeonDiv.style.zIndex = 1
    let monsterFive = final
    fifthDungeonDiv.style.backgroundImage = "url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/iV3qrXT/halloween-soul-reaper-satan-comes-to-reap-the-souls-of-three-women-in-a-spooky-graveyard-at-halloween-they-rise-from-the-grave-and-realize-they-are-dead-and-doomed-a-4k-3d-cartoon-animation_e1wimkjxg__F0000.png')"//"url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/H0MA-uKSipsekm5s/scary-haunted-mansion-with-luminous-windows-among-fantastic-creepy-trees-at-dark-misty-night-with-big-moon-decorative-halloween-3d-animation-rendered-in-4k_r7upys90_thumbnail-full08.png')"
    fifthDungeonDiv.style.backgroundRepeat = "no-repeat"
    fifthDungeonDiv.style.backgroundSize = "2000px 380px"
    fifthDungeonDiv.style.opacity = 0
    /*______MONSTER______*/
    monsterFive.style = 'box-sizing: content-box'
    monsterFive.style.position = 'absolute'
    monsterFive.style.top = '150px'
    monsterFive.style.left = '60px'
    // dunDiv.style.left = '150px'
    /*______DUNGEON______*/
    fifthDungeonDiv.style.bottom = '180px'
    fifthDungeonDiv.style.height = '355px'
    fifthDungeonDiv.style.width = '100%'
    fifthDungeonDiv.style.position = 'fixed'
    fifthDungeonDiv.append(player)
    fifthDungeonDiv.append(monsterFive)
    document.body.append(fifthDungeonDiv)
    
    function show() {
        fifthDungeonDiv.style.opacity = (parseFloat(fifthDungeonDiv.style.opacity) + 0.3).toString()
      //console.log(dunDiv.style.opacity)
    }

    setInterval(show, 300)
}

/*
//QUIZ PART

const dunDiv = document.querySelector("#dungeon")
const quizContainer = document.createElement('div')
quizContainer.setAttribute("id", "quiz")

const submitButton = document.createElement('button')
submitButton.setAttribute('id', 'submit')

const resultsContainer = document.createElement('div')
resultsContainer.setAttribute('id', 'results')
//dunDiv.append(quizContainer, submitButton, resultsContainer)

//MAKE QUIZ, SHOW QUIZ, CALCULATE RESULTS
const mod1Question = [
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

*/