class Stage{
    constructor(stageData){  //stage is background
       bg.id = stageData.name
    }

    static display=()=>{
      const lightMonster = document.createElement('img')
      lightMonster.src = 'assets/monster2.gif'
      lightMonster.style.bottom = "400px"
      lightMonster.style.height = "250px"
      lightMonster.style.marginLeft = "1000px"
      bg.appendChild(lightMonster)
    }

  
}    