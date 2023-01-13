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
var item = document.querySelectorAll('.list-group-item');
item[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
}
