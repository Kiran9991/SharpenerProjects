
let submitbn = document.getElementById('submit');
let listUser = document.getElementById('user');

submitbn.addEventListener('click', storeDetails);

function storeDetails(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('emailId').value;
    let phoneNo = document.getElementById('phoneNo').value;
    let details = `${name} - ${email} - ${phoneNo}`;
    let li = document.createElement('li');
    let text = document.createTextNode(details);
    
    let userDetails = {
        name,
        email,
        phoneNo
    }

    axios.post('https://crudcrud.com/api/5376493c746e49298fa1b3c0c792d057/AddingUserData', userDetails)
    .then((response) => {
        showUserDetails(response.data);
        console.log(response.data)
    });
}

window.addEventListener('DOMContentLoaded', () => {
    axios.post('https://crudcrud.com/api/5376493c746e49298fa1b3c0c792d057/AddingUserData').then((response) => {
        for(let i=0; i<response.data.length; i++) {
            showUserDetails(response.data[i]);
            document.body.innerHTML += text;
        }
    })
})

function showUserDetails(userDetails) {
    let li = document.createElement('li');
    li.textContent = userDetails.name + ' - '+userDetails.email+' - '+userDetails.phoneNo;

    let deletebtn = document.createElement('input');
    deletebtn.type = 'button';
    deletebtn.value = 'delete';

    let editbtn = document.createElement('input');
    editbtn.type = 'button';
    editbtn.value = 'edit';

    li.appendChild(editbtn);
    li.appendChild(deletebtn);

    deletebtn.onclick = () => {
        listUser.removeChild(li);
        localStorage.removeItem(userDetails.email)
    }

    editbtn.onclick = () => {
        listUser.removeChild(li);
        localStorage.removeItem(userDetails.email)
        document.getElementById('name').value = userDetails.name;
        document.getElementById('emailId').value = userDetails.email;
        document.getElementById('phoneNo').value = userDetails.phoneNo;
    }
    listUser.appendChild(li);
}