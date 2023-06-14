"use strict";

const addBook = document.querySelector("#formAdd");
const cancelBook = document.querySelector("#formCancel");
const newBookButton = document.querySelector("#newBook");

let allBooks = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = "Pages: " + pages;
  this.isread = "";
}
Book.prototype.read = function () {
  let checkRead = document.querySelector("#newRead");
  this.isread = checkRead.checked ? "Read" : "Not Read";
};

Book.prototype.changeRead = function () {
  this.read === "Read" ? "Not Read" : "Read";
};

const addBookToLibrary = (title, author, pages) => {
  let newBook = new Book(title, author, pages);
  allBooks.push(newBook);
  showBooks();
};

const showForm = () => {
  const bookForm = document.querySelector(".bookAddForm");
  bookForm.classList.toggle("hide");
};
const hideForm = () => {
  const bookForm = document.querySelector(".bookAddForm");
  bookForm.classList.toggle("hide");
  resetInput();
};

const resetInput = () => {
  let newTitle = document.querySelector("#newTitle");
  newTitle.value = "";
  let newAuthor = document.querySelector("#newAuthor");
  newAuthor.value = "";
  let newPages = document.querySelector("#newPages");
  newPages.value = "";
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
    book.read();
    showRead.innerHTML = book.isread;
    showBook.appendChild(showRead);

    let icon1 = document.createElement("i");
    icon1.classList.add("fa-solid", "fa-pen-to-square");
    showBook.appendChild(icon1);

    let icon2 = document.createElement("i");
    icon2.classList.add("fa-solid", "fa-trash-can");
    showBook.appendChild(icon2);

    showBook.classList.add("testBook");
    shelf.appendChild(showBook);
  });
};

const getInputValues = () => {
  let newTitle = document.querySelector("#newTitle");
  newTitle = newTitle.value;
  let newAuthor = document.querySelector("#newAuthor");
  newAuthor = newAuthor.value;
  let newPages = document.querySelector("#newPages");
  newPages = newPages.value;

  addBookToLibrary(newTitle, newAuthor, newPages);
};

/* addBookToLibrary("Hallo", "Lucas", "12");
 */
newBookButton.addEventListener("click", showForm);
cancelBook.addEventListener("click", hideForm);
addBook.addEventListener("click", getInputValues);
