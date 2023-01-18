// display.js
import AwesomeBooksColletions from './collection.js';
import Removal from './remove.js';

export default class DisplayBooks {
  constructor() {
    this.collection = new AwesomeBooksColletions();
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  display() {
    if (this.books.length < 1) {
      this.collection.bookListContainer.classList.remove('add-border');
      this.collection.noBookMsg();
    } else {
      this.collection.bookListContainer.classList.add('add-border');
      this.collection.bookListContainer.innerHTML = '';
      this.books.forEach((book) => {
        const li = document.createElement('li');
        li.classList.add('list-item');
        const h3 = document.createElement('h3');
        h3.innerText = `"${book.title}" by ${book.author}`;
        const btn = document.createElement('button');
        btn.classList.add('remove-book-btn');
        btn.innerText = 'Remove';
        li.appendChild(h3);
        li.appendChild(btn);
        this.collection.bookListContainer.appendChild(li);
        btn.addEventListener('click', () => {
          const remove = new Removal(btn, book.id);
          remove.removeBookFromTheDom();
        });
      });
    }
  }
}