let no1 = document.querySelector("#no1")
let no2 = document.querySelector("#no2")
let no3 = document.querySelector("#no3")
let no4 = document.querySelector("#no4")
let no5 = document.querySelector("#no5")
let no6 = document.querySelector("#no6")

const makeNumber = function () {
    let lottoArr = [];
    for(i = 0; i < 6; i++){
        randomNum = Math.floor(Math.random()*45)+1;
        if(lottoArr.indexOf(randomNum) === -1){ //새로 생성된 randomNum이 lottoArr의 구성요소가 아니면
            lottoArr.push(randomNum) // lottoArr에 추가
        } else {
            i-- //아니면 다시 생성
        }
    }
    lottoArr.sort((a, b) => a - b);


    console.log(lottoArr);

    no1.textContent = lottoArr[0];
    no2.textContent = lottoArr[1];
    no3.textContent = lottoArr[2];
    no4.textContent = lottoArr[3];
    no5.textContent = lottoArr[4];
    no6.textContent = lottoArr[5];
}



//no1.textContent = lottoArr[1]
