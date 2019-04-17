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
    wordWrapWidth: 440,
});

const startText = new PIXI.Text('New Game', style);
startText.x = 50;
startText.y = 250;
startText.interactive = true;
startText.buttonMode = true;
startText.on('pointerdown', onClick);
stage.addChild(startText);

function onClick() {
    alert("Hi Mum!"); 
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
// const gameButton = document.querySelector("#game-button");
// gameButton.innerText = richText;
// stage.addChild(gameButton)

stage.addChild(resumeText);
stage.addChild(introText);
// richText.addEventListener('click', (e)=>{
//     e.preventDefault();
//     console.log('worked.')
// })