import AwesomeBooksColletions from './collection.js';

const collection = new AwesomeBooksColletions();

export default class Removal {
  removeBookFromTheDom(btn, id) {
    const root = btn.parentNode;
    root.parentNode?.removeChild(root);
    collection.books = collection.books.filter((book) => book.id !== id);
    collection.saveToLG();
    if (collection.books.length === 0) {
      collection.bookListContainer.classList.remove('add-border');
      // collection.noBookMsg();
    }
  }
}