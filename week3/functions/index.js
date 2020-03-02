function sum(num1, num2) {
    return num1 + num2
}

console.log(sum(5, 21))

function greaterNum (num1, num2, num3) {
    if(num1 > num2 && num1> num3) {
        return num1
    } else if(num2 > num3 && num2 > num1) {
        return num2
    } else if(num3 > num1 && num3 > num2) {
        return num3
    } else {
        return "error"
    }
}

console.log(greaterNum(1 , 4, 2))
console.log(greaterNum(3 , 2, 8))
console.log(greaterNum(10 , 4, 2))

function evenOdd(num) {
    if(num % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}

console.log(evenOdd(101))

function wordPlay(word) {
    if(word.length < 20) {
        return word + word
    } else {
        return word.slice(0, word.length / 2);
    }
}

console.log(wordPlay("cat"))

console.log(wordPlay("fractalpolarizationment"))