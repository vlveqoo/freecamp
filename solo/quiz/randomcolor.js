


const makeColor = function(){
    let col = (Math.floor(Math.random()*16777215)).toString(16);
    let coll = "#" + col
    console.log(coll);
    document.body.style.backgroundColor = coll;
    document.getElementById("randomColor").textContent = coll;
}