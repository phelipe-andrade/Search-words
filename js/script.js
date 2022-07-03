import SelectBox from "./modules/SelectBox.js";
import ArrayWords from "./modules/arrayWords.js";
import InsertLetter from "./modules/InsertLetter.js"
import SearchWords  from "./modules/searchWords.js";



const search = new SearchWords('.btn-search', '.write li', '.result');
(async () =>{
  const array =  new ArrayWords();
  await array.init();
  search.init(array.arrayCompleted);
})();

const boxes = new SelectBox('.write li');
boxes.init();

const letter = new InsertLetter('.write li');
letter.init();












