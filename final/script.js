let products = [
    {
        "id": 0,
        "title": "식기세척기",
        "brand": "세척나라",
        "photo": "../IMG/pr1.jpg",
        "price": 10000
      },
      {
        "id": 1,
        "title": "원목 침대 프레임",
        "brand": "침대나라",
        "photo": "../IMG/pr2.jpg",
        "price": 20000
      },
      {
        "id": 2,
        "title": "천연 디퓨저 세트",
        "brand": "향기나라",
        "photo": "../IMG/pr3.jpg",
        "price": 30000
      },
      {
        "id": 3,
        "title": "시원한 서큘레이터",
        "brand": "바람나라",
        "photo": "../IMG/pr4.jpg",
        "price": 40000
      }
]
products.forEach(function(item){
    cardSetting(item);
})
function cardSetting(item){
    const cardBox = document.getElementById('card-box');
    let card = `
    <div class="card-list" data-id="${item.id}" draggable="true">
        <img src=${item.photo} class="photo">
        <span class="title">${item.title}</span>
        <span class="brand">${item.brand}</span>
        <span class="price">가격 : ${item.price}</span>
        <button>담기</button>
    </div>
    `
    cardBox.insertAdjacentHTML('beforeend', card);
}

const cardList = document.getElementsByClassName('card-list');
const cardBox = document.getElementById('card-box');
const form = document.getElementsByTagName('form')[0];
const cart = document.getElementById('cart-list');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let productTitle = document.getElementsByClassName('title'),
        input = document.getElementById('search').value;
    
    cardBox.innerHTML = '';
    let newProducts = products.filter(function(item){
        return item.title.includes(input);
    })
    newProducts.forEach(function(item){
        cardSetting(item);
    })
})
let draggingCard = null;
for(let item of cardList) {
    item.addEventListener('dragover', function(e) {
        e.preventDefault();
        draggingCard = this;
        console.log(draggingCard.innerHTML)
    })
}
cart.addEventListener('drop', function(e){
    e.preventDefault();
    let div = document.createElement('div');
    cart.appendChild(div);
    div.appendChild(draggingCard);
    console.log(div);
})
