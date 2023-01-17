// ./module/collection.js
export default class AwesomeBooksColletions {
    constructor() {
      this.books = JSON.parse(localStorage.getItem('books')) || [];
      this.bookListContainer = document.getElementById('book-list');
      this.timeContainer = document.getElementById('time');
      this.navItems = document.querySelectorAll('.nav-item');
      this.sections = document.querySelectorAll('.sections');
      this.navItems.forEach((item, index) => {
        item.addEventListener('click', () => this.handleClick(index));
      });
      setInterval(() => {
        this.timeContainer.innerText = `${new Date().toUTCString()}`;
      }, 1000);
    }
    handleClick(navIndex) {
      this.sections.forEach((section, index) => {
        if (index === navIndex) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    }
  
    saveToLG() {
      localStorage.setItem('books', JSON.stringify(this.books));
    }
    noBookMsg() {
      const p = document.createElement('p');
      p.style.textAlign = 'center';
      p.innerText = 'No book added yet';
      p.style.color = 'red';
      this.bookListContainer.append(p);
    }
  }