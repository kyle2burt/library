const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

    this.info = function () {
        if (read) return `${this.title} by ${this.author}, ${pages} pages, read`;
        else return `${this.title} by ${this.author}, ${pages} pages, not read yet`;
    }
}