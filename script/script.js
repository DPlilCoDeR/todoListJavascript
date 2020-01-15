var nodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < nodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  nodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newElement() {
    console.log("El boton funciona y ejecuta la funcion")
    const newLi = document.createElement("li");
    let getInputValue = document.getElementById("input").value;
    let createTextFromInputValue = document.createTextNode(getInputValue);
    newLi.appendChild(createTextFromInputValue);
    if (getInputValue == '') {
        alert("Tienes que escribir algo.");
        return;
    }
    console.log(getInputValue);
    document.getElementById("todoList").appendChild(newLi);
    document.getElementById("input").value = "";
}