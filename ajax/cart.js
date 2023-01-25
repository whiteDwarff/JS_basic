
// -----------------------------------------------------------------
const CART = document.getElementsByClassName('buy');
for(let item of CART) item.addEventListener('click',cartOption);

function cartOption() {
    // 현재 노드의 이전 노드를 반환하며 이전 노드가 존재하지 않으면 null을 반환
    // 이전 노드의 이전 노드를 찾으려면 같은 작업을 반복 수행
    let title = this.previousElementSibling.previousElementSibling.innerHTML,
        price = this.previousElementSibling.innerHTML,
        count = 0,
        product = `title : ${title}, price : ${price}, count : ${count}`;
    
    if(localStorage.length) {
        let item = JSON.parse(localStorage.cart);
        item.push(product);
        localStorage.setItem('cart', JSON.stringify(item));
    } else {
        localStorage.setItem('cart', JSON.stringify([product]));
    }
}
// -----------------------------------------------------------------
let cartList = JSON.parse(localStorage.getItem('cart'));
let cartBox = document.getElementById('cart-list');
cartList.forEach((item) => {
    let template = `<li>${item}</li>`;
    cartBox.insertAdjacentHTML('beforeend', template);
    console.log(template);
})


/*
localStorage = key, value 형식으로 페이지 내에 저장

5MB의 문자열만 저장가능 !!!!!

localStorage.setItem('이름', 'kang'); // key : 이름, value : 'kang' 저장
localStorage.getItem('이름');         // value 호출
localStorage.removeItem('이름');      // 삭제

localStorage.setItem('num', [1,2,3]); // 강제로 문자로 변환함 (array, object 안됨)

let arr = [1,2,3];
let newArr = JSON.stringify(arr);    //  array 및 object를 JSON으로 변환
localStorage.setItem('num', newArr); // 강제로 문자로 변환함 (배열, object 안됨)

let item = localStorage.getItem('num');
console.log(item);
console.log(JSON.parse(item));      // array 및 object로 변환 (indexing 가능)


localStorage 수정 : 
    1. 자료 꺼내기 (getItem)
    2  꺼낸 자료 수정 
    3. localStorage에 다시 넣기 (setItem)

*/ 