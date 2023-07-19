var modalBtn = document.getElementById('modal-btn')
var modalContainer = document.getElementById('modal-container')
var closeBtn = document.getElementById('close-btn')

//open modal on click
modalBtn.addEventListener('click', openModal);

//close modal on click
closeBtn.addEventListener('click', closeModal);

//close when you click on window as well
window.addEventListener('click', closeModalWindow)

function openModal(){
    modalContainer.style.display = 'block';
}

function closeModal(){
    modalContainer.style.display = 'none';
}

function closeModalWindow(e){
 if(e.target.className.includes('container')){
    modalContainer.style.display = 'none';
 }
}