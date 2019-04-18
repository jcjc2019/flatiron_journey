const gameCanvas = document.querySelector("#game-canvas");

gameCanvas.style.width = window.innerWidth + "px";
gameCanvas.style.height = window.innerHeight + "px";

const gameContainer = document.querySelector(".game-container")
gameContainer.style.width = (window.innerWidth - 20) + "px" ;
gameContainer.style.height = window.innerHeight + "px";

const gameArea = document.querySelector("object")
gameArea.style.width = gameContainer.style.width;
gameArea.style.height = "480px";