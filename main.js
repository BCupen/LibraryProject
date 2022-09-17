let modal = document.querySelector('.modal');

let myLibrary = [];

const form = document.querySelector('form');

//buttons
const addBookButton = document.querySelector('.add-book');
const closeModalButton= document.querySelector('.close-modal');
const submitButton = document.querySelector('.submit-book');
const clearFieldsButton = document.querySelector('.clear-fields');
//const deleteBookButton = document.querySelector('.delete');

//get form fields
const bookTitleField = document.querySelector('#book-title');
const bookAuthorField = document.querySelector('#book-author');
const bookPagesField = document.querySelector('#book-pages');
const bookReadCheckbox = document.querySelector('#book-read-status');

//error message spans
const titleErrMsg = bookTitleField.nextElementSibling;
const authorErrMsg = bookAuthorField.nextElementSibling;
const pagesErrMsg = bookPagesField.nextElementSibling;

//get book container
const bookList = document.querySelector('.booklist');
class Book{
    constructor(book){
        this.title = book.title;
        this.author = book.author;
        this.numPages = book.numPages;
        this.hasRead = book.hasRead;
    }

    toggleHasRead(){
        this.hasRead = !this.hasRead;
    }

    generateHTML(){
        const template = `
            <div class="book" data-index="${myLibrary.indexOf(this)}">
                <span class="b-title">
                    <h3>${this.title}</h3>
                </span>
                <span>
                    Written by
                    <span class="b-author"> ${this.author}</span>
                </span>
                <span>
                    Number of pages: 
                    <span class="b-pages">${this.numPages}</span>
                </span>
                <span>
                    Read?
                    <span class="hasRead" onclick="toggleRead(this)">
                     ${(this.hasRead) ? '✔️' : '❌'}
                    </span>
                </span>
                <span class="delete" onclick="deleteBook(this)">
                    <img src="assets/trash-can-outline.png" alt="del"> 
                </span>
            </div>
        `;

        return template;
    }
}

function toggleRead(e){
    let book = e.parentNode.parentNode;
    const bookIndex = book.getAttribute('data-index');
    myLibrary[bookIndex].toggleHasRead();

    displayBooks();
}

function deleteBook(e){
    const book = e.parentNode;
    const bookIndex = book.getAttribute('data-index');
    myLibrary.splice(bookIndex, 1);
    displayBooks();
}

function addBookToLibrary(){
    let book = {};
    book.title = bookTitleField.value;
    book.author = bookAuthorField.value;
    book.numPages = bookPagesField.value;
    book.hasRead = bookReadCheckbox.checked;

    const newBook = new Book(book);
    myLibrary.push(newBook);

    form.reset();
    titleErrMsg.style.display = 'none';
    authorErrMsg.style.display = 'none';
    pagesErrMsg.style.display = 'none';
}

function clearBookContainer(){
    let currDiv = bookList.firstElementChild;
    while(currDiv.className=='book'){
        currDiv.remove();
        currDiv = bookList.firstElementChild;
    }
}

function displayBooks(){
    clearBookContainer();

    myLibrary.forEach(book =>{
        bookList.insertAdjacentHTML('afterbegin', book.generateHTML());        
    })
}

submitButton.addEventListener('click', function(e){
    //check for empty fields
    if(bookTitleField.value===''){
        titleErrMsg.style.display = 'block';
    }
    if(bookAuthorField.value===''){
        authorErrMsg.style.display = 'block';
    }
    if(bookPagesField.value===''){
        pagesErrMsg.style.display = 'block';
    }

    if(bookTitleField.value!='' && bookAuthorField.value!='' && bookPagesField.value!=''){
        addBookToLibrary();
    }

    modal.style.display = 'none';
    displayBooks();
})

addBookButton.addEventListener('click', function(e){
    modal.style.display = 'block';
});


clearFieldsButton.addEventListener('click', function(e){
    titleErrMsg.style.display = 'none';
    authorErrMsg.style.display = 'none';
    pagesErrMsg.style.display = 'none';
})

closeModalButton.addEventListener('click', function(e){
    modal.style.display = 'none';
});

window.addEventListener('click', function(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
})

