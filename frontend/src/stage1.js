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

   //make it able to move to the right
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