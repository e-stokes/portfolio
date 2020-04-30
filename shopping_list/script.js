var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li')
var items = document.getElementsByTagName("li");
var getButton = document.getElementsByTagName('button')

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    var newButton = document.createElement('button');
    newButton.innerHTML = "Remove";
    li.appendChild(newButton);
    ul.appendChild(li)
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 &&
        event.keyCode === 13) {
    createListElement();
    }
}


function addButton() {
    for (i = 0; i < items.length; i++) {
        var newButton = document.createElement('button');
        newButton.innerHTML = "Remove";
        items[i].appendChild(newButton);
    }
}

function clearElement(){
	for(var i=0; i<li.length; i++){
		this.parentNode.remove()
	}
}

function buttonListElement(){
	var button = document.querySelectorAll('li button');
	for( i=0; i<button.length; i++){
	button[i].addEventListener('click', clearElement)
	}
}


addButton();
buttonListElement();


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// strike through text on click
ul.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}, false);
