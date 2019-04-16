class Player{
    constructor(playerData){
        // this.x = playerData.x
        console.log(playerData.x)
        const player =  document.createElement('img')
        player.src = playerData.imgUrl
        player.style.width = '300px'
        player.style.height = '300px'
        player.style.left = '20px'
        player.style.bottom = "0px"
        player.style.position = 'absolute'
        this.element = player
        divBg.appendChild(player)
        this.move()
    }

    //display=currentPlayer=>{
       
    //}

    move=()=>{
        document.addEventListener('keydown', e=> {
            const player = this
            console.log(this)
            divBg.className = "animation"
            var dir = null
            if(e.key == "ArrowRight") {
              dir = 'right'
            }else if(e.key == "ArrowLeft") {
              dir = 'left'
            }
            startMoving(dir, player)
          })
    }

}


