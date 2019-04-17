//Create Menu tests and actions
//menu text
const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 500,
});

//slogan
const slogan = new PIXI.Text('Your Coding Boot Camp Journey Starts Here...', style);
slogan.x = 40;
slogan.y = 50;
stage.addChild(slogan); 

//start game button
const startText = new PIXI.Text('New Game', style);
startText.x = 40;
startText.y = 250;
startText.interactive = true;
startText.buttonMode = true;
stage.addChild(startText);

function newForm() {
    //clear 2 textboxes & 1 resumeForm
    const textbox = document.querySelectorAll(".textbox")
    const newForm = document.querySelector("#new-player-form")
    const resumeForm = document.querySelector("#current-player-form")
    textbox.forEach(function(t){
        if (t.style.display !== "none"){
            t.style.display = "none"; 
            newForm.style.display = "block" 
        };
    })
    if(resumeForm.style.display !== "none"){
        resumeForm.style.display = "none";
        newForm.style.display = "block";
    }
 
}

startText.on('pointerdown', newForm);

//resume game button
const resumeText = new PIXI.Text('Resume Game', style);
resumeText.x = 40;
resumeText.y = 300;
resumeText.interactive = true;
resumeText.buttonMode = true;
resumeText.on('pointerdown', resumeForm);
stage.addChild(resumeText);

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

//instructions button, render a textbox showing instructions on canvas
const introText = new PIXI.Text('How to Play', style);
introText.x = 40;
introText.y = 350;
introText.interactive = true;
introText.buttonMode = true;
introText.on('pointerdown', displayInstructions);
stage.addChild(introText);

function displayInstructions() {
    //clear form div & about textbox
    const newForm = document.querySelector("#new-player-form")
    const resumeForm = document.querySelector("#current-player-form")
    const about = document.querySelector("#about")
    const instructions = document.querySelector("#instructions")

    if(newForm.style.display !== "none" || about.style.display !== "none" || resumeForm.style.display !== "none"){
        newForm.style.display = "none";
        about.style.display = "none";
        resumeForm.style.display = "none";
        //show instructions
        instructions.style.display = "block"
    }
}

//about button, render github readme file
const aboutText = new PIXI.Text('About', style);
aboutText.x = 40;
aboutText.y = 400;
aboutText.interactive = true;
aboutText.buttonMode = true;
aboutText.on('pointerdown', displayAbout);
stage.addChild(aboutText);
function displayAbout() {
    //clear form div & instructions textbox
    const newForm = document.querySelector("#new-player-form")
    const resumeForm = document.querySelector("#current-player-form")
    const instructions = document.querySelector("#instructions")
    const about = document.querySelector("#about")

    if (newForm.style.display !== "none" || instructions.style.display !== "none" || resumeForm.style.display !== "none" || about.style.display === "none") {
        newForm.style.display = "none";
        resumeForm.style.display = "none";
        instructions.style.display = "none"
        //show about
        about.style.display = "block"
    }
}