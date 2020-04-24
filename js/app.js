const startGameBtn = document.getElementById("btn__reset");
const virtualKeyboardLetters = document.querySelectorAll(".key");
let game;
/***
 * Start game
 */
startGameBtn.addEventListener('click', e =>{
    game = new Game();
    game.startGame();
});
/***
 * Handle virtual button clicks
 */
virtualKeyboardLetters.forEach(letter =>{
    letter.addEventListener('click', e =>{
        const lette = e.target;
        game.handleInteraction(lette);
    });
});
/***
 * Handle keyboard input
 */
document.addEventListener('keydown', event=>{
    let pushedButton;
    virtualKeyboardLetters.forEach(button =>{
        if (button.textContent == event.key) {
            pushedButton = button;
        }
    });
    if (typeof pushedButton !== 'undefined' && pushedButton.disabled !== true){
        game.handleInteraction(pushedButton);
    }else{
        alert("Invalid input, symbol is not accepted");
    }
});
