var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Create event of removing itemlist
itemlist.addEventListener('click', removeItem);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item');

    // Create new li element
    var li = document.createElement('li');
    // Add Class name
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem.value));

    // Create delete button element
    var editbtn = document.createElement('button');
    var deletebtn = document.createElement('button');
    
    // Add classes to del button
    editbtn.className = 'btn btn-success btn-sm float-right edit';
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    editbtn.appendChild(document.createTextNode('edit'));
    deletebtn.appendChild(document.createTextNode('X'));
    
    // Append button to li
    li.appendChild(editbtn);
    li.appendChild(deletebtn);
    

    // Append li to list
    itemlist.appendChild(li);
}

// Remove Item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
        var li = e.target.parentElement;
        itemlist.removeChild(li);
        }
    }
}