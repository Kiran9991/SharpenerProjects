// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';
// var title = document.getElementById('title1');
// title.style.color = 'green';
// title.style.fontWeight = 'bold';
var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Kiran';
// items[1].style.fontWeight = 'bold'
items[2].style.color = 'green';
for(var i=0; i<items.length; i++) {
    items[i].style.fontWeight = 'bold';
} 
 