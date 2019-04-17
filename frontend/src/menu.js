//Create Menu tests and actions
//menu text
const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
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
    wordWrapWidth: 600,
});

//slogan
const slogan = new PIXI.Text('Your Coding Journey Starts Here...', style);
slogan .x = 50;
slogan.y = 50;
stage.addChild(slogan); 

//start game button
const startText = new PIXI.Text('New Game', style);
startText.x = 50;
startText.y = 250;
startText.interactive = true;
startText.buttonMode = true;
startText.on('pointerdown', newGame);
stage.addChild(startText);

function newGame() {
    //render newform
    let person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
        //create new textbox, style already set in css file
        const textbox = document.createElement("div")
        textbox.setAttribute("class", "textbox")
        textbox.setAttribute("id", "textbox")
        document.body.append(textbox);
        textbox.innerHTML =
            "<p>"+ "Hello " + person + "!" 
            + "<p>" + "Do you want to start your magic journey?";
        
    }
}




//resume game button
const resumeText = new PIXI.Text('Resume Game', style);
resumeText.x = 50;
resumeText.y = 300;
resumeText.interactive = true;
resumeText.buttonMode = true;
resumeText.on('pointerdown', resumeGame);
stage.addChild(resumeText);

function resumeGame() {
    let person = prompt("Please enter your name", "Ron Weasley");
    if (person != null) {
        const textbox = document.createElement("div")
        textbox.setAttribute("class", "textbox")
        textbox.setAttribute("id", "textbox")
        textbox.innerHTML =
            "<p>" + "Hello " + person + "!"
            + "<p>" + "Do you want to resume your magic journey?";
        document.body.append(textbox);
    }
}

//instructions button, render a textbox showing instructions on canvas
const introText = new PIXI.Text('How to Play', style);
introText.x = 50;
introText.y = 350;
introText.interactive = true;
introText.buttonMode = true;
introText.click = function () {
    alert("Hi Mum!");
}
stage.addChild(introText);

//about button, render github readme file
const aboutText = new PIXI.Text('About', style);
aboutText.x = 50;
aboutText.y = 400;
aboutText.interactive = true;
aboutText.buttonMode = true;
aboutText.click = function () {
    alert("Hi Mum!");
}
stage.addChild(aboutText);
