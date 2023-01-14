var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Create event of removing itemlist
itemlist.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item');
    var newItem1 = document.getElementById('item1');

    // Create new li element
    var li = document.createElement('li');
    // Add Class name
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem.value));
    li.appendChild(document.createTextNode(" "+newItem1.value));

    // Create delete button element
    var deletebtn = document.createElement('button');
    var editbtn = document.createElement('button');
    
    // Add classes to del button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    editbtn.className = 'btn btn-success btn-sm float-right edit';

    // Append text node
    deletebtn.appendChild(document.createTextNode('X'));
    editbtn.appendChild(document.createTextNode('edit'));
    
    // Append button to li
    li.appendChild(deletebtn);
    li.appendChild(editbtn);

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

// Filter Item
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemlist.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var itemName1 = item.lastChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || itemName1.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}