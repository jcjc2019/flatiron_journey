const divBg = document.querySelector('#bg')
document.addEventListener("DOMContentLoaded", function(){
   //fetch player 
   const player =  document.createElement('img')
   divBg.appendChild(player)
   player.src = 'assets/test.gif'
   player.style.width = '300px'
   player.style.height = '300px'
   player.style.left = "20px"
   player.style.bottom = "0px"
   player.style.position = 'absolute'
   console.log('you reached me')

   
  document.addEventListener('keydown', e=> {
    divBg.className = "animation"
    var dir = null
    if(e.key == "ArrowRight") {
      dir = 'right'
    }
    else if(e.key == "ArrowLeft") {
      dir = 'left'
    }
    startMoving(dir)
  })

  function startMoving(direction) {
    console.log(divBg.style)
    let left = parseInt(player.style.left)
    let bgpos = divBg.style.backgroundPositionX
    if(direction === 'right') {
      player.style.left = `${left + 50}px`
      divBg.style.backgroundPositionX = `${bgpos + 10}px`
    }
    else if(direction === 'left') {
      player.style.left = `${left - 50}px`
      divBg.style.backgroundPositionX = `${bgpos - 10}px`
    }
  }




   
})