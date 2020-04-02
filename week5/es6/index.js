const name = "John" 
const age = 101 
let petName

function runForLoop(pets) { 
    let petObjects = [] 
    for (let i = 0; i < pets.length; i++){
         let pet = { type: pets[i] } 
         petName; 
        if (pets[i] === "cat") { 
        petName = "fluffy" 
        } else { 
        petName = "spot" 
        } 
        console.log("pet name: ", petName) 
        pet.petName = petName 
        petObjects.push(pet) 
    } 
    console.log("man name: ", name) 
    return petObjects 
} 

runForLoop(["cat", "dog"]) 

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = arr => arr.map(function(carrot){
    return {type: "carrot", name: carrot}
})

console.log(mapVegetables(carrots))

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = arr => arr.filter(function(person){
    return person.friendly
})

console.log(filterForFriendly(people))

const doMathSum = (a, b) => a + b
const produceProduct = (a, b) => a * b

console.log(doMathSum(1, 6))
console.log(produceProduct(4, 2))

const printString = (firstName = "John", lastName = "Doe", age = 100) => console.log("Hi " + firstName + " " + lastName + " how does it feel to be " + age)

printString()
printString("Kat", "Stark", 40)

const animals = [ 
    { 
        type: "dog", name: "theodore"
    }, 
    { 
        type: "cat",  name: "whiskers"
    },
    {
        type: "pig", name: "piglette"
    }, 
    { 
        type: "dog",  name: "sparky"
    } 
] 

const filterForDogs = arr => arr.filter(animal => {return animal.type === "dog" ? animal : null})

console.log(filterForDogs(animals))

const welcomeTo = (name, location) => console.log("Hi " + name +"!\n\nWelcome to " + location + ".\n\nI hope you enjoy your stay. Please ask the president of " + location + " if you need anything")

welcomeTo("John", "America")
