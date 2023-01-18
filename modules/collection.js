// collection.js
export default class AwesomeBooksColletions {
  constructor() {
    this.bookListContainer = document.getElementById('book-list');
    this.sections = document.querySelectorAll('.sections');
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

  noBookMsg() {
    const p = document.createElement('p');
    p.style.textAlign = 'center';
    p.innerText = 'No book added yet';
    p.style.color = 'red';
    this.bookListContainer.append(p);
  }
}