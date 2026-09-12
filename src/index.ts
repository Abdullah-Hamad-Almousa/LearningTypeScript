//Type Aliases

type Rgb = [number, number, number]

function getRandomColor(): Rgb {

    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return [r, g, b]
}

const colorOne = getRandomColor()
const colorTwo = getRandomColor()

console.log(colorOne)
console.log(colorTwo)

type User = {
    name: string,
    score: number
}

const userOne: User = {
    name: 'Bowser', score: 69
}

function formatUser(user: User) {
    console.log(`${user.name} has score of: ${user.score}`)
}

formatUser(userOne)
formatUser({name: 'Abdullah', score: 99.94})