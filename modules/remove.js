// remove.js
export default class Removal {
  constructor(btn, id) {
    this.btn = btn;
    this.id = id;
  }

  removeBookFromTheDom() {
    let books = JSON.parse(localStorage.getItem('books')) || [];
    const root = this.btn.parentNode;
    root.parentNode?.removeChild(root);

    books = books.filter((book) => book.id !== this.id);
    localStorage.setItem('books', JSON.stringify(books));
  }
}