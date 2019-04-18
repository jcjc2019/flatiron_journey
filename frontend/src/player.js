
class Player{
    constructor(playerData){
        //console.log(playerData.x)
        const player =  document.createElement('img')
        player.src = playerData.staticImgUrl
        player.style.width = '200px'
        player.style.height = '150px'
        player.style.left = window.innerWidth / 2 - 100 //playerData.x//
        player.style.top = "55%"
        // player.style.bottom = "10%"
        player.style.position = 'fixed'
        player.style.zIndex = 1
        //this.element = player
        bg.appendChild(player)
        this.move(player, playerData)
        this.stop(player, playerData)
        setInterval(() => {
            if(this.direction == 'left'){
              let left = parseInt(bg.style.left)
              bg.style.left = `${left + 0.1}px`
              console.log(window.scrollX)
            } 
            if(this.direction == 'right'){
              let left = parseInt(bg.style.left)
              bg.style.left = `${left - 0.1}px`
              console.log(window.scrollX)
            } 
          }, 1000)
    }

    
    move=(player, playerData)=>{
        document.addEventListener('keydown', e=> {
           //console.log(player.style.left)
           //console.log(window.scrollX)
          
            battle(player) 

            if(e.repeat) return 
              //bg.className = "animation"
            if(e.key == "ArrowRight" ) { //&& parseInt(player.style.left) < 3000
                this.direction = 'right'
                player.src = playerData.rightImgUrl
            }else if(e.key == "ArrowLeft") { // && parseInt(player.style.left) > 20
                this.direction = 'left'
                player.src = playerData.leftImgUrl
              //dir = 'left'
            }
          })
    }

    stop=(player, playerData)=>{
        document.addEventListener('keyup', e=> {
        this.direction = null
          console.log(player.style.left)
          stop(player)
          player.src = playerData.staticImgUrl
          //save player position
          fetch(playerUrl, {  
                method:"PATCH",
                headers: {
                       'Content-Type': 'application/json'
                         },
                body: JSON.stringify({
                        x: window.scrollX//player.style.left// to be fixed, update the position but when refresh it goes back to beginning part
                        })          
          }) 
        })
    }




}


