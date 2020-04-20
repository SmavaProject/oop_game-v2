class Game{
    startScreen = document.getElementById("overlay");
    lives = document.querySelectorAll("#scoreboard li img");
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null; //???????????
    }

    /***
     *
     * @return {[Phrase, Phrase, Phrase, Phrase, Phrase]}
     */
    createPhrases(){
        const phrases = [new Phrase('Life is like a box of chocolates'),
            new Phrase('Was today really necessary'),
            new Phrase('I am objective I object to everything'),
            new Phrase('You can not be late until you show up'),
            new Phrase('When nothing is going right go left')];
        return phrases;
    }

    /***
     * Starts screen overlay
     */
    startGame(){
        this.startScreen.style.display = 'none';
        this.resetGame();
        this.activePhrase =  this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /***
     * Randomly retrieves one phrase from the phrases array
     * @return {Phrase}
     */
    getRandomPhrase(){
        const randomIndex = Math.floor(Math.random() * this.phrases.length +1);
        const phrase = this.phrases[randomIndex];
        return phrase;
    };

    /***
     *
     * @param letter
     */
    handleInteraction(letter){
        //disable clicked letter
        letter.disabled = true;

        if(this.activePhrase.checkLetter(letter.textContent)) {
            this.activePhrase.showMatchedLetter(letter.textContent);
            if (this.checkForWin()) {
                this.gameOver();
            }
        }else{
            letter.classList.add('wrong');
            this.removeLife();
        }
    };

    /***
     *  Removes a life from the scoreboard
     */
    removeLife(){
        for (let i = 0; i< this.lives.length; i +=1 ){
            if (this.missed == i){
                this.lives[i].setAttribute('src', "images/lostHeart.png");
                break;
            }
        }
        this.missed++;
        if (this.missed == 5){
            this.gameOver();
        }
    };

    /***
     * Checks to see if the player has revealed all of the letters in the active phrase
     * @return {boolean}
     */
    checkForWin(){
        const allLettersInPhrase = document.querySelectorAll('#phrase li');
        let noHideClass = true;
        allLettersInPhrase.forEach(letter =>{
           if (letter.classList.contains('hide')){
               //console.log('inside allLettersInPhrase' + letter.classList);
               noHideClass = false;
               //break;
           }
        });
        return noHideClass;
    };


    gameOver(){
        this.startScreen.style.display = 'block';
        this.startScreen.classList.remove('start');
        const endMessage = document.querySelector("#overlay h1");
        if(this.missed < 5){
            endMessage.innerHTML = "You a so smart!";
            this.startScreen.classList.remove('lose');
            this.startScreen.classList.add('win');
        }else{
            endMessage.innerHTML = "Better luck next time!";
            this.startScreen.classList.remove('win');
            this.startScreen.classList.add('lose');
        }

    };

    resetGame(){
        //hide start screen
        this.startScreen.style.display = 'none';
        //remove the phrase
        const allLettersInPhrase = document.querySelectorAll('#phrase ul li');
        for (let i = 0; i< allLettersInPhrase.length; i++){
            const currLI = allLettersInPhrase[i];
            currLI.parentNode.removeChild(currLI);
        }
        //enable buttons
        const buttons = document.querySelectorAll('#qwerty .key');
        buttons.forEach( button =>{
            button.disabled = false;
            button.classList.remove('wrong');
        });
        //reset lives
        this.lives.forEach(live =>{
            live.setAttribute('src', "images/liveHeart.png");
        });
        //reset missed
        this.missed = 0;
    }

}


/***
 innerHtml vs textContent!!!!!
 */
