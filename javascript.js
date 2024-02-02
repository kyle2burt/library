const myLibrary = []
const pageContent = document.querySelector(".content");
const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector(".add-book")
const cancel = document.querySelector("#cancel");
const submit = document.querySelector("#submit");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.readString = function() {
        let readString = "Read";
        if(!this.read) readString = "Not Read Yet";
        
        return readString;
    }
}

function addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBook(book) {
    const bookCard = document.createElement("div");
    const bookImage = document.createElement("img");
    const bookTitle = document.createElement("h3");
    const bookInfo = document.createElement("div");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookRead = document.createElement("button");
    const bookRemove = document.createElement("button");

    bookCard.classList.add("book");
    bookInfo.classList.add("book-info");

    bookImage.src = "icons/book.svg";
    bookImage.setAttribute("style", "width: 150px");

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages + " pg";

    bookRead.textContent = book.readString();
    bookRemove.textContent = "Remove";

    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(bookPages);

    bookCard.appendChild(bookImage);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookInfo);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(bookRemove);

    pageContent.insertBefore(bookCard, addBookButton);

    bookRead.addEventListener("click", () => {
        if (book.read) book.read = false;
        else book.read = true;

        bookRead.textContent = book.readString();
    });

    bookRemove.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        bookCard.remove();
    });
}

function displayAllBooks() {
    myLibrary.forEach((book) => {
        displayBook(book);
    });
}

addBookButton.addEventListener("click", () => {
    dialog.showModal();
});

cancel.addEventListener("click", () => {
    dialog.close();
});

submit.addEventListener("click", (event) => {
    const Title = document.querySelector("#title");
    const Author = document.querySelector("#author");
    const Pages = document.querySelector("#pages");
    const Read = document.querySelector("#read")
    event.preventDefault();
    addBook(Title.value, Author.value, Pages.value, Read.value);
    displayBook(myLibrary[myLibrary.length - 1]);
    dialog.close();
});

addBook("The Hunger Games", "Some Lady", 432, true);
addBook("The Big Fish", "Some Guy", 234, false);
displayAllBooks();