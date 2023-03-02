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

    let response = await axios.post('https://crudcrud.com/api/eb809e769f7b4c0db0f92cf5bfe7e864/productDetails', sellingItemDetails)
    showItemDetails(response.data);
    }catch(error){
        console.log(error)
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    try{
        let response = await axios.get('https://crudcrud.com/api/eb809e769f7b4c0db0f92cf5bfe7e864/productDetails')
        for(let i=0; i<response.data.length; i++) {
            showItemDetails(response.data[i]);
        }
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
            let response = await axios.delete(`https://crudcrud.com/api/eb809e769f7b4c0db0f92cf5bfe7e864/productDetails/${itemId}`)
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

