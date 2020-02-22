if (5 > 3) {
    console.log("5 is greater than 3")
}

var cat = "cat";

if (cat.length == 3) {
    console.log("Cat is the length of 3 letters")
}

if ("cat" == "dog") {
    console.log("Now that's just plain wrong!")
} else {
    console.log("Cats and Dogs are not the same!")
}

var person = {
    name: "Brad",
    age: 26
}

if (person.age < 18) {
    console.log("Seems you aren't old enough to go to the movies yet.")
} else if (person.age >= 18) {
    console.log("Congrats you are old enough to go to the moives!")
}

if (person.name.charAt(0) === "B") {
    console.log("Welcome to this movie exclusive for B namers!")
} else {
    console.log("Sorry friend this movie event is for B namers only.")
}

if (person.age < 18){
    console.log("Sorry you're not quite old enough to be here.")
} else if (person.name.charAt(0) !== "B"){
    console.log("Sorry this movie event is for B namers only!")
} else if (person.age >= 18 && person.name.charAt(0) === "B") {
    console.log("Are you ready for this 18+ once in a lifetime movie experience for B namers!?!?")
}

if (1 === "1"){
    console.log("Strict")
} else if (1 == "1"){
    console.log("Abstract")
} else {
    console.log("Not equal at all")
}

if (1 <= 2 && 2 == 4) {
    console.log("YES")
} else {
    console.log("NO")
}

var stringCheck = "dog";

if (typeof stringCheck == "string" ) {
    console.log("This variable is a string!")
} else {
    console.log("This variable is not a string!")
}

var trueCheck = "true";

if (typeof  trueCheck == "boolean") {
    console.log("This variable is a boolean")
} else {
    console.log("This variable is not a boolean!")
}

var defineCheck = true;

if (typeof defineCheck === 'undefined') {
    console.log("This variable has not been defined!")
} else {
    console.log("This variable is defined!")
}

if("s"> 12) {
    console.log("This is new math!")
} else {
    console.log("I think this is math...")
}

if("w" > 3) {
    console.log("This is new math!")
} else {
    console.log("I think this is math...")
}

if("r" > 26) {
    console.log("This is new math!")
} else {
    console.log("I think this is math...")
}

function oddOrEven(isNumber) {
    return (isNumber & 1) ? "odd" : "even";
  }

console.log(oddOrEven(Math.floor(Math.random() * 100) + 1))
