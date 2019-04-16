const divBg = document.querySelector('#bg')
const playerUrl = 'http://localhost:3000/players/1'
const bgUrl = 'http://localhost:3000/stages/1'
document.addEventListener("DOMContentLoaded", function(){
   //fetch player 
   fetch(playerUrl)
   .then(function(response){
     return response.json()
   })
   .then(function(playerData){
    //instantiate player 
    new Player(playerData)
   })
   

   //fetch stage
   //fetch()
  
})   