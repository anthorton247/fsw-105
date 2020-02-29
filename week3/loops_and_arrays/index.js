var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

var computerCounter = 0

for (i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer"){
        computerCounter++
    }
}

console.log("There are " + computerCounter + " computers.")

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]


for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, do not let him in!")
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, do not let her in!")
    }
}

for(i = 0; i < 101; i++) {
    if(i == 0){
        console.log(i + " is neither odd nor even but null")
    } else if(i % 2 == 0) {
        console.log(i + " is an even number")
    } else {
        console.log(i + " is an odd number ")
    }
}

