//add.js
import DisplayBooks from './display.js';

export default class Addition {
  constructor(book) {
    this.book = book;
    this.display = new DisplayBooks();
  }

  add() {
    let books = JSON.parse(localStorage.getItem('books')) || [];
    books = [this.book, ...books];
    localStorage.setItem('books', JSON.stringify(books));
    window.location.reload();
  }
}