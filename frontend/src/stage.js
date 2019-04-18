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
      //create convo button
      const joshConvo =  document.createElement('img')
      joshConvo.src = 'assets/conv2.gif'
      joshConvo.className = "conv"
      joshConvo.style.top = "20px";
      joshConvo.style.left = "170px"
      bg.appendChild(joshConvo)
      talkToJosh(joshConvo)//josh conv event
    } 

    static monsterLight=()=>{
      const lightMonster = document.createElement('img')
      lightMonster.id = "lightMonster"
      lightMonster.src = 'assets/monster2.gif'
      bg.appendChild(lightMonster)

      //create convo button
      const monsterLightConvo =  document.createElement('img')
      monsterLightConvo.src = 'assets/conv2.gif'
      monsterLightConvo.className = "conv"
      monsterLightConvo.style.top = "30px";
      monsterLightConvo.style.left = "1020px"
      bg.appendChild(monsterLightConvo)
      talkToMonsterLight(monsterLightConvo)//monsterLight conv event
    }

    static purpleMonster=()=>{
      const purpleMonster = document.createElement('img')
      purpleMonster.id = "purpleMonster"
      purpleMonster.src = 'assets/monster.gif'
      bg.appendChild(purpleMonster)

      // create convo button
      const purpleMonsterConvo =  document.createElement('img')
      purpleMonsterConvo.src = 'assets/conv2.gif'
      purpleMonsterConvo.className = "conv"
      purpleMonsterConvo.style.top = "120px";
      purpleMonsterConvo.style.left = "2030px"
      bg.appendChild(purpleMonsterConvo)
      talkToPurpleMonster(purpleMonsterConvo)//purpleMonster conv event
      
  }  
  
    static dragon =()=>{
      const dragon = document.createElement('img')
      dragon.id = "dragon"
      dragon.src = 'assets/dragon.gif'
      bg.appendChild(dragon)

       // create convo button
      const dragonConvo =  document.createElement('img')
      dragonConvo.src = 'assets/conv2.gif'
      dragonConvo.className = "conv"
      dragonConvo.style.top = "100px";
      dragonConvo.style.left = "3250px"
      bg.appendChild(dragonConvo)
      talkToDragon(dragonConvo)//dragon conv event

  }
    static redDragon = ()=>{
      const redDragon = document.createElement('img')
      redDragon.id = "redDragon"
      redDragon.src = 'assets/redDragon.gif'
      bg.appendChild(redDragon)

      // create convo button
      const redDragonConvo =  document.createElement('img')
      redDragonConvo.src = 'assets/conv2.gif'
      redDragonConvo.className = "conv"
      redDragonConvo.style.top = "100px";
      redDragonConvo.style.left = "4250px"
      bg.appendChild(redDragonConvo)
      talkToRedDragon(redDragonConvo)//redDragon conv event
    }

    static final = ()=>{
      const final = document.createElement('img')
      final.id = "final"
      final.src = 'assets/final.gif'
      //final.style.left = "1600px"
      bg.appendChild(final)

      // create convo button
      const finalConvo =  document.createElement('img')
      finalConvo.src = 'assets/conv2.gif'
      finalConvo.className = "conv"
      finalConvo.style.top = "40px";
      finalConvo.style.left = "6130px"
      bg.appendChild(finalConvo)
      talkToFinal(finalConvo)//final conv event
    }
  
}    