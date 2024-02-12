class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.readString = this.#getReadString();
    }

    #getReadString() {
        let readString = "Read";
        if (!this.read) readString = "Not Read Yet";

        return readString;
    }
}

class Library {
    constructor(bookList) {
        this.#books = bookList || [];
        this.#displayAllBooks();
    }

    #books;

    addBook(title, author, pages, read) {
        this.newBook = new Book(title, author, pages, read);
        this.#books.push(this.newBook);
        this.#displayBook(this.#books[this.#books.length - 1])
    }

    #displayBook(book) {
        const pageContent = document.querySelector(".content");
        const addBookButton = document.querySelector(".add-book")
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

        bookRead.textContent = book.readString;
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

            bookRead.textContent = book.getReadString();
        });

        bookRemove.addEventListener("click", () => {
            books.splice(books.indexOf(book), 1);
            bookCard.remove();
        });
    }

    #displayAllBooks() {
        this.#books.forEach((book) => {
            this.#displayBook(book);
        });
    }
}

class Modal {
    constructor() {
        Modal.#addBookButton();
        Modal.#cancelButton();
        Modal.#submitButton();
    }

    static #dialog = document.querySelector("dialog");

    static #addBookButton() {
        const addBookButton = document.querySelector(".add-book")
        addBookButton.addEventListener("click", () => {
            Modal.#dialog.showModal();
        });
    }

    static #cancelButton() {
        const cancel = document.querySelector("#cancel");
        cancel.addEventListener("click", () => {
            Modal.#dialog.close();
        });
    }

    static #submitButton() {
        const submit = document.querySelector("#submit");
        submit.addEventListener("click", (event) => {
            const Title = document.querySelector("#title");
            const Author = document.querySelector("#author");
            const Pages = document.querySelector("#pages");
            const Read = document.querySelector("#read")
            event.preventDefault();
            myLibrary.addBook(Title.value, Author.value, Pages.value, Read.value);
            Modal.#dialog.close();
        });
    }
}

let bookList = [
    new Book("The Hunger Games", "Some Lady", 432, true),
    new Book("The Big Fish", "Some Guy", 234, false)
];

let myLibrary = new Library(bookList);
let myModal = new Modal();

myLibrary.addBook("Another Book", "Another Author", 42, true);
