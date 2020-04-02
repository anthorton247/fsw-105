const readline = require("readline-sync")
const name = readline.question("What is your name? ")
function escapeRoom() {
    console.log("Welcome " + name + "! You are trapped in a room. You see a door and a hand-sized hole in the wall.")
    let decision = readline.question("What do you do?\n1. Open door\n2. Put hand in hole\nUse numbers to choose\n")

    while(decision != 1 && decision != 2){
        decision = readline.question("You must choose from the options given!\n1. Open door\n2. Put hand in hole\nUse NUMBERS to choose!\n")

    }

    if(decision == 2){
        console.log("SURPRISE BOMB!\nYOU ARE DEAD!\nGAME OVER!")
        escapeRoom()
    } else {
        console.log("The door is locked!")
        decision = readline.question("It seems you need a key!\nWhere do you look?\n1. A bucket\n2. The hole in the wall\n3. Your pockets\nUse numbers to decide.\n")
    }

    while(decision != 1 && decision != 2 && decision !=3){
        decision = readline.question("You must choose from the options given!\n1. A bucket\n2. The hole in the wall\n3. Your pockets\nUse NUMBERS to decide.\n")
    }

    if(decision == 1){
        console.log("Lets just say there is definitely not a key in the bucket...")
        decision = readline.question("Where do you look now?\n1. What IS in the bucket?\n2. The hole in the wall\n3. Your pockets\nUse numbers to decide.\n")
        while(decision != 1 && decision != 2 && decision !=3){
            decision = readline.question("You must choose from the options given!\n1. What IS in the bucket?\n2. The hole in the wall\n3. Your pockets\nUse NUMBERS to decide.\n")
        }
        if(decision == 1){
            console.log("I wouldn't LOSE your head over it.")
            decision = readline.question("Where would will you search now?\n1. WAIT A HEAD??\n2. The hole in the wall\n3. Your pockets\nUse NUMBERS to decide.\n")
            while(decision != 1 && decision != 2 && decision != 3){
                decision = readline.question("You must choose from the options given!\n1. WAIT A HEAD?\n2. The hole in the wall\nUse numbers to decide.\n")
            }
            if(decision == 1){
                console.log("Yes a head okay...")
                decision = readline.question("Where do you look now?\n1. Pick up and inspect the head\n2. The hole in the wall\n3. Your pockets\nUse numbers to decide.\n")
                if(decision == 1){
                    console.log("Seriously???")
                } else if(decision == 2){
                    console.log("SURPRISE BOMB!\nYOU ARE DEAD!\nGAME OVER!")
                    escapeRoom()
                } else {
                    console.log("Nothing in here but lint and crumbs.")
                    decision = readline.question("Where do you look now?\n1. Pick up and inspect the head\n2. The hole in the wall\nUse numbers to decide.\n")
                    while(decision != 1 && decision != 2){
                    decision = readline.question("You must choose from the options given!\n1. Pick up and inspect the head\n2. The hole in the wall\nUse numbers to decide.\n")
                    }
                    if(decision == 1){
                        console.log("Seriously???")
                    } else{
                        console.log("SURPRISE BOMB!\nYOU ARE DEAD!\nGAME OVER!")
                        escapeRoom()
                    } 
                }
            } else if(decision == 2){
                console.log("SURPRISE BOMB!\nYOU ARE DEAD!\nGAME OVER!")
                escapeRoom()
            } else {
                console.log("Nothing in here but lint and crumbs.")
                decision = readline.question("Where do you look now?\n1. WAIT A HEAD??\n2. The hole in the wall\nUse numbers to decide.\n")
                while(decision != 1 && decision != 2){
                    decision = readline.question("You must choose from the options given!\n1. WAIT A HEAD?\n2. The hole in the wall\nUse numbers to decide.\n")
                }
                if(decision == 1){
                    console.log("Yes a head okay...")
                    decision = readline.question("Where do you look now?\n1. Pick up and inspect the head\n2. The hole in the wall\nUse numbers to decide.\n")
                    while(decision != 1 && decision != 2){
                        decision = readline.question("You must choose from the options given!\n1. Pick up and inspect the head\n2. The hole in the wall\nUse numbers to decide.\n")
                    }
                    if(decision == 1){
                        console.log("Seriously???")
                    } else {
                        console.log("SURPRISE BOMB!\nYOU ARE DEAD!\nGAME OVER!")
                        escapeRoom()
                    }
                } else {
                    console.log("SURPRISE BOMB!\nYOU ARE DEAD!\nGAME OVER!")
                    escapeRoom()
                }
            }
        } else if(decision == 2){
            console.log("SURPRISE BOMB!\nYOU ARE DEAD!\nGAME OVER!")
            escapeRoom()
        } else {
            console.log("Nothing in here but lint and crumbs.")
            decision = readline.question("Where do you look now?\n1. Check the bucket?\n2. The hole in the wall\nUse numbers to decide.\n")
            while(decision != 1 && decision != 2){
                decision = readline.question("You must choose from the options given!\n1. Check the bucket?\n2. The  in the wall\nUse numbers to decide.\n")
            }
            if(decision == 1){
                console.log("Lets just say there is definitely not a key in the bucket...")
                decision = readline.question("Where do you look now?\n1. What IS in the bucket?\n2. The hole in the wall\n3. Your pockets\nUse numbers to decide.\n")
                while(decision != 1 && decision != 2){
                    decision = readline.question("You must choose from the options given!\n1. WAIT A HEAD??\n2. The hole in the wall\nUse numbers to decide.\n")
                }
                if(decision == 1){
                    console.log("Yes a head okay...")
                    decision = readline.question("Where do you look now?\n1. Pick up and inspect the head\n2. The hole in the wall\nUse numbers to decide.\n")
                    while(decision != 1 && decision != 2){
                        decision = readline.question("You must choose from the options given!\n1. Pick up and inspect the head\n2. The hole in the wall\nUse numbers to decide.\n")
                    }
                    if(decision == 1){
                        console.log("Seriously???")
                    } else {
                        console.log("SURPRISE BOMB!\nYOU ARE DEAD!\nGAME OVER!")
                        escapeRoom()
                    }
                } else {
                    console.log("SURPRISE BOMB!\nYOU ARE DEAD!\nGAME OVER!")
                    escapeRoom()
                }      
            }
        } 
    } else if(decision == 2){
        console.log("SURPRISE BOMB!\nYOU ARE DEAD!\nGAME OVER!")
        escapeRoom()
    } else {
        console.log("Nothing in here but lint and crumbs.")
        decision = readline.question("Where do you look now?\n1. Check the bucket?\n2. The hole in the wall\nUse numbers to decide.\n")
        while(decision != 1 && decision != 2){
            decision = readline.question("You must choose from the options given!\n1. Check the bucket?\n2. The  in the wall\nUse numbers to decide.\n")
        }
        if(decision == 1){
            console.log("Lets just say there is definitely not a key in the bucket...")
            decision = readline.question("Where do you look now?\n1. What IS in the bucket?\n2. The hole in the wall\nUse numbers to decide.\n")
            while(decision != 1 && decision != 2){
                decision = readline.question("You must choose from the options given!\n1. WAIT A HEAD??\n2. The hole in the wall\nUse numbers to decide.\n")
            }
            if(decision == 1){
                console.log("Yes a head okay...")
                decision = readline.question("Where do you look now?\n1. Pick up and inspect the head\n2. The hole in the wall\nUse numbers to decide.\n")
                while(decision != 1 && decision != 2){
                    decision = readline.question("You must choose from the options given!\n1. Pick up and inspect the head\n2. The hole in the wall\nUse numbers to decide.\n")
                }
                if(decision == 1){
                    console.log("Seriously???")
                } else {
                    console.log("SURPRISE BOMB!\nYOU ARE DEAD!\nGAME OVER!")
                    escapeRoom()
                }
            } else {
                console.log("SURPRISE BOMB!\nYOU ARE DEAD!\nGAME OVER!")
                escapeRoom()
            }      
        } else {
            console.log("SURPRISE BOMB!\nYOU ARE DEAD!\nGAME OVER!")
            escapeRoom()
        }
    }
    console.log("For SOME reason whether twisted or desperate you inspect the head.\nUpon shaking you hear a rattling in the mouth.\nYou open it to find the key.")
    decision = readline.question("Where do you enter the key?\n1. The door\n2. The hole in the wall\nUse numbers to decide\n")
    while(decision != 1 && decision != 2){
        decision = readline.question("Where do you enter the key?\n1. The door\n2. The hole in the wall\nUse NUMBERS to decide\n") 
    }
    if(decision == 1){
        console.log("It doesn't fit! You try the hole and...")
        console.log("KEY DETECT\nBOMB IS DISARMED\nYOU HAVE EARNED FREEDOM\nYou see the door swing open on its own! Your escape is complete")
        return
    } else{
        console.log("KEY DETECT\nBOMB IS DISARMED\nYOU HAVE EARNED FREEDOM\nYou see the door swing open on its own! Your escape is complete!")
        return
    }cd 
}
escapeRoom()