const myLibrary = [];
const webpage = document.querySelector('body');

webpage.addEventListener('click', (event) => {
    const modal = document.querySelector('dialog');
    switch(event.target.id) {
        case ('open-modal'):
            modal.showModal();
            break;

        case ('close-modal'):
            modal.close();
            break;

        case ('submit'):
            event.preventDefault();
            newBook();
            modal.close();
            break;
    }
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

    this.info = function() {
        return `${this.title} by ${this.author}, ${pages} pages, ${read}`;
    }

    this.readText = function() {
        if (read) return 'Read';
        else return 'Not read';
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function drawBooks() {
    clearBooks();
    
    const pageLibrary = document.querySelector('.library');
    myLibrary.forEach((book) => {
        const title = document.createElement('h4');
        title.classList.add('title');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = book.author;

        const pages = document.createElement('p');
        pages.classList.add('pages');
        pages.textContent = book.pages;

        const read = document.createElement('p');
        read.classList.add('read');
        read.textContent = book.readText();

        const bookElem = document.createElement('div');
        bookElem.classList.add('book');
        bookElem.appendChild(title);
        bookElem.appendChild(author);
        bookElem.appendChild(pages);
        bookElem.appendChild(read);

        pageLibrary.appendChild(bookElem);
    });
}

function clearBooks() {
    const pageLibrary = document.querySelector('.library');
    while (pageLibrary.lastElementChild) {
        pageLibrary.removeChild(pageLibrary.lastElementChild);
    }
}

function newBook() {
    const form = document.querySelector('#new-book');
    const formData = new FormData(form);
    addBookToLibrary(formData.get('title'), formData.get('author'), formData.get('pages'), formData.has('read'));
    drawBooks();
}


addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
drawBooks();
console.log(myLibrary);

