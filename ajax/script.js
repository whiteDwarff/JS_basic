let product = [
    {id : 0, price : 70000, title : 'Blossom Dress'},
    {id : 1, price : 50000, title : 'Springfield Shirts'},
    {id : 2, price : 60000, title : 'Black Monastery'},
];

const con = document.getElementsByClassName('container')[0];

con.style.display = 'flex';
let pdImg = `<img src="https://via.placeholder.com/600"</img>`,
    title = `<h5>title</h5>`,
    price = `<p>price</p>`;


for(let i=0; i<product.length; i++) {
    let row = document.createElement('div');

    con.appendChild(row);
    row.classList.add('col-sm-4');
    row.insertAdjacentHTML('beforeend', pdImg);
    row.insertAdjacentHTML('beforeend', title);
    row.insertAdjacentHTML('beforeend', price);

    let titles = document.querySelectorAll('.col-sm-4 > h5');
    let prices =  document.querySelectorAll('.col-sm-4 > p');
    
    titles[i].innerText = product[i].title;
    prices[i].innerText = product[i].price;
    row.style.marginRight = '30px';


}
let lastRow = document.querySelector('.col-sm-4:last-child');
lastRow.style.marginRight = '0px';

/*

let pdTitle = document.querySelectorAll('h5');
let pdPrice = document.querySelectorAll('p');

for(let i=0; i<product.length; i++) {
    pdTitle[i].innerText = product[i].title;
    pdPrice[i].innerText = '가격 : ' + product[i].price;
}

function formEvent() {
    let shirtOption = document.querySelector('.shirt-option'),
        option = document.querySelectorAll('.shirt-option option'),
        itemOption;
    
    if(this.value == 2) {
        shirtOption.classList.add('active');
        shirtOption.innerHTML = '';
        let shirts = [95, 100, 105, 110, 115];

        shirts.forEach(function(item) {
            itemOption = `<option value="i">${item}</value>`;
            shirtOption.insertAdjacentHTML('beforeend', itemOption);
        });
    } else if(this.value == 3) {
        shirtOption.classList.add('active');
        shirtOption.innerHTML = '';
        let pants = [28, 30, 32, 34];

        pants.forEach(function(item, i) {
            itemOption = `<option value="i">${item}</option>`;
            shirtOption.insertAdjacentHTML('beforeend', itemOption);
            console.log(item, i);
        });
    } else {
        shirtOption.classList.remove('active');
    }
}
let select = document.querySelector('.select-option');
select.addEventListener('change', formEvent);

// ----------------------------------------- HTML 요소 생성
let test = document.createElement('button');
test.innerText = '장바구니';
document.getElementById('test').appendChild(test);

let template = '<button>구매하기</button>';
// 문자형 HTML을 넣어주는 함수('위치', 요소)
document.getElementById('test').insertAdjacentHTML('beforeend', template);
*/