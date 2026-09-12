//Array and object literals

let names: string[] = ['Abdullah', 'Ali', 'Ahmad', 'Mohammed']
let ages: number[] = [24, 25, 27, 30]

names.push('Fahad', 'Faris')
ages.push(26, 28, 29)

let nameBowser= 'Bowser'

names.push(nameBowser)

let fruits = ['Banana', 'Orange', 'Apple']

fruits.push('Peach')

const f = fruits[2]

let thing = [1, true, 'hello']

const t = thing[0]

//Object literals

let user : {
    firstName: string,
    age: number,
    id: number,
} = {
    firstName: 'Bowser',
    age: 41,
    id: 0
}

user.firstName = 'Lion'
user.age = 57
user.id = 1

//Type inference with object literals

let person = {
    name: 'Abdullah',
    score: 27
}

person.name = 'Almousa'
person.score = 91
