const betTypeSelect = document.getElementById('bet-type');
const betNumberInput = document.getElementById('bet-number');
const betAmountInput = document.getElementById('bet-amount');
const spinButton = document.getElementById('spin-button');
const resultDiv = document.getElementById('result');
const resetDiv = document.getElementById("reset");

function isBlack(num) {
    return num % 2 === 0 && num !== 0;
}

function isSameRow(betNum, winningNum) {
    return Math.floor((betNum - 1) / 12) === Math.floor((winningNum - 1) / 12);
}

function isSameColumn(betNum, winningNum) {
    return (betNum - 1) % 3 === (winningNum - 1) % 3;
}

function spinRoulette() {
  
    console.log("ffff");
    const betType = betTypeSelect.value;
    const betNumber = parseInt(betNumberInput.value, 10);
    const betAmount = parseInt(betAmountInput.value, 10);

    if (isNaN(betAmount) || betAmount <= 0) {
        resultDiv.textContent = 'Invalid bet amount. Please try again.';
        return;
    }

    if (betType === 'number' && (isNaN(betNumber) || betNumber < 1 || betNumber > 36)) {
        resultDiv.textContent = 'Invalid number bet. Please enter a number between 1 and 36.';
        return;
    }

    if ((betType === 'row' || betType === 'column') && (isNaN(betNumber) || betNumber < 1 || betNumber > 3)) {
        resultDiv.textContent = 'Invalid row/column bet. Please enter a number between 1 and 3.';
        return;
    }

    resultDiv.textContent = 'Spinning the roulette wheel...';
    setTimeout(() => {
        console.log("done");
        const winningNumber = Math.floor(Math.random() * 37);
        resultDiv.textContent = "The roulette wheel has landed on " + winingNO + ".";
        var winingNO = winningNumber;
        let win = false;
        if (betType === 'number' && winningNumber === betNumber) {
            win = true;
        } else if (betType === 'even' && winningNumber % 2 === 0 && winningNumber !== 0) {
            win = true;
        } else if (betType === 'odd' && winningNumber % 2 !== 0 && winningNumber !== 0) {
            win = true;
        } else if (betType === 'red' && winningNumber !== 0 && !isBlack(winningNumber)) {
            win = true;
        } else if (betType === 'black' && winningNumber !== 0 && isBlack(winningNumber)) {
            win = true;
        } else if (betType === 'row' && isSameRow(betNumber, winningNumber)) {
            win = true;
        } else if (betType === 'column' && isSameColumn(betNumber, winningNumber)) {
            win = true;
        }

        let payout = 0;
        if (win) {
            if (betType === 'number') {
                payout = betAmount * 35;
            } else if (betType === 'even' || betType === 'odd' || betType === 'red' || betType === 'black') {
                payout = betAmount;
            } else if (betType === 'row' || betType === 'column') {
                payout = betAmount * 2;
            }
        }

        if (win) {
            resultDiv.textContent += ` Congratulations! You won $${payout}!`;
        } else {
            resultDiv.textContent += ' Sorry, you lost your bet.';
        }
    }, 30000);
}

spinButton.addEventListener('click', spinRoulette);