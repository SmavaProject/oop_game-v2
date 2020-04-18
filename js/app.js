const startGameBtn = document.getElementById("btn__reset");
const letters = document.querySelectorAll("#qwerty .key");
const game = new Game(1, 1, "lala");

startGameBtn.addEventListener('click', e =>{
    game.startGame();
});

letters.forEach(letter =>{
    letter.addEventListener('click', e =>{
        game.handleInteraction();
    });
});

