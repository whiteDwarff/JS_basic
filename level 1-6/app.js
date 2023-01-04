let count = 0;


function modalEventHandler() {
    let modalBox = document.getElementsByClassName('black-bg')[0];
    modalBox.classList.add('show-modal');
}
function modalCloseEventHandler() {
    let modalBox = document.getElementsByClassName('black-bg')[0];
    modalBox.classList.remove('show-modal');
}
function inputSubmitEventHandler(ev) {
    let idInput = document.getElementById('email');
    let pwInput = document.getElementById('password');
    let submitData = document.getElementById('submitData');

    if(idInput.value == '') {
        submitData.innerText = '이메일을 입력하세요.';
        ev.preventDefault();
    } else if (pwInput.value == '') {
        submitData.innerText = '비밀번호를 입력하세요.';
        ev.preventDefault();
    } else if (pwInput.value.length < 6 || pwInput.value.length > 20) {
        submitData.innerText = '비밀번호는 6글자 이상 20자리 이하로 입력해주세요.';
        ev.preventDefault();
    }
}


function darkModeEventHandler() {
    let body = document.getElementsByTagName('body')[0];
    if(count == 0){
        body.classList.add('dark-mode');
        this.innerText = 'Light 🔄';
        count++;
    } else {
        body.classList.remove('dark-mode');
        this.innerText = 'Dark 🔄';
        count--;
    }
    // body.classList.toggle('dark-mode');
}
//////////////////////////////////////////////////////////////////

window.onload = function() {


    let button = document.getElementById('login');
    let modalButton = document.querySelector('#close');
    let submitBtn = document.getElementsByClassName('btn-primary')[0];
    let darkModeBtn = document.querySelector('nav span:last-child');

    button.addEventListener('click', modalEventHandler);
    modalButton.addEventListener('click', modalCloseEventHandler);
    submitBtn.addEventListener('click', inputSubmitEventHandler);
    darkModeBtn.addEventListener('click', darkModeEventHandler);



    //////////////////////////////////////////////////////////////////
    /*
        input event  : 사용자가 input에 값을 입력할 때 마다 실행
        change event : 사용자가 input에서 focus를 벗어날 때 실행 
    */
    // let pwInput = document.getElementById('password');
    // pwInput.addEventListener('input', function());
}