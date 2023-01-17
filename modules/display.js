import AwesomeBooksColletions from './collection.js';
import Removal from './remove.js';

// const bookApp = document.getElementById('book-list');
const collection = new AwesomeBooksColletions();
const remove = new Removal();
export const displayBooks = () => {
  collection.bookListContainer.classList.add('add-border');
  collection.bookListContainer.innerHTML = '';
  collection.books.forEach((book) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    const h3 = document.createElement('h3');
    h3.innerText = `"${book.title}" by ${book.author}`;
    const btn = document.createElement('button');
    btn.classList.add('remove-book-btn');
    btn.innerText = 'Remove';
    li.appendChild(h3);
    li.appendChild(btn);
    collection.bookListContainer.appendChild(li);
    btn.addEventListener('click', () => {
      // Remove book from the list
      remove.removeBookFromTheDom(btn, book.id);
    });
  });
};
