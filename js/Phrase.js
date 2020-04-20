class Phrase {

    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /***
     * Adds letter placeholders to the display when the game starts
     */
    addPhraseToDisplay(){
        const words = this.phrase.split(' ');
        const phraseDiv = document.querySelector('#phrase ul');
        words.forEach(word =>{
            for (let i = 0; i < word.length; i++){
               const li = document.createElement('li');
               li.innerText = word[i];
               li.setAttribute('class', `hide letter ${word[i]}`);
               phraseDiv.appendChild(li);
           };
           const space = document.createElement('li');
           space.setAttribute('class', 'space');
           space.innerText = ' ';
           phraseDiv.appendChild(space);
        });

    };

    /***
     * Checks to see if the letter selected by the player matches a letter in the phrase
     * @param letter
     * @return {boolean}
     */
    checkLetter(letter){
        for (let i = 0; i< this.phrase.length; i++){
            if (this.phrase[i] === letter){
                return true;
            }
        }
        return false;
    };

    /***
     * Reveals the letter(s) on the board that matches the player's selection
     * @param letter
     */
    showMatchedLetter(letter){
        const allLettersInPhrase = document.querySelectorAll('#phrase .letter');
        allLettersInPhrase.forEach(currentLetter =>{
            //console.log(currentLetter);
            if  (letter == currentLetter.innerHTML){
               currentLetter.classList.remove('hide');
               currentLetter.classList.add('show');
           }
        });
    };
}
