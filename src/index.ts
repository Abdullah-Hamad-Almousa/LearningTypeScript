//Any type

let age: any

age = 30
age = false

let title

title = 25
title = 'index'

let things: any[] = ['hello', true, 27, null]

things.push({id:123})

function addTogether(value: any): any {
    return value + value
}

const resultOne = addTogether('Hello')
const resultTwo = addTogether(3)

console.log(resultOne, "\t", resultTwo)