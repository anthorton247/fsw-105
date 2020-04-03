const readline = require("readline-sync")
let character = {
    name: "name",
    inventory: [],
    HP: 60
}
let summon = 0
function summonTime(){summon = Math.floor(Math.random() * 10)} 
let bobGhoulRessurection = 50
let dracoKnightRessurection = 50

let bobGhoul = {
    name: "Bob Ghoul",
    items: ["Gold Amulet", "Eterna Sword", "Lords Bone Crown", "Ring of Solstice", "Orb of Enlightment"],
    HP: 50,
    attacK: 1,
    summonNum: 1
}

let dracoKnight = {
    name: "Draco Knight",
    items: ["Staff of Malice", "Plated Armor of Sun", "Holy Medallion", "Rubied Chalice", "Demon's Bane"],
    HP: 75,
    attack: 3,
    summonnNum: 3
}

let deathKing = {
    name: "Death King",
    items: ["Rules of Infinite", "Universe's Tears", "Grim's Cape", "Paragon's Laws", "Soul of the Creator"],
    HP: 250,
    attack: 5,
    summonNum: 9
}

let flee = 0 
function fleeTime() {flee = Math.floor(Math.random() * 3)}

let sAttLand = 0
function sAttOdds() {sAttLand = Math.floor(Math.random() * 3)}

let strongAttack =  0
function sAttackTime(){strongAttack = Math.floor(Math.random() * 10) + 4}

let quickAttack = 0
function quickAttackTime(){quickAttack = Math.floor(Math.random() * 5) + 2}

let victoryPrize = 0
function vicPrizeDecider(){victoryPrize= Math.floor(Math.random() * 5)}

let victoryHealth = 0
function vicHealthDecider() {victoryHealth = Math.floor(Math.random() * 51) + 20}

console.log("Welcome to a world of where battle is the only thing that matters.")

character.name = readline.question("What is the warriors name?\n")

console.log("Prepare  yourself " + character.name + " your adventure begins now! You may only move forward from here on out!")

let movement = readline.question("Are you prepared to move forward?\nPress W to advance or type PRINT to see stats and iventory.\n") 

function advanceOrStats() {
    while(movement.toLowerCase() != "w" && movement.toUpperCase() != "PRINT"){
        movement = readline.question("\nPress W to advance or type PRINT to see stats and iventory.\n")
    }
    if(movement.toUpperCase() === "PRINT"){
        console.log(character)
        movement = ""
        advanceOrStats()
    }  else {
        console.log("You begin stepping forward")
        movement = "true"
    }
    while(movement === "true"){
        summonTime()
        if(summon != 1 && summon != 2 && summon != 9){
        console.log("No oppenents appear")
        advanceOrStats()
        } else {
            movement = "false"
        }
    }
    
    while(movement === "false"){
        if(summon == bobGhoul.summonNum){
            console.log("A Bob Ghoul has appear!")
            battle(bobGhoul, character)
        } else if(summon == dracoKnight.summonnNum){
            console.log("A Draco Knight has appeared!")
            battle(dracoKnight, character) 
        } else if(summon == deathKing.summonNum){
            console.log("Beware for you are in the presence of the Death King.\nFight at your own risk..")
            battle(deathKing, character)
        } else{
            movement = "true"
        }
    }
}

function battle(enemy, character){
    while(enemy.HP > 0){
        let decision = readline.question("What would you like to do?\n1. Strong Attack\n2. Quick Attack\n3. Flee\n4. View Stats\nUse numbers to decide\n")
        while(decision != 1 && decision != 2 && decision != 3 && decision != 4){
            decision = readline.question("Please use options provided\n1. Strong Attack\n2. Quick Attack\n3. Flee\n4. View Stats\nUse numbers to decide\n")
        }
    
        if(decision == 1){
            sAttOdds()
            if(sAttLand == 1){
                sAttackTime()
                console.log("You landed a hit for " + strongAttack + " damage!\nEnemy too stunned to swing back!")
                enemy.HP = enemy.HP - strongAttack
            } else {
                console.log("You missed...\n the " + enemy.name + " attacked back for " + enemy.attacK + " damage!")
                character.HP = character.HP - enemy.attacK
                if(character.HP <= 0){
                    console.log("GAME OVER!\n" + character)
                }
            }
        } else if(decision == 2){
            quickAttackTime()
            console.log("You switfly attacked for " + quickAttack + " damage!")
            enemy.HP = enemy.HP - quickAttack
            console.log("The " + enemy.name + " attacked back for " + enemy.attacK + " damage!")
            character.HP = character.HP - enemy.attacK
            if(character.HP <= 0){
                console.log("GAME OVER!\n" + character)
            }
        } else if(decision == 3){
            decision = readline.question("Flee Left or Right?\n1. Left\n2. Right\nUse numbers to decide\n")
            while(decision != 1 && decision != 2){
                decision = readline.question("Flee Left or Right?\n1. Left\n2. Right\nUse NUMBERS to decide\n")
            }
            fleeTime()
            if(decision == flee){
                console.log("You escaped!")
                advanceOrStats()
            } else {
                console.log("The enemy cuts you off and attacks for " + enemy.attacK + " damage!")
                character.HP = character.HP - enemy.attacK
                if(character.HP <= 0){
                    console.log("GAME OVER!\n" + character)
                }
            }
        } else {
            console.log(character)
            console.log(enemy)
        }
    }
    if(enemy.HP <= 0 && enemy.name != "Death King"){
        vicHealthDecider()
        vicPrizeDecider()
        console.log("Congrats, you defeat the " + enemy.name + " and received the " + enemy.items[victoryPrize] + " and " + victoryHealth + " health resored!")
        character.HP = character.HP + victoryHealth
        character.inventory.push(enemy.items[victoryPrize])
        if(enemy.name == "Draco Knight"){
            enemy.HP = dracoKnightRessurection
        } else if(enemy.name = "Bob Ghoul"){
            enemy.HP = bobGhoulRessurection
        }
        advanceOrStats()
    } else if(enemy.HP <= 0 && enemy.name == "Death King"){
        vicHealthDecider()
        vicPrizeDecider()
        console.log("CONGRATULATIONS!\nYou have slain the strongest being in the land thus completing your adventure!\nSee your final status as the strongest warrior!")
        character.HP = character.HP + victoryHealth
        character.inventory.psuh(enemy.items[victoryPrize])
        console.log(character)
        return
    }
}

advanceOrStats()

