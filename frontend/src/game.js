const bg = document.querySelector('#main')
const playerUrl = 'http://localhost:3000/players/1'
const bgUrl = 'http://localhost:3000/stages/1'


//fetch stage first
fetch(bgUrl) 
.then(function(response){
  return response.json()  
})  
.then(function(stageData){
  new Stage(stageData) //instantiate stage
  Stage.josh()
  Stage.monsterLight()
  Stage.purpleMonster()
  Stage.dragon()
  Stage.redDragon()
  Stage.final()
})


document.addEventListener("DOMContentLoaded", function(){
   //fetch player 
   fetch(playerUrl)
   .then(response=> response.json())
   .then(playerData=> new Player(playerData)) //instantiate player 
     
  //create intro conversation
  const conversation1 = document.createElement('p')
    conversation1.style.marginLeft = "200px"
    conversation1.style.top = "10px"
    conversation1.style.opacity = 0
    conversation1.style.position = "absolute"
    conversation1.innerText = "Good morning loves! We'll start our journey to programming world now! Mod1 is OOP Ruby. Let's use the superhero and hero abilities as example...."
    bg.appendChild(conversation1)
    console.log('you reached me')
  // show intro conversation  
  function firstConversation (){
    conversation1.style.opacity += 0.1
  }

  const firstConversationInterval = (firstConversation)
  //firstConversation()
  //const showFirstConversation = setTimeout(conversation1, 2000)
  //showFirstConversation
})    