let var5=document.getElementById("keypress");
var5.addEventListener("keypress",callme);
function callme(){
    alert(this.value);
}