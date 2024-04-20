const betNumberInput = document.getElementById('bet-number');
const betAmountInput = document.getElementById('bet-amount');
const spinRoult = document.getElementById('spin-button'); 
const result = document.getElementById('result');
const betTypeSelect = document.getElementById('bet-type');

const bet = betTypeSelect.value;
if(bet === "odd" || bet === "even" || bet === "red" || bet === "black") {
    document.getElementById('bet-number').disabled = true;
}

const og = () => {
    document.getElementById('bet-number').disabled = false;
    document.getElementById('result').textContent = " ";
}

const disable = () => {
    document.getElementById('bet-number').disabled = false;
    document.getElementById('result').textContent = 'Row/Col bets under development';
}

const enable = () => {
    document.getElementById('bet-number').disabled = true;
    document.getElementById('result').textContent = " ";
}

