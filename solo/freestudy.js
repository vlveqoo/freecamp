const makeNum = document.querySelector('#makenum');

let no1Num = document.getElementById('no1')
let no2Num = document.getElementById('no2')
let no3Num = document.getElementById('no3')
let no4Num = document.getElementById('no4')
let no5Num = document.getElementById('no5')
let no6Num = document.getElementById('no6')  


makeNum.addEventListener('click',() => {
    let lottoNumArr = [];
    for(i = 0; i < 6; i++){
        let newNum = Math.floor(Math.random()*46+1);
        if(!lottoNumArr.includes(newNum)){
            lottoNumArr.push(newNum)
        } else {
            i--
        }

        lottoNumArr.sort((a, b) => a - b)

        no1Num.textContent = lottoNumArr[0]
        no2Num.textContent = lottoNumArr[1]
        no3Num.textContent = lottoNumArr[2]
        no4Num.textContent = lottoNumArr[3]
        no5Num.textContent = lottoNumArr[4]
        no6Num.textContent = lottoNumArr[5]  
        
       changeColor(no1Num)
       changeColor(no2Num)
       changeColor(no3Num)
       changeColor(no4Num)
       changeColor(no5Num)
       changeColor(no6Num)
    }
})

const changeColor = function(n){
    if(Number(n.textContent)<10){
        n.style.borderColor = 'gold';
    } else if(Number(n.textContent)<20){
        n.style.borderColor = 'blue';
    } else if(Number(n.textContent)<30){
        n.style.borderColor = 'red';
    } else if(Number(n.textContent)<40){
        n.style.borderColor = 'black';
    } else {
        n.style.borderColor = 'green';
    }
}