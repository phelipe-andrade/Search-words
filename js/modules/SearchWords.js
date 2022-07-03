import Compare  from "./Compare.js";

export default class SearchWords{
  constructor(btnSearch, letters, result){
    this.btn = document.querySelector(btnSearch);
    this.letters = document.querySelectorAll(letters);
    this.positionLetters = []
    this.result = document.querySelector(result);
    this.number = document.querySelector('.number-result');
    this.startSearch = this.startSearch.bind(this);
  }

  getLetters(){
    let valid = false;
    this.letters.forEach((letter)=>{
      if(!letter.innerText) return this.positionLetters.push(null);
      this.positionLetters.push(letter.innerText);
      valid = true;
    })
    return valid;
  }

  resetInfos(){
    this.result.innerHTML = [];
    this.number.innerText = 0;
  }

  toCompare(){
    const married = [];
    this.arrayWords.forEach((wordDB)=>{
      let word = null;
      if(wordDB.includes(':')) word = wordDB.slice(0,5)
      else word = wordDB
      const marriedWords = new Compare(word, this.positionLetters);
      const result = marriedWords.init()

      if(!result) return;
      married.push(wordDB);
    })

    this.positionLetters = [];
    return married;
  }

  insertWordsMarriedes(array){
    const arrayWordsMarried = [];
    for (const word of array) {
      if(word.includes(':')) arrayWordsMarried.push(word.slice(6,11));
      else arrayWordsMarried.push(word);
    }

    for(let word of arrayWordsMarried){
      const li = document.createElement('li');
      li.innerText = word;
      this.result.appendChild(li);
    }
    this.number.innerText = arrayWordsMarried.length;
  }

  startSearch(){
    this.resetInfos();
    this.activeResult(false);
    const isValid = this.getLetters();
    if(!isValid) return;
    const arrayMarried = this.toCompare();
    if(!arrayMarried.length > 0) return ;
    this.insertWordsMarriedes(arrayMarried);
    this.activeResult(true);
  }

  activeResult(event){
    const result = document.querySelector('.container-result');
    if(event) return result.classList.add('active');
    return result.classList.remove('active');  
  }

  init(arrayWords){
    this.arrayWords = arrayWords;
    this.btn.addEventListener('click', this.startSearch);   
  }
}