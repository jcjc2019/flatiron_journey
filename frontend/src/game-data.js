
//add event listener to newGameForm
document.addEventListener("DOMContentLoaded", ()=>{


  const newGameForm = document.getElementById("new-game-form")
  const resumeGameForm = document.querySelector("#resume-game-form")

  //set up const for input value
  const newName = document.querySelector("#input-username")
  const newImg = document.querySelector("input[name=character]:checked")
  const oldName = document.querySelector("#input-old-username")

  const playersURL = "http://localhost:3000/players"

  //1. submit new form action
  // post player information to database, create new player instance
  const createNewPlayerImg = function () {
    //patch
    fetch(playersURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: newName.value,
        staticImgUrl: `assets/${newImg.value}_static.gif`,
        leftImgUrl: `assets/${newImg.value}_left.gif`,
        rightImgUrl: `assets/${newImg.value}_right.gif`,
        score: 0,
        x: 20
      })
      // .then((res) => res.json())
      // .then((newPlayerData) => new Player(newPlayerData))
    })
  }

  //add event for form
  newGameForm.addEventListener("submit", function (e) {
    e.preventDefault();
    createNewPlayerImg();
  })

})


