const messageContainer = document.querySelector('#d-day-message');
const container = document.querySelector('#d-day-container');
const savedDate = localStorage.getItem('saved-date');

const intervalIdArr = [];

messageContainer.innerHTML = 'D-day를 입력해주세요🫡';
container.style.display = 'none';



const dateFormMaker = function () {
    const inputYear = document.querySelector('#targetYearInput').value;
    const inputMonth = document.querySelector('#targetMonthInput').value;
    const inputDate = document.querySelector('#targetDateInput').value;

    const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

    return dateFormat;
};

const counterMaker = function (data) {
    if (data !== savedDate) {
        localStorage.setItem('saved-date', data);
    }
   
    const nowDate = new Date();
    const targetDate = new Date(data).setHours(0, 0, 0, 0);
    const remaining = (targetDate - nowDate) / 1000;
  
    if(remaining === 0 || remaining < 0){
        // 만약, remaining이 0이라면, 타이머가 종료되었습니다 출력
        container.style.display = 'none';
        messageContainer.innerHTML = "타이머가 종료되었습니다."; 
        messageContainer.style.display = 'flex'; 
        setClearInterval();
        return;
    }else if(isNaN(remaining)){
        //만약 잘못된 날짜가 들어왔다면
        container.style.display = 'none';
        messageContainer.innerHTML = "유효한 시간대가 아닙니다.";
        messageContainer.style.display = 'flex'; 
        setClearInterval();
        return;
    } 

    const remainingObj = {
        remainingDate: Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec: Math.floor(remaining) % 60
    };

    const documentArr = ['days', 'hours', 'min', 'sec'];
    const timeKeys = Object.keys(remainingObj);


    const format = function (time) {
        if(time < 10) {
            return '0' + time;
        } else{
            return time;
        }
    }

    let i = 0;
    for (let tag of documentArr) {
        const remainingHours = format(remainingObj[timeKeys[i]]);
        document.getElementById(tag).textContent = remainingHours;
        i++;
    }
};

const starter = function (targetDateInput) {
    if (!targetDateInput) {
        targetDateInput = dateFormMaker();
    }
    
    
    container.style.display = 'flex';
    messageContainer.style.display = 'none';
    setClearInterval();
    counterMaker(targetDateInput); //0초부터 실행되게함
    const intervalId = setInterval( () => counterMaker(targetDateInput), 1000); //1초후부터 매1초마다 실행됨
    intervalIdArr.push(intervalId) //starter버튼 누를시마다 배열에 아이디값 추가
    return intervalIdArr; 
};

const setClearInterval = function () {
    // 
    localStorage.removeItem('saved-date');
    for(let i = 0; i < intervalIdArr.length; i++){
        clearInterval(intervalIdArr[i]);
    }  
};

const resetTimer = function() {
    container.style.display = 'none';
    messageContainer.innerHTML = 'D-day를 입력해주세요🫡';
    messageContainer.style.display = 'flex';
    setClearInterval();
};

if (savedDate) {
  starter(savedDate);  
} else {
    container.style.display = 'none';
    messageContainer.innerHTML = 'D-day를 입력해주세요🫡';
};