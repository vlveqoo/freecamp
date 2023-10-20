const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content')

about.addEventListener('click', function(e){
    console.log(e.currentTarget); // .about
    console.log(e.target); // .tab-btn
    
    const id = e.target.dataset.id; // 버튼에 dataset 설정해주기
    if(id){
        // remove active from other buttons
        btns.forEach(function(btn){
            btn.classList.remove('active')
            e.target.classList.add('active');
        });
        
        // hide other articles
        articles.forEach(function(article){
            article.classList.remove('active')
        })
        
        const element = document.getElementById(id)
        element.classList.add('active');
    }
    
})

