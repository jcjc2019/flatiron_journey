class Stage{
    constructor(stageData){  //stage is background
       bg.id = stageData.name
    }

    static josh=()=>{
      const josh = document.createElement('img')
      josh.id = 'josh'
      josh.src = 'assets/josh.gif'
      josh.style.bottom = "0px"
      bg.appendChild(josh)
    } 

    static monsterLight=()=>{
      const lightMonster = document.createElement('img')
      lightMonster.id = "lightMonster"
      lightMonster.src = 'assets/monster2.gif'
      bg.appendChild(lightMonster)
    }

    static purpleMonster=()=>{
      const purpleMonster = document.createElement('img')
      purpleMonster.id = "purpleMonster"
      purpleMonster.src = 'assets/monster.gif'
      bg.appendChild(purpleMonster)
  }  
  
    static dragon =()=>{
      const dragon = document.createElement('img')
      dragon.id = "dragon"
      dragon.src = 'assets/dragon.gif'
      bg.appendChild(dragon)

  }
    static redDragon = ()=>{
      const redDragon = document.createElement('img')
      redDragon.id = "redDragon"
      redDragon.src = 'assets/redDragon.gif'
      bg.appendChild(redDragon)
    }

    static final = ()=>{
      const final = document.createElement('img')
      final.id = "final"
      final.src = 'assets/final.gif'
      final.style.left = "1600px"
      bg.appendChild(final)
    }
  
}    