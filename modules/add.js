import AwesomeBooksColletions from './collection.js';
import DisplayBooks from './display.js';

const collection = new AwesomeBooksColletions();
export default class Addition {
  constructor(book) {
    this.book = book;
    this.display = new DisplayBooks();
  }

  add() {
    collection.books = [this.book, ...collection.books];
    localStorage.setItem('books', JSON.stringify(collection.books));
    this.display.display();
  }
}
