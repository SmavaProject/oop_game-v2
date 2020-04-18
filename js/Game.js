class Game{
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null; //???????????
    }

    createPhrases(){
        const phrases = [new Phrase('lala'), new Phrase(''), new Phrase(''), new Phrase(''), new Phrase('')];
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
        return phrase;
    };

    handleInteraction(){
        //const selectedButton;
        alert('lala');

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

    };

    gameOver(){

    };

}
