/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.getElementById("user-input")
const convertBtn = document.getElementById("convert-btn")
const unitsLength = document.getElementById("units-length")
const unitsVolume = document.getElementById("units-volume")
const unitsMass = document.getElementById("units-mass")

convertBtn.addEventListener("click", function() {
    console.log(userInput.value)
    length()
    volume()
    mass()
})

function length() {
    const convertFeet = (userInput.value * 3.281).toFixed(3)
    const convertMeter = (userInput.value / 3.281).toFixed(3)
    unitsLength.textContent = `${userInput.value} meters = ${convertFeet} feet | ${userInput.value} feet = ${convertMeter} meters`
}

function volume() {
    const convertGallons = (userInput.value * 0.264).toFixed(3)
    const convertLiters = (userInput.value / 0.264).toFixed(3)
    unitsVolume.textContent = `${userInput.value} liters = ${convertGallons} gallons | ${userInput.value} gallons = ${convertLiters} liters`
}

function mass() {
    const convertPounds = (userInput.value * 2.204).toFixed(3)
    const convertKilograms = (userInput.value / 2.204).toFixed(3)
    unitsMass.textContent = `${userInput.value} kilos = ${convertPounds} pounds | ${userInput.value} pounds = ${convertKilograms} kilos`
}

