class Game{
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null; //???????????
    }

    createPhrases(){
        const phrases = [new Phrase('Life is like a box of chocolates'),
            new Phrase('Was today really necessary'),
            new Phrase('I am objective I object to everything'),
            new Phrase('You can not be late until you show up'),
            new Phrase('When nothing is going right go left')];
        return phrases;
    }

    startGame(){
        const startScreen = document.getElementById("overlay");
        startScreen.style.display = 'none';
        this.activePhrase =  this.getRandomPhrase();//????????
        this.activePhrase.addPhraseToDisplay();
    };

    getRandomPhrase(){
        const randomIndex = Math.floor(Math.random() * this.phrases.length +1);
        const phrase = this.phrases[randomIndex];
        console.log(`random phrase ${phrase}`);
        return phrase;
    };

    handleInteraction(letter){
        if(this.activePhrase.checkLetter(letter)){
            this.activePhrase.showMatchedLetter(letter);
            alert('lala');
            this.checkForWin();
        }else{
            this.removeLife();
        }

    };

    removeLife(){
        //const scoreboard = document.getElementById("scoreboard");
        const lives = document.querySelectorAll("#scoreboard .tries");
        for (let i = 0; i< lives; i++){
            if (lives[i].getAttribute("src")=="images/liveHeart.png"){
                lives[i].setAttribute("src", "images/lostHeart.png");
            }
            break;
        }
        this.missed++;
        if (this.missed == 5){
            this.gameOver();
        }
    };

    checkForWin(){
        const allLettersInPhrase = document.querySelectorAll('#phrase .letter');
        allLettersInPhrase.forEach(letter =>{
           if (letter.classList.contains('hide')){
               return false;
           }
        });
        return true;
    };

    gameOver(){

    };

}
