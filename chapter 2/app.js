let slides = document.querySelector('.slides'),
    slide  = document.querySelectorAll('.slides li'),
    currentIdx = 0, 
    slideCount = slide.length,
    slideWidth = 1200,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    count = 0;

function modalEventHandler() {
    let modalBox = document.getElementsByClassName('black-bg')[0];
    modalBox.classList.add('show-modal');
}
function modalCloseEventHandler() {
    let modalBox = document.getElementsByClassName('black-bg')[0];
    modalBox.classList.remove('show-modal');
}
function inputSubmitEventHandler(ev) {
    
    let email = document.getElementById('email').value;
    let pw = document.getElementById('pw').value;
    let submitData = document.getElementById('submitData');

    let idReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    let pwReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/;

    if(email == '') {
        ev.preventDefault();
        submitData.innerText = '이메일을 입력해 주세요.'
    } else if(idReg.test(email) == false){
        ev.preventDefault();
        submitData.innerText = '올바른 이메일 형식을 입력해 주세요.'
    } else if(pw == ''){
        ev.preventDefault();
        submitData.innerText = '비밀번호를 입력해 주세요.'
    } else if(pwReg.test(pw) == false) {
        ev.preventDefault();
        submitData.innerText = '올바른 비밀번호 형식을 입력해 주세요.'
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
////////////////////////////////////////////////////////////////// chapter 2
function eventBox() {
    
    let timeCount = 5;
    let eventBox = document.getElementById('time-event-box');
    
    let timeEvent = setInterval(function(){
        if(timeCount > 0) {
            timeCount-=1;   
            eventBox.innerText = `${timeCount}초 이내 구매시 사은품 증정`;
        } else {
            eventBox.style.display = 'none';
            clearInterval(timeEvent);
        }
    }, 1000);
}
////////////////////////////////////////////////////////////////// slide
function makeClone() {
    for(let i = 0; i < slideCount; i++) {
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    }
    for(let i = slideCount-1; i >= 0; i--) {
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPos();
    setTimeout(function(){
        slides.classList.add('animated');
    }, 100);
}
function updateWidth() {    // 슬라이드의 가로 값 구하기
    let currentSlides = document.querySelectorAll('.slides li');
    let newSlideCount = currentSlides.length;
    let newWidth = slideWidth * newSlideCount + 'px';

    slides.style.width = newWidth;
}
function setInitialPos() {  // 슬라이드의 처음 포지션(위치) 값
    let value = `-${slideWidth * slideCount}`;
    slides.style.transform = `translateX(${value}px)`;
}
function moveSlide(num) {
    // left : position:left의 값
    slides.style.left = -num * slideWidth + 'px';
    currentIdx = num;
    console.log(currentIdx, slideCount);

    if(currentIdx == slideCount || currentIdx == -slideCount) {
        setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIdx = 0;
        }, 500);
        setTimeout(function(){
            slides.classList.add('animated');
        }, 600);
    }
}
//////////////////////////////////////////////////////////////////scroll
function navScrollEvent() {
    let h1 = document.querySelector('nav');
    if(this.scrollY > 100) { // == window.pageYOffset
        h1.style.fontSize = '16px';
        h1.style.transition = "0.5s ease-out";
    } else {
        h1.style.fontSize = '30px';
    }
    // console.log(this.scrollY);
}
function loremScrollEvent() {
    let scroll = this.scrollTop
    let scrollHeight = this.scrollHeight;
    let clientHeight = this.clientHeight; // 화면에 보이는 div의 실제 높이

    console.log(scroll + '/' + scrollHeight  + '/' + clientHeight);
    // scrollTop = scroll을 내린 값, 객체의 모든 scroll 높이가 아님 !!

    // div의 스크롧 바 : 내린양 + 눈에 보이는 div의 높이 == div의 실제 높이

    if(scroll + clientHeight > scrollHeight - 3) {
        alert('동의하십니까?');
        // 최초 한번만 실행 후 event제거
        this.removeEventListener('scroll', loremScrollEvent);
    }
}
let htmlScrollEvent = () => {
    let scroll = this.scrollY
    let scrollHeight = this.scrollHeight;
    let clientHeight = this.clientHeight

    if(scrollY > 0) alert('ada');
    // console.log(scroll + scrollHeight + clientHeight);
    console.log(scroll, scrollHeight, clientHeight);

}

//////////////////////////////////////////////////////////////////script playing

    let button = document.getElementById('login');
    let modalButton = document.querySelector('#close');
    let submitBtn = document.getElementsByClassName('btn-primary')[0];
    let darkModeBtn = document.querySelector('nav span:last-child');
    
    
    button.addEventListener('click', modalEventHandler);
    modalButton.addEventListener('click', modalCloseEventHandler);
    submitBtn.addEventListener('click', inputSubmitEventHandler);
    darkModeBtn.addEventListener('click', darkModeEventHandler);
    
    eventBox();
    
    
    nextBtn.addEventListener('click', function(){
        moveSlide(currentIdx + 1);
    });
    prevBtn.addEventListener('click', function(){
        moveSlide(currentIdx - 1);
    });
    makeClone();
    
    window.addEventListener('scroll', navScrollEvent)
    
    document.querySelector('#member').addEventListener('scroll', loremScrollEvent);
    
    window.addEventListener('scroll', function() {

        let scrollEvent = document.querySelector('.scroll-guide'),
        scroll = this.scrollY,
        width = 10,
        eventWidth = parseInt(scroll / width);

        console.log('scrollY : ' + scroll);

    
        if(scroll > 0 ) {
            scrollEvent.style.width = eventWidth + '%';
        } else if (scroll < 30)
        scrollEvent.style.width = 0 + '%';
    })
    
 //////////////////////////////////////////////////////////////////

// }

/*
    정규식

    /[a-z]/     : 모든 소문자
    /[A-Z]/     : 모든 대문자
    /[a-zA-Z]   : 모든 영어
    /[ㄱ-ㅎ가-힣] : 모든 한글 
    /[0~9]/     : 모든 숫자
    /\S/        : 모든 문자
    /^a/        : a로 시작하냐~
    /a$/        : a로 끝나냐~
    /a|b/       : a또는 b가 있냐~        ~~ 중 하나 

    email 형식   : /\S+@\S+\.\S+/.test('aaaa@bbbb.com')

           .test(정규식);



*/ 