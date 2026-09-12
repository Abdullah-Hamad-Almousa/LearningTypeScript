//Functions

function addTwoNumbers(a : number, b : number): number {
    return a + b
}

const subTwoNumbers = (a: number, b: number): number => {
    return a - b
}

addTwoNumbers(3, 9)

subTwoNumbers(10, 7)

function addAllNum(items: number[]): void{
    const total = items.reduce((a, c)=> a + c, 0)
    console.log(total)
}

addAllNum([5, 7, 9, 11, 3, 2, 1])

console.log("Hello Abdullah")

function formatGreeting(name: string, greeting: string){
    return `${greeting}, ${name}`
}

const result = formatGreeting('Abdullah', 'The master')

console.log(result)