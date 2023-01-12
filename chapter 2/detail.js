
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



/*
for(let i=0; i<targetLink.length; i++) {
    targetLink[i].addEventListener('click',function(e){
        e.preventDefault();
        // let orgTarget = targetLink[i].getAttribute('href');
        let orgTarget = e.target.getAttribute('href');
        let tabTarget = orgTarget.replace('#', '');
        
        // 클릭한 content 이외에 다른 content를 화면에서 지움
        for(let item of tabContent) {
            item.style.display = 'none';
        }
        // a 태그를 클릭하면 background / color 변경하는 class를 탈부착
        for(let item of targetLink)  {
            // targetLink[i].classList.add('active');
            item.classList.remove('active');
            e.target.classList.add('active');
        }
        document.getElementById(tabTarget).style.display = 'block';
    });
}

*/

