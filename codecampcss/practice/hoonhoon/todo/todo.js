const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

const savedTodoList = JSON.parse(localStorage.getItem('saved-items')); //string을 원형태로 바꿔줌



const createTodo = function(storageData) {
    let todoContents = todoInput.value;
    if(storageData){
        todoContents = storageData.contents
    }
    
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');

    newBtn.addEventListener('click', ()=> {
        newLi.classList.toggle('complete');
        saveItemsFn();
    });

    newLi.addEventListener('dblclick', ()=>{
        newLi.remove()
        saveItemsFn();
    });

    if(storageData?.complete === true){ //옵셔널체이닝: storageData의 값이 존재할때만 컴플리트찾기~ undefined라면 실행x
        newLi.classList.add('complete');
    }


    newSpan.textContent = todoContents;
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    todoInput.value  = '';
    saveItemsFn();
}

const keyCodeCheck = function () {
    
    if (window.event.keyCode === 13 && todoInput.value.trim() !== ''){
        createTodo();
    }
    
    
};

const deleteAll = function() {
    const liList = document.querySelectorAll('li'); //쿼리셀렉터올은 배열형태로 요소를 참조함~(인덱스값:li) 0:li 1:li.complete 2:li
    for (let i = 0; i < liList.length; i++){
        liList[i].remove();
    }
    saveItemsFn();
};

const saveItemsFn = function() {
    const saveItems = [];
    for (let i = 0; i<todoList.children.length; i++){

        const todoObj = {
            contents: todoList.children[i].querySelector('span').textContent,
            complete: todoList.children[i].classList.contains('complete') // 클릭시 complete라는 클래스명을 부여받게되는데 해당되는지
        };
        saveItems.push(todoObj);
    }

    saveItems.length === 0 //빈배열이면
    ? localStorage.removeItem('saved-items') //삭제
    : localStorage.setItem('saved-items', JSON.stringify(saveItems)); //빈배열아니면 JSON으로 문자화하여 저장

};

if(savedTodoList){
    for(let i=0; savedTodoList.length; i++){
        createTodo(savedTodoList[i])
    }
}

const weatherDataActive = function ({location, weather}) {
    const weatherMainList = [
        'Clear',
        'Clouds',
        'Drizzle',
        'Rain',
        'Snow',
        'Thunderstorm',
    ];
    weather = weatherMainList.includes(weather) ? weather : 'fog';
    const locationNameTag = document.querySelector('#location-name-tag')
    locationNameTag.textContent = location;
    document.body.style.backgroundImage = `url('./images/${weather}.jpg')`
}

const weatherSearch = function ({latitude, longitude}) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5fe5fbbeebdfdd3d9d9f80442f635671`
        ).then((resmagae)=>{
            console.log(resmagae);
            return resmagae.json();
        })
        .then((json)=>{
            console.log(json.name, json.weather[0].main);
            const weatherData = {
                location: json.name,
                weather: json.weather[0].main
            }
            weatherDataActive(weatherData);
        })
        .catch((err) => {
            console.error(err)
        })
};

const accessToGeo = function ({coords}) {   
    const {latitude, longitude} = coords; 
    const positionObj = {
        latitude,
        longitude,
    }; //shorthand property

    weatherSearch(positionObj);
};

const askForLocation = function () {
    navigator.geolocation.getCurrentPosition(accessToGeo, (errmagae) =>  {
        console.log(errmagae);
    });
};
askForLocation();

