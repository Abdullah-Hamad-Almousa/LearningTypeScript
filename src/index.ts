//Interface

interface Author {
    name: string,
    avatar: string
}

const authorOne: Author = {
    name: 'Bowser',
    avatar: '/img/bowser.png'
}

interface Post {
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author
}

const newPost: Post = {
    title: 'My first post',
    body: 'Something interesting',
    tags: ['Gaming', 'tech'],
    create_at: new Date(),
    author: { //We can use a authorOne here but really liked to define a new one
        name: 'Abdullah',
        avatar: '/img/avatar.png'
    }
}

//Function

function createPost(post : Post): void{
    console.log(`Created post ${post.title}, by ${post.author.name}`)
}

createPost(newPost)

//With array

let posts: Post[] = []

posts.push(newPost)