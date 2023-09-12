const btn = document.querySelectorAll(".toggleBtn")

btn.forEach(function(btnm){
    btnm.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text')

        const plma = e.currentTarget
        plma.classList.toggle('show-minus')
        console.log(plma);
    })
})