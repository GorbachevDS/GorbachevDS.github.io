const firstForm = document.getElementById('form-block__inputs');
const inputButton = document.getElementById('form-block__button');
const backButton = document. getElementById('back-button');
const confirmBlock = document. getElementById('confirm-block');


inputButton.addEventListener('click', onInputButtonClick);
backButton.addEventListener('click', onBackButtonClick);


function onInputButtonClick(){
    firstForm.style.display = 'none';
    confirmBlock.style.display = 'flex';
}

function onBackButtonClick () {
    firstForm.style.display = 'flex';
    confirmBlock.style.display = 'none';
}
