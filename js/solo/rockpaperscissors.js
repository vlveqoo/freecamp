// score
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score-board')

// game & result
const result_div = document.querySelector('.result')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

function getComputerChoice(){
    const choices = ['r', 'p', 's']
    const randomChoice_com = Math.floor(Math.random()*3)
    return choices[randomChoice_com]
}

function convertToWord(letter){
    if(letter === 'r') return '바위';
    if(letter === 'p') return '보'
    return '가위'
}

function win(){
    userScore++;
    userScore_span.innerText = userScore;
}

function lose(){
    computerScore++
    computerScore_span.innerText = computerScore;
}

function game(userChoice){
    const computerChoice = getComputerChoice()
    console.log(computerChoice);
    let fight = computerChoice + userChoice;
    if(fight === 'rr' || fight === 'ss' || fight === 'pp'){
        result_div.innerText = '비겼습니다😐' + ` 둘다 ${convertToWord(userChoice)}를 냈네요!`
    } else if(fight=== 'rp' || fight === 'ps' || fight === 'sr'){
        result_div.innerText = '이겼습니다😝' + ` ${convertToWord(userChoice)}는 ${convertToWord(computerChoice)}를 이기죠!`
        win();
    } else{
        result_div.innerText = '졌습니다😱' + ` ${convertToWord(computerChoice)}는 ${convertToWord(userChoice)}를 이기죠!`
        lose()
    }
}
rock_div.addEventListener('click', function(){
    let userChoice = 'r'
    game(userChoice);
})

paper_div.addEventListener('click', function(){
    let userChoice = 'p'
    game(userChoice);
})

scissors_div.addEventListener('click', function(){
    let userChoice = 's'
    game(userChoice);
})