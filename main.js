"use strict";

const addBook = document.querySelector("#formAdd");
const cancelBook = document.querySelector("#formCancel");
const newBookButton = document.querySelector("#newBook");
const newTitle = document.querySelector("#newTitle");
const newAuthor = document.querySelector("#newAuthor");
const newPages = document.querySelector("#newPages");

let allBooks = [];

function Book(title, author, pages) {
  (this.title = title),
    (this.author = author),
    (this.pages = "Pages: " + pages);
}
Book.prototype.read = function () {
  const checkRead = document.querySelector("#newRead");
  checkRead ? "Read" : "Not Read";
};
Book.prototype.changeRead = function () {
  this.read === "Read" ? "Not Read" : "Read";
};

const addBookToLibrary = (title, author, pages) => {
  let newBook = new Book(title, author, pages);
  allBooks.push(newBook);
  showBooks();
};

const showHideForm = () => {
  const bookForm = document.querySelector(".bookAddForm");
  bookForm.classList.toggle("hide");
};

const showBooks = () => {
  const shelf = document.querySelector("#shelf");
  const editEntry = document.querySelector("#editEntry");
  const deleteEntry = document.querySelector("#deleteEntry");
  allBooks.forEach((book) => {
    let showBook = document.createElement("div");
    let showTitle = document.createElement("p");
    showTitle.innerHTML = book.title;
    showBook.appendChild(showTitle);

    let showAuthor = document.createElement("p");
    showAuthor.innerHTML = book.author;
    showBook.appendChild(showAuthor);

    let showPages = document.createElement("p");
    showPages.innerHTML = book.pages;
    showBook.appendChild(showPages);

    let showRead = document.createElement("p");
    showRead.innerHTML = book.read();
    showBook.appendChild(showRead);

    showBook.classList.add("testBook");
    shelf.appendChild(showBook);
  });
};

/* addBookToLibrary("Hallo", "Lucas", "12");
 */
newBookButton.addEventListener("click", showHideForm);
cancelBook.addEventListener("click", showHideForm);
addBook.addEventListener("click", addBookToLibrary);
