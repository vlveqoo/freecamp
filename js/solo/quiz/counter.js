const numberZ = document.getElementById("numberZone")
const decrease = document.getElementById("dec")
const reset = document.getElementById("res")
const increase = document.getElementById("inc")


decrease.onclick = function () {
    numberZ.textContent = Number(numberZ.textContent) - 1;
    colorMake()
}

increase.onclick = function () {
    numberZ.textContent = Number(numberZ.textContent) + 1;
    colorMake()
}

reset.addEventListener("click", function(event){
    numberZ.textContent = 0;
    colorMake()
    console.log(event.target.id)
});

const colorMake = function(){
    if(Number(numberZ.textContent)>0){
        numberZ.style.backgroundColor = "green";
    } else if(Number(numberZ.textContent)<0){
        numberZ.style.backgroundColor = "red";
    }else{
        numberZ.style.backgroundColor = "antiquewhite";
    }
}

