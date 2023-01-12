
let targetLink = document.querySelectorAll('.tab-menu a');
let orgTarget = '#tabs-1',
    tabContent = document.querySelectorAll('#tab-content > div');
    
    
    document.getElementById('tabs-1').style.display = 'block';
    
    function tabEvent(e) {
        let orgTarget = e.target.getAttribute('href');
        let tabTarget = orgTarget.replace('#', '');
    
        for(let item of tabContent) item.style.display = 'none';
        for(let item of targetLink) item.classList.remove('active');
        
        e.target.classList.add('active');
        document.getElementById(tabTarget).style.display = 'block';
    };
    
    for(let item of targetLink) item.addEventListener('click', tabEvent);

// ------------------------------------------------------------------------
// array 
let car = ['소나타', 50000,'white'];
console.log(car[0])

car[0] = '아반떼';
console.log(car[0])

// object
let car2 = {
    name : '소나타',    // key
    price : [50000, 3000, 4000]     // value
};
console.log(car2['name'])

document.querySelector('.card span:first-child').innerText = car2.name;
document.querySelector('.card span:last-child').innerText = car2.price[11];

// ------------------------------------------------------------------------
