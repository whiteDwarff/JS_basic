const product = [
    {id : 0, price : 70000, title : 'Blossom Dress'},
    {id : 1, price : 50000, title : 'Springfield Shirts'},
    {id : 2, price : 60000, title : 'Black Monastery'},
];
let priceOption = document.getElementById('price-sort'),
    con = document.getElementsByClassName('container')[0];
let btnCount = 1;


// ---------------------------------------------------------------------
product.forEach(function(item) {
    products(item);
});
// ---------------------------------------------------------------------
function products(item) {
    let template = 
        `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600">
            <h5>${item.title}</h5>
            <p>가격 : ${item.price}</p>
        </div>`
    document.getElementsByClassName('container')[0].insertAdjacentHTML('beforeend', template);
}
function selectSort() {
    priceOption.addEventListener('change', function(e) {
        e.preventDefault();
        if(priceOption.value == 1) {
            product.sort((a,b) => {
                return a.price - b.price;
            })
            con.innerHTML = '';
            product.forEach(function(item) {
                products(item);
            });
        } else if(priceOption.value == 2) {
            product.sort((a,b) => {
                return b.price - a.price;
            })
            con.innerHTML = '';
            product.forEach(function(item) {
                products(item);
            });
        } else {
            con.innerHTML = '';
            product.forEach(function(item) {
                products(item);
            });
        }
    });
}
// ---------------------------------------------------------------------
const moreBtn = document.getElementById('more');
moreBtn.addEventListener('click', function() {
    fetch('https://codingapple1.github.io/js/more1.json')
    .then(res => res.json())    // json을 문자로 변환해 줌
    .then(data => {
        if(btnCount == 1)
        data.forEach(function(item) {
            // products(item);
            selectSort();
        });
        btnCount++;
    })
    .catch(error => {
        console.log(error)
    })
    if(btnCount == 2) {
        fetch('https://codingapple1.github.io/js/more2.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(function(item) {
                // products(item);
                selectSort();
            })
            moreBtn.style.display = 'none';
        })
        .catch(error => {
            console.log(error)
        })
    };
});
// ---------------------------------------------------------------------
// 가격순정렬
