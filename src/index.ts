//Union Types

let id: number | string

id = 1
id = "one"

let email: string | null = null

email = 'bowser@mario-world.devil'
email = null

type Id = number | string
let idTwo: Id

idTwo = 'sadhjkbasda'
idTwo = 5

//Union Types pitfall

function swap(id: Id): Id {

// can only use props and methods common to
// both number and string types
// parseInt(id) -- > not allowed

    //parseInt(id)

    return id
}

swap('5')