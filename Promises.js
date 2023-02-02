const posts = [
    {title: 'Post One', body: 'This is post one', createdAT: new Date().getTime()},
    {title: 'Post Two', body: 'This is post two', createdAT: new Date().getTime()}
];

function getpost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title} <li>`;
        })
        document.body.innerHTML = output;
    },1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            if(posts.length!==0) {
                resolve();
            }else {
                reject('Error: Array is empty now');
            }
        }, 2000)
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length>=0) {
                resolve(posts.pop());
            }else {
                reject('Error: Array is empty now')
            }
        },1000)
    });
}


createPost({ title: 'Post Three', body: 'This is post three'}).then(() => {
    getpost()
    deletePost().then(() => {
        getpost()
        deletePost().then(() => {
            getpost()
            deletePost().then(() => {
                getpost()
                deletePost().then(() => {
                    getpost()
                }).catch((err) => console.log(err));
            })
        })
    })
})



 