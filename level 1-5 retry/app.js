
function modalEventHandler() {
    let modalBox = document.getElementsByClassName('black-bg')[0];
    modalBox.classList.add('show-modal');
}
function modalCloseEventHandler() {
    let modalBox = document.getElementsByClassName('black-bg')[0];
    modalBox.classList.remove('show-modal');
}
function ulEventHandler() {
    let ul = document.querySelector('ul');
    ul.classList.toggle('show-ul');
}
window.onload = function() {

    let button = document.getElementById('login');
    let modalButton = document.querySelector('.black-bg');
    let ulButton = document.getElementById('show-ul');

    button.addEventListener('click', modalEventHandler);
    modalButton.addEventListener('click', modalCloseEventHandler);
    ulButton.addEventListener('click', ulEventHandler)

}