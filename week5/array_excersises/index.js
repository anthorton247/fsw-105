const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const arrDisorder = [3, 6, 1, 8, 2 ,0, 44, 12, 543, 32 ,12]
const arrS = ["cat", "dog", "ferret", "turtle", "fish", "rock", "mouse"]
const arrNames = ["jOhn", "MaRry", "slaDe", "TAMMTAMM"]
const arrObj = [
    {name: "Bob", member: false},
    {name: "Joe", member: true},
    {name: "Sarah", member: true},
    {name: "Mason", member: false},
    {name: "Linda", member: true},
    {name: "Alex", member: true}
]
const arrObj2 = [
    {name: "Bob", age: 10},
    {name: "Joe", age: 14},
    {name: "Sarah", age: 23},
    {name: "Mason", age: 79},
    {name: "Linda", age: 30},
    {name: "Alex", age: 24}
]
const arrObj3 = [
    {name: "Bob", voted: false},
    {name: "Joe", voted: true},
    {name: "Sarah", voted: true},
    {name: "Mason", voted: false},
    {name: "Linda", voted: true},
    {name: "Alex", voted: true}
]
const arrObj4 = [
    {item: "PS5", cost: 500},
    {item: "Person 5 Royal", cost: 59},
    {item: "2020 Nissan GTR", cost: 114000},
    {item: "Mansion", cost: 2000000},
    {item: "Unlimited Healthcare", cost: 750000},
    {item: "82 inch Samsung TV", cost: 2000}
]
const arrObj5 = [
    {name: "Bob", age: 18, voted: false},
    {name: "Joe", age: 34, voted: true},
    {name: "Sarah", age: 23, voted: true},
    {name: "Mason", age: 54, voted: true},
    {name: "Linda", age: 30, voted: true},
    {name: "Alex", age: 27, voted: false},
    {name: "Steve", age: 20, voted: false},
    {name: "Joseline", age: 47, voted: false}
]
const arrArr = [
    [1, 2, 3],
    [false],
    ["cat", "dog", "moose"]
]


const newArr1 = arr.filter(function(num){
    if(num >= 5){
        return num
    }   
})

console.log(newArr1)

const newArr2 = arr.filter(function(num){
    if(num % 2 === 0){
        return num
    }
})

console.log(newArr2)

const newArr3 = arrS.filter(function(string){
    if(string.length <= 5){
        return string
    }

})

console.log(newArr3)

const newArr4 = arrObj.filter(function(memb){
    if(memb.member === true){
        return memb
    }
})

console.log(newArr4)

const newArr5 = arrObj2.filter(function(able){
    if(able.age > 18){
        return able
    }
})

console.log(newArr5)

const newArr6 = arr.map(function(num){
    return num * 2
})

console.log(newArr6)

const newArr7 = arr.map(function(num){
    return num.toString()
})

console.log(newArr7)

const newArr8 = arrNames.map(function(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
})

console.log(newArr8)


const newArr9 = arrObj2.map(function(names){
    return names.name
})

console.log(newArr9)

const newArr10 = arrObj2.map(function(canGo){
    if(canGo.age >= 18){
        return canGo.name + " can go to the Matrix"
    } else {
        return canGo.name + " is underage"
    }
})

console.log(newArr10)

const newArr11 = arrObj2.map(function(convert){
    return "<h1>" + convert.name + "</h1>" + "<h2>" + convert.age + "</h2>"
})

console.log(newArr11)

const sum = arr.reduce(function(final, num){
    return final += num
})

console.log(sum)

const stringSum = arr.reduce(function(final, string){
    return final.toString() + string
})

console.log(stringSum)

const voteAmount = arrObj3.reduce(function(votes, voter){
    if(voter.voted){
        votes++
    }
    return votes
}, 0)

console.log(voteAmount)

const voteAmount2 = arrObj3.filter(function(voter){
    if(voter.voted){
        return voter
    }

})

console.log(voteAmount2.length)

const sum2 = arrObj4.reduce(function(final, num){
    return num.cost += final
}, 0)

console.log(sum2)

const arrAddition = arrArr.reduce(function(flat, toFlat){
    return flat.concat(toFlat)
})

console.log(arrAddition)

const voteStats = arrObj5.reduce(function(votes, factor){
    if(factor.age >= 18 && factor.age <= 25){
        if(factor.voted){
            votes.youngVotes++
        }
        votes.youth++
    } 
    if(factor.age >= 26 && factor.age <= 35){
        if(factor.voted){
            votes.midVotes++
        }
        votes.mids++
    } else if(factor.age >= 36 && factor.age < 55){
        if(factor.voted){
            votes.oldVotes++
        }
        votes.olds++
    } else {
    }
    return votes
}, {youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0})

console.log(voteStats)

const arrSorted = arrDisorder.sort(function(num1, num2){
    return num1 - num2 
})

console.log(arrSorted)

const arrSorted2 = arrDisorder.sort(function(num1, num2){
    return num2 - num1 
})

console.log(arrSorted2)

const arrSorted3 = arrS.sort(function(string1, string2){
    return string1.length - string2.length
})

console.log(arrSorted3)

const arrSorted4 = arrS.sort()

console.log(arrSorted4)

const arrSorted5 = arrObj2.sort(function(num1, num2){
    return num1.age - num2.age 
})

console.log(arrSorted5)
