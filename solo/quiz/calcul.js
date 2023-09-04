const num1 = Number(document.getElementById("num1").textContent)
const num2 = Number(document.getElementById("num2").textContent)
const num3 = Number(document.getElementById("num3").textContent)
const num4 = Number(document.getElementById("num4").textContent)
const num5 = Number(document.getElementById("num5").textContent)
const num6 = Number(document.getElementById("num6").textContent)
const num7 = Number(document.getElementById("num7").textContent)
const num8 = Number(document.getElementById("num8").textContent)
const num9 = Number(document.getElementById("num9").textContent)
const num0 = Number(document.getElementById("num0").textContent)

let calMemory = [];
let longMemory = [];


const input1 = function(){
    calMemory.push(num1)
    document.getElementById("resultNum").textContent = Number(calMemory.join(""))
}
const input2 = function(){
    calMemory.push(num2)
    document.getElementById("resultNum").textContent = Number(calMemory.join(""))
}
const input3 = function(){
    calMemory.push(num3)
    document.getElementById("resultNum").textContent = Number(calMemory.join(""))
}
const input4 = function(){
    calMemory.push(num4)
    document.getElementById("resultNum").textContent = Number(calMemory.join(""))
}
const input5 = function(){
    calMemory.push(num5)
    document.getElementById("resultNum").textContent = Number(calMemory.join(""))
}
const input6 = function(){
    calMemory.push(num6)
    document.getElementById("resultNum").textContent = Number(calMemory.join(""))
}
const input7 = function(){
    calMemory.push(num7)
    document.getElementById("resultNum").textContent = Number(calMemory.join(""))
}
const input8 = function(){
    calMemory.push(num8)
    document.getElementById("resultNum").textContent = Number(calMemory.join(""))
}
const input9 = function(){
    calMemory.push(num9)
    document.getElementById("resultNum").textContent = Number(calMemory.join(""))
}
const input0 = function(){
    calMemory.push(num0)
    document.getElementById("resultNum").textContent = Number(calMemory.join(""))
}

const numdot = function(){
    calMemory.push(".")
    document.getElementById("resultNum").textContent = Number(calMemory.join(""))
    
}

const numClear = function(){
    calMemory = [];
    longMemory = [];
    document.getElementById("resultNum").textContent = ""
    document.getElementById("calculating").textContent = ""
}

const plusB = function(){
    if(calMemory != false){
        longMemory.push(Number(calMemory.join("")))
    }
    else{
    }
        
        longMemory.push('+')
        console.log(calMemory)
        calMemory = [];
        document.getElementById("resultNum").textContent = "+"
        
}

const minusB = function(){
    if(calMemory != false){
        longMemory.push(Number(calMemory.join("")))
    }
    else{
    }
        
        longMemory.push('-')
        console.log(calMemory)
        calMemory = [];
        document.getElementById("resultNum").textContent = "-"
        document.getElementById("calculating").textContent = longMemory.join("")
}

const multipleB = function(){
    if(calMemory != false){
        longMemory.push(Number(calMemory.join("")))
    }
    else{
    }

        longMemory.push('×')
        console.log(calMemory)
        calMemory = [];
        document.getElementById("resultNum").textContent = "×"
        document.getElementById("calculating").textContent = longMemory.join("")
}

const divisionB = function(){
    if(calMemory != false){
        longMemory.push(Number(calMemory.join("")))
    }
    else{
    }

        longMemory.push('÷')
        console.log(calMemory)
        calMemory = [];
        document.getElementById("resultNum").textContent = "÷"
        document.getElementById("calculating").textContent = longMemory.join("")
}


const equalB = function(){
    longMemory.push(Number(calMemory.join("")))
    if(longMemory[1] === '+'){
        document.getElementById("resultNum").textContent = longMemory[0] + longMemory[2]
    } else if(longMemory[1] === '-'){
        document.getElementById("resultNum").textContent = longMemory[0] - longMemory[2]
    } else if(longMemory[1] === '×'){
        document.getElementById("resultNum").textContent = longMemory[0] * longMemory[2]
    } else {
        document.getElementById("resultNum").textContent = Number((longMemory[0] / longMemory[2]).toFixed(3))
    }
    let resultText = document.getElementById("resultNum").textContent
    document.getElementById("calculating").textContent = longMemory.join("")


    longMemory.fill(Number(resultText))
    longMemory.pop()
    longMemory.pop()
    calMemory = [];
    
    console.log(`calMemory: ${calMemory}`)
    console.log(`longMemory: ${longMemory}`)    
}


