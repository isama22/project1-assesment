//set variables to null and 1 for input field load default
//show input and counter number w variables/show what they are/template literals/attatch values
//function for add/take input field value and store it in a variable/ use that to add/sub/parse/attatch
//function for subtract

//
let displayNum = 0;
let userNum = 1;

let showNum = document.getElementById('pTag');
let showInput = document.getElementById('inputField');

showNum.textContent = `${displayNum}`;
showInput.value = `${userNum}`;

//-------
let plusButton = document.getElementById('plusButton');
let minusButton = document.getElementById('minusButton');
//event listeners---------------------------------------------------
plusButton.addEventListener('click', addInputValue);
minusButton.addEventListener('click', subtractInputValue);
//-----
// function buttonWorks(){
//     console.log('hello');
// }
//add function
function buttonWorks(){
    console.log('hello');
}

function addInputValue(){
//     //take current value of input field and parseInt add to current val of display num
//     displayNum = parseInt(document.getElementById('inputField').value); + parseInt(showNum);
//     console.log(displayNum); 
// }
//parseInt + 
    let showNum = document.getElementById('pTag');
    showNum.value;
    userNum = document.getElementById('inputField').value;
    displayNum = parseInt(displayNum) + parseInt(userNum);
    document.getElementById('pTag').textContent = `${displayNum}`;
}
//subtract function 
//vice versa
function subtractInputValue() {
    let showNum = document.getElementById('pTag');
    showNum.value;
    userNum = document.getElementById('inputField').value;
    displayNum = parseInt(displayNum) - parseInt(userNum);
    document.getElementById('pTag').textContent = `${displayNum}`;
}






