const myLibrary = []

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
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
}

addBook("The Hunger Games", "Some Lady", 432, true)
addBook("The Big Fish", "Some Guy", 234, false)

function displayAllBooks() {
    myLibrary.forEach((book) => {
        console.log(book.title);
    });
}