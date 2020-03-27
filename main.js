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
    
        while (p2Tag.firstChild){
        p2Tag.removeChild(p2Tag.firstChild);
        };
        document.getElementById("pTag").innerHTML = x;
}

// function clearInputField() {
//     document.getElementById("input-field").reset();
// }p