var removeIcon = '<img src="icons/remove.png" alt="remove">';
var completeIcon = '<img src="icons/check.png" alt="completed">';


document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;

    if(value) {
        addItemTodo(value);
        document.getElementById('item').value = "";
    }
});

function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
}

function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    var target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');
    parent.removeChild(item);
    target.appendChild(item);
}

function addItemTodo(text) {

    var list = document.getElementById('todo')
    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;

    remove.addEventListener('click', removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeIcon;

    complete.addEventListener('click', completeItem);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);
    list.appendChild(item);
}