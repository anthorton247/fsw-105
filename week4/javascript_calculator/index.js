const readline = require("readline-sync")
let input1
let input2
input1 = readline.question("Please enter 1st number:\n")
while (isNaN(input1)) {
    input1 = readline.question("PLEASE enter 1st NUMBER:\n")
}
input2 = readline.question("Please enter 2nd number:\n")
while (isNaN(input2)) {
    input2 = readline.question("PLEASE enter 2nd NUMBER:\n")
}
let operation = readline.question("Please enter math operation (add, sub, multi, div):\n")
let oppCheck = operation.toLowerCase()
while (oppCheck != "add" && oppCheck != "sub" && oppCheck != "multi" && oppCheck != "div") {
    operation = readline.question("Please choose from available operators add, sub, multi, or div:\n")
    oppCheck = operation.toLowerCase()
}

if (operation.toLowerCase() == "add") {
    num1 = parseInt(input1)
    num2 = parseInt(input2)
    console.log("The result is: " + (num1 + num2))
} else if (operation.toLowerCase() == "sub") {
    num1 = parseInt(input1)
    num2 = parseInt(input2)
    console.log("The result is: " + (num1 - num2))
} else if (operation.toLowerCase() == "multi") {
    num1 = parseInt(input1)
    num2 = parseInt(input2)
    console.log("The result is: " + (num1 * num2))
} else if (operation.toLowerCase() == "div") {
    num1 = parseInt(input1)
    num2 = parseInt(input2)
    console.log("The result is: " + (num1 / num2))
}
