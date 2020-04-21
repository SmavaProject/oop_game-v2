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
 * Handle virtual button clicks
 */
letters.forEach(letter =>{
    letter.addEventListener('click', e =>{
        const lette = e.target;
        game.handleInteraction(lette);
    });
});
/***
 * Handle keyboard input
 */
document.addEventListener('keydown', event=>{
    const virtualButtons = document.querySelectorAll('#qwerty button');
    let pushedButton;
    virtualButtons.forEach(button =>{
        if (button.textContent == event.key) {
            pushedButton = button;
        }
    });
    if (typeof pushedButton !== 'undefined'){
        game.handleInteraction(pushedButton);
    }else{
        alert("Invalid input, symbol is not accepted");
    }
});
