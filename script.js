const groceries = document.getElementsByClassName('groceries')[0];
const pencil = document.getElementById('pencil');
const all_items = document.getElementById('allItems');
const user_input = document.getElementById('userInput');

pencil.addEventListener('click', function(){
    all_items.innerHTML = "";
});

user_input.addEventListener('keydown', function(e){
    if (e.key == "Enter") {
        addItem();
    }
});

function addItem() {
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + user_input.value;

    h2.addEventListener('click', function(){
        h2.style.textDecoration = "line-through";
    });

    all_items.insertAdjacentElement('beforeend', h2);
    user_input.value = "";
}