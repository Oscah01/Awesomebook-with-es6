import Addition from './modules/add.js';
import { displayBooks } from './modules/display.js';

const addBookForm = document.getElementById('add-book');
function handleSubmit(e) {
  e.preventDefault();
  const title = addBookForm.title.value;
  const author = addBookForm.author.value;
  const newBook = { title, author, id: `${Date.now()}` };
  const addition = new Addition();
  addition.add(newBook);
  e.target.reset();
}
addBookForm.addEventListener('submit', handleSubmit);
displayBooks();