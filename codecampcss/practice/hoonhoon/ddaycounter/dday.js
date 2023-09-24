const messageContainer = document.querySelector('#d-day-message');
const container = document.querySelector('#d-day-container');
const savedDate = localStorage.getItem('saved-date');

const intervalIdArr = [];

messageContainer.innerHTML = 'D-day를 입력해주세요🫡';
container.style.display = 'none';



const dateFormMaker = function () { // 인풋된 year-month-date 입력값value 받는 함수~ dateFormat값 반환
    const inputYear = document.querySelector('#targetYearInput').value;
    const inputMonth = document.querySelector('#targetMonthInput').value;
    const inputDate = document.querySelector('#targetDateInput').value;

    const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

    return dateFormat; 
};

const counterMaker = function (data) {
    
    if (data !== savedDate) {
        localStorage.setItem('saved-date', data); // 새로운 데이터(매개변수)가 기존localStorage 저장값과 다르다면 새로운값 입력
    }
    const nowDate = new Date(); //현재날짜-시간 생성
    const targetDate = new Date(data).setHours(0, 0, 0, 0); //설정된 날짜의 0시 0분값 
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
    const timeKeys = Object.keys(remainingObj); // remainingObj의 키값


    const format = function (time) {
        if(time < 10) {
            return '0' + time;
        } else{
            return time;
        }
    }

    let i = 0;
    for (let tag of documentArr) {
        const remainingHours = format(remainingObj[timeKeys[i]]); // remainingObj['remainingDate'] = remainingObj[timeKeys[0]]
        document.getElementById(tag).textContent = remainingHours;
        i++;
    }
};

const starter = function (targetDateInput) {
    if (!targetDateInput) { //매개변수가 falsy한값이 아니라면 input데이터값 받아오기
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

if (savedDate) { //savedDate가 있으면 starter함수 실행
  starter(savedDate);  
} else {
    container.style.display = 'none';
    messageContainer.innerHTML = 'D-day를 입력해주세요🫡';
};