const openBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const nameInput = document.querySelector('#input');
const surnameInput = document.querySelector('#surnameInput');
const numberInput = document.querySelector('#numberInput');
const emailInput = document.querySelector('#emailInput');
const errorMsg = document.getElementById('errorMsg')

openBtn.addEventListener('click', () => {
    modal.classList.add('show');
})

nameInput.addEventListener('change', validationInput);

function validationInput(e) {
    const len = e.target.value;
    if(len.length <= 2) {
        nameInput.classList.add('error'),
        errorMsg.classList.add('view')
    }
    else {
        nameInput.classList.remove('error')
        errorMsg.classList.remove('view')
        closeBtn.addEventListener('click', () => {
            alert('your request succesfully send')
            modal.classList.remove('show');
        })
    }
}