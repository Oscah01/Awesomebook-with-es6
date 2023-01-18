import Addition from './modules/add.js';
import DisplayBooks from './modules/display.js';

const displayingBooks = new DisplayBooks();
const addBookForm = document.getElementById('add-book');
function handleSubmit(e) {
  e.preventDefault();
  const title = addBookForm.title.value;
  const author = addBookForm.author.value;
  const newBook = { title, author, id: `${Date.now()}` };
  const addition = new Addition(newBook);
  addition.add();
  e.target.reset();
}
addBookForm.addEventListener('submit', handleSubmit);
window.addEventListener('DOMContentloaded', displayingBooks.display);