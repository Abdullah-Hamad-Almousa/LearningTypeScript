//Type Guards

type Id = number | string

function swapIdType(id: Id){

    if (typeof id === 'string'){
        //Can use string methods
        return parseInt(id)
    } else {
        //Can use numbers methods and properties
        return id.toString()
    }

}

const idOne = swapIdType(1)
const idTwo = swapIdType('2')

console.log(idOne)
console.log(idTwo)

interface User {
    type: 'user'
    username: string
    email: string
    id: Id
}
interface Person {
    type: 'person'
    firstname: string
    age: number
    id: Id
}

function logDetails(value: User | Person): void {
    if (value.type === 'user') {
        console.log(value.email, value.username)
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age)
    }
}