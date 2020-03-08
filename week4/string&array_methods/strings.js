var hello = "Hello new world order"

function captialLower(x) {
    console.log(x.toUpperCase())
    console.log(x.toLowerCase())
}

function halfStringCount(x) {
    console.log(Math.floor(x.length / 2))
}
 
function wordSlice(x) {
    var xSlice = x.slice(0, Math.floor(x.length / 2))
    console.log(xSlice)
}

function capitalLowerAdv(x) {
    var firstHalf = x.slice(0, Math.floor(x.length / 2)).toUpperCase()
    var lastHalf = x.slice(Math.floor(x.length / 2)).toLowerCase() 
    console.log(firstHalf + lastHalf)
}

function spaceCaps (x) {
    var splitWord = x.toLowerCase().split(" ")
    for (i = 0; i < splitWord.length; i++) {
        splitWord[i] = splitWord[i].charAt(0).toUpperCase() + splitWord[i].substring(1);
        splitWord.join(" ")
    }
    console.log(splitWord.join(" "))
}


captialLower(hello)
halfStringCount(hello)
wordSlice(hello)
capitalLowerAdv(hello)
spaceCaps(hello)