class Phrase {

    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        const words = this.phrase.split(' ');
        const phraseDiv = document.getElementById('phrase');
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
    checkLetter(){

    };
    showMatchedLetter(){

    };
}
