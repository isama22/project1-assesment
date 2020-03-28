// realized after writing all this that i got too focused on making the new input value appear that i wasn't thinking about making it actually do any addition, so when you write a new input and press the plus button it only appends itself, but it works great as an input value appender! spent the rest of my time wrestling with css but scrapping it and pushing to gh-pages since i didnt have time to start over 

//cached----------------------------------------------------------------
let plusButton = document.getElementById('plus-button');
let minusButton = document.getElementById('minus-button');
//event listeners---------------------------------------------------
plusButton.addEventListener("click", appendPTag);
minusButton.addEventListener("click", subtractInputValue);
//functions----------------------------------------------------------
function buttonWorks(){
    console.log('hello');
}

function appendPTag () {
    var x = document.getElementById('inputField').value;
        while (p2Tag.firstChild){
        p2Tag.removeChild(p2Tag.firstChild);
        };
        document.getElementById("pTag").innerHTML = x;
}

// a = document.getElementById('pTag').value;
// b = document.getElementById('inputField').value;

// c = 3;
// d = 2;

// e = "has to equal the current input value";
// f = "has to equal the current value of pTag";
//var minusButtonWork = e - f;

function subtractInputValue() {
    let minusButtonWork = document.getElementById('inputField').value - document.getElementById('pTag').value;
    document.getElementById('pTag').innerHTML = minusButtonWork;
}

// var minusButtonWork = firstValue - secondValue;
// function subtractInputValue() {
//     let minusButtonWork = document.getElementById('inputField').value - document.getElementById('pTag').value;
//     document.getElementById("pTag").innerHTML = minusButtonWork;
// }
