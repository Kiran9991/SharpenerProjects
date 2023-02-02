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

const user={
    name:'Kiran',
    lastActivity: new Date().getTime()
}

function updateLastUserActivityTime() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            user.lastActivity=new Date().getTime();
            resolve(user.lastActivity);
        },1000)
    })
}

function userUpdatePost() {
    Promise.all([createPost(),updateLastUserActivityTime()]).then((values) => console.log(values)).catch((err) => console.log(err));
}

console.log(userUpdatePost());

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


function createPostFour() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            post.push(post)
            if(posts.length!==0) {
                resolve();
            }else {
                reject('Error: Array is empty now')
            }
        }, 8000)
    })
}
createPost({title:'Post four', body: 'This is post four'})
.then(()=> {
    getpost
})
.catch(err => console.log(err));

// Promises.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values))