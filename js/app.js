const startGameBtn = document.getElementById("btn__reset");
const letters = document.querySelectorAll(".key");
const game = new Game();
/***
 * Start game
 */
startGameBtn.addEventListener('click', e =>{
    game.startGame();
});
/***
 * Handle button clicks
 */
letters.forEach(letter =>{
    letter.addEventListener('click', e =>{
        const lett = e.target;
        game.handleInteraction(lett);
    });
});

