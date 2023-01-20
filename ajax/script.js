const product = [
    {id : 1, price : 50000, title : 'Springfield Shirts'},
    {id : 0, price : 70000, title : 'Blossom Dress'},
    {id : 2, price : 60000, title : 'Black Monastery'},
];
let priceOption = document.getElementById('price-sort'),
    con = document.getElementsByClassName('container')[0];
let btnCount = 1;
priceOption.addEventListener('change', selectSort);

// ---------------------------------------------------------------------
function showProduct() {
    product.forEach(function(item) {
        products(item);
    });
}
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
    btnCount = 1;
    if(btnCount <= 2) moreBtn.style.display = 'block';

    let form = document.querySelector('#search');
    let newProduct = product;
    if(this.value == 1) {
        form.classList.remove('block');
        newProduct.sort((a,b) => {
            return a.price - b.price;
        })
        con.innerHTML = '';
        newProduct.forEach(function(item) {
            products(item);
        });
    } else if(this.value == 2) {
        form.classList.remove('block');
        newProduct.sort((a,b) => {
            return b.price - a.price;
        })
        con.innerHTML = '';
        newProduct.forEach(function(item) {
            products(item);
        });
    } else if(this.value == 3) {
        form.classList.add('block');
        let sbmBtn = document.querySelector('#search button');
        let priceValue = document.querySelector('#price-search');
        priceValue.value = '';
        sbmBtn.addEventListener('click', function(e){
            newProduct = product.filter(function(a){
                return a.price <= parseInt(priceValue.value);
            })
            e.preventDefault();
            con.innerHTML = '';
            newProduct.forEach(function(item){
                products(item);
            })
        })
    } else if(this.value == 0){
        form.classList.remove('block');
        con.innerHTML = '';
        showProduct();
    }
}
showProduct();
// ---------------------------------------------------------------------
const moreBtn = document.getElementById('more');
moreBtn.addEventListener('click', function() {
    fetch('https://codingapple1.github.io/js/more1.json')
    .then(res => res.json())    // json을 문자로 변환해 줌
    .then(data => {
        if(btnCount == 1){
            data.forEach(function(item) {
                products(item);
            });
            btnCount++;
        } 
    })
    .catch(error => {
        console.log(error)
    })
    if(btnCount == 2) {
        moreBtn.style.display = 'none';
        fetch('https://codingapple1.github.io/js/more2.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(function(item) {
                products(item);
            })
        })
        .catch(error => {
            console.log(error)
        })
    };
});
// ---------------------------------------------------------------------