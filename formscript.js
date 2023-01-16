//  USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
// let nameInput = document.getElementById('name').value;
// let emailInput = document.getElementById('email').value;

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

// Created a submit function
function onSubmit(e) {
  e.preventDefault();
  let username = document.getElementById('name').value
  let useremail = document.getElementById('email').value
  let userphonenumber = document.getElementById('phoneNumber').value
  var itemlist = document.getElementById('items');
  var li = document.createElement('li');

// Creating obj
const userDetails = {
    name: username,
    email: useremail,
    phoneNumber: userphonenumber
  }
  li.textContent = userDetails.name+' - '+userDetails.email+' - '+userDetails.phoneNumber
  var deletebtn = document.createElement('input');
  deletebtn.type = 'button';
  deletebtn.value = 'delete'
  deletebtn.onclick = () => {
    localStorage.removeItem(userDetails.email)
    itemlist.removeChild(li)
  }
  let editbtn = document.createElement('input')
  editbtn.type = 'button'
  editbtn.value = 'edit'
  editbtn.onclick = () => {
    localStorage.removeItem(userDetails.email)
    itemlist.removeChild(li)
    name.value = userDetails.name
    email.value = userDetails.email
    phoneNumber.value = userDetails.phoneNumber
  }

// Append button to li
  li.appendChild(deletebtn);
  li.appendChild(editbtn)
  itemlist.appendChild(li);

  localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
}

