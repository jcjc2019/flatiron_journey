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

    

  
}    