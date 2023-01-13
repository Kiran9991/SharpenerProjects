// Get Element by Id //

// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';
// var title = document.getElementById('title1');
// title.style.color = 'green';
// title.style.fontWeight = 'bold';
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Kiran';
// items[1].style.fontWeight = 'bold'

// Get Element by Class Name //

// var items = document.getElementsByClassName('list-group-item');
// items[2].style.color = 'orange';
// for(var i=0; i<items.length; i++) {
//     li[i].style.backgroundColor = 'yellow';
// }

// Get Element by Tag Name //

// var li = document.getElementsByTagName('li');
// li[2].style.color = 'green';
// for(var i=0; i<li.length; i++) {
//     li[i].style.fontWeight = 'bold';
//     li[i].style.backgroundColor = 'yellow';
// }
// li[1].style.backgroundColor = 'green';
// li[2].textContent = '';

// Get Element by Query Selector //

// var items = document.querySelector('.list-group-item:nth-child(2)');
// items.style.color = 'green'
// var items1 = document.querySelector('.list-group-item:nth-child(3)');
// items1.textContent = '';

// Get Element by Query Selector All //

// var titles = document.querySelectorAll('.title');
// titles[1].textContent = 'hello';
// var item = document.querySelectorAll('.list-group-item');
// item[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i=0; i<odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
// }

// Traversing the Dom //
var itemlist = document.querySelector('#items');
// ParentNode
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemlist.parentNode.parentNode.parentNode);

// ParentElement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemlist.parentElement.parentElement);

// ChildNodes
// console.log(itemlist.childNodes);

// Children
// console.log(itemlist.children);
// console.log(itemlist.children[2]);
// itemlist.children[1].style.backgroundColor = 'yellow';

// FirstChild
// console.log(itemlist.firstChild);

// FirstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.style.backgroundColor = 'blue';

// LastElementChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'hello';

// NextSibling
// console.log(itemlist.nextSibling);
// itemlist.nextSibling.textContent = 'hello';

// NextElementSibling
// console.log(itemlist.nextElementSibling);

// PreviousSibling
// console.log(itemlist.previousSibling);
// itemlist.previousSibling.textContent = 'hello';

// PreviousElementSibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.textContent = 'hello';

// Now go head and add HEllo word before Item Lister 

// Create Element

// Create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add Id
newDiv.id = 'hello1';

// Add attributes
newDiv.setAttribute('title', 'hello Div');

// Create text Node
var newDivText = document.createTextNode('Hello');

// Add text to div
newDiv.appendChild(newDivText);

console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = '30px';

// Add word Hello before item 1
var newli = document.createElement('li');
var newlitext = document.createTextNode('Hello');

newli.className = 'list-group-item';
newli.appendChild(newlitext);
var items = document.querySelector('#items');
items.previousElementSibling.appendChild(newli);
console.log(newli);