let modal = document.querySelector('.modal');

let myLibrary = [];

const form = document.querySelector('form');

//buttons
const addBookButton = document.querySelector('.add-book');
const closeModalButton= document.querySelector('.close-modal');
const submitButton = document.querySelector('.submit-book');
const clearFieldsButton = document.querySelector('.clear-fields');

//get form fields
const bookTitleField = document.querySelector('#book-title');
const bookAuthorField = document.querySelector('#book-author');
const bookPagesField = document.querySelector('#book-pages');
const bookReadCheckbox = document.querySelector('#book-read-status');

//error message spans
const titleErrMsg = bookTitleField.nextElementSibling;
const authorErrMsg = bookAuthorField.nextElementSibling;
const pagesErrMsg = bookPagesField.nextElementSibling;

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

}

function addBookToLibrary(){
    let book = {};
    book.title = bookTitleField.value;
    book.author = bookAuthorField.value;
    book.numPages = bookPagesField.value;
    book.hasRead = bookReadCheckbox.checked;

    const newBook = new Book(book);
    myLibrary.push(newBook);
    console.log(myLibrary);

    form.reset();
    titleErrMsg.style.display = 'none';
    authorErrMsg.style.display = 'none';
    pagesErrMsg.style.display = 'none';
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

