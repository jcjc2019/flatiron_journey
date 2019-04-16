class Player{
    constructor(playerData){
        console.log(playerData.x)
        const player =  document.createElement('img')
        player.src = playerData.imgUrl
        player.style.width = '300px'
        player.style.height = '250px'
        player.style.left = playerData.x
        player.style.bottom = "0px"
        player.style.position = 'absolute'
        //this.element = player
        divBg.appendChild(player)
        this.move(player)
        this.stop(player)//patch player position and bg position
    }

    
    move=(player)=>{
        document.addEventListener('keydown', e=> {
            divBg.className = "animation"
            if(e.key == "ArrowRight") {
               walkRight(player) // dir = 'right'
            }else if(e.key == "ArrowLeft") {
               walkLeft(player) 
              //dir = 'left'
            }
          })
    }

    stop=(player)=>{
        document.addEventListener('keyup', e=> {
          console.log(player.style.left)
          stop(player)
          //save player position
          fetch(playerUrl, {  
                method:"PATCH",
                headers: {
                       'Content-Type': 'application/json'
                         },
                body: JSON.stringify({
                        x: player.style.left
                        })          
          }) 
        })
    }




}


