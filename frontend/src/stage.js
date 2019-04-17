class Stage{
    constructor(stageData){  //stage is background
       bg.id = stageData.name
    }

    static josh=()=>{
      const josh = document.createElement('img')
      josh.src = 'assets/josh.gif'
      josh.style.bottom = "0px"
      josh.style.height = "250px"
      josh.style.left = "50px"
      josh.style.position = "absolute"
      bg.appendChild(josh)
    } 

    static monsterLight=()=>{
      const lightMonster = document.createElement('img')
      lightMonster.src = 'assets/monster2.gif'
      lightMonster.style.bottom = "400px"
      lightMonster.style.height = "250px"
      lightMonster.style.left = "1000px"
      bg.appendChild(lightMonster)
    }

    

  
}    