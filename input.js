const inputNumber = document.getElementById('bet-number');
const inputBet = document.getElementById('bet-amount');
const betTypeSelect = document.getElementById('bet-type');
const spinButton = document.getElementById('spin-button');


const betType = betTypeSelect.value;
console.log(betType);


const myfuc=() => {
    document.getElementById('bet-number').disabled = true;
}


const ballz=() => {
    document.getElementById('bet-number').disabled = false;
}