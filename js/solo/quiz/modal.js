const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalContainer = document.querySelector('.modal-container');


modalBtn.addEventListener('click', function( ){
    modalContainer.classList.toggle('show-modal')
})

closeBtn.addEventListener('click', function( ){
    modalContainer.classList.remove('show-modal');
})