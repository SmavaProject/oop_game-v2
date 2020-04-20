const startGameBtn = document.getElementById("btn__reset");
const letters = document.querySelectorAll(".key");
const game = new Game(1, 1, "lala");

startGameBtn.addEventListener('click', e =>{
    game.startGame();
});

letters.forEach(letter =>{
    letter.addEventListener('click', e =>{
        //const lett = e.target.textContent;
        const lett = e.target;
        game.handleInteraction(lett);
    });
});

