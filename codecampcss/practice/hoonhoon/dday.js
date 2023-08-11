

const dateFormMaker = function () {
    const inputYear = document.querySelector('#targetYearInput').value;
    const inputMonth = document.querySelector('#targetMonthInput').value;
    const inputDate = document.querySelector('#targetDateInput').value;

    const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

    return dateFormat;
};

const counterMaker = function () {
    const targetDateInput = dateFormMaker();

    const nowDate = new Date();
    const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
    const remaining = (targetDate - nowDate) / 1000;
  
    if(remaining === 0 || remaining < 0){
        // 만약, remaining이 0이라면, 타이머가 종료되었습니다 출력
        document.getElementById("onement").innerText = "타이머가 종료되었습니다."; 
        console.log('타이머가 종료되었습니다.');
    }else if(isNaN(remaining)){
        //만약 잘못된 날짜가 들어왔다면
        document.getElementById("onement").innerText = "유효한 시간대가 아닙니다!😒"; 
        return;
    } else{
        document.getElementById("onement").innerText = "⏰남은시간!"; 
    }

    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining) % 60
    };

    const documentArr = ['days', 'hours', 'min', 'sec'];
    const timeKeys = Object.keys(remainingObj);

    let i = 0;
    for (let tag of documentArr) {
        document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
        i++;
    }

    

    // const documentObj = {
    //     days: document.getElementById("days"),
    //     times: document.getElementById("times"),
    //     minutes: document.getElementById("minutes"),
    //     seconds: document.getElementById("seconds")
    // };

    
    // const docKeys = Object.keys(documentObj);

    // for (let i =0; i<timeKeys.length; i++){
    //     documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
    //     console.log(documentObj[docKeys[i]]);
    // }

   

    // documentObj['days'].innerText = remainingObj['remainingDate'];
    // documentObj['times'].innerText = remainingObj['remainingHours'];
    // documentObj['minutes'].innerText = remainingObj['remainingMin'];
    // documentObj['seconds'].innerText = remainingObj['remainingSec'];

   // console.log(remainingDate, remainingHours, remainingMin, remainingSec);
}