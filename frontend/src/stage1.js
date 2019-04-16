const divBg = document.querySelector('#bg')
document.addEventListener("DOMContentLoaded", function(){
   //create player 
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




   //make it able to move to the right
   /*
   document.addEventListener('keydown', e=>{
      if(e.repeat)return
      if(e.key == "ArrowRight"){
          divBg.className = "animation"
          let left = parseInt(player.style.left)
          console.log(divBg.style)
          player.style.left = `${left + 10}px` 
      }
   }) 

   document.addEventListener('keyup', e=>{
     if(e.repeat)return
     if(e.key == ""){

     }
   })
   */

   // background move
   /*
   window.addEventListener('scroll', function(){
       let parallax = document.querySelector('.parallax')
       let scrollWidth = window.pageXOffset,
           limit = parallax.offsetRight + parallax.offsetWidth;
       if(scrollWidth < parallax.offsetRight && scrollWidth >= limit){
          parallax.style.backgroundPositionX = (scrollWidth - parallax.offsetRight)/1.5 +"px";
          console.log('you reached me')
        }else{
           parallax.style.backgroundPositionX = "0";
       }    
   })
   */
})