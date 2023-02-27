let submitbtn = document.getElementById('submit');
let electronicItems = document.getElementById('electronicItems');
let foodItems = document.getElementById('foodItems');
let skincareItems = document.getElementById('skincareItems');

submitbtn.addEventListener('click', storeItemsDetails);

async function storeItemsDetails(e) {
    try{
        e.preventDefault();

    let sellingPrice = document.getElementById('sellingPrice').value;
    let productName = document.getElementById('productName').value;
    let chooseCategory = document.getElementById('chooseCategory').value;

    let sellingItemDetails = {
        sellingPrice,
        productName,
        chooseCategory
    }
    showItemDetails(sellingItemDetails)

    await axios.post('https://crudcrud.com/api/98404c450c724016bcbb06589e6ca3eb/productDetails', sellingItemDetails)
    .then((response) => {
        showItemDetails(response.data);
    })
    .catch((err) => {
        console.log(err)
    })
    }catch{
        console.log('Products is not added')
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    try{
        await axios.get('https://crudcrud.com/api/98404c450c724016bcbb06589e6ca3eb/productDetails').then((response) => {
        for(let i=0; i<response.data.length; i++) {
            showItemDetails(response.data[i]);
        }
    })
    }catch(error) {
        console.log(error)
    }
})

function showItemDetails(sellingItemDetails) {
    let li = document.createElement('li');
    li.textContent = `${sellingItemDetails.sellingPrice} - ${sellingItemDetails.chooseCategory} - ${sellingItemDetails.productName}`;

    let deletbtn = document.createElement('input');
    deletbtn.type = 'button';
    deletbtn.value = 'Delete';

    async function deleteItemId(itemId) {
        try{
            axios.delete(`https://crudcrud.com/api/98404c450c724016bcbb06589e6ca3eb/productDetails/${itemId}`)
        .then((res) => console.log(res))
        }catch(error) {
            console.log(error)
        }
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

