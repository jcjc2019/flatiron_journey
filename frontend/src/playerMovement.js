
  function startMoving(dir,player) {
    console.log(player)
    let left = parseInt(player.style.left)
    let bgpos = divBg.style.backgroundPositionX
    if(dir === 'right') {
      player.style.left = `${left + 50}px`
      divBg.style.backgroundPositionX = `${bgpos + 10}px`
    }
    else if(dir === 'left') {
      player.style.left = `${left - 50}px`
      divBg.style.backgroundPositionX = `${bgpos - 10}px`
    }
  }