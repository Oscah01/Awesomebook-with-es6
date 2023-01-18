// index.js
import Addition from './modules/add.js';
import AwesomeBooksColletions from './modules/collection.js';
import DisplayBooks from './modules/display.js';

const displayingBooks = new DisplayBooks();
const collection = new AwesomeBooksColletions();
const addBookForm = document.getElementById('add-book');
function handleSubmit(e) {
  e.preventDefault();
  const title = addBookForm.title.value;
  const author = addBookForm.author.value;
  if (author && title) {
    const newBook = { title, author, id: `${Date.now()}` };
    const addition = new Addition(newBook);
    addition.add();
  }
  e.target.reset();
}

setInterval(() => {
  document.getElementById('time').innerText = `${new Date().toUTCString()}`;
}, 1000);

document.querySelectorAll('.nav-item').forEach((item, index) => {
  if (item.innerText === 'List') {
    displayingBooks.display();
  }
  item.addEventListener('click', () => collection.handleClick(index));
});
addBookForm.addEventListener('submit', handleSubmit);
window.addEventListener('DOMContentLoaded', displayingBooks.display());