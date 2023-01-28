//***************************************///Reverse the String///*********************************************** */ 
// function reverseString(str) {
//     let newstring = "";
//     for(var i=str.length-1; i>=0; i--) {
//         newstring = newstring+str[i];
//     }
//     return newstring;
// }
// let text = reverseString("ram");
// console.log(text);
//****************************************///Arrays///********************************************************** */ 
// Arrays - variables that hold multiple values
// const fruits = ['apples','oranges','pears'];
// fruits[3] = 'grapes'; // add element at an index position
// fruits.push('mangos'); // add element at the last position
// fruits.unshift('strawberries'); // add element at the first position
// fruits.pop(); // remove the last element
// console.log(Array.isArray('fruits')); // check wheather the array is array or not
// console.log(fruits.indexOf('oranges'));
// console.log(fruits);
// for(let i=0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }
//***********************************///Max element in an Array///********************************************** */ 
// let arr = [1,3,5,6,5,4];
// var max = 0;
// for(var i=0; i<arr.length; i++) {
//     if(arr[i]>max) 
//     max = arr[i];
// }
// console.log(max);
//********************************///Find the minimum element in an array///************************************ */
// let arr = [4,3,1,6,9,5];
// var min = 10;
// for(var i=0; i<arr.length; i++) {
//     if(arr[i]<min) 
//     min = arr[i];
// } 
// console.log(min);
//***********************************///Find the second maximum number in an arra///**************************** */ 
// function findSecondLargestElem(arr){
//     let first = -1 , second = -1;
//     for(let i = 0; i <= arr.length-1; i++){
//         if(arr[i] > first){
//             second = first;
//             first = arr[i];
//         }
//         else if( arr[i] > second && arr[i] != first){
//             second = arr[i];
//         }
//     }
//     console.log(second);
// }
// let arr = [12, 35, 1, 10, 34, 1]
// findSecondLargestElem(arr);
//************************************///Balanced Parenthesis problem///***************************************** */ 
// var isValid = function(s) {
//     if (s.length === 0 || s.length % 2 === 1){
//         return false
//     }
//     const map = new Map()
//     map.set("}","{")
//     map.set("]","[")
//     map.set(")","(")
//     const openings = ["[","{","("]
//     const stack = []
//     for (let i = 0; i < s.length; i++){
//         if(openings.includes(s.charAt(i))){
//             stack.push(s.charAt(i))
//             continue;
//         }
//         if(stack.pop() !== map.get(s.charAt(i))){
//             return false
//         }
//     }
//     return stack.length === 0
// };
// let cha = "()[]"
// let funs = isValid(cha);
// console.log(funs);
//*************************************************************************************************************** */
// Construtor function
// function Person(firstname, lastname, dob) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = dob;
// } 
// Instantiate object
// const person1 = new Person('Kiran','agiwale','5-9-1999');
// console.log(person1);
//************************************///Functions///*********************************************************** */
// function convertTemp(temperaturevalue, conversionunit) {
//     temperaturevalue = temperaturevalue<273 ? temperaturevalue+=273:temperaturevalue-=273;
    // if(temperaturevalue<=conversionunit) {
    //     temperaturevalue += conversionunit;
    // }
    // else{
    //     temperaturevalue-= conversionunit;
    // }
    // return temperaturevalue;
//     return temperaturevalue;
// }

// let value = convertTemp(273,273);
// console.log(value);
//********************************************************************************************************** */ 
// var mydate = new Date(2034, 11, 5);
// console.log(mydate);



//***********************************///Dom Manipulation///************************************************* */ 
// const ul = document.querySelector('.item');
// ul.firstElementChild.textContent = 'Hello';
// const item1 = document.querySelector('.item1');
// item1.style.color = 'green';
// const item2 = document.querySelector('.item2');
// item2.style.color = 'yellow';
//************************************///Object literals///************************************************** */ 
// const person = {
//     firstName: 'Kiran',
//     lastName: 'Agiwale',
//     age: 24,
//     hobbies: ['music','movies','sports'],
//     address: {
//         street: '50 main st',
//         city: 'Pune',
//         state: 'Maharashtra'
//     }
// }
// console.log(person.firstName,person.lastName); // to get person elements
// console.log(person.hobbies[1]); // to get the element present in an element array of person
// console.log(person.address.city); // to get the element present in an element of person 
// const {firstName, lastName, address:{city, street, state}} = person; // destructor function to initialize the objects
// console.log(street,state,city);
// person.email = 'kirnagiwale3@gmail.com'; // add property
// console.log(person);
//*********************************///Arrays of objects///******************************************************* */
// const todos = [                   // can create no. of objects in an array
//     {
//         id:1,
//         text:'Take out trash',
//         iscompleted:true
//     },
//     {
//         id:2,
//         text:'Meeting with boss',
//         iscompleted:true
//     },
//     {
//         id:1,
//         text:'Dentist appt',
//         iscompleted:false
//     }
// ]
// console.log(todos[1].iscompleted); // to get array to an index
// const todojason = JSON.stringify(todos); // to do in JSON format 
// for(let todo of todos) {         // anothor method to loop the arrays
//     console.log(todo.text)
// }
// forEach , map, filter
// todos.forEach(function(todo) {
//     console.log(todo.text)
// })
// const todoText = todos.map(function(todo) {
//     return todo.text;
// })
// console.log(todoText);
// const todocompleted = todos.filter(function(todo) {
//     return todo.iscompleted === true;
// })
// console.log(todocompleted)
// const todocompleted = todos.filter(function(todo) {
//     return todo.iscompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })
// console.log(todocompleted)
//**************************************///Conditionals///************************************************** */ 
// const x = 11;
// const color = x>10 ? 'red':'blue';
// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
//         break;
// }
//*********************************///Functions///************************************************************* */ 
// function addNums(num1, num2) {
//     console.log(num1+num2);
// }
// addNums(5,3);
// ###############\\\Arrow functions\\\########################
// const addNums = (num1, num2) => {
//     return num1+num2;
// }
// console.log(addNums(5,4));
//*********************************///Oops///******************************************************************* */ 
// Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
    // this.getBirthYear = function() {        // can create function in an constructor
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`;
    //     // return firstName+lastName;
    // }
// }
// Prototype
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }
// Instantiate object 
// const person1 = new Person('Kiran','Agiwale','05-09-1999');
// const person2 = new Person('Mary','smith','05-09-1994');
// console.log(person1.dob.getFullYear()); // to get the year of dob
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person1.getFullName());
// console.log(person2.getFullName);

// Creating Class
// class Person{
//     constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// const person1 = new Person('Kiran','Agiwale','05-09-1999');
// console.log(person1.getBirthYear());
//********************************///Dom Manipulations///******************************************************** */
// Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));
// const items = document.querySelectorAll('.item');  // looping the list by forEach
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello'; // changing the first element
// ul.children[1].innerText = 'kiran';
// ul.lastElementChild.innerHTML = '<h1>Kiran</h1>';

// const btn = document.querySelector('.btn'); // can edit css property
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     // console.log('click');
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Kiran</h1>';
// });

// const myform = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myform.addEventListener('submit',onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     if(nameInput.value === '' || emailInput.value === '') {
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter all fields';
//         setTimeout(() => msg.remove(), 3000);
//     } else {
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

//         userList.appendChild(li);

//         //clear fields
//         nameInput.value = '';
//         emailInput.value = '';
//     }
// }
//************************************///Valid Parentheses by stack array///*********************************** */
// var isValid = function(s) {
//     let stack = [];
//     for(let i=0; i<s.length; i++) {
//         let top = stack[stack.length-1];
//         if(s[i]=='(' || s[i]=='{' || s[i]=='[') {
//             stack.push(s[i]);
//         }
//         else if(s[i]==')' && top == '(' || s[i]=='}' && top == '{' || s[i]==']' && top == '[') {
//             stack.pop();
//         }else {
//         return false;
//         }
//     }
//     if(stack.length === 0) {
//         return true;
//     }
//     if(stack.length!=0) {
//         return false;
//     }
// }
// let sol = '(){}[]';
// console.log(isValid(sol))
//**********************************///Check if the String is Palindrome///************************************ */ 
// let isPalindrome = function() {
// // let s = 'madam';
// let str = '';
// let flag = false;
// for(var i=s.length; i>=0; i--) {
//     str += s.charAt(i)
// }
// if(s===str) {
//     flag = true;
// }
// return flag;
// }
// let s = 'madam';
// console.log(isPalindrome());
//**************************///Right pascal star Pattern///**************************************************** */
// let rightPascal = function() {
// let string = '';
// for(let i=1; i<=n; i++) {
//     for(let j=0; j<i; j++) {
//         string += '*';
//     }
//     string += '\n';
// } 
// for(let i=0; i<=n-1; i++) {
//     for(let j=0; j<n-i; j++) {
//         string += '*';
//     }
//     string += '\n';
// }
// return string;
// }
// let n = 5;
// console.log(rightPascal())
//************************///Storing Bad numbers in an Array///********************************************** */ 
// for e.g = 12-> sum of digit(1+2) = 3. 12 is divisible by 3 therefore it is a bad no.
// for e.g = 45-> sum of digit(4+5) = 9. 45 is divisible by 9 therefore it is a bad no.
// for e.g = 11-> sum of digit(1+1) = 2. 11 is not divisible by 2 so it is not a bad no.
// function badNumbers(n) {
//     arr = []
//     x = 10
    // while(arr.length!==n) {
    //     sum = 0;
    //     y = x
    //     while(y!==0) {
    //         sum += y%10
    //         y = parseInt(y/10)
    //     }
    //     if(x%sum===0) {
    //         arr.push(x)
    //     }
    //     x++;
//     }
//     return arr
// }
// fun1 = badNumbers(5)
// console.log(fun1)
//****************///Storing sharpee number in an array///***************************************************** */
// function sharpeesNum(n) {
//     arr = []
//     x = 5
//     while(arr.length!==n) {
//         num = 0;
//         y = x 
//         while(y!==0) {
//             num += y%10
//             y = parseInt(y/10)
//         }
//         if(num%5===0) {
//             arr.push(x)
//         }
//         x++;
//     }
//     return arr
// }
// fun = sharpeesNum(10)
// console.log(fun)
//********************************///Bind inbuilt function///***************************************************** */ 
// let button = function(content) {
//     this.content = content;
// };
// button.prototype.click = function() {
//     console.log(this.content+'clicked');
// };
// let newButton = new button('add ');
// let boundButton = newButton.click.bind(newButton);
// boundButton();
//*************************************************************************************************************** */ 
// function x() {
//     for(var i=1; i<=5; i++) {
//         function close(i) {
//             setTimeout(function() {
//                 console.log(i);
//             }, i*1000);
//         }
//         close(i);
//     }
//     console.log('hello kiran')
// }
// x();
//*********************************************************************************************************** */
// Q => 1
// function y() {
//     setTimeout(() => console.log('a'), 1000)
//     console.log('Done Coding')
// } 
// y();    

// Q => 2
// function y() {
//     setTimeout(() => console.log('a'), 0)
//     console.log('Done Coding')
// }
// y();

// Q => 3
// function y() {
//     for(var i=1; i<6; i++) {
//         setTimeout(() => console.log(i), i*1000)
//     }
//     console.log('Done Coding')
// }
// y();

// Q => 4
// function y() {
//     for(let i=1; i<6; i++) {
//         setTimeout(() => console.log(i), i*1000)
//     }
//     console.log('Done Coding')
// }
// y();

// Q => 5
// const name1 = (arr)=> {
//     count = 0;
//     return ()=> {
//         console.log('Hello '+arr[count]);
//         count++;
//     }
    
// }
// let fun = name1(["Ram","Shyam"]);
// fun();
// fun();
//*********************************///Functions///******************************************************* */ 
// 1. Function Statement aka Function Declaration
// function a() {
//     console.log('a called')
// }
// a()

// 2. Function Expression
// var b = function () {
//     console.log('b called')
// }
// b()

// 3. Anonymous Function
// function () {

// }

// 4. Named Function Expression
// var a = function xyz() {
//     console.log('Kiran')
// }
// a()

// function addConstantValue(constant1) {
//     constant1 = constant1+20;
//     return (value) => {
//         return (value2) => value + constant1 + value2;
//     }
// }
// const constanst = addConstantValue(15)

// console.log(constanst(2)(5))
// *******************************///This Keyword///******************************************************* */
// class Student {
//     static count = 0;
//     constructor(age) {
//       this.age = age;
//       Student.count++;
//     }
//     static print() {
//       console.log(Student.count);
//     }
//   }
//   const s1 = new Student(1);
//   const s2 = new Student(2);
//   Student.print()  
//*****************************///Event Listeners types///************************************************* */
// window.addEventListener("DOMContentLoaded", () => { console.log('DOM HAS LOADED') })
// document.addEventListener("DOMContentLoaded", () => { console.log('DOM HAS LOADED') })
// document.addEventListener("DOMContentLoaded", console.log('DOM HAS LOADED'))
// window.addEventListener("DOMContentLoaded", console.log('DOM HAS LOADED'))
//****************************///Fat Arrow Function///*************************************************** */
// var student = function(name){
//     this.name = name;
//     var printName = () => {
//         console.log(this.name)
//     }
//     printName()
// }
// var yash = new student("yash")
//********************************************************************************************************** */ 
// const studentobj = {
//     'yash': 26,
//     'vaibhav': 24,
//     'rajesh' : 25,
//     }
// let age = 25;
// studentobj.key.forEach(element => {
    
// });
// for(const key in studentobj) {
//     if(studentobj[key]===age) {
//         console.log(key)
//     }else {
//         console.log(-1);
//     }
// }
// Object.keys(studentobj).forEach(key => console.log(key));
//*************************************///Spread Operator///********************************************** */
// const obj1= {
//     "key1": "value1",
//     "key2" : "value2",
//     "key3" : "value3"
// }
// const obj2 = { ...obj1}
// console.log(obj2)

// const obj1= {
// "key1": "value1",    
// "key2" : "value2",    
// "key3" : "value3"
// }
// const obj2 = { ...obj1, "key3": "new value", "key1": "new val" }
// console.log(obj2)

// const obj1= {
//     "key1": "value1",
//     "key2" : "value2",
//     "key3" : "value3"    
// }    
// const obj2 = { ...obj1	, "key3": "new value"}
// console.log(obj2)

// const obj= {
//     "key1": "value1",
//     "key2" : "value2",
//     "key3" : "value3"    
// }    
// const obj2 = {...obj}    
// console.log(obj2 === obj)

// const arr = [1, 2, 3]
// const arr2 = [3,5,6]
// const arr3 = [...arr, ...arr2]
// console.log(arr3)





