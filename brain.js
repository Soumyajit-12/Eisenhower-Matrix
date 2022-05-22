var task = document.querySelector('#taskText');
var urgency = document.querySelector('.urgency');
var importance = document.querySelector('.importance');
var submitBtn = document.querySelector('#submit');

var heading = document.querySelector(".heading");
var form = document.getElementById("myForm");

var doitems = document.querySelector('.do-list .list-group');
var decideitems = document.querySelector('.decide-list .list-group');
var delegateitems = document.querySelector('.delegate-list .list-group');
var deleteitems = document.querySelector('.delete-list .list-group');

var next = document.querySelector(".newIcon");
next.addEventListener("click", randomQuote)

function handleForm(event) { 
    event.preventDefault();
    addItem();
    task.value = "";
}
form.addEventListener('submit', handleForm);

function addItem(){
    var adder = document.createElement('li');
    adder.classList.add("list-group-item")
    adder.innerHTML = `${task.value}<i class="bi bi-trash trash" style="float: right; cursor: pointer"></i>`;
    if(urgency.value == 1 && importance.value == 1){
        doitems.appendChild(adder);
    }
    if(urgency.value == 2 && importance.value == 1){
        decideitems.appendChild(adder);
    }
    if(urgency.value == 1 && importance.value == 2){
        delegateitems.appendChild(adder);
    }
    if(urgency.value == 2 && importance.value == 2){
        deleteitems.appendChild(adder);
    }
}

doitems.addEventListener('click', removeTask1);
decideitems.addEventListener('click', removeTask2);
delegateitems.addEventListener('click', removeTask3);
deleteitems.addEventListener('click', removeTask4);

function removeTask1(e){
    if(e.target.classList.contains('trash')){
        var li = e.target.parentElement;
        doitems.removeChild(li);
    }
}

function removeTask2(e){
    if(e.target.classList.contains('trash')){
        var li = e.target.parentElement;
        decideitems.removeChild(li);
    }
}

function removeTask3(e){
    if(e.target.classList.contains('trash')){
        var li = e.target.parentElement;
        delegateitems.removeChild(li);
    }
}

function removeTask4(e){
    if(e.target.classList.contains('trash')){
        var li = e.target.parentElement;
        deleteitems.removeChild(li);
    }
}

var quoteText = document.querySelector('.quoteWritten');
var author = document.querySelector('.quoteauthor span')

function randomQuote(){
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.textContent = result.content;
        author.innerText = result.author;
    });
}