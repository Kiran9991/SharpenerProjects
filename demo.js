// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';
// var title = document.getElementById('title1');
// title.style.color = 'green';
// title.style.fontWeight = 'bold';
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Kiran';
// items[1].style.fontWeight = 'bold'
// var items = document.getElementsByClassName('list-group-item');
// items[2].style.color = 'orange';
// for(var i=0; i<items.length; i++) {
//     li[i].style.backgroundColor = 'yellow';
// }
var li = document.getElementsByTagName('li');
li[2].style.color = 'green';
for(var i=0; i<li.length; i++) {
    li[i].style.fontWeight = 'bold';
    li[i].style.backgroundColor = 'yellow';
}
 