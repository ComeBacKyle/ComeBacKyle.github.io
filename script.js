const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')

characterAmountNumber.addEventListner('input', syncCharacterAmount)
characterAmountRange.addEventListner('input', syncCharacterAmount)

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountRange.value = value
    characterAmountNumber.value = value
}