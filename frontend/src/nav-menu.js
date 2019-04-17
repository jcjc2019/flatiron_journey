const newGame = document.querySelector("#new-game")
const resumeGame = document.querySelector("resume-game")
const howPlay = document.querySelector("how-to-play")
const about = document.querySelector("about")

function click(e){
    if(e.target.id === "new-game"){
        newForm();
    }
}

function newForm() {
    //clear 2 textboxes & 1 resumeForm
    const textbox = document.querySelectorAll(".textbox")
    const newForm = document.querySelector("#new-player-form")
    const resumeForm = document.querySelector("#current-player-form")
    textbox.forEach(function (t) {
        if (t.style.display !== "none") {
            t.style.display = "none";
            newForm.style.display = "block"
        };
    })
    if (resumeForm.style.display !== "none") {
        resumeForm.style.display = "none";
        newForm.style.display = "block";
    }
}

function resumeForm() {
    //clear 2 textboxes & 1 newForm
    const textbox = document.querySelectorAll(".textbox")
    const newForm = document.querySelector("#new-player-form")
    const resumeForm = document.querySelector("#current-player-form")
    textbox.forEach(function (t) {
        if (t.style.display !== "none") {
            t.style.display = "none";
            resumeForm.style.display = "block"
        };
    })
    if (newForm.style.display !== "none") {
        newForm.style.display = "none";
        resumeForm.style.display = "block";
    }
}

function displayInstructions() {
    //clear form div & about textbox
    const newForm = document.querySelector("#new-player-form")
    const resumeForm = document.querySelector("#current-player-form")
    const about = document.querySelector("#about")
    if (newForm.style.display !== "none" || about.style.display !== "none" || resumeForm.style.display !== "none") {
        newForm.style.display = "none";
        about.style.display = "none";
        resumeForm.style.display = "none";
        //show instructions
        let instructions = document.querySelector("#instructions")
        instructions.style.display = "block"
    }
}

function displayAbout() {
    //clear form div & instructions textbox
    const newForm = document.querySelector("#new-player-form")
    const resumeForm = document.querySelector("#current-player-form")
    const instructions = document.querySelector("#instructions")
    if (newForm.style.display !== "none" || instructions.style.display !== "none" || resumeForm.style.display !== "none") {
        newForm.style.display = "none";
        resumeForm.style.display = "none";
        instructions.style.display = "none"
        //show about
        let about = document.querySelector("#about")
        about.style.display = "block"
    }
}