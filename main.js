//cached----------------------------------------------------------------
let plusButton = document.getElementById('plus-button');
//event listeners---------------------------------------------------
plusButton.addEventListener("click", appendPTag);
//functions----------------------------------------------------------
function buttonWorks(){
    console.log('hello');
}

function appendPTag () {
    var x = document.getElementById('input-field').value;
    document.getElementById("p-tag").innerHTML = x;
}