const form = document.getElementById('form');
const formData = document.form
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const price = formData.price.value;
    const product = formData.product.value;
    postData(price, product)
    formData.reset()
})
const postData = (price, product) => {
    axios.post('https://crudcrud.com/api/d73e65ca19ce41f3b5d2f87cd86fdcf8/data', {price:price, product, product})
    .then(res => getData())
    .then(err => console.log(err))
}
const getData = () => {
    axios.get('https://crudcrud.com/api/d73e65ca19ce41f3b5d2f87cd86fdcf8/data')
    .then(res => {
        let html = '';
        let totalPrice = 0;
        res.data.forEach((data) => {
            html +=`<p> ${data.price} - ${data.product} <button onclick="delProduct('${data._id}')">delete product</button> </p>`;
            totalPrice +=parseInt(data.price)          
        })
        document.getElementById('show-product').innerHTML = html;
        document.getElementById('show-price').textContent = totalPrice
    })
    .then(err => console.log(err))
}
getData()
const delProduct = (id) => {
    axios.delete('https://crudcrud.com/api/d73e65ca19ce41f3b5d2f87cd86fdcf8/data/'+id,{
    })
    .then(res => getData())
    .then(err => console.log(err))
}
