export default class Compare{
  constructor(wordDB, letterPosition){
    this.wordDB = wordDB.split('');
    this.letterPosition = letterPosition;
    this.letterValid = 0;
    this.letterMarried = 0;
  }

  validateLetter(){
    
    this.letterPosition.forEach((letter)=>{
      if(letter) this.letterValid+=1;
    })
  }

  compareWords(){
    for(let key in this.letterPosition){
      if(this.letterPosition[key] === this.wordDB[key]) this.letterMarried+=1;
    }
  }

  init(){
    this.validateLetter();
    this.compareWords();
    
    if(this.letterValid === this.letterMarried) return true;
    else return false
  }
}