export default class SelectBox{
  constructor(boxes){
    this.boxes = document.querySelectorAll(boxes);

    this.handleBox = this.handleBox.bind(this);
    this.handleClickDocument = this.handleClickDocument.bind(this)
  }

  resetBoxes(){
    this.boxes.forEach((box)=>{
      box.classList.remove('active')
    })
    return;
  }

  handleBox(event) {
    const box = event.target;
    if(box.classList.contains('active')) return box.classList.remove('active');
    this.resetBoxes();
    box.classList.add('active');
    return;
  }

  handleClickDocument(event){
    if(event.keyCode === 39 || event.keyCode === 37) return this.handleKeys(event);
    return;
  }

  handleKeys(event){
    const key = event.keyCode;

    let boxIndex = null;
    this.boxes.forEach((box, index)=>{
      if (box.classList.contains('active')) boxIndex = index;
    })
    this.resetBoxes();

    if(boxIndex === null) key === 39 ? boxIndex = -1 : boxIndex = this.boxes.length;

    if(key === 39) boxIndex == this.boxes.length -1 ? boxIndex = this.boxes.length -1 : boxIndex += 1;
    else if(key === 37 && boxIndex > 0) boxIndex -= 1;

    this.boxes[boxIndex].classList.add('active');
    return;
  }

  init(){
    this.boxes.forEach((box)=>{
      box.addEventListener('click', this.handleBox);
    });
  
    document.addEventListener('keydown', this.handleClickDocument);

    return;
  }
}
