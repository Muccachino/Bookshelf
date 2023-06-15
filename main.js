"use strict";

const shelf = document.querySelector("#shelf");
const addBook = document.querySelector("#formAdd");
const cancelBook = document.querySelector("#formCancel");
const newBookButton = document.querySelector("#newBookButton");
const deleteEntry = document.querySelector("#deleteEntry");

let allBooks = [];
let library = [];

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

const showForm = () => {
  const bookForm = document.querySelector(".bookAddForm");
  bookForm.classList.toggle("hide");
};
const hideForm = () => {
  const bookForm = document.querySelector(".bookAddForm");
  bookForm.classList.toggle("hide");
  resetInputValues();
};

const getInputValues = () => {
  let newTitle = document.querySelector("#newTitle");
  newTitle = newTitle.value;
  let newAuthor = document.querySelector("#newAuthor");
  newAuthor = newAuthor.value;
  let newPages = document.querySelector("#newPages");
  newPages = newPages.value;
  if (newTitle === "" && newAuthor === "") {
    let message = document.querySelector("#message");
    message.innerHTML = "Please enter a Title or Author!";
  } else {
    addBookToLibrary(newTitle, newAuthor, newPages);
    resetInputValues();
  }
};

const resetInputValues = () => {
  let newTitle = document.querySelector("#newTitle");
  newTitle.value = "";
  let newAuthor = document.querySelector("#newAuthor");
  newAuthor.value = "";
  let newPages = document.querySelector("#newPages");
  newPages.value = "";
  message.innerHTML = "";
};

const addBookToLibrary = (title, author, pages) => {
  let newBook = new Book(title, author, pages);
  allBooks.push(newBook);
  library.push(newBook);
  showBooks();
  allBooks.pop();
};

const showBooks = () => {
  const editEntry = document.querySelector("#editEntry");
  const deleteEntry = document.querySelector("#deleteEntry");
  allBooks.forEach((book) => {
    let showBook = document.createElement("div");

    let showTitle = document.createElement("p");
    showTitle.innerHTML = book.title;
    if (showTitle.innerHTML === "") {
      showTitle.innerHTML = "-";
    }
    showBook.appendChild(showTitle);

    let showAuthor = document.createElement("p");
    showAuthor.innerHTML = book.author;
    if (showAuthor.innerHTML === "") {
      showAuthor.innerHTML = "-";
    }
    showBook.appendChild(showAuthor);

    let showPages = document.createElement("p");
    showPages.innerHTML = book.pages;
    showBook.appendChild(showPages);

    let showRead = document.createElement("p");
    book.read();
    showRead.innerHTML = book.isread;
    showBook.appendChild(showRead);

    let button1 = document.createElement("button");
    button1.classList.add("editEntry");
    let icon1 = document.createElement("i");
    icon1.classList.add("fa-solid", "fa-book-open-reader");
    button1.appendChild(icon1);
    showBook.appendChild(button1);

    let button2 = document.createElement("button");
    button2.classList.add("deleteEntry");
    let icon2 = document.createElement("i");
    icon2.classList.add("fa-solid", "fa-trash-can");
    button2.appendChild(icon2);
    showBook.appendChild(button2);

    showBook.classList.add("newBook");
    shelf.appendChild(showBook);
  });
};

const removeEntry = (rootElement) => {
  rootElement.addEventListener(
    "click",
    (e) => {
      let targetElement = e.target;
      while (targetElement != null) {
        if (targetElement.matches(".deleteEntry")) {
          targetElement.parentElement.remove();
        }
        targetElement = targetElement.parentElement;
      }
    },
    true
  );
};

const readEntry = (rootElement) => {
  rootElement.addEventListener(
    "click",
    (e) => {
      let targetElement = e.target;
      while (targetElement != null) {
        if (targetElement.matches(".editEntry")) {
          if (targetElement.previousElementSibling.innerHTML === "Read") {
            targetElement.previousElementSibling.innerHTML = "Not Read";
          } else {
            targetElement.previousElementSibling.innerHTML = "Read";
          }
        }
        targetElement = targetElement.parentElement;
      }
    },
    true
  );
};

removeEntry(shelf, "click");
readEntry(shelf, "click");
newBookButton.addEventListener("click", showForm);
cancelBook.addEventListener("click", hideForm);
addBook.addEventListener("click", getInputValues);
