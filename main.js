//cached----------------------------------------------------------------
let plusButton = document.getElementById('plus-button');
//event listeners---------------------------------------------------
plusButton.addEventListener("click", appendPTag);
//plusButton.addEventListener("click", );
//functions----------------------------------------------------------
function buttonWorks(){
    console.log('hello');
}

function appendPTag () {
    var x = document.getElementById('input-field').value;
    document.getElementById("p-tag").innerHTML = x;
}

// function clearInputField() {
//     document.getElementById("input-field").reset();
// }