//generate canvas
var type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}
PIXI.utils.sayHello(type);
const app = new PIXI.Application(
    window.innerWidth, 
    window.innerHeight
    );
document.body.appendChild(app.view);

var stage = new PIXI.Container();
app.stage.addChild(stage);


// var renderer = PIXI.autoDetectRenderer(
//     window.innerWidth,
//     window.innerHeight,
//     {
        // change background color to blue
//         backgroundColor: '0x22A7F0'
//     });
// document.body.appendChild(renderer.view);
// var stage = new PIXI.Container();
// renderer.render(stage);
