import SelectBox from "./SelectBox.js";

export default class InsertLetter extends SelectBox{
  constructor(boxes){
    super(boxes);
    this.boxes = document.querySelectorAll(boxes);
    this.boxIsActive = this.boxIsActive.bind(this);
  }

  nextBox(key, value){
    let cont = Number(key) + value;
    this.boxes[key].classList.remove('active');
    if(cont >= this.boxes.length) return;
    this.boxes[cont].classList.add('active');
    return;
  }

  insertInStart(keypress){
    this.boxes[0].innerText = keypress;
    this.nextBox(0, 1);
  }

  clickButton(){
    document.querySelector('.btn-search').click();
  }

  deleteLetter(){
    let prev = null
    for(let key in this.boxes){
      if(!this.boxes[key].classList) break;
      if(this.boxes[key].classList.contains('active')){
        this.boxes[key].innerText = '';
        prev = key;
        break;
      }
    }
    if(prev <= 0) return this.resetBoxes(); 
    this.nextBox(prev, -1);
  }

  boxIsActive(event){
    const keypress = event.key.toUpperCase();
    let empty = true;

    if(event.keyCode === 8) return this.deleteLetter(); 
    if(event.keyCode === 13) return this.clickButton(); 
    if(event.keyCode < 65 || event.keyCode > 90) return;

    this.boxes.forEach((box)=>{ if(box.classList.contains('active')) return empty = false; })

    if (empty) return this.insertInStart(keypress);

    for(let key in Array.from(this.boxes)){
      if(!this.boxes[key].classList.contains('active')) continue;
      this.boxes[key].innerText = keypress;
      this.nextBox(key, 1);
      return;
    }
  }

  init(){
    document.addEventListener('keydown', this.boxIsActive);
  }
}