## Bookshelf

This is a virtual bookshelf, so you can keep track on your books and whether you read them or not.
You can add new book entries with the "New Book +" button.
There you can enter the title, author, number of pages, and check the box, if you already read it.
Existing entries can be deleted with the "trash can" icon and you can change the "Not Read" status by clicking the "open book" icon.

```
function Book()
```

Universal constructor for every new book entry.

```
showForm()
hideForm()
```

Functions that show or hide the "New Book" form by adding or removing the "hide" class for th form.

```
getInputValues()
```

Reads out the input values from the "New Book" form and uses them as parameters for the new entry.

```
checkInputValues();
```

Checks if all input values have been added and otherwise sends a message, which input needs to be added.

```
resetInputValues()
```

Deletes the input values from the form after adding a new book or after closing the form with the "Cancel" button.

```
addBookToLibrary()
```

Uses the values from the getInputValues function to create the new book entry with the constructor.
After that it pushes the new book into an array to be used in the showBooks function.

```
showBooks();
```

The visual entry is made here for every new book, by creating HTML elements for every input value and also adding the delete button and the "Read/Not Read" button.

```
removeEntry()
readEntry()
```

These are the functions for the icons in every book entry, so you can either delete them or change the read status.

```
updatePrototype()
updateLibrary()
```

Functions to show book entries saved in local storage after a page reload.
