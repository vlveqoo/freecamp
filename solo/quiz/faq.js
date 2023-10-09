const btn = document.querySelectorAll(".toggleBtn")

btn.forEach(function(btnm){
    btnm.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement //버튼의 부모의부모 = .qBox
        question.classList.toggle('show-text')

        const plma = e.currentTarget //버튼자체
        plma.classList.toggle('show-minus')
        console.log(plma);
    })
})