const form = document.getElementById('my-form');

form.addEventListener('submit', onSubmitUserData);

function onSubmitUserData(e) {
    e.preventDefault();
    showUserDetailOnScreen();
}

function showUserDetailOnScreen() {
    
    let username = document.getElementById('name').value;
    let useremail = document.getElementById('emailId').value;
    let phoneNo = document.getElementById('phoneNo').value;
    let listUser = document.getElementById('user');

    const UserDetails = {
        name:username,
        email:useremail,
        phonenumber:phoneNo
    }
    axios.post("https://crudcrud.com/api/335219c4258b4d6aa746b2b604876a20/AddingUserData", UserDetails)
    .then((response) => {
        console.log(response)
        document.body.innerHTML = document.body.innerHTML+`<h4>${UserDetails.name} - ${UserDetails.email} - ${UserDetails.phonenumber}`
    })
    .catch((err) => {
        console.log(err)
        document.body.innerHTML = document.body.innerHTML+'<h4>Something went wrong</h4>'
    })

    let li = document.createElement('li');
    let deletebtn = document.createElement('input');
    let editbtn = document.createElement('input');

    li.textContent = UserDetails.name+' - '+UserDetails.email+' - '+UserDetails.phonenumber;
    
    deletebtn.type = 'button';
    deletebtn.value = 'delete';
    
    deletebtn.onclick = () => {
        localStorage.removeItem(UserDetails.email)
        listUser.removeChild(li)
    }

    editbtn.type = 'button';
    editbtn.value = 'edit';
    editbtn.onclick = () => {
        localStorage.removeItem(UserDetails.email)
        listUser.removeChild(li)
        document.getElementById('name').value = UserDetails.name
        document.getElementById('emailId').value = UserDetails.email
        document.getElementById('phoneNo').value = UserDetails.phonenumber
    }

    li.appendChild(deletebtn)
    li.appendChild(editbtn)
    listUser.appendChild(li);

    localStorage.setItem(UserDetails.email, JSON.stringify(UserDetails));
}