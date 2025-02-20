/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.getElementsByID("user-input")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    userInput = userInput.value
})