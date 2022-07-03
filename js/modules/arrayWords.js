export default class arrayWords{
  constructor(){
    this.arrayText = ['word2.txt'];
    this.arrayReady = [];
  }

  async getWords(wordText){
    const response = await fetch(wordText);
    const wordsJson = await response.text();
    const words = wordsJson.replace(/[\[\]"]/g,' ').split(',')
    
    const arrayClean = [];
    words.forEach((word) =>{
      arrayClean.push(word.trim().toUpperCase());
    })
    return arrayClean;
  }

  joinWords(array){
    array.forEach((word)=>{
     //if(!this.arrayReady.includes(word)) this.arrayReady += `"${word}", `;
     if(!this.arrayReady.includes(word)) this.arrayReady.push(word);
    });
  }

  get arrayCompleted(){
    return this.arrayReady;
  }

  async init(){
    for (const text of this.arrayText) {
      const arr = await this.getWords(text);
      this.joinWords(arr);
    }
  }
}
