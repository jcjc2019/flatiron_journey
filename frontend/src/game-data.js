
const newGameForm = document.querySelector("#new-game-form")
const resumeGameForm = document.querySelector("#resume-game-form")

//add event listener to newGameForm
document.addEventListener("DOMContentLoaded", ()=>{

  //set up const for input value
  const newName = document.querySelector("#input-username") //get the value of the input field
  let newImg = document.querySelector('input[name="character"]:checked') //select the default value
  const oldName = document.querySelector("#input-old-username")

  const playersURL = "http://localhost:3000/players"

  //NEW FORM, add event for new form, create new user to server
  newGameForm.addEventListener("submit", function (e) {
    newImg = document.querySelector('input[name="character"]:checked') //change to user's input
    e.preventDefault();
    // if (newName.value !== null) {
      // post player information to database
        //patch
        fetch(playersURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: newName.value,
            staticImgUrl: `./assets/${newImg.value}_static.gif`,
            leftImgUrl: `./assets/${newImg.value}_left.gif`,
            rightImgUrl: `./assets/${newImg.value}_right.gif`,
            score: 0,
            x: 20
          })
        })
          .then(response=> response.json())
          .then(newPlayerData => {
            if (document.querySelector("#player")){
              document.querySelector("#player").remove();
              new Player(newPlayerData)
            }
          })
      //NEED REFACTOR TO MAKE THIS LINE WORK
    // } else {
    //   alert("Username is not valid. Please choose a unique one.")
    // }
    window.location.href = "#game-area";
  })
    resumeGameForm.addEventListener("submit", function (e) {
      e.preventDefault();
      oldName.value;
      fetch(`${playersURL}/${oldName.value}`)
        .then(response => response.json())
        .then(oldPlayerData => {
          document.querySelector("#player").remove();
          new Player(oldPlayerData)
        })
      window.location.href = "#game-area";
  })


})


