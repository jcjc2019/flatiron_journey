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


const icon = new PIXI.Text('Your Coding Journey Starts Here...', style);
icon.x = 50;
icon.y = 50;
stage.addChild(icon);

const startText = new PIXI.Text('New Game', style);
startText.x = 50;
startText.y = 250;
startText.interactive = true;
startText.buttonMode = true;
startText.on('pointerdown', onClick);
stage.addChild(startText);

function onClick() {
    let person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
        const textbox = document.createElement("div")
        textbox.setAttribute("class", "textbox")
        textbox.setAttribute("id", "textbox")
        textbox.innerHTML =
            "Hello " + person + "! How are you today?";
        textbox.style.backgroundColor = '#cc9900';
        document.body.append(textbox);
        stage.addChild(textbox);
    }
}

const resumeText = new PIXI.Text('Resume Game', style);
resumeText.x = 50;
resumeText.y = 300;
resumeText.interactive = true;
resumeText.buttonMode = true;
resumeText.click = function () {
    alert("Hi Mum!");
}

const introText = new PIXI.Text('How to Play', style);
introText.x = 50;
introText.y = 350;
introText.interactive = true;
introText.buttonMode = true;
introText.click = function () {
    alert("Hi Mum!");
}

stage.addChild(resumeText);
stage.addChild(introText);
