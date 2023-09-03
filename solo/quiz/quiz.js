
const hexcolor = document.getElementById("hexcolor")


function makeColor() {
    let colorBase = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let newColor= "#";
    
    for(i=0; i<6; i++){
        let randomValue = colorBase[Math.floor(Math.random() * colorBase.length)];
        newColor += randomValue;
    }
        
        document.body.style.backgroundColor = newColor;
        hexcolor.textContent = newColor;
}
