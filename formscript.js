//  USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
// let nameInput = document.getElementById('name').value;
// let emailInput = document.getElementById('email').value;

// Listen for form submit
var itemlist = document.getElementById('items');
let myobjs = [];
myForm.addEventListener('submit', onSubmit);

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

//   Creating obj
  const userDetails = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value
}
  localStorage.setItem(newEmail.value, JSON.stringify(userDetails));
}