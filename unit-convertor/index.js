

let numberEl = document.getElementById('number-el')
let length = document.getElementById('length')
let volume = document.getElementById('volume')
let mass = document.getElementById('mass')

function calc() {
    let num = numberEl.value
    
    let feet = (num * 3.281).toFixed(3)
    let meters = (num / 3.281).toFixed(3)
    length.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`
    
    let gallons = (num / 4.546).toFixed(3)
    let liters = (num * 4.546).toFixed(3)
    volume.textContent = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`
    
    let kilos = (num / 2.205).toFixed(3)
    let pounds = (num * 2.205).toFixed(3)
    mass.textContent = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos`
    
}