



// Code for increment and decrement  
let value=0;
document.getElementById("counter_display").innerText=value;

// increment action 
const increm=document.getElementById("increment");
increm.addEventListener("click",incrementFunction);

function incrementFunction(){
        value=value+1;
        document.getElementById("counter_display").innerText=value;
}




// decrement action 
const decrem=document.getElementById("decrement");
decrem.addEventListener("click",decrementFunction);
function decrementFunction(){
    value=value-1;
    document.getElementById("counter_display").innerText=value;
}




// reset action 
const reset=document.getElementById("button");
reset.addEventListener("click",resetFunction);
function resetFunction(){
    value=0;
    document.getElementById("counter_display").innerText=value;
}





