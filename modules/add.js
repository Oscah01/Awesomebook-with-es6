import AwesomeBooksColletions from "./collection.js";
import { displayBooks } from "./display.js";
import Removal from "./remove.js";
const remove = new Removal(); 
const collection = new AwesomeBooksColletions();
export default class Addition {
  add(book) {
   if(collection.books.length === 0) {
   window.location.reload();
   }
    collection.books = [book, ...collection.books];
    collection.saveToLG();
   //displayBooks()
   console.log(book)
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
   console.log(li)
   btn.addEventListener('click', () => {
     // Remove book from the list
     remove.removeBookFromTheDom(btn, book.id);

   });
  }

}
