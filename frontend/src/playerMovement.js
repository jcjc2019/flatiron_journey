
  function startMoving(dir,player) {
    console.log(divBg.style)
    console.log(player.x)
    let left = parseInt(player.element.style.left)
    let bgpos = divBg.style.backgroundPositionX
    if(dir === 'right') {
      player.element.style.left = `${left + 50}px`
      divBg.style.backgroundPositionX = `${bgpos + 10}px`
    }
    else if(dir === 'left') {
      player.element.style.left = `${left - 50}px`
      divBg.style.backgroundPositionX = `${bgpos - 10}px`
    }
  }