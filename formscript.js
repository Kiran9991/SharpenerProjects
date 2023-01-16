//  USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
// let nameInput = document.getElementById('name').value;
// let emailInput = document.getElementById('email').value;

// Listen for form submit
var itemlist = document.getElementById('items');
myForm.addEventListener('submit', onSubmit);

// Create event of removing itemlist
itemlist.addEventListener('click', removeItem);

// Created a submit function
function onSubmit(e) {
  e.preventDefault();
//   Get input value
  var newName = document.getElementById('name');
  var newEmail = document.getElementById('email');

//   create li tag
  var li = document.createElement('li');
//   add class to li tag
  li.className = 'list-group-item';
//   adding textnode to li
  li.appendChild(document.createTextNode(newName.value));
  li.appendChild(document.createTextNode(' '+newEmail.value));
//   adding li tag to list
  itemlist.appendChild(li);

// Create delete button element
  var deletebtn = document.createElement('button');

// Add classes to del button
  deletebtn.className = 'delete';

// Append text node
  deletebtn.appendChild(document.createTextNode('delete'));

// Append button to li
  li.appendChild(deletebtn);

// Creating obj
  const userDetails = {
  name: document.getElementById('name').value,
  email: document.getElementById('email').value
}
  localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
}

// Remove Item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        var li = e.target.parentElement;
        itemlist.removeChild(li);
        const userDetails = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value
          }
        localStorage.removeItem(userDetails.email);
    }
}
