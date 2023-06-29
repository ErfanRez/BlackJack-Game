let hasBlackJack = false
let cards = []
let sum = 0
let message
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector('#card-el')
let player = 
{
    name: "Peter",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips