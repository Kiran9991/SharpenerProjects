let submitbtn = document.getElementById('submit');
let electronicItems = document.getElementById('electronicItems');
let foodItems = document.getElementById('foodItems');
let skincareItems = document.getElementById('skincareItems');

submitbtn.addEventListener('click', storeItemsDetails);

function storeItemsDetails(e) {
    e.preventDefault();

    let sellingPrice = document.getElementById('sellingPrice').value;
    let productName = document.getElementById('productName').value;
    let chooseCategory = document.getElementById('chooseCategory').value;

    let sellingItemDetails = {
        sellingPrice,
        productName,
        chooseCategory
    }
    // showItemDetails(sellingItemDetails)

    axios.post('https://crudcrud.com/api/758d22e3573b470eb70c62240afb9afa/productDetails', sellingItemDetails)
    .then((response) => {
        showItemDetails(response.data)
        console.log(response.data)
    })
}

window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/758d22e3573b470eb70c62240afb9afa/productDetails').then((response) => {
        for(let i=0; i<response.data.length; i++) {
            showItemDetails(response.data[i]);
        }
    })
})

function showItemDetails(sellingItemDetails) {
    let li = document.createElement('li');
    li.textContent = `${sellingItemDetails.sellingPrice} - ${sellingItemDetails.chooseCategory} - ${sellingItemDetails.productName}`;

    let deletbtn = document.createElement('input');
    deletbtn.type = 'button';
    deletbtn.value = 'Delete';

    function deleteItemId(itemId) {
        axios.delete(`https://crudcrud.com/api/758d22e3573b470eb70c62240afb9afa/productDetails/${itemId}`)
        .then((res) => console.log(res))
    }

    li.appendChild(deletbtn);

    deletbtn.onclick = () => {
        if(sellingItemDetails.chooseCategory==='Electronic') {
            electronicItems.removeChild(li);
            deleteItemId(sellingItemDetails._id);
        }else if(sellingItemDetails.chooseCategory==='Food') {
            foodItems.removeChild(li)
            deleteItemId(sellingItemDetails._id);
        }else {
            skincareItems.removeChild(li)
            deleteItemId(sellingItemDetails._id);
        }
    }
    if(sellingItemDetails.chooseCategory==='Electronic') {
        electronicItems.appendChild(li);
    }else if(sellingItemDetails.chooseCategory==='Food') {
        foodItems.appendChild(li);
    }else {
        skincareItems.appendChild(li);
    }
}

