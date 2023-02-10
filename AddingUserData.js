
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

    axios.post('https://crudcrud.com/api/ccb3c727473d4288a929ecf419ca0f2f/AddingUserData', userDetails)
    .then((response) => {
        showUserDetails(response.data);
        console.log(response.data)
    });
}

window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/ccb3c727473d4288a929ecf419ca0f2f/AddingUserData').then((response) => {
        for(let i=0; i<response.data.length; i++) {
            showUserDetails(response.data[i]);
        }
    })
})

function showUserDetails(userDetails) {
    let li = document.createElement('li');
    li.textContent = userDetails.name + ' - '+userDetails.email+' - '+userDetails.phoneNo;

    let deletebtn = document.createElement('input');
    deletebtn.type = 'button';
    deletebtn.value = 'delete';

    function deleteId(userId) {
        axios.delete('https://crudcrud.com/api/ccb3c727473d4288a929ecf419ca0f2f/AddingUserData/'+userId)
        .then((res) => console.log(res))
    }

    let editbtn = document.createElement('input');
    editbtn.type = 'button';
    editbtn.value = 'edit';

    function editId(userId) {
        axios.put('https://crudcrud.com/api/ccb3c727473d4288a929ecf419ca0f2f/AddingUserData/'+userId)
        .then((res) => console.log(res))
    }

    li.appendChild(editbtn);
    li.appendChild(deletebtn);

    deletebtn.onclick = () => {
        listUser.removeChild(li);
        deleteId(userDetails._id);
    }

    editbtn.onclick = () => {
        listUser.removeChild(li);
        editId(userDetails._id);
        deleteId(userDetails._id);
        document.getElementById('name').value = userDetails.name;
        document.getElementById('emailId').value = userDetails.email;
        document.getElementById('phoneNo').value = userDetails.phoneNo;
    }
    listUser.appendChild(li);
}