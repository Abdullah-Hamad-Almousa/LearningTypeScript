//Tuples

let person: [string, number, boolean] = ['Abdulah', 27, true]

//Tuples Examples

let hl: [number, string, string, number] //22, '', '', 247
hl = [200, '100%', '50%', 1]

let xy : [number, number]
xy = [97, 20]

function useCoords(): [number, number] {
    const  lat = 100
    const long = 50
    return [lat, long]
}

const [lat, long] = useCoords()

//Tuples Names

let user: [naem:string, age:number]

user = ["abdullah", 27]

console.log(user[0])