let modal = document.querySelector('.modal');

const addBookButton = document.querySelector('.add-book');
const closeModalButton= document.querySelector('.close-modal');

addBookButton.addEventListener('click', function(e){
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', function(e){
    modal.style.display = 'none';
});

window.addEventListener('click', function(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
})

