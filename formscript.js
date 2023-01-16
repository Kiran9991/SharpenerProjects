//  USER FORM SCRIPT

// Put DOM elements into variables
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');

// Listen for form submit
// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
//   localStorage.setItem('username', nameInput.value);
//   localStorage.setItem('useremail', emailInput.value);
// }

let myObj = {
    name: 'kiran',
    email: 'kiran3@gmail.com'
}

let myObj_serialized = JSON.stringify(myObj);

localStorage.setItem('myobj', myObj_serialized);

console.log(myObj_serialized);

let myOjb_deserialized = JSON.parse(localStorage.getItem('myobj'));

console.log(myOjb_deserialized);