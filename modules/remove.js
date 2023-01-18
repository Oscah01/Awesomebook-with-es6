import AwesomeBooksColletions from './collection.js';

const collection = new AwesomeBooksColletions();

export default class Removal {
  constructor(btn, id) {
    this.btn = btn;
    this.id = id;
  }

  removeBookFromTheDom() {
    const root = this.btn.parentNode;
    root.parentNode?.removeChild(root);
    localStorage.setItem('books', JSON.stringify(this.books));
    collection.books = collection.books.filter((book) => book.id !== this.id);
    localStorage.setItem('books', JSON.stringify(collection.books));
    if (collection.books.length === 0) {
      collection.bookListContainer.classList.remove('add-border');
      // collection.noBookMsg();
    }
  }
}