class Player{
    constructor(playerData){
        console.log(playerData.x)
        const player =  document.createElement('img')
        player.src = playerData.imgUrl
        player.style.width = '300px'
        player.style.height = '300px'
        player.style.left = playerData.x
        player.style.bottom = "0px"
        player.style.position = 'absolute'
        //this.element = player
        divBg.appendChild(player)
        this.move(player)
    }

    //display=currentPlayer=>{
       
    //}

    move=(player)=>{
        document.addEventListener('keydown', e=> {
            //const player = this
            divBg.className = "animation"
            var dir = null
            if(e.key == "ArrowRight") {
              dir = 'right'
              console.log(player.style.left)
            }else if(e.key == "ArrowLeft") {
              dir = 'left'
            }
            startMoving(dir, player)
          })
    }

}


