/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.getElementById("user-input")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    console.log(userInput.value)
    length()
    volume()
    mass()
})

function length() {
    const convertFeet = userInput.value * 3.281
    console.log(convertFeet)
}

function volume() {
    const convertvolume = userInput.value * 0.264
    console.log(convertFeet)
}

