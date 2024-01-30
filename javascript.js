const myLibrary = []
const pageContent = document.querySelector(".content");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let readString = "read";
        if(!read) readString = "not read yet";
        
        return `${title} by ${author}, ${pages} pages, ${readString}`;
    }
}

function addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBook("The Hunger Games", "Some Lady", 432, true);
addBook("The Big Fish", "Some Guy", 234, false);

function displayAllBooks() {
    myLibrary.forEach((book) => {
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

        bookRead.textContent = "Read";
        bookRemove.textContent = "Remove";

        bookInfo.appendChild(bookAuthor);
        bookInfo.appendChild(bookPages);

        bookCard.appendChild(bookImage);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookInfo);
        bookCard.appendChild(bookRead);
        bookCard.appendChild(bookRemove);
        
        pageContent.appendChild(bookCard);
    });
}

displayAllBooks();