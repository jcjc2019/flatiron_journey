const bg = document.querySelector('div')
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
  //console.log(stageData.npcs) //continue here. how to instantiate npc using rails association?
})


document.addEventListener("DOMContentLoaded", function(){
   //fetch player 
   fetch(playerUrl)
   .then(response=> response.json())
   .then(playerData=> new Player(playerData)) //instantiate player 
    
   
})    