
const myform = document.getElementById('myform');


myform.addEventListener('submit', addExpense);

function addExpense(e) {
    e.preventDefault();
    console.log('hello')
    let amount = document.getElementById('amount').value;
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;
    let items = document.getElementById('items');
    
    // Creating objects
    const expenseDetails = {
        ExpenseAmount: amount,
        Description: description,
        Category: category
    }
    var li = document.createElement('li');
    li.textContent = expenseDetails.ExpenseAmount+': '+expenseDetails.Description+': '+expenseDetails.Category
    var deletebtn = document.createElement('input');
    deletebtn.type = 'button';
    deletebtn.value = 'delete';
    deletebtn.onclick = () => {
        localStorage.removeItem(expenseDetails.Description)
        items.removeChild(li)
    }
    let editbtn = document.createElement('input')
    editbtn.type = 'button'
    editbtn.value = 'edit'
    editbtn.onclick = () => {
      localStorage.removeItem(expenseDetails.Description)
      items.removeChild(li)
      document.getElementById('amount').value = expenseDetails.ExpenseAmount
      document.getElementById('description').value = expenseDetails.Description
      document.getElementById('category').value = expenseDetails.Category
    }

    li.appendChild(deletebtn);
    li.appendChild(editbtn)
    items.appendChild(li);

    localStorage.setItem(expenseDetails.Description, JSON.stringify(expenseDetails));
}