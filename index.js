/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const btn = document.getElementById("btn")
const lengthConverted = document.getElementById("length-el")
const volumeConverted = document.getElementById("volume-el")
const massConverted = document.getElementById("mass-el")

btn.addEventListener("click", function(){
    renderLength()
    renderVolume()
    renderMass()
})

function renderLength(){
    let feet = inputEl.value*3.281
    let meter = inputEl.value/3.281
    let result = ""
    result = `${inputEl.value} meters = ${feet.toFixed(3)} feet | ${inputEl.value} feet = ${meter.toFixed(3)} meter`
    lengthConverted.innerHTML = result
}

function renderVolume(){
    let gallon = inputEl.value*0.264
    let liter = inputEl.value/0.264
    let result = ""
    result = `${inputEl.value} liters = ${gallon.toFixed(3)} gallons | ${inputEl.value} gallons = ${liter.toFixed(3)} liters`
    volumeConverted.innerHTML = result
}

function renderMass(){
    let pound = inputEl.value*2.204
    let kg = inputEl.value/2.204
    let result = ""
    result = `${inputEl.value} kilos = ${pound.toFixed(3)} pounds | ${inputEl.value} pounds = ${kg.toFixed(3)} kilos`
    massConverted.innerHTML = result
}