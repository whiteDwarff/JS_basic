let slides = document.querySelector('.slides'), // ul
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0, //  슬라이드의 값
    slideCount = slide.length
    slideWidth = 200,
    slideMargin = 30,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

// --------------------------------------------------------------------

function makeClone() {  // node 복사
    for(let i = 0; i <slideCount; i++) {
        // a.cloneNode()     -> 노드 전체를 복사
        // a.cloneNode(true) -> 자식요소까지 모두 복사
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide); // 요소의 뒤에 추가
    }
    for(let i = slideCount -1; i >= 0; i--) {
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        // a.prepend(b);
        slides.prepend(cloneSlide); // 요소의 앞에 추가
    }
    updateWidth();
    setInitialPos();
    setTimeout(function(){
        slides.classList.add('animated');
    },100);
}
function updateWidth() { // ul의 너비를 지정
    let currentSlides = document.querySelectorAll('.slides li');
    let newSlideCount = currentSlides.length;
    let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
    
    slides.style.width = newWidth;
}
function setInitialPos() { // ul의 위치를 조정
    let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
    slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
}
function moveSlide(num) { // 숫자를 넘겨줘야한다 !! 앞으로 넘어가는 버튼
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
    console.log(currentIdx, slideCount);
    
    if(currentIdx == slideCount || currentIdx == -slideCount) {
        setTimeout(function() {
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIdx = 0;
        }, 500); // animated의 transition시간
        setTimeout(function() {
            slides.classList.add('animated');
        }, 600)
    }
}

// --------------------------------------------------------------------

nextBtn.addEventListener('click', function(){
    moveSlide(currentIdx + 1);
});
prevBtn.addEventListener('click', function(){
moveSlide(currentIdx - 1);
});
makeClone();
